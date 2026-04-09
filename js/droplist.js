const input = document.getElementById("searchInput");
const results = document.getElementById("dropResults");
const auto = document.getElementById("autocomplete");
const levelFilter = document.getElementById("levelFilter");

function matchLevel(level,f){
  if(!f) return true;
  if(f==="1-40") return level<=40;
  if(f==="41-70") return level>40 && level<=70;
  if(f==="71-120") return level>70;
}

function render(filter=""){
  results.innerHTML="";

  mobs.filter(m=>
    matchLevel(m.level,levelFilter.value) &&
    (m.name.toLowerCase().includes(filter) ||
     m.drops.some(d=>d.name.toLowerCase().includes(filter)))
  ).forEach(m=>{
    const el=document.createElement("div");
    el.className="drop-item";

    el.innerHTML=`
      <div class="drop-header">
        <div>${m.name}</div>
        <div>Lv ${m.level}</div>
      </div>

      <div class="drop-list">
        ${m.drops.map(d=>`
          <div class="drop-badge">
            <div class="drop-icon"></div>
            ${d.name}
            <span class="drop-chance">${d.chance}</span>
          </div>
        `).join("")}
      </div>
    `;

    results.appendChild(el);
  });
}

function autocomplete(val){
  auto.innerHTML="";
  if(!val){ auto.style.display="none"; return; }

  const list=[];

  mobs.forEach(m=>{
    if(m.name.toLowerCase().includes(val)) list.push(m.name);
    m.drops.forEach(d=>{
      if(d.name.toLowerCase().includes(val)) list.push(d.name);
    });
  });

  [...new Set(list)].slice(0,5).forEach(s=>{
    const div=document.createElement("div");
    div.className="auto-item";
    div.innerText=s;
    div.onclick=()=>{
      input.value=s;
      auto.style.display="none";
      render(s.toLowerCase());
    };
    auto.appendChild(div);
  });

  auto.style.display="block";
}

input.addEventListener("input",e=>{
  const val=e.target.value.toLowerCase();
  autocomplete(val);
  render(val);
});

levelFilter.addEventListener("change",()=>{
  render(input.value.toLowerCase());
});

render();
