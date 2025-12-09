// JavaScript Document
console.log("hi");


let hamburgerMenu = document.querySelector(".hamburgermenu");
let menu = document.querySelector("nav ul");

hamburgerMenu.onclick = function () {
    menu.classList.toggle("open");
};

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode")
}

document.querySelector("#dark-mode").addEventListener("click", darkMode)