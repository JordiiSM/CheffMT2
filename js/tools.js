function initTools() {
  const container = document.getElementById("tool-list");
  container.innerHTML = "";
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

document.addEventListener("DOMContentLoaded", initTools);
