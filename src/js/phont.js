// test if ogg can be player
// (new Audio()).canPlayType("audio/ogg; codecs=vorbis")
// from : http://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5

/** timeout ticker */
var phont_tick = 400;

/** pause between notes */
var pause_after_note = 0;

/** indicates play position */
var _sequence_index;

// ----------------------------------------------------------
/** 
 * "precision" interval , setTimeout replacement 
 */
var tickinterval;	// handle for timer-interval
var things_to_do = [];	// list of (timestamp, action) tupels
/**
 * turn ticker interval on / off
 * @param onoff
 */
function tickStatus(onoff, resolution) {
	if(tickinterval != undefined) {
		window.clearInterval(tickinterval);	
	}
	if (resolution == undefined) resolution = 5;
	if(onoff) {
		tickinterval = window.setInterval(precisionTick, resolution);
	} 
}
/**
 * schedule an action
 * @param what
 * @param when
 */
function precision_timeout(what, when) {
	var ntime = window.performance.now();
	var do_when = ntime + when;
	// console.log("at " + ntime + ", set to ", do_when);
	things_to_do.push([do_when, what]);
}
/**
 * the ticker function
 */
function precisionTick() {
	var curt = window.performance.now();
	for ( i in things_to_do) {
		var item = things_to_do[i];
		if (curt > item[0]) {
			things_to_do.splice(i,1);
			item[1]();
		}
	}
}

//turn on tick
tickStatus(true);

//----------------------------------------------------------


/**
 * @param soundbank array an array of samples, indexed
 * @param note_data object containing note data , esp. charIndex
 * @param player BufferPlayer the player object
 */
var _voice_index = 0;
var number_of_voices = 2;	// for each voice, a player must be defined 
							// in the "players" list (see initPlayer() )
function playSample(soundbank, note_data, player) {
	
//	// use the player passed in 
//	var _internal_player = player;
	
	// use player from global players array (polyphonic)
	var _internal_player = players[_voice_index];
	
    // stop player
    _internal_player.playing  = false;

    var sb = note_data.soundbank;
    // check if soundbuffer ok
    if (note_data.charIndex === undefined || soundbank[sb][note_data.charIndex] === undefined) {
        console.log("no sample/buffer set for " + note_data.charIndex);
        return;
    }

    // set buffer + rewind
    _internal_player.buffer   = soundbank[sb][note_data.charIndex];
    _internal_player.position = 0;
    _internal_player.playbackRate.setValue(1.0);

    //
    // possible additional params :
    //
    //      _internal_player.position = some_offset;  // absolute offset
    //      _internal_player.position = _internal_player.buffer.length * 0.5;   // offset relative to sample length
    //      _internal_player.playbackRate.setValue(0.8);  // playback rate (~ pitch)
    //

    if ( ! isNaN(note_data.playbackrate) ) {
        _internal_player.playbackRate.setValue(note_data.playbackrate);
    }
    if ( ! isNaN(note_data.offset) ) {
        _internal_player.position = _internal_player.buffer.length * note_data.offset;
    }
    
    var playbacktime = ((1/_internal_player.playbackRate.getValue()) *
        (_internal_player.buffer.length - _internal_player.position))
        / alet.output.device.sampleRate;

    if ( ! isNaN(note_data.length)) {
        playbacktime = playbacktime * note_data.length;
    }
    note_data.playbacktime = playbacktime;

    // retrigger play !
    _internal_player.playing  = true;
    
    // set voice index
    _voice_index = (_voice_index + 1) % number_of_voices;
    
}

function stopPlayer() {
    _sequence_index = -1;
    $(window).trigger('phont_stop_player');
}

/**
 * starts to play sequence
 * @param sounds
 * @param sequence
 */
function playSequence(sounds, sequence) {
    console.log("begin play sequence");
    //console.log(sequence);
    $(window).trigger('phont_start_player');
    _sequence_index = 0;
    _continueSequence(sounds, sequence);
}

/**
 * play sound or silence, increase tick, setTimeout to call again
 * @param sounds
 * @param mySequence
 */
function _continueSequence(sounds, mySequence) {
    // console.log("playing " + mySequence[_sequence_index] + " at " + _sequence_index);

    if (_sequence_index < 0) {
        return;   // signal to stop
    }
    if (mySequence === undefined || _sequence_index > mySequence.length - 1) {
        $(window).trigger('phont_stop_player');
        return;  // sequence finished
    }

    var note_data = mySequence[_sequence_index];

    if ( note_data && note_data.charIndex > 0) {
        playSample(sounds, note_data, player);
    }

    //// set length from note data or use default length ("phont_tick")
    //var note_length = note_data.length !== undefined && note_data.length>0 ? note_data.length : phont_tick;
    //var current_tick = phont_tick;
    var current_tick = note_data.playbacktime * 1000 + pause_after_note;
    _sequence_index++;
    
    precision_timeout(function() {
        _continueSequence(sounds, mySequence);
    }, current_tick);
    
//    setTimeout(function () {
//        _continueSequence(sounds, mySequence);
//    }, current_tick);
}

