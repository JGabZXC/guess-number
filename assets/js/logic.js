let defRound = 20;

let scoreX = 20;
let highScore = 0;

let highscore = document.querySelector(".highscore");

let rounds = document.querySelectorAll(".rounds");
rounds.forEach((round) => {
  round.textContent = defRound;
});

let rndNumber = Math.trunc(Math.random() * defRound) + 1; // Random Number

const changeRndBtn = document.querySelector(".change-rnd-btn");

changeRndBtn.addEventListener("click", function () {
  const roundVal = document.querySelector(".round").value;
  rndNumber = Math.trunc(Math.random() * roundVal) + 1;
  if (roundVal < 20 || roundVal > 100) {
    rndNumber = Math.trunc(Math.random() * defRound) + 1;
    rounds.forEach((round) => {
      round.textContent = defRound;
    });
  } else {
    rounds.forEach((round) => {
      round.textContent = roundVal;
    });
  }
});

const check = document.querySelector(".check");

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  const guessNumber = Number(document.querySelector(".guess-number"));
  let score = document.querySelector(".score");
  let message = document.querySelector(".message");
  if (!guess) {
    message.textContent = "No guess";
  } else if (guess === rndNumber) {
    message.textContent = "✔ Correct!";
    document.querySelector("body").style.backgroundColor = "#88D66C";
    guessNumber.textContent = rndNumber;
    scoreX++;
    score.textContent = scoreX;
    console.log(scoreX > highScore);
    if (scoreX > highScore) {
      highScore = scoreX;
      highscore.textContent = highScore;
    }
  } else if (guess !== rndNumber) {
    if (scoreX > 1) {
      if (guess >= rndNumber) {
        message.textContent = "Too high";
        scoreX--;
        score.textContent = scoreX;
      } else if (guess <= rndNumber) {
        message.textContent = "Too low";
        scoreX--;
        score.textContent = scoreX;
      }
    } else {
      message.textContent = "You lose!";
      score.textContent = 0;
    }
  }
});

const again = document.querySelector(".again");

again.addEventListener("click", function () {
  let message = document.querySelector(".message");
  rounds.forEach((round) => {
    round.textContent = defRound;
  });
  rndNumber = Math.trunc(Math.random() * defRound) + 1;
  message.textContent = "Guess the number";
  document.querySelector("body").style.backgroundColor = "#17153B";
});

const reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
  let message = document.querySelector(".message");
  let score = document.querySelector(".score");
  scoreX = 20;
  highScore = 0;
  highscore.textContent = highScore;
  score.textContent = scoreX;
  rndNumber = Math.trunc(Math.random() * defRound) + 1;
  rounds.forEach((round) => {
    round.textContent = defRound;
  });
  message.textContent = "Guess the number";
  document.querySelector("body").style.backgroundColor = "#17153B";
});
