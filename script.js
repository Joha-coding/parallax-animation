let text = document.getElementById("text");
let wavesleft = document.getElementById("waves-left");
let wavesright = document.getElementById("waves-right");

let flowersleft = document.getElementById("flowers-left");
let flowersright = document.getElementById("flowers-right");
let lightleafleft = document.getElementById("light-leaf-left");
let lightleafright = document.getElementById("light-leaf-right");
let darkleafleft = document.getElementById("dark-leaf-left");
let darkleafright = document.getElementById("dark-leaf-right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + "px";
  darkleafleft.style.left = value * -0.5 + "px";
  lightleafleft.style.left = value * -0.2 + "px";
  flowersleft.style.left = value * -0.4 + "px";

  darkleafright.style.left = value * 0.5 + "px";
  lightleafright.style.left = value * 0.2 + "px";
  flowersright.style.left = value * 0.4 + "px";
});
