let defRound = 20; // Default Round

let rounds = document.querySelectorAll(".rounds"); // Text
let guess = Number(document.querySelector(".guess").value); // Guess Value
const guessNumber = Number(document.querySelector(".guess-number"));

let highscore = document.querySelector(".highscore");
let score = document.querySelector(".score");
let message = document.querySelector(".message");

const roundVal = document.querySelector(".round"); // Round Input

// Buttons
const changeRndBtn = document.querySelector(".change-rnd-btn");
const check = document.querySelector(".check"); // Check Button
const again = document.querySelector(".again");
const reset = document.querySelector(".reset");

let gameScore = 20;
let gameHighscore = 0;

let body = document.querySelector("body");

function DefRound(numRound) {
  const rndNumber = Math.trunc(Math.random() * numRound) + 1;
  return rndNumber;
}

function Rounds(textRound) {
  return rounds.forEach((round) => {
    round.textContent = textRound;
  });
}

function Score(textScore) {
  return (score.textContent = textScore);
}

function Highscore(textHighscore) {
  return (highscore.textContent = textHighscore);
}

function displayMessage(textMessage) {
  return (message.textContent = textMessage);
}

let rndNumber = DefRound(defRound); // Default Round;
Rounds(defRound); // Defaultt Round Text;

check.addEventListener("click", function () {
  console.log(rndNumber); // Debug
  guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No guess!");
  } else if (guess === rndNumber) {
    displayMessage("Correct!");
    body.style.backgroundColor = "#88D66C";

    if (gameScore > gameHighscore) {
      gameHighscore = gameScore;
      Highscore(gameHighscore);
    }
  } else if (guess !== rndNumber) {
    if (gameScore > 1) {
      displayMessage(guess > rndNumber ? "Too High!" : "Too Low!");
      gameScore--;
      Score(gameScore);
    } else {
      displayMessage("You Lose!");
      Score("0");
    }
  }
});

again.addEventListener("click", function () {
  defRound = 20;
  rndNumber = DefRound(defRound);
  displayMessage("Guess the number");
  body.style.backgroundColor = "#17153B";
  document.querySelector(".guess").value = "";
});

reset.addEventListener("click", function () {
  Rounds(defRound);
  rndNumber = DefRound(defRound);
  gameScore = 20;
  gameHighscore = 0;
  Score(gameScore);
  displayMessage("Guess the number");
  body.style.backgroundColor = "#17153B";
  Highscore(gameHighscore);
  document.querySelector(".guess").value = "";
  roundVal.value = "";
});

changeRndBtn.addEventListener("click", function () {
  if (roundVal.value < 20 || roundVal.value > 100) {
    Rounds(defRound);
    rndNumber = DefRound(defRound);
    roundVal.value = "";
  } else {
    Rounds(roundVal.value);
    rndNumber = DefRound(roundVal.value);
    roundVal.value = "";
  }
});
