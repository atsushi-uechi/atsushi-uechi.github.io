const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const target = link.getAttribute("href");
  if (target === current) {
    link.setAttribute("aria-current", "page");
  }
});
