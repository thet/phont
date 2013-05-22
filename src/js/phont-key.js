$(window).keydown(function(event) {
  event.preventDefault();
  if (event.which===16) {
    playSequence(sounds, getSequenceFromString($("#container textarea").text(), characters));
  } else if (event.which===225) {
      stopPlayer();
  } else {
      var button = $("ul").find("li[data-keycode='" + event.which + "']");
      if (button.length>0) {
        button.click();
      }
  }
});
$('ul li').click(function(event) {
  playSample(sounds, getSequenceFromString($(this).text(), characters)[0]);
});
