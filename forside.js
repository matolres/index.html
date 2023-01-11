let Forside = document.querySelector("#forside");
let PortFolio = document.querySelector("#portfolio");
let mig = document.querySelector("#mig");

window.addEventListener("load", sidenVises)

function sidenVises(){
    console.log("sidenVises");

    Forside.classList.add("forside_anim");
    PortFolio.classList.add("portfolio_anim");
    mig.classList.add("mig_anim");

}