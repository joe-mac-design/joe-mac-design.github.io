$(document).ready(function(){
    // Check scroll position on page load
    if(window.scrollY > 20) {
        $('.navbar').addClass("sticky");
    }

    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
    });

    // Toggle Menu/Nav Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Copyright Year
    const copyrightYear = document.querySelector("#copyright-year");
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = currentYear;

    // Owl Carousel Script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});