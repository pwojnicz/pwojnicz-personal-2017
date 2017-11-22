
// AOS setup:
$('.hero-section__header').attr('data-aos', 'zoom-in');
$('.hero-section__img').attr('data-aos', 'zoom-in');
$('.hero-section__desc').attr('data-aos', 'fade-up').attr('data-aos-delay', '400');
$('.hero-section a').attr('data-aos', 'fade-up').attr('data-aos-delay', '800');
$('.section__header').attr('data-aos', 'fade-in');
$('.tabs').attr('data-aos', 'fade-up');
$('.card').attr('data-aos', 'zoom-in');

AOS.init({
  offset: 100,
  duration: 600,
  easing: 'ease',
  delay: 50,
});

$(document).ready(function() {
  toggleNav();
  tabs();
});

function toggleNav() {
  $('.main-nav__trigger').click(function() {
    $('.main-nav').toggleClass('is-active');
    return false;
  });

  if ('.main-nav.is-active') {
    $('.main-nav__item').click(function() {
      $('.main-nav').toggleClass('is-active');
      return false;
    });
  }
}

function tabs() {
  var tab = $('.tab-header');

  $('.tab-header').click(function() {
    $('.tab-header.is-active').removeClass('is-active');
    $(this).addClass('is-active');

    // Scroll to tab header on mobile view
    if (jQuery(window).width() < 1200) {
      $('html:not(:animated), body:not(:animated)').animate({ scrollTop: $('.tab-header.is-active').offset().top }, 'slow');
    }
  });
}
