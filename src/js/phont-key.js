$(window).keydown(function(event) {
  var button = $("ul").find("li[data-keycode='" + event.which + "']");
  if (button.length>0) {
    event.preventDefault();
    button.addClass('over');
    button.click();
  }
});
$(window).keyup(function(event) {
  var button = $("ul").find("li[data-keycode='" + event.which + "']");
  if (button.length>0) {
    event.preventDefault();
    button.removeClass('over');
  }
});
$('ul li').click(function(event) {
  var keycode = $(this).data('keycode');
  if (keycode===16) {
    playSequence(sounds, getSequenceFromString($("#container textarea").text(), characters));
  } else if (keycode===225 || keycode===27) {
      stopPlayer();
  } else {
      playSample(sounds, getSequenceFromString($(this).text(), characters)[0]);
  }
});
