var vid = document.getElementById("film");

$('#play').click(function() {
  vid.play();
  vid.webkitEnterFullscreen();
  console.log('play')
});


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 27) {
    vid.pause();
   }
}