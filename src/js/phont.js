// test if ogg can be player
// (new Audio()).canPlayType("audio/ogg; codecs=vorbis")
// from : http://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5

/** timeout ticker */
var phont_tick = 400;

/** indicates play position */
var _sequence_index;



// var lobject = { charIndex: 0, offset:0, length:1.0 , smprate:1.0 }

/**
 * @param soundbank array an array of samples, indexed
 * @param note_data object containing note data , esp. charIndex
 * @param player BufferPlayer the player object
 */
function playSample(soundbank, note_data, player) {

    // stop player
    player.playing  = false;
    
    // check if soundbuffer ok
    if (note_data.charIndex === undefined || soundbank[note_data.charIndex] === undefined) {
        console.log("no sample/buffer set for " + note_data.charIndex);
        return;
    }

    // set buffer + rewind
    player.buffer   = soundbank[note_data.charIndex];
    player.position = 0;
    player.playbackRate.setValue(1.0);
    
    //
    // possible additional params :
    //
    //      player.position = some_offset;  // absolute offset
    //      player.position = player.buffer.length * 0.5;   // offset relative to sample length
    //      player.playbackRate.setValue(0.8);  // playback rate (~ pitch)
    //
    
    if ( ! isNaN(note_data.playbackrate) ) {
        player.playbackRate.setValue(note_data.playbackrate);
    }
    if ( ! isNaN(note_data.offset) ) {
        player.position = player.buffer.length * note_data.offset;
    }

    var playbacktime = ((1/player.playbackRate.getValue()) * 
        (player.buffer.length - player.position))
        / alet.output.device.sampleRate;
    
    if ( ! isNaN(note_data.length)) {
        playbacktime = playbacktime * note_data.length; 
    }
    note_data.playbacktime = playbacktime;
    
    // retrigger play !
    player.playing  = true;

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
    //console.log("begin play sequence");
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
    var current_tick = note_data.playbacktime * 1000;
    
    _sequence_index++;
    setTimeout(function () {
        _continueSequence(sounds, mySequence);
    }, current_tick);
}

/**
 * generate mappings for id-to-sound and id-to-unicodeString
 * @param initObject
 */
function initPlayer(initObject) {

    var alet, player, i;
    alet = new Audiolet();

    var sound_map = [];
    var repr_map = [];
    for (i in initObject.phonemes_list) {
        var buf = new AudioletBuffer(1,0);
        buf.load(initObject.phonemes_list[i].sound);
        sound_map[initObject.phonemes_list[i].id] = buf;

        //sound_map[initObject.phonemes_list[i].id] = new Audio(initObject.phonemes_list[i].sound);

        repr_map[initObject.phonemes_list[i].id] = initObject.phonemes_list[i].char;
    }

    player = new BufferPlayer(alet,
        sound_map[1],
        0.8,  // sample rate
        0,  // start pos
        0   // loop ?
    );

    player.playing = false;
    player.connect(alet.output);
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

function getSequenceFromGui(parent, mapping) {
    var rich_sequence = [];
    $(".phonem",$(parent)).each(function(ind,obj) {
        rich_sequence.push(mapDomToNote(obj, mapping));
    });
    // console.log(rich_sequence);
    return rich_sequence;
}

function mapDomToNote(el, mapping) {
    el = $(el);
    var myChar = $(".char", el).first().text();

    if ((mapped_id = mapping.indexOf(myChar)) > 0) {
        var note_data = {
                charIndex       : mapped_id,
                playbackrate    : parseInt($("#playbackrate", el).val(), 10) / 50,
                //volume            : parseInt($("#volume", el).val()) / 100,
                offset          : parseInt($("#offset", el).val(), 10) / 100,
                length          : parseInt($("#length", el).val(), 10) / 100,
        };
        console.log(note_data);
        return note_data;
    }
}

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
