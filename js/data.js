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
// js/data.js (lista actualizada)
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
    desc: "Comprueba las probabilidades y premios de cada tipo de cofre.",
    link: "https://metin2alerts.com/chest"
  },
  {
    icon: "👹",
    name: "Mob Database",
    desc: "Base de datos completa con estadísticas de monstruos.",
    link: "https://metin2alerts.com/moblist"
  },
  {
    icon: "🔍",
    name: "Mob Finder",
    desc: "Encuentra dónde aparecen los mobs según el item que dropean.",
    link: "https://metin2alerts.com/mobFinder/"
  },
  {
    icon: "⚒️",
    name: "Upgrade Chances",
    desc: "Calcula las tasas de éxito para mejorar armas y armaduras.",
    link: "https://metin2alerts.com/upgradeList"
  },
  {
    icon: "🏪",
    name: "Trading Glass",
    desc: "Mercado para ver ítems y precios directamente desde el navegador.",
    link: "https://metin2alerts.com/store"
  },
  {
    icon: "👑",
    name: "Catch the King",
    desc: "Rastrea al Rey en tiempo real.",
    link: "https://metin2alerts.com/king"
  },
  {
    icon: "👘",
    name: "Costume Set-Bonus",
    desc: "Consulta bonos y sets de disfraces del juego.",
    link: "https://metin2alerts.com/costume"
  },
  {
    icon: "🛒",
    name: "Shop / ItemShop Tool",
    desc: "Accede a la herramienta/ extensión de la tienda.",
    link: "https://metin2alerts.com" /* o enlace específico si lo quieres cambiar */
  }
];
// Igual para initTools() y initChannels() según tu contenido
