console.log("Hello");

const menuBtn = document.getElementById("btnHamburger");

const nav = document.querySelector("nav");
const menu = document.querySelector(".header__menu");

menuBtn.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    menu.classList.add("hide");
    menu.classList.remove("fade-in");
    menu.classList.add("fade-out");
  } else {
    nav.classList.add("open");
    menu.classList.remove("hide");
    menu.classList.remove("fade-out");
    menu.classList.add("fade-in");
  }
});
