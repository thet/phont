// test if ogg can be player
// (new Audio()).canPlayType("audio/ogg; codecs=vorbis")
// from : http://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5

/** timeout ticker */
var phont_tick = 400;

/** indicates play position */
var _sequence_index;



// var lobject = { charIndex: 0, offset:0, length:1.0 , smprate:1.0 }

/**
 * plays sample "index" of soundbank "soundbank"
 * pass in the player and optionally modifiers (samplerate, offset etc)
 * @param soundbank array an array of samples, indexed
 * @param index int what sample index
 * @param player BufferPlayer the player object
 * @param modifiers object of modifiers
 */
function playSample(soundbank, index, player, modifiers) {

    // stop player
    player.playing  = false;

    // check if soundbuffer ok
    if (soundbank[index] == undefined) {
        console.log("no sample/buffer set for " + index);
        return;
    }

    // set buffer + rewind
    player.buffer   = soundbank[index];
    player.position = 0;

    //
    // possible additional params :
    //
    //      player.position = some_offset;  // absolute offset
    //      player.position = player.buffer.length * 0.5;   // offset relative to sample length
    //      player.playbackRate.setValue(0.8);  // playback rate (~ pitch)
    //

    // retrigger play !
    player.playing  = true;

}


function stopPlayer() {
    _sequence_index = -1;
}

/**
 * starts to play sequence
 * @param sounds
 * @param sequence
 */
function playSequence(sounds, sequence) {
	console.log("begin play sequence");
	console.log(sequence); 
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

    if (_sequence_index < 0) return;   // signal to stop
    if (_sequence_index > mySequence.length-1) return;  // sequence finished
    
    var note_data = mySequence[_sequence_index];
    
    if ( note_data.charIndex > 0) {
        playSample(sounds, note_data.charIndex, player, note_data);
    }
    
    _sequence_index++;
    setTimeout(function() { _continueSequence(sounds, mySequence)}, phont_tick);
}

/**
 * generate mappings for id-to-sound and id-to-unicodeString
 * @param initObject
 */
function initPlayer(initObject) {

    var alet, player;
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
    
	var intsequ = [];
	var mapped_id;
	var rich_sequence = [];
    
    for ( var i=0; i<strsequ.length; i++) {
        if (strsequ[i] == ':') continue;    // ignore ':'
        if (strsequ[i] == ' ') intsequ.push({charIndex:0}); // space -> 0

        if ((mapped_id = mapping.indexOf(strsequ[i])) > 0) {
            intsequ.push({charIndex:mapped_id});
        }
    }
    return intsequ;
}
