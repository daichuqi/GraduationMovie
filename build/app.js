var vid = document.getElementById("film");
var toggle = false;

$('#play').click(function() {
  vid.play();
  vid.webkitEnterFullscreen();
  console.log('play');
});

$('#menu').click(function() {
  if(!toggle){
    $('.bigBox').addClass( "goleft" );
    $('.background').addClass('goleft');
    $('.coverTitle').addClass('goleft');
    $('.coverSubtitle').addClass('goleft');
    toggle = true;
  }else{
    $('.bigBox').removeClass( "goleft" );
    $('.background').removeClass('goleft');
    $('.coverTitle').removeClass('goleft');
    $('.coverSubtitle').removeClass('goleft');
    toggle = false;
  }

});

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 27) {
    vid.pause();
   }
}
