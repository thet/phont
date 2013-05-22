$(window).keydown(function(event) {
  event.preventDefault();
  if (event.which===16) {
    playSequence(sounds, getSequenceFromString($("#container textarea").text(), characters));
  } else if (event.which===225) {
      stopPlayer();
  } else {
      var button = $("ul").find("li[data-keycode='" + event.which + "']");
      if (button.length>0) {
        button.click();
      }
  }
});
$('ul li').click(function(event) {
  playSample(sounds, getSequenceFromString($(this).text(), characters)[0]);
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
