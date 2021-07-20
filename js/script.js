
  $(document).ready(function(){
    $('.slider').slick({
        arrows:false, 
        dots:true, 
        autoplay: true, 
        autoplaySpeed:2000
    });
  });

$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.menu>ul').toggleClass('active');
  });
});