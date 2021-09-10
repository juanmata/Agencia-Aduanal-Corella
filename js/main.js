jQuery(document).ready(function ($) {
  'use strict';

  // Search
  $('a[href="#search"]').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
  });

  $('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });

  /* $('form').submit(function(event) {
    event.preventDefault();
    return false; 
  }); */

  // Menu
  $('nav#mobile-menu').mmenu({
    extensions	: [ 'effect-slide-menu', 'pageshadow' ],
    searchfield	: true,
    counters	: true,
    navbar 		: {
      title		: 'Advanced menu'
    },
    navbars		: [
      {
        position	: 'top',
        content		: [ 'searchfield' ]
      }, {
        position	: 'top',
        content		: [
          'prev',
          'title',
          'close'
        ]
      }, {
        position	: 'bottom',
        content		: [
          '<a href="http://mmenu.frebsite.nl/wordpress-plugin.html" target="_blank">WordPress plugin</a>'
        ]
      }
    ]
  });

  // Owl-Carousel
  $('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:2,
        nav:false,
        loop:false
      }
    }
  });

  $('.talking-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
      0:{
        items:2,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:false,
        loop:false
      }
    }
  })

  // SLIP HOVER CLIENTS
  $(".our-clients").sliphover({
    backgroundColor: 'rgba(202,31,38,0.75)'
  });

  // Maps
  var gmMapDiv = $( "#map-canvas" );

  (
    function ( $ ) {

      if ( gmMapDiv.length ) {

        var gmMarkerAddress = gmMapDiv.attr( "data-address" );
        var gmHeight = gmMapDiv.attr( "data-height" );
        var gmWidth = gmMapDiv.attr( "data-width" );
        var gmZoomEnable = gmMapDiv.attr( "data-zoom_enable" );
        var gmZoom = gmMapDiv.attr( "data-zoom" );

        gmMapDiv.gmap3( {
          action: "init",
          marker: {
            address: gmMarkerAddress,
            options: {
              icon: "images/marcador.png" /* "http://transport.thememove.com/wp-content/themes/tm_transport/images/map-marker.png", */
            },
          },
          map: {
            options: {
              zoom: parseInt( gmZoom ),
              zoomControl: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false,
              scaleControl: false,
              scrollwheel: gmZoomEnable == 'enable' ? true : false,
              streetViewControl: false,
              draggable: true,
              styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}],
            }
          }
        } ).width( gmWidth ).height( gmHeight );
      }
    }
  )( jQuery );

  // lightSlider - Single product page
  $('#imageGallery').lightSlider({
    gallery:true,
    item:1,
    thumbItem:3,
    slideMargin:0,
    enableDrag: false,
    currentPagerPosition:'left',
    adaptiveHeight: true,
    onSliderLoad: function(el) {
      el.lightGallery({
        selector: '#imageGallery .lslide'
      });
    }
  });
  
  // Ship different
  $('.different-collapse').collapse();

  $('input#ship-different-checkbox').on('change', function(){
    var $this = $(this),
      $btn = $( $this.closest('.customCollapse').data('href') );

    if ($this.is(":checked") ) {
      $btn
        .addClass('in')
        .css('height', 'auto');
    } else {
      $btn
        .css('height', 'auto')
        .removeClass('in');
    }
  });

});
