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

const languageButtons = document.querySelectorAll("[data-set-lang]");
const savedLanguage = localStorage.getItem("siteLanguage") || "ja";

function setLanguage(language) {
  document.documentElement.lang = language;
  document.body.dataset.lang = language;
  localStorage.setItem("siteLanguage", language);
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.setLang === language));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
});

setLanguage(savedLanguage);

document.querySelectorAll("[data-filter-group]").forEach((group) => {
  const buttons = group.querySelectorAll("[data-filter]");
  const targetSelector = group.dataset.filterTarget;
  const items = document.querySelectorAll(targetSelector);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      items.forEach((item) => {
        const categories = (item.dataset.category || "").split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        item.hidden = !shouldShow;
      });
    });
  });
});
