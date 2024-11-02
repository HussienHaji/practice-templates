const navBtn = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
