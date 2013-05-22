
$(window).keydown(function(event) {
  var button = $("ul").find("li[data-keycode='" + event.which + "']");
  if (button.length>0) {
    button.click();
  }
});



// event.type must be keypress
/*
function getChar(event) {
    if (event.which == null) {
        return String.fromCharCode(event.keyCode) // IE
    } else if (event.which!=0 && event.charCode!=0) {
        return String.fromCharCode(event.which)   // the rest
    } else {
        return null // special key
    }
}

window.onkeypress = function(event) {
    var char = getChar(event || window.event)
    if (!char) return // special key
    this.value = char.toUpperCase()
    return false
}
*/

/** "soundbank" - id to audio */
var sounds = Array(
        undefined,
        new Audio("data/testsound1.wav"),
        new Audio("data/testsound2.wav"),
        new Audio("data/testsound3.wav"),
        new Audio("data/testsound4.wav"),
        new Audio("data/testsound5.wav"),
        new Audio("data/testsound6.wav"),
        new Audio("data/testsound7.wav")

);

var mySequence = Array(1,0,2,0,3,0,4,0,5,0,6,0,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);


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
 e @param sounds
 * @param sequence
 */
function beginSequence(sounds, sequence) {
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
