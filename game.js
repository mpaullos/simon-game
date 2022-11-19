$("h1");
var buttonCollors = ["red", "green", "blue", "yellow"];

var gamePattern = [];
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonCollors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(0);
}

nextSequence();
