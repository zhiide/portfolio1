const menuToggler = document.querySelector(".menu-toggler");

const menu = document.querySelector(".header__nav");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("menu-show");
});
