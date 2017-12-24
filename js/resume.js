(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  blueimp.Gallery([
    {
      href: '/img/gallery/image1.jpg',
      title: 'Image 1'
    },
    {
      href: '/img/gallery/image2.jpg',
      title: 'Image 2'
    },
          {
      href: '/img/gallery/image3.jpg',
      title: 'Image 3'
    },
          {
      href: '/img/gallery/image4.jpg',
      title: 'Image 4'
    },
          {
      href: '/img/gallery/image5.jpg',
      title: 'Image 5'
    }
  ], {
    container: '#blueimp-image-carousel',
    carousel: true,
    hidePageScrollbars: false,
    closeOnEscape: false,
    closeOnSlideClick: false,
    closeOnSwipeUpOrDown: false
  });

  blueimp.Gallery([
    {
      href: '/img/certificates/0001.jpg',
      title: 'Certificate 1'
    },
    {
      href: '/img/certificates/0002.jpg',
      title: 'Certificate 2'
    },
    {
      href: '/img/certificates/0003.jpg',
      title: 'Certificate 3'
    },
    {
      href: '/img/certificates/0004.jpg',
      title: 'Certificate 4'
    },
    {
      href: '/img/certificates/0005.jpg',
      title: 'Certificate 5'
    },
    {
      href: '/img/certificates/0006.jpg',
      title: 'Certificate 6'
    },
    {
      href: '/img/certificates/0007.jpg',
      title: 'Certificate 7'
    },
    {
      href: '/img/certificates/0008.jpg',
      title: 'Certificate 8'
    },
    {
      href: '/img/certificates/0009.jpg',
      title: 'Certificate 9'
    },
    {
      href: '/img/certificates/0010.jpg',
      title: 'Certificate 10'
    },
    {
      href: '/img/certificates/0011.jpg',
      title: 'Certificate 11'
    },
    {
      href: '/img/certificates/0012.jpg',
      title: 'Certificate 12'
    },
    {
      href: '/img/certificates/0013.jpg',
      title: 'Certificate 13'
    },
    {
      href: '/img/certificates/0014.jpg',
      title: 'Certificate 14'
    },
    {
      href: '/img/certificates/0015.jpg',
      title: 'Certificate 15'
    },
    {
      href: '/img/certificates/0016.jpg',
      title: 'Certificate 16'
    },
    {
      href: '/img/certificates/0017.jpg',
      title: 'Certificate 17'
    }
  ], {
    container: '#blueimp-image-carousel2',
    carousel: true,
    hidePageScrollbars: false,
    closeOnEscape: false,
    closeOnSlideClick: false,
    closeOnSwipeUpOrDown: false
  });

})(jQuery); // End of use strict
