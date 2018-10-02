function smoothScroll() {
  //스크롤 애니메이션
  var $window = $(window);
  var scrollTime = 0.5;
  var scrollDistance = 220;
  $window.on("mousewheel DOMMouseScroll", function(event){
    event.preventDefault();
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
    TweenLite.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut,
        autoKill: true,
        overwrite: 5
      });
  });
}
