$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:15,
        items:3,
        // center:true,
        mouseDrag:true,
        margin:15,
        nav:true,
        dotsEach:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        rewind:true,
        navText:['<i class="fa-solid fa-arrow-right"></i>','<i class="fa-solid fa-arrow-left"></i>']
    });
  });