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

function playSound() {
  var audio = new Audio("/sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

var audio = new Audio("sounds/green.mp3");
audio.play();
nextSequence();
