// Slider ---------------------------
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const bg = document.querySelector('.slideshow-container');
  if (slideIndex==1){
    bg.style.background = "url('./assets/bg2.jpg') center center no-repeat";
  }else if(slideIndex==2){
    bg.style.background = "url('./assets/bg.jpg') center center no-repeat";
  }else if (slideIndex==3){
    bg.style.background = "url('./assets/bg3.jpg') center center no-repeat";
  }else{
    bg.style.background = "url('./assets/bg2.jpg') center center no-repeat";
  }
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
