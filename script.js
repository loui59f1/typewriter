"use strict";

let n = 0;
const txt = document.querySelector(".typewritten").textContent;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Start function");

  // empty the h1
  document.querySelector(".typewritten").textContent = "";

  loopContent();
}

function loopContent() {
  console.log("Looping the content");

  if (n < txt.length) {
    document.querySelector(".typewritten").textContent += txt.charAt(n);
    n++;
    setTimeout(loopContent, 200);
  }
}
