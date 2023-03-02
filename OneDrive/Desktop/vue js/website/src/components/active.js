var header = document.getElementById("myTab");
var nav = header.getElementsByClassName("nav-link");
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}