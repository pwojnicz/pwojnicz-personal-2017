$(document).ready(function() {
  toggleNav();
  tabs();
});

function toggleNav() {
  $('.main-header__nav-trigger').click(function() {
    $('.main-header__nav').toggleClass('is-active');
    return false;
  });
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
