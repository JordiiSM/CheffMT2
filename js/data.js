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

// Igual para initTools() y initChannels() según tu contenido
