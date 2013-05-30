///** timeout ticker */
//var phont_tick = 100;

/** indicates play position */
var _sequence_index;


var global_settings = new SoundSettings();

/**
 * object that bundles sound settings
 */
function SoundSettings(tick, rate, offset) {
	this.tick 	= tick || 128;
	this.rate 	= rate || 0.75;
	this.offset = offset || 0;
}

/** object that functions as a lookup for control-codes to methods */
var control_funcs = {
	PUP: function(settings) { settings.rate += settings.rate<0.9?0.1:0;},
	PDN: function(settings) { settings.rate -= settings.rate>0.1?0.1:0;},
	TUP: function(settings) { settings.tick *= settings.tick<2000?2:1;},
	TDN: function(settings) { settings.tick /= settings.tick>16?2:1;},
}

/** mapping from character to control code */
var control_mappings = {
	'#':'PUP',
	'.':'PDN',
	'+':'TUP',
	'-':'TDN',
}

/** 
 * plays sample "index" of soundbank "soundbank"
 * @param soundbank an array of AudioletBuffer
 * @param index which AudioletBuffer to play from the array 
 * @param player BufferPlayer instance to play the buffer
 * @param settings optional SoundSettings object
 */
function playSample(soundbank, index, player, settings) {

	// stop player
	player.playing	= false;
	
	console.log("play " + index);
	
	// check if soundbuffer ok
	if (soundbank[index] == undefined) {
		console.log("no sample/buffer set for index " + index);
		return;
	}
	
	// set buffer + rewind
	player.buffer 	= soundbank[index];
	player.position = 0;
	
	//
	// possible additional params :
	//
	//		player.position = some_offset;	// absolute offset
	//		player.position = player.buffer.length * 0.5;	// offset relative to sample length
	//		player.playbackRate.setValue(0.8);	// playback rate (~ pitch)
	//
	
	// if settings are passed in, use these 
	if ( settings ) {
		player.playbackRate.setValue(settings.rate);
		player.position = player.buffer.length * settings.offset;
	}
	
	// retrigger play !
	player.playing 	= true;
}	

/**
 * tells _continueSequence() to stop on next tick
 */
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
	global_settings = new SoundSettings();
	_continueSequence(sounds, sequence);   	
}

/**
 * play sound or silence, increase tick, setTimeout to call again
 * @param sounds
 * @param mySequence
 */
function _continueSequence(sounds, mySequence) {
	//console.log("playing " + mySequence[_sequence_index] + " at " + _sequence_index);
	
	if (	_sequence_index < 0   						// signaled to stop
		|| 	_sequence_index > mySequence.length-1) {	// sequence finished
		resetSequenceState();
		return;  
	}
	
	if ( mySequence[_sequence_index] > 0) {
	 playSample(sounds, mySequence[_sequence_index], player);
	}
	
	_sequence_index++;
	setTimeout(function() { _continueSequence(sounds, mySequence)}, global_settings.tick);
	
	//console.log('next tick in ' + global_settings.tick);
}

function resetSequenceState() {
	global_settings = new SoundSettings();
}

/**
 * generate mappings for id-to-sound and id-to-unicodeString
 * initialise audiolet and player-node
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
