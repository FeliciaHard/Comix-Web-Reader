document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");

  categories.forEach((cat, index) => {
    // Category header
    const h2 = document.createElement("h2");
    h2.textContent = `${cat.icon} ${cat.title}`;
    h2.style.cursor = "pointer";
    h2.style.userSelect = "none";

    // Links container (collapsed by default)
    const linksContainer = document.createElement("div");
    linksContainer.style.display = "none";
    linksContainer.style.marginBottom = "12px";

    cat.links.forEach(link => {
      const btn = document.createElement("button");
      btn.className = "demo-btn";
      btn.textContent = link.name;
      btn.dataset.url = link.url;

      btn.onclick = async () => {
        if (link.url === "#") return alert("No demo available");
        window.showLoader("Downloading CBZ...");
        const res = await fetch(link.url);
        const blob = await res.blob();
        const file = new File([blob], "demo.cbz");
        window.openComic(file);
      };

      linksContainer.appendChild(btn);
    });

    // Toggle function
    h2.addEventListener("click", () => {
      const currentlyOpen = sidebar.querySelectorAll("div");
      currentlyOpen.forEach(c => {
        if (c !== linksContainer) c.style.display = "none";
      });

      linksContainer.style.display =
        linksContainer.style.display === "none" ? "block" : "none";
    });

    sidebar.appendChild(h2);
    sidebar.appendChild(linksContainer);
  });

  // Add scroll if sidebar is too long
  sidebar.style.overflowY = "auto";
  sidebar.style.maxHeight = "100vh";
});