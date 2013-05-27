// test if ogg can be player
// (new Audio()).canPlayType("audio/ogg; codecs=vorbis")
// from : http://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5

/** timeout ticker */
var phont_tick = 100;

/** indicates play position */
var _sequence_index;

/** 
 * plays sample "index" of soundbank "soundbank"
 */
function playSample(soundbank, index, player) {
	//soundbank[index].currentTime = 0;
	//soundbank[index].play();
	
	// create a new player (?)
	player = new BufferPlayer(alet, 
			soundbank[index],
			0.8,  // sample rate 
			0,  // start pos
			0   // loop ? 
    );

	// connect plays the sound 
	player.connect(alet.output);

	// .. means we dont even need the faulty TriggerControler
//  rt = new TriggerControl(alet);
//	rt.connect(player, 0, 1);
	
	// .. neither to set buffer on the player
	//	player.buffer = soundbank[index];
	// player.connect(alet.output);

	
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
	_sequence_index = 0;
	_continueSequence(sounds, sequence);    	
}

/**
 * play sound or silence, increase tick, setTimeout to call again
 * @param sounds
 * @param mySequence
 */
function _continueSequence(sounds, mySequence) {
	//console.log("playing " + mySequence[_sequence_index] + " at " + _sequence_index);
	
	if (_sequence_index < 0) return;   // signal to stop 
	if (_sequence_index > mySequence.length-1) return;  // sequence finished
	if ( mySequence[_sequence_index] > 0) {
	 playSample(sounds, mySequence[_sequence_index]);
	}
	_sequence_index++;
	setTimeout(function() { _continueSequence(sounds, mySequence)}, phont_tick);
}

/**
 * generate mappings for id-to-sound and id-to-unicodeString
 * @param initObject
 */
function initPlayer(initObject) {

    var alet, player, rt;
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
	
//    rt = new TriggerControl(alet);
//	rt.connect(player, 0, 1);
	
	player.connect(alet.output);
	return [sound_map, repr_map, player, alet];
}

/**
 * transform phonetical string into sequence of ids
 * @param strsequ
 * @returns Array[int]
 */
function getSequenceFromString(strsequ, mapping) {
	var intsequ = [];
	var mapped_id;
	for ( var i=0; i<strsequ.length; i++) {
		if (strsequ[i] == ':') continue;	// ignore ':'
		if (strsequ[i] == ' ') intsequ.push(0); // space -> 0
		
		if ((mapped_id = mapping.indexOf(strsequ[i])) > 0) {
			intsequ.push(mapped_id);
		}
	}
	return intsequ;
}
