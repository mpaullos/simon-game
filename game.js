$("h1");
var gamePattern = [];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber;
}

buttonCollors = ["red", "green", "blue", "yellow"];
randomChosenColour = buttonCollors[nextSequence()];

gamePattern.push(randomChosenColour);


