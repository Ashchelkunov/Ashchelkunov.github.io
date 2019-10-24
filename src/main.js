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
  });
});

