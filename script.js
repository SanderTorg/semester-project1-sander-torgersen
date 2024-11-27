var prevScrollpos = window.pageYOffset;
var header = document.getElementById("hide-header");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.transform = "translateY(0)";
  } else {
    header.style.transform =
      "translateY(-80.2px)"; /* adjust this value to the height of your header */
  }

  prevScrollpos = currentScrollPos;
};
