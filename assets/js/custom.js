$(document).ready(function(){
    // Team Slider
    $('.testimonials.owl-carousel').owlCarousel({
        loop: true,
        stagePadding: 140,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                stagePadding:0
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });



    //Mobile NavBar
    
    $(".nav-toggler").click(function () {
        $('.site-menu nav').slideToggle('menu-active');
        $(this).toggleClass('nav-active');
       
    });
});