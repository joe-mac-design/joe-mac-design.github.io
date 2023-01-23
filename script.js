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

// Get all of the navigation links
const links = document.querySelectorAll('nav a');

// Iterate through each link
for (let link of links) {
  // Add a click event listener to each link
  link.addEventListener('click', function(event) {
    // Prevent the default behavior of the link (i.e. jumping to the fragment)
    event.preventDefault();
    
    // Get the target element that the link points to
    const target = document.querySelector(this.getAttribute('href'));
    
    // Use the scrollTo() method to smoothly scroll to the target element
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
}