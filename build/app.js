$('#play').click(function() {
  var vid = document.getElementById("film");
  vid.play();
  vid.webkitEnterFullscreen();
  console.log('play')
});