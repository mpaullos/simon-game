$("h1");
var gamePattern = [];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var buttonCollors = ["red", "green", "blue", "yellow"];
var randomChosenColour = buttonCollors[nextSequence()];

gamePattern.push(randomChosenColour);
console.log(randomChosenColour)


$("#" + randomChosenColour).fadeOut(100).fadeIn(100);
