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
