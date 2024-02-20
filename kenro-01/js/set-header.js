var prevScrollpos = window.pageYOffset;
var setHeader = function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.getElementsByClassName("header")[0];
  var main = document.getElementsByClassName("main")[0];
  var mainCoor = main.getBoundingClientRect();
  var mainTop = mainCoor.top;
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove('header--hidden');
    header.classList.add('header--shadow');
  } if (mainTop < 0) {
    header.classList.remove('header--hidden');
    header.classList.add('header--shadow');
  } if (prevScrollpos < currentScrollPos) {
    header.classList.add('header--hidden');
    header.classList.remove('header--shadow');
  } if (mainTop >= 0) {
    header.classList.remove('header--hidden');
    header.classList.remove('header--shadow');
  }
  prevScrollpos = currentScrollPos;
}

window.onscroll = setHeader;
window.onload = setHeader;