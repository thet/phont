$(function(){

    $(window).bind('phont_stop_player', function () {
        $('.play').each(function () {
            var $this = $(this);
            $this.removeClass('state_play');
            $this.addClass('state_stop');
            $('span', this).text('play');
        });
    });
    $(window).bind('phont_start_player', function () {
        $('.play').each(function () {
            var $this = $(this);
            $this.removeClass('state_stop');
            $this.addClass('state_play');
            $('span', this).text('stop');
        });
    });

    $(window).keydown(function(event) {
        var button = $("ul").find("li[data-keycode='" + event.which + "']");
        if (button.length>0) {
            event.preventDefault();
            button.addClass('over');
            if (button.length>1) {
                button[0].click();
            } else {
                button.click();
            }
        }
    });
    $(window).keyup(function(event) {
        var button = $("ul").find("li[data-keycode='" + event.which + "']");
        if (button.length>0) {
            event.preventDefault();
            button.removeClass('over');
        }
    });


    var $write = $('#write'),
        $template = $('.phonem.template'),
        gendershift = false;

    $('#keyboard li').click(function(){
        var $this = $(this),
            character = $this.html(),
            keycode = $this.data('keycode');

        // play
        if ($this.hasClass('play')) {
            if ($this.hasClass('state_play')) {
                stopPlayer();
            } else {
                playSequence(sounds, getSequenceFromGui($("#write"), characters));
            }
        }

        // save
        if ($this.hasClass('save')) {
            recordStart();
            var seq = getSequenceFromGui($("#write"), characters);
            playSequence(sounds, seq);
            $(window).bind('phont_stop_player', function() {
                recordStop();
                debugger;
                //var form = $this.closest('form');
                //var action = form.attr('action');
                var action = '++add++phont';
                var datauri = exportWav(globalRecBuf);
                fd = new FormData();
                fd.append('title', 'My Phonem');
                fd.append('text', JSON.stringify(seq));
                fd.append('sound', datauri, 'phonem.wav');
                $.ajax({
                    url: action,
                    data: fd,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: 'POST',
                    success: function(data){
                        alert(data);
                    }
                });
            });
        }

        // gendershift
        if ($this.hasClass('gendershift')) {
            if ($this.hasClass('male')) {
                // ♀
                $template.removeClass('male');
                $template.addClass('female');
                $template.attr("data-soundbank", 'female');
                $('.gendershift').each(function () {
                    $(this).removeClass('male');
                    $(this).addClass('female');
                });
            } else {
                // ♂
                $template.removeClass('female');
                $template.addClass('male');
                $template.attr("data-soundbank", 'male');
                $('.gendershift').each(function () {
                    $(this).removeClass('female');
                    $(this).addClass('male');
                });
            }
        }

        // Delete
        if ($this.hasClass('delete')) {
            $write.find('.phonem').last().remove();
            return false;
        }

        // Other controls
        if ($this.hasClass('control')) {
            return false;
        }

        // Special characters
        if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";

        // Add the character
        var phon = $template.clone();
        phon.removeClass('template');
        phon.find('.char').html(character);
        rebind_knob(phon.find('.filter.knob'));
        playSample(sounds, mapDomToNote(phon, characters), player);

        $write.append(phon);

    });
});
