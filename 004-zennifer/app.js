const nav = document.querySelector("nav");
const menu = document.querySelector(".menu-icon");
const links = document.querySelector("nav ul");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) nav.style.background = "#eefff9";
  else nav.style.background = "transparent";
});

menu.addEventListener("click", () => {
  links.classList.toggle("active");
});
