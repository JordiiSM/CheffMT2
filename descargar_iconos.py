#!/usr/bin/env python3
"""
descargar_iconos.py  –  Descargador de iconos para CheffM2
============================================================
Descarga los iconos que faltan en la carpeta data/icons/ desde
el CDN de metin2alerts.com.

Modos de ejecución:
  python descargar_iconos.py              → Solo descarga los iconos faltantes de item_icon.json
  python descargar_iconos.py --shop       → También intenta iconos para items del shop sin icono
  python descargar_iconos.py --all        → Escaneo completo 1–99999 (varios minutos)
  python descargar_iconos.py --fix        → Actualiza item_icon.json con los iconos descubiertos

Ejemplos:
  python descargar_iconos.py --shop --fix
  python descargar_iconos.py --all --start 30000 --end 40000 --fix
"""

import os, sys, json, time, argparse
import urllib.request, urllib.error

# ── CONFIG ─────────────────────────────────────────────────────────────────
CDN_BASE  = "https://metin2alerts.com/m2_data/icons/"
LOCAL_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "icons")
DATA_DIR  = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Referer": "https://metin2alerts.com/",
}
DELAY_OK  = 0.05   # segundos entre descargas exitosas
DELAY_ERR = 0.01   # segundos en 404

# ── UTILIDADES ──────────────────────────────────────────────────────────────

def icon_name_for_vnum(vnum: int) -> str:
    """Nombre de icono por defecto: vnum formateado a 5 dígitos mínimo."""
    return f"{vnum:05d}.png"

def download_icon(filename: str, local_set: set) -> bool:
    """Descarga un icono al disco. Devuelve True si tuvo éxito."""
    if filename in local_set:
        return True  # ya existe localmente
    dest = os.path.join(LOCAL_DIR, filename)
    url  = CDN_BASE + filename
    req  = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
        if len(data) < 100:   # demasiado pequeño → no es imagen válida
            return False
        with open(dest, "wb") as f:
            f.write(data)
        local_set.add(filename)
        return True
    except urllib.error.HTTPError:
        return False
    except Exception as e:
        print(f"  ⚠ Error en {filename}: {e}")
        return False

