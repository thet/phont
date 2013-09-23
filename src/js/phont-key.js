$(window).bind('phont_stop_player', function () {
    $('.play').each(function () {
        $(this).text('play');
    });
});
$(window).bind('phont_start_player', function () {
    $('.play').each(function () {
        $(this).text('stop');
    });
});

$(window).keydown(function(event) {
    var button = $("ul").find("li[data-keycode='" + event.which + "']");
    if (button.length>0) {
        //event.preventDefault();
        button.addClass('over');
        button.click();
    }
});
$(window).keyup(function(event) {
    var button = $("ul").find("li[data-keycode='" + event.which + "']");
    if (button.length>0) {
        //event.preventDefault();
        button.removeClass('over');
    }
});
$('ul li').click(function(event) {
    var keycode = $(this).data('keycode');
    if ($(this).hasClass('play')) {
        if ($(this).text() === 'stop') {
            stopPlayer();
        } else {
            playSequence(sounds, getSequenceFromGui($("#write"), characters));
        }
    }
});
