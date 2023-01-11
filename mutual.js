/* burger menu */
const menu = document.querySelector("nav ul");
const menu_li = document.querySelectorAll("nav ul li");
const hamburger= document.querySelector("#burgerknap");
const closeIcon= document.querySelector(".burger_close");
const menuIcon = document.querySelector(".burger_open");

hamburger.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (menu.classList.contains("vismenu")) {
    menu.classList.add("vismenu");
    closeIcon.style.display = "hidden";

  } else  {
    menu.classList.remove("vismenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block"; 

  }
}
