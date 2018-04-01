(function () {
  "use strict";
  let backgrondElements = document.getElementsByClassName("ElementSliderTeam");
  let background = document.getElementById("BackgroundShadow");
  let windowInfo = document.getElementById("WindowInfo");
  let imgPlayer = document.getElementById("ImgPlayers");
  let imgRemove = null;
  for(let i = 0; i < backgrondElements.length; i++) {
    backgrondElements[i].onclick = function() {
      let date = backgrondElements[i].getElementsByClassName("InfoPlayers");
      let gotoDate = document.getElementsByClassName("GotoDate");
      let info = [];
      for(let i = 0; i < date.length; i++) {
        info[i] = date[i].innerHTML;
      }
      let namePlayers = info.shift();
      let nameImage = info.shift();
      let words = info.shift();
      for(let i = 0; i < info.length; i++) {
        gotoDate[i].textContent =  info[i];
      }
      let wordsHTML = document.getElementById("Words");
      wordsHTML.textContent = words;
      let namePlayersHTML = document.getElementById("Name");
      namePlayersHTML.textContent = namePlayers;
      let img = document.createElement("img");
      imgRemove = img;
      img.setAttribute("src", nameImage);
      imgPlayer.appendChild(img);
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
    console.log(imgRemove);
    imgPlayer.removeChild(imgRemove);
  }
})()

