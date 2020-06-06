//color picker

var theInput = document.getElementById("color");
   
theInput.addEventListener("input", function() {
  var theColor = theInput.value;
  document.documentElement.style.setProperty('--custom-color', theColor);
});