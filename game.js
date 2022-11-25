$("h1");
var buttonCollors = ["red", "green", "blue", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

/* Salvar as opções do usuário */
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});


/* Iniciar o jogo */
$("body").keypress(function (event) {
  if (event.key.toLowerCase() == "a") {
    $("#level-title").text("Level " + level);
    nextSequence();
  }
});

/* Criar de forma aleatória a proxima cor, e atribuir som e animação aos botões */
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonCollors[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(0);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}


/* tocar música especifica ao clicar em um botão */
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

/* add animação e remove */
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


/* Lógica do jogo */
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Sucess");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("#level-title").text("Parabéns, o seu recorde é " + level + "!");
  }
}
