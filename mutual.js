/* burger menu */
const menu = document.querySelector("nav ul");
const menu_li = document.querySelectorAll("nav ul li");
const hamburger= document.querySelector("#burgerknap");
const closeIcon= document.querySelector(".burger_close");
const menuIcon = document.querySelector(".burger_open");

hamburger.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (menu.classList.contains("vismenu")) {
    menu.classList.remove("vismenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    document.querySelector(".burger_open :first-child").classList.add("rotateminus");
    document.querySelector(".burger_open :nth-child(2)").classList.add("fade");
    document.querySelector(".burger_open :last-child").classList.add("rotateplus");


  } else {
    menu.classList.add("vismenu");
    closeIcon.style.display = "hidden";
 /*    menuIcon.style.display = "none"; */
    document.querySelector(".burger_open :first-child").classList.remove("rotateminus");
    document.querySelector(".burger_open :nth-child(2)").classList.remove("fade");
    document.querySelector(".burger_open :last-child").classList.remove("rotateplus");

  }
}
