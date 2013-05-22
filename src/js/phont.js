

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
function playSample(soundbank, index) {
	soundbank[index].currentTime = 0;
	soundbank[index].play();
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
