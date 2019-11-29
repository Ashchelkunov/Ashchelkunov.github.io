import $ from "jquery"

$(document).ready(function(){
    $('.contatcs-btn').on('click', function(event){
      event.preventDefault();
      $('.contatcs').fadeIn();
    });
    $('.contatcs-close').on('click', function(event){
      $('.contatcs').fadeOut();
    })
});

// Slider
var images = document.querySelectorAll('.slider .photos img');
var i = 0;

function nextSlide () {
  setTimeout(slide, 3000);
}
function slide() {
  images[i].style.display = 'none';
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = 'block';
  nextSlide ();
}
nextSlide ();







// var btn_prev = document.querySelector('.slider .button .prev');
// var btn_next = document.querySelector('.slider .button .next');

// var images = document.querySelectorAll('.slider .photos img');
// var i = 0;
// btn_prev.onclick = function() {
//   images[i].style.display = 'none';
//   i--;
//   if (i < 0) {
//     i = images.length - 1;
//   }
//   images[i].style.display = 'block';
// }

// btn_next.onclick = function() {
//   images[i].style.display = 'none';
//   i++;
//   if (i >= images.length) {
//     i = 0;
//   }
//   images[i].style.display = 'block';
  
// }