$(window).keydown(function(event) {
  event.preventDefault();
  var button = $("ul").find("li[data-keycode='" + event.which + "']");
  if (button.length>0) {
    button.addClass('over');
    button.click();
  }
});
$(window).keyup(function(event) {
  event.preventDefault();
  var button = $("ul").find("li[data-keycode='" + event.which + "']");
  if (button.length>0) {
    button.removeClass('over');
  }
});
$('ul li').click(function(event) {
  var keycode = $(this).data('keycode');
  if (keycode===16) {
    playSequence(sounds, getSequenceFromString($("#container textarea").text(), characters));
  } else if (keycode===225) {
      stopPlayer();
  } else {
      playSample(sounds, getSequenceFromString($(this).text(), characters)[0]);
  }
});
