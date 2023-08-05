$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // margin: 20,
        loop: true,
        center: true,
        nav: true,
        dotsEach: true,
        navText:['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],

        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2,
                nav: false
            },
            1000: {
                items: 1
            }
        }
    });
  });