/**
 * generate mappings for id-to-sound and id-to-unicodeString
 * @param initObject
 */
var players;
function initPlayer(initObject) {
    var alet, player, sb, i1, i2;
    alet = new Audiolet();
    var sound_map = [];
    var repr_map = [];
    for (i1 in initObject) {
        sb = initObject[i1];
        repr_map[sb.name] = [];
        sound_map[sb.name] = [];
        for (i2 in sb.sounds) {
            var buf = new AudioletBuffer(1,0);
            var phon = sb.sounds[i2];
            buf.load(phon.sound);
            sound_map[sb.name][phon.id] = buf;

            //sound_map[initObject.phonemes_list[i].id] = new Audio(initObject.phonemes_list[i].sound);

            repr_map[sb.name][phon.id] = phon.char;
        }

    }

    player = new BufferPlayer(alet, sound_map.female[1],1.0, 0, 0);
    player.playing = false;
    player.connect(alet.output);
    
    // set up more players (polyphony)
    player2 = new BufferPlayer(alet, sound_map.female[1], 1.0, 0, 0);
    player2.playing = false;
    player2.connect(alet.output);
    players = [player, player2];
    
    return [sound_map, repr_map, player, alet];
}

/**
 * transform phonetical string into sequence of ids
 * @param strsequ
 * @returns Array[{obj}]
 */
function getSequenceFromString(strsequ, mapping) {
    // console.log(strsequ);
    var mapped_id, i;
    var rich_sequence = [];
    for (i=0; i<strsequ.length; i++) {
        if (strsequ[i] === ':') {
            continue;    // ignore ':'
        }
        if (strsequ[i] === ' ') {
            rich_sequence.push({charIndex:0}); // space -> 0
        }
        if ((mapped_id = mapping.indexOf(strsequ[i])) > 0) {
            rich_sequence.push({charIndex:mapped_id});
        }
    }
    return rich_sequence;
}


//----------------------------------------------------------------------------
//
//  recording hacks
//


//// how to record :
//
//recordStart();
////  (... play some phonts ....)
//recordStop();
//var datauri = exportWav(globalRecBuf);
//
//// test the sound
//var audio = new Audio(datauri);
//audio.play();

var globalRecBuf = [];
/**
 * wrapper for audiosink begin recording
 * depents on player-node beeing global
 * uses global globalRecBuf for writing
 * patches the recordings' add() method, add writes everything into the
 * global buffer
 *
 * @returns
 */
function recordStart() {
    globalRecBuf = [];  // reset global buffer
    player.audiolet.output.device.sink.altRecord = function() {
        var rec = this.record();
        rec.add = function(buffer) {
       		debugBuffer(buffer);
       		console.log("number of buffers " + this.buffers.length);
       		for ( var i in this.buffers) {
       			console.log("\told buffer examination ... ")
       			debugBuffer(this.buffers[i]);
       		}
       		slowAddbuffer(buffer);
       		this.buffers.push(buffer);
        }

        return rec;
    }
    recorder = player.audiolet.output.device.sink.altRecord();
    // recorder = player.audiolet.output.device.sink.record();
    return recorder;
}

/**
 * wrapper for audiosink record stop
 * @returns
 */
var finalRec;
function recordStop() {
	finalRec = recorder.join();
    return recorder.stop();
}

/**
 * circumvent push(buffer) / Float32Array strange behavior
 * every element in buffer is simply pushed into one big Array, globalRecBuf
 * @param buffer
 */
function slowAddbuffer(buffer) {
    var l=buffer.length;
    for (var i=0; i<l;i++) {
        globalRecBuf.push(buffer[i]);
    }
}

/**
 * use WavEncoder ( https://github.com/fritzo/wavencoderjs )
 * to encode buffer
 *
 * @param buf float Array
 * @returns
 */
function exportWav(buf) {
    WavEncoder.defaults.bytesPerSample=2;
    WavEncoder.defaults.sampleRateHz=44000;
    WavEncoder.defaults.numChannels=2;
    var datauri = WavEncoder.encode(buf);
    return datauri;
}

/**
 * record for 1 second , then stop
 */
function autorecord() {
    recordStart();
    setTimeout(function() {recordStop();}, 1000);
}

