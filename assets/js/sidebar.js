// Hide and unhide sidebar
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("mainContent");
const toggleBtn = document.getElementById("toggleSidebar");

// Restore saved preference
const sidebarHidden = localStorage.getItem("sidebarHidden") === "true";

if (sidebarHidden) {
  sidebar.classList.add("-translate-x-full");
  main.classList.remove("ml-[270px]", "w-[calc(100%-270px)]");
  main.classList.add("ml-0", "w-full");
  toggleBtn.textContent = "Close";
}

// Toggle
toggleBtn.addEventListener("click", () => {
  const isHidden = sidebar.classList.toggle("-translate-x-full");

  if (isHidden) {
    main.classList.remove("ml-[270px]", "w-[calc(100%-270px)]");
    main.classList.add("ml-0", "w-full");
    toggleBtn.textContent = "Close";
  } else {
    main.classList.remove("ml-0", "w-full");
    main.classList.add("ml-[270px]", "w-[calc(100%-270px)]");
    toggleBtn.textContent = "☰";
  }

  localStorage.setItem("sidebarHidden", isHidden);
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const box1 = document.getElementById("box1");

  // spacing section (safe now)
  if (box1) {
    box1.className = "h-12";
  }

  categories.forEach((cat) => {
    // Category header
    const h2 = document.createElement("h2");
    h2.textContent = `${cat.icon} ${cat.title}`;
    h2.style.cursor = "pointer";
    h2.style.userSelect = "none";

    // Links container (IMPORTANT: class added)
    const linksContainer = document.createElement("div");
    linksContainer.className = "links-container";
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

    // Toggle ONLY other categories (not all divs anymore)
    h2.addEventListener("click", () => {
      const allLinksContainers = sidebar.querySelectorAll(".links-container");

      allLinksContainers.forEach(container => {
        if (container !== linksContainer) {
          container.style.display = "none";
        }
      });

      linksContainer.style.display =
        linksContainer.style.display === "none" ? "block" : "none";
    });

    sidebar.appendChild(h2);
    sidebar.appendChild(linksContainer);
  });

  // Sidebar scroll safety
  sidebar.style.overflowY = "auto";
  sidebar.style.maxHeight = "100vh";
});