# ── MAIN ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Descargador de iconos Metin2")
    parser.add_argument("--shop",  action="store_true",
                        help="Intenta descargar iconos para items del shop sin icono")
    parser.add_argument("--all",   action="store_true",
                        help="Escaneo completo de vnums (usa --start y --end)")
    parser.add_argument("--fix",   action="store_true",
                        help="Actualiza item_icon.json con los iconos descubiertos")
    parser.add_argument("--start", type=int, default=1,
                        help="Vnum de inicio para --all (default: 1)")
    parser.add_argument("--end",   type=int, default=99999,
                        help="Vnum de fin para --all (default: 99999)")
    args = parser.parse_args()

    os.makedirs(LOCAL_DIR, exist_ok=True)

    # Cargar datos existentes
    icon_json_path = os.path.join(DATA_DIR, "item_icon.json")
    with open(icon_json_path, encoding="utf-8") as f:
        item_icon = json.load(f)

    local_set = set(os.listdir(LOCAL_DIR))
    newly_downloaded = {}   # vnum_str → filename
    total_ok   = 0
    total_fail = 0

    # ── PASO 1: iconos referenciados en item_icon.json pero ausentes ─────────
    print("=" * 60)
    print("PASO 1: Iconos en item_icon.json sin archivo local")
    print("=" * 60)
    missing_from_json = [
        (vnum, fname)
        for vnum, fname in item_icon.items()
        if fname and fname not in ("money.png", "dummy.png", "None", None)
        and fname not in local_set
    ]
    print(f"  → {len(missing_from_json)} iconos faltantes")

    for i, (vnum, fname) in enumerate(missing_from_json, 1):
        ok = download_icon(fname, local_set)
        status = "✓" if ok else "✗"
        print(f"  [{i}/{len(missing_from_json)}] {status} {fname}")
        if ok:
            total_ok += 1
        else:
            total_fail += 1
        time.sleep(DELAY_OK if ok else DELAY_ERR)

    # ── PASO 2: items del shop sin icono ─────────────────────────────────────
    if args.shop or args.fix:
        print()
        print("=" * 60)
        print("PASO 2: Items del shop sin icono mapeado")
        print("=" * 60)
        shop_path = os.path.join(DATA_DIR, "531.json")
        if not os.path.exists(shop_path):
            print("  ⚠ No se encontró 531.json")
        else:
            with open(shop_path, encoding="utf-8") as f:
                shop_items = json.load(f)
            vnums_no_icon = sorted({
                item["vnum"]
                for item in shop_items
                if str(item["vnum"]) not in item_icon or not item_icon.get(str(item["vnum"]))
            })
            print(f"  → {len(vnums_no_icon)} vnums sin icono en item_icon.json")

            for j, vnum in enumerate(vnums_no_icon, 1):
                fname = icon_name_for_vnum(vnum)
                if fname in local_set:
                    if args.fix:
                        newly_downloaded[str(vnum)] = fname
                    continue
                ok = download_icon(fname, local_set)
                status = "✓" if ok else "✗"
                if ok or j % 50 == 0:
                    print(f"  [{j}/{len(vnums_no_icon)}] {status} vnum {vnum} → {fname}")
                if ok:
                    total_ok += 1
                    if args.fix:
                        newly_downloaded[str(vnum)] = fname
                else:
                    total_fail += 1
                time.sleep(DELAY_OK if ok else DELAY_ERR)

    # ── PASO 3: escaneo completo ─────────────────────────────────────────────
    if args.all:
        print()
        print("=" * 60)
        print(f"PASO 3: Escaneo completo vnums {args.start}–{args.end}")
        print("=" * 60)
        total_range = args.end - args.start + 1
        found_in_scan = 0
        for k, vnum in enumerate(range(args.start, args.end + 1), 1):
            fname = icon_name_for_vnum(vnum)
            if fname in local_set:
                if args.fix and str(vnum) not in item_icon:
                    newly_downloaded[str(vnum)] = fname
                continue
            ok = download_icon(fname, local_set)
            if ok:
                found_in_scan += 1
                total_ok += 1
                print(f"  ✓ [{k:>6}/{total_range}] vnum {vnum} → {fname}  (total encontrados: {found_in_scan})")
                if args.fix:
                    newly_downloaded[str(vnum)] = fname
                time.sleep(DELAY_OK)
            else:
                total_fail += 1
                time.sleep(DELAY_ERR)
            # Progreso cada 5000
            if k % 5000 == 0:
                pct = k * 100 // total_range
                print(f"  ... [{k:>6}/{total_range}] {pct}% completado, {found_in_scan} iconos encontrados")

    # ── PASO 4: actualizar item_icon.json ────────────────────────────────────
    if args.fix and newly_downloaded:
        print()
        print("=" * 60)
        print(f"PASO 4: Actualizando item_icon.json (+{len(newly_downloaded)} entradas)")
        print("=" * 60)
        item_icon.update(newly_downloaded)
        with open(icon_json_path, "w", encoding="utf-8") as f:
            json.dump(item_icon, f, ensure_ascii=False, indent=2)
        print(f"  ✓ item_icon.json actualizado con {len(newly_downloaded)} nuevas entradas")

    # ── RESUMEN ──────────────────────────────────────────────────────────────
    print()
    print("=" * 60)
    print("RESUMEN FINAL")
    print(f"  Nuevos descargados : {total_ok}")
    print(f"  No encontrados/err : {total_fail}")
    print(f"  Total iconos local : {len(local_set)}")
    if newly_downloaded:
        print(f"  Mapeados en JSON   : {len(newly_downloaded)}")
    print("=" * 60)
    if total_fail > 0 and not args.all:
        print("ℹ️  Vuelve a ejecutar para reintentar los fallidos.")
    print("✅ ¡Listo!")


if __name__ == "__main__":
    main()
