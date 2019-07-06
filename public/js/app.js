/*-------------------------
MAIN MENU BARS
---------------------------*/

/* Open when someone clicks the span */
function openNav() {
  document.getElementById('myNav').style.height = "100%";
}



/* Close when someone clicks the X symbol */
function closeNav() {
  document.getElementById('myNav').style.height = "0%";
}


/*-------------------------
TESTIMONIAL SLIDER
---------------------------*/
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var bars = document.getElementsByClassName("bar");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < bars.length; i++) {
      bars[i].className = bars[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";  
  bars[slideIndex-1].className += " active";
}