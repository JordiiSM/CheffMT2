// Tabs
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
function initTools() {
  const container = document.getElementById("tool-list");
  tools.forEach(t => {
    const a = document.createElement("a");
    a.className = "tool-card";
    a.href = t.link;
    a.target = "_blank";
    a.innerHTML = `
      <div class="tool-header">
        <div class="tool-icon">${t.icon}</div>
        <div class="tool-name">${t.name}</div>
      </div>
      <div class="tool-desc">${t.desc}</div>
    `;
    container.appendChild(a);
  });
}
// Aquí se puede inicializar el contenido de wiki, tools y canales dinámicamente usando data.js
initWiki();
initTools();
initChannels();
