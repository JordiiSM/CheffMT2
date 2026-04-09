const wikiClasses = [
  { icon:"⚔️", name:"Guerrero", sub:"Armas y armaduras", link:"https://es-wiki.metin2.gameforge.com/index.php/Guerrero" },
  { icon:"🏹", name:"Ninja", sub:"Arco y daga", link:"https://es-wiki.metin2.gameforge.com/index.php/Ninja" },
  // más items...
];

function initWiki() {
  const container = document.getElementById('wiki-classes');
  wikiClasses.forEach(c=>{
    const a = document.createElement('a');
    a.className='wiki-card';
    a.href=c.link; a.target='_blank';
    a.innerHTML=`<div class="w-icon">${c.icon}</div><div class="w-name">${c.name}</div><div class="w-sub">${c.sub}</div>`;
    container.appendChild(a);
  });
}
// js/data.js
const tools = [
  {
    icon: "📦",
    name: "Mob Drop List",
    desc: "Consulta qué items dropea cada monstruo del juego.",
    link: "https://metin2alerts.com/droplist"
  },
  {
    icon: "📫",
    name: "Chest Chances",
    desc: "Comprueba los premios y probabilidades de cada cofre.",
    link: "https://metin2alerts.com/chest"
  },
  {
    icon: "👹",
    name: "Mob Database",
    desc: "Base de datos completa de monstruos y sus stats.",
    link: "https://metin2alerts.com/moblist"
  },
  {
    icon: "🔍",
    name: "Mob Finder",
    desc: "Encuentra dónde aparecen los mobs según drops.",
    link: "https://metin2alerts.com/mobFinder"
  },
  {
    icon: "⚒️",
    name: "Upgrade Chances",
    desc: "Tasas de éxito/fallo para mejorar armas y armaduras.",
    link: "https://metin2alerts.com/upgradeList"
  },
  {
    icon: "🏪",
    name: "Trading Glass",
    desc: "Mercado P2P de items para comprar/vender.",
    link: "https://metin2alerts.com/store"
  },
  {
    icon: "👑",
    name: "Catch the King",
    desc: "Rastrea al Rey en tiempo real y obtén recompensas.",
    link: "https://metin2alerts.com/king"
  },
  {
    icon: "👘",
    name: "Costume Set‑Bonus",
    desc: "Simulador de sets de disfraces y bonus.",
    link: "https://metin2alerts.com/costume"
  },
  {
    icon: "🛒",
    name: "Shop Tool",
    desc: "Herramienta/Extensión para gestionar la tienda.",
    link: "https://chromewebstore.google.com/detail/metin2alerts-itemshop-too/hhomkgpdnjbkldajaggkcachdlamaill"
  }
];

// Igual para initTools() y initChannels() según tu contenido
