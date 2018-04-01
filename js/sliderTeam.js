
(function() {
  "use strict";
  let elements = document.getElementsByClassName("ElementSliderTeam");
  show();
  function show() {
    for(let i = 0; i < elements.length; i++) {
      if(i > 2) {
        elements[i].style.display = "none";
      } else {
        elements[i].style.display = "inline-block";
      }
    }
  }
  let button = document.getElementsByClassName("ButtonSliderTeam");
  for(let i = 0; i < button.length; i++) {
    button[i].onclick = function() {
      if(i == 0) {
        bias(true);
      } else {
        bias(false);
      }
    }
  }
  function bias(direction) {
    let element;
    if(direction) {
      element = elements[elements.length - 1];
      elements[0].parentNode.removeChild(elements[elements.length - 1]);
      elements[0].parentNode.insertBefore(element, elements[0].parentNode.firstChild);
      show();
    } else {
      element = elements[0];
      elements[0].parentNode.removeChild(elements[0]);
      elements[1].parentNode.insertBefore(element, elements[1].parentNode.lastChild);
      show();
    }
  }
})()