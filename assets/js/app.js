// active nav
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (scrollY >= sec.offsetTop - 150) {
      current = sec.id;
    }
  });

  links.forEach((a) => {
    a.style.color = "#9ca3af";
    if (a.getAttribute("href") === "#" + current) {
      a.style.color = "#4ade80";
    }
  });
});

// scroll animation
const cards = document.querySelectorAll(".card,.work-card");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = 1;
        e.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((c) => {
  c.style.opacity = 0;
  c.style.transform = "translateY(40px)";
  c.style.transition = ".6s";
  obs.observe(c);
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
