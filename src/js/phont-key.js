$(function(){
    $(document).ready(function() {

        $(window).on('phont_stop_player', function () {
            $('.play').each(function () {
                var $this = $(this);
                $this.removeClass('state_play');
                $this.addClass('state_stop');
            });
        });
        $(window).on('phont_start_player', function () {
            $('.play').each(function () {
                var $this = $(this);
                $this.removeClass('state_stop');
                $this.addClass('state_play');
            });
        });

        $(window).keydown(function(event) {
            if ($('input:focus').length>0) { return; }
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
            if ($('input:focus').length>0) { return; }
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
                var seq = getSequenceFromGui($("#write"), characters);
                console.log('start recording');
                recordStart();
                playSequence(sounds, seq);
                $(window).one('phont_stop_player', function() {
                    console.log('stop recording');
                    recordStop();
                    var $form = $this.closest('form');
                    var action = $form.attr('action');
                    var datauri = exportWav(globalRecBuf);
                    var $title = $('input[name="title"]', $form);
                    fd = new FormData();
                    fd.append('save', '1');
                    fd.append('title', $title.val());
                    fd.append('text', JSON.stringify(seq));
                    fd.append('sound', datauri);
                    $form.submit(fd);
                    var jqxhr = $.ajax({
                        url: action,
                        data: fd,
                        cache: false,
                        contentType: false,
                        processData: false,
                        type: 'POST',
                        xhr: function() {
                            var xhr = new window.XMLHttpRequest();
                            //Upload progress
                            xhr.upload.addEventListener("progress", function(evt){
                                if (evt.lengthComputable) {
                                    $('.progressbar').show();
                                    var complete = (evt.loaded / evt.total) * 100;
                                    $('#progress').val(complete);
                                    //console.log(complete);
                                }
                            }, false);
                            return xhr;
                        },
                     })
                    .fail(function () {
                        console.log('saving failed...');
                    })
                    .done(function (data) {
                        console.log('saved!');
                        if (data) { window.location.href = data; }
                    })
                    .always(function () {
                        $('.progressbar').hide();
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
            if ($this.hasClass('space')) { character = ' '; }
            if ($this.hasClass('tab')) { character = "\t"; }
            if ($this.hasClass('return')) { character = "\n"; }

            // Add the character
            var phon = $template.clone();
            phon.removeClass('template');
            phon.find('.char').html(character);
            rebind_knob(phon.find('.filter.knob'));
            playSample(sounds, mapDomToNote(phon, characters), player);

            $write.append(phon);

        });

    });
});
