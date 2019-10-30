// import $ from "jquery"

import "bxslider/dist/jquery.bxslider"
$(document).ready(function(){
  $('.slider').bxSlider({
  	minSlides: 1,
		maxSlides: 4,
    slideWidth: 258,
    slideMargin: 32,
    moveSlides: 1,
    pager: false,
    nextText: '',
    prevText: '',
    infiniteLoop: false,
    responsive: true,
  });
});
import "bxslider/dist/jquery.bxslider"
$(document).ready(function(){
  $('.slider-review').bxSlider({
    maxSlides: 1,
    nextText: '',
    prevText: '',
    pager: true,
    controls: false,
  })
})