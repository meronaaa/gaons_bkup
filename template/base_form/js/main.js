$(document).ready(function(){
  smoothScroll();

  var innerH = $(window).innerHeight();
  $('.mainslider_inner').css({'height':innerH});
  $('#content').css({'padding-top':innerH});
  $(window).resize(function(){
    var innerH = $(window).innerHeight();
    $('.mainslider_inner').css({'height':innerH});
    $('#content').css({'padding-top':innerH});
  })

  $('#mainslider').slick({
    fade:true,
    speed:2000,
    autoplay:true,
    autoplaySpeed: 3000
  })

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    console.log(scrollPos);
    if(scrollPos > 0) {
      $('#header').addClass('active');
    } else {
      $('#header').removeClass('active');
    }
  })

  var swiper = new Swiper('.swiper-container', {
    loop:true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 46,
      stretch: -26,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });






})
