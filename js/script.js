// =========================================================
// PORTFOLIO SCRIPT
// 1. Mobile menu   2. Active nav link   3. Scroll animations
// 4. Footer year
// =========================================================

// ---------- 1. MOBILE MENU ----------
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu when a link is clicked, or when Escape is pressed
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeMenu();
});

function closeMenu() {
  navMenu.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

// ---------- 2. HIGHLIGHT ACTIVE NAV LINK ----------
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let current = "home";
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach(function (link) {
    const active = link.getAttribute("href") === "#" + current;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}
window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// ---------- 3. SCROLL REVEAL ANIMATION ----------
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(function (item) { observer.observe(item); });
} else {
  // Old browsers: just show everything
  revealItems.forEach(function (item) { item.classList.add("visible"); });
}

// ---------- 4. FOOTER YEAR ----------
document.getElementById("year").textContent = new Date().getFullYear();
