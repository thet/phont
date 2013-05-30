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
  if ($(this).hasClass('play')) {
      if ($(this).text() === 'stop') {
        stopPlayer();
        $(this).text('play');
      } else {
        playSequence(sounds, getSequenceFromString($("#container textarea").text(), characters));
        $(this).text('stop');
      }
  } else if ($(this).hasClass('control') || $(this).hasClass('symbol') || $(this).hasClass('space')) {
	  // handled elsewhere, but dont play sample
  } else {
      playSample(sounds, getSequenceFromString($(this).text(), characters)[0], player);
  }
});

function play_audiolet_sample(soundpath) {
    var alet, buf, player, rt;
	alet = new Audiolet();
	buf = new AudioletBuffer(1,0);
	buf.load(soundpath);
	player = new BufferPlayer(alet, 
			buf, 
			0.3,  // sample rate 
			0,  // start pos
			0   // loop ? 
		);
	rt = new TriggerControl(alet);
	rt.connect(player, 0, 1);
	player.connect(alet.output);
}
