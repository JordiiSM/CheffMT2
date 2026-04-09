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

// Aquí se puede inicializar el contenido de wiki, tools y canales dinámicamente usando data.js
initWiki();
initTools();
initChannels();
