$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin: 20,
        loop: true,
        center: true,
        nav: true,
        dotsEach: true,
        navText:['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    });
  });