(function() {
let updownElem = document.getElementById('ButtomTop');
let pageYLabel = 0;
updownElem.onclick = function() {
  let pageY = window.pageYOffset || document.documentElement.scrollTop;
  switch (this.className) {
    case 'up':
      pageYLabel = pageY;
      window.scrollTo(0, 0);
      this.className = 'down';
      updownElem.innerHTML = "Низ";
    break;
    case 'down':
      window.scrollTo(0, pageYLabel);
      this.className = 'up';
      updownElem.innerHTML = "Вверх";
  }
}

window.onscroll = function() {
  let pageY = window.pageYOffset || document.documentElement.scrollTop;
  let innerHeight = document.documentElement.clientHeight;
  switch (updownElem.className) {
    case '':
      if (pageY > innerHeight) {
        updownElem.className = 'up';
        updownElem.style.display = "block";
      }
    break;
    case 'up':
      if (pageY < innerHeight) {
        updownElem.className = '';
        updownElem.style.display = "none";
      }
    break;
    case 'down':
      if (pageY > innerHeight) {
        updownElem.className = 'up';
        updownElem.innerHTML = "Вверх";
        
      }
    break;
  }
}
})()

  