/**
 * help in debugging buf contents
 * @param buf
 */
function debugBuffer(buf) {
    var nonzer = 0, l=buf.length;
    for (var i=0; i<l;i++) {
        if(buf[i]!=0) {
            nonzer+=1;
            //console.log(buf[i]);
        }
    }
    console.log("contains " + nonzer + " nonzero elements ");
}
// ----------------------------------------------------------------------------


/**
 * transform phoneme list / -sheet into sequence of ids
 * @param parent element that contains the notes in donm representations
 * @param mapping character-mapping, as returned by initPlayer
 * @returns Array[{obj}]
 */
function getSequenceFromGui(parent, mapping) {
    var rich_sequence = [];
    $(".phonem",$(parent)).each(function(ind,obj) {
        rich_sequence.push(mapDomToNote(obj, mapping));
    });
    // console.log(rich_sequence);
    return rich_sequence;
}

/**
 * map a gui element representing a note to internal note-representation
 * @param el
 * @param mapping
 * @returns {___anonymous5556_5928}
 */
function mapDomToNote(el, mapping) {
    el = $(el);
    var myChar = $(".char", el).first().text();
    var sb = el.data('soundbank');
    if ((mapped_id = mapping[sb].indexOf(myChar)) > 0) {
        var note_data = {
                charIndex       : mapped_id,
                character       : myChar,
                soundbank       : sb,
                playbackrate    : parseInt($("#playbackrate", el).val(), 10) / 50,
                //volume            : parseInt($("#volume", el).val()) / 100,
                offset          : parseInt($("#offset", el).val(), 10) / 100,
                length          : parseInt($("#length", el).val(), 10) / 100,
        };
        // console.log(note_data);
        return note_data;
    }
}

function setSequenceToGui(parent, seq) {

    var template = $('.phonem.template'),
        phon;
    for ( var i in seq) {
        phon = mapNoteToDom(seq[i], template);
        $(parent).append(phon);
    }
}

function mapNoteToDom(note, template) {

    // clone template
    var phon = $(template).clone();
    phon.removeClass('template');

    // set character and filter parameters
    phon.find('.char').html(note.character);
    $("#playbackrate", $(phon)).val(note.playbackrate * 50);
    $("#offset", $(phon)).val(note.offset * 100);
    $("#length", $(phon)).val(note.length * 100);

    // knobify + return
    rebind_knob(phon.find('.filter.knob'));
    return phon;
}

//
// load demo text
//
$(document).ready(function() {
    // save the sequence :
    // var save_str = JSON.stringify(getSequenceFromGui($("#write"), characters));

    // load a sequence
    // var seq = '[{"charIndex":22,"character":"w","playbackrate":1,"offset":0.13,"length":0.72},{"charIndex":14,"character":"e","playbackrate":0.92,"offset":0.2,"length":0.66},{"charIndex":35,"character":"l","playbackrate":1,"offset":0.16,"length":0.52},{"charIndex":11,"character":"ç","playbackrate":1,"offset":0.05,"length":0.36},{"charIndex":27,"character":"ɑ","playbackrate":1,"offset":0,"length":0.68},{"charIndex":21,"character":"m","playbackrate":1,"offset":0,"length":1},{"charIndex":48,"character":" ","playbackrate":1,"offset":0,"length":1},{"charIndex":36,"character":"t","playbackrate":1,"offset":0,"length":1},{"charIndex":2,"character":"aʊ̯","playbackrate":1,"offset":0.32,"length":1},{"charIndex":48,"character":" ","playbackrate":1,"offset":0,"length":1},{"charIndex":37,"character":"f","playbackrate":1,"offset":0.13,"length":0.51},{"charIndex":29,"character":"o","playbackrate":1,"offset":0,"length":0.59},{"charIndex":43,"character":"n","playbackrate":1,"offset":0.14,"length":0.43},{"charIndex":36,"character":"t","playbackrate":1,"offset":0,"length":1}]';
    var seq = '[{"charIndex":22,"character":"w","playbackrate":1,"offset":0.13,"length":0.72}]';
    setSequenceToGui($("#write"), JSON.parse(seq));
});


//function NoteData(init, initMap) {
//  this.charIndex=0;
//  this.length=;
//  this.sample_rate = 1.0;
//  this.offset=0.0;
//
//  this.setAll = function(mapdata) {
//      // do mapping from data
//      // (default mapping)
//  };
//
//  if (initMap != undefined) {
//      // possibility to pass in mapper
//      this.setAll = initMap;
//  }
//
//  // call mapper on init data
//  this.setAll(init);
//}
