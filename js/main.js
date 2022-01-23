
 $(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: true,
        autoPlay: true
    });
});
 $(document).ready(function () {
    $("#reviews-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [650, 1],
        pagination: true,
        autoPlay: true
    });
});

// magnific pop-up

$('.work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
            }
    // other options
  });

// magnific pop-up

$('.video-section').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    items: [
        {
          src: '#videostory', // CSS selector of an element on page that should be used as a popup
          type: 'inline'
        }
      ]
  });

// COUNTING-UP
  $(".num").counterUp({delay:10,time:1000});


// VIDEO PLAY

$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});

// AOS JS













