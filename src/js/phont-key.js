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
