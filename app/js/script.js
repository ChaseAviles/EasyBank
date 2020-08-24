const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", function () {
  //close hamburger menu
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    body.classList.remove("noScroll");

    overlay.classList.remove("fade-in");
    menu.classList.remove("fade-in");

    overlay.classList.add("fade-out");
    menu.classList.add("fade-out");

    overlay.style.visibility = "hidden";
    menu.style.visibility = "hidden";
  } else {
    //open hamburger menu
    btnHamburger.classList.add("open");
    body.classList.add("noScroll");

    overlay.style.visibility = "visible";
    menu.style.visibility = "visible";

    overlay.classList.add("fade-in");
    menu.classList.add("fade-in");

    overlay.classList.remove("fade-out");
    menu.classList.remove("fade-out");
  }
});
