$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        center: true,
        // mouseDrag:true,
        // touchDrag:true,
        nav: true,
        // stagePadding:50,
        // merge:true,
        // autoWidth:true,
        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        // autoplaySpeed:true,
        // navSpeed:1000,
        dotsSpeed: 2000,
        animateIn: 'animate__slideInDown',
        animateOut: 'animate__slideOutDown',
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    });

    new WOW().init();

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
    ...
})
  });