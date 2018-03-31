(function () {
"use strict";
let backgrondElements = document.getElementsByClassName("ElementSliderTeam");
let background = document.getElementById("BackgroundShadow");
let windowInfo = document.getElementById("WindowInfo");

for(let i = 0; i < backgrondElements.length; i++) {
  backgrondElements[i].onclick = function() {
    background.style.display = "block";
    windowInfo.style.display = "block";
    document.body.style.overflowY = "hidden";
  }
}

let closeButton = document.getElementById("CloseButtonWindow");
closeButton.onclick = function() {
  background.style.display = "none";
  windowInfo.style.display = "none";
  document.body.style.overflowY = "scroll";
}
})()

