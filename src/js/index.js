import "../css/style.css";

const navlink = document.querySelector("#navlink");
const cta = document.querySelector("#cta");
const toggle = document.querySelector("#toggle");
const headerNav = document.querySelector("header > nav");
const allCards = document.querySelectorAll("h1,h2,h3,h4,div");

// hide menu first for mobile
if (window.innerWidth < 768) {
  navlink.classList.add("hidden");
  cta.classList.add("hidden");
}

// bring back for desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navlink.classList.remove("hidden");
    cta.classList.remove("hidden");
  } else {
    navlink.classList.add("hidden");
    cta.classList.add("hidden");
  }
});

// burger menu
toggle.addEventListener("click", (e) => {
  if (window.innerWidth < 768) {
    navlink.classList.toggle("hidden");
    cta.classList.toggle("hidden");
  }
});

// change the padding of headerNav when scrolling down a bit
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    headerNav.classList.remove("py-6");
    headerNav.classList.add("py-4");
    headerNav.parentElement.classList.add("bg-white/60");
    headerNav.parentElement.classList.add("shadow-sm");
  } else {
    headerNav.classList.add("py-6");
    headerNav.parentElement.classList.remove("bg-white/60");
    headerNav.parentElement.classList.remove("shadow-sm");
  }
});

// appear on scroll
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty("--delay", `${index * 50}ms`); // Set delay dynamically
        entry.target.classList.add("scroll-show");
        obs.unobserve(entry.target); // Unobserve to improve performance
      }
    });
  },
  { threshold: 0.15 }
);
allCards.forEach((el) => observer.observe(el));
