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
