//MODAL ANIMATIONS
//MAGNIFYING GLASS ANIMATION
$(document).ready(function(){
    $("#analyze-button").click(function(){
        $("#mag_glass").animate({
        });
    });
  });

//BOTTLENECK ANIMATIONS 
var buttonsm = document.getElementById("implement-button-sm");
var buttonlg = document.getElementById("implement-button"),
    animate1 = document.getElementById("animate-neck1");
    animate2 = document.getElementById("animate-neck2");
    animate3 = document.getElementById("animate-neck3");
    animate4 = document.getElementById("animate-neck4");

buttonlg.addEventListener('click', function() {
    animate1.beginElement();
    animate2.beginElement();
    animate3.beginElement();
    animate4.beginElement();
  }, false);

buttonsm.addEventListener('click', function() {
    animate1.beginElement();
    animate2.beginElement();
    animate3.beginElement();
    animate4.beginElement();
  }, false);


//REGISTER AND CONTACT FORM
$(function(){
 
    $('#contactus-form').submit(function(e){
        e.preventDefault();
        var formdata = toJSONString(this);
        console.log(formdata);
        $.ajax({
            type: "POST",
            url: URL,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify( {"firstname": $('#firstname').val(), "lastname": $('#lastname').val(), "email": $('#contact_email').val(), "formType": "contact", "message": $('#message').val()} ),
            beforeSend: function(data) {
                $('#contact-btn').prop('disabled', true);
                $('#contactus-form :input').prop('disabled', true);
                $('#contact-status').html('<i class="fa fa-refresh fa-spin"></i> Enviando...').show();
            },
            success: function(data) {
                console.log(data);
                $('#contact-status').text('Gracias por contactarnos.').show();
                $('#contactus-form :input').removeProp('disabled');
                $('#contact-btn').removeProp('disabled');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#contact-status').text('Error de envío.').show();
                $('#contactus-form :input').removeProp('disabled');
                $('#contact-btn').removeProp('disabled');
            }
        });
    }); 

    $('#register-form').submit(function(e){
        e.preventDefault();
        var formdata = toJSONString(this);
        console.log(formdata);
        $.ajax({
            type: "POST",
            url: URL,
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify( {"firstname": " ", "lastname": " ", "email": $('#register_email').val(), "formType": "register", "message": " "} ),
            beforeSend: function(data) {
                $('#register-btn').attr('disabled', true);
                $('#register-status').html('<i class="fa fa-refresh fa-spin"></i> Enviando...').show();
            },
            success: function(data) {
                console.log(data);
                $('#register-status').text('Gracias por registrarte.').show();
                $('#register-form :input').removeProp('disabled');
                $('#register-btn').removeProp('disabled');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#register-status').text('Error de envío').show();
                $('#register-form :input').removeProp('disabled');
                $('#register-btn').removeProp('disabled');
            }
        });
    });

    function toJSONString (form) {
    var obj = {};
    var elements = form.querySelectorAll("input, select, textarea");
    for(var i = 0; i < elements.length; ++i) {
      var element = elements[i];
      var name = element.name;
      var value = element.value;
      if(name) {
        obj[name] = value;
      }
        }
        return JSON.stringify(obj);
    }
});


//SMOOTH SCROLLING, SCROLL REVEAL CALLS and MAGNIFIC POP UP CALLS
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
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
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict