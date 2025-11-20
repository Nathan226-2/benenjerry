// JavaScript Document
console.log("hi");


let hamburgerMenu = document.querySelector("button");
let menu = document.querySelector("nav ul");

hamburgerMenu.onclick = function () {
    menu.classList.toggle("open");
};