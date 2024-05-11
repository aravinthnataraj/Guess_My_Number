const btn_again = document.getElementById("btn_again");
const btn_check = document.getElementById("btn_check");
const userInputEl = document.getElementById("guess_check");
const guessNumberEl = document.getElementById("number");
const messageEl = document.getElementById("message");
const labelScoreEl = document.getElementById("label_score");
const labelHighScoreEl = document.getElementById("label_highscore");

let chance = 10;
let score = 0;

// get random number
const getRandomNumber = function () {
  r_number = Math.trunc(Math.random() * 100 + 1);
  document.getElementById("random_number").innerHTML = r_number;
  console.log(r_number);
  //return r_number;
};
getRandomNumber();

//btn check event
btn_check.addEventListener("click", function () {
  const userInput = Number(userInputEl.value);
  //1. validate the user input
  if (userInput > 0 && userInput <= 100) {
    if (chance > 0) {
      //2. compare the user input vs random number
      var randomNumber = document.getElementById("random_number").innerHTML;
      //console.log(randomNumber, "inside");
      if (userInput == randomNumber) {
        //change bg color
        document.body.style.backgroundColor = "green";
        //update message
        messageEl.innerText = "your are correct";
        //update the guess number
        guessNumberEl.innerText = randomNumber;
        guessNumberEl.style.fontSize = "100px";
        guessNumberEl.style.fontWeight = "bolder";
        score += 1;
        //change the highscore
        labelHighScoreEl.innerText = "Score : " + score;
      } else if (userInput > randomNumber) {
        messageEl.innerText = "your are high";
        chance = chance - 1;
        labelScoreEl.innerText = "Chance :" + chance;
      } else if (userInput < randomNumber) {
        messageEl.innerText = "you are low";
        chance -= 1;
        labelScoreEl.innerText = "Chance : " + chance;
      }
    } else {
      //change bg color
      document.body.style.backgroundColor = "red";
      //update message
      messageEl.innerText = "your lost the game";
      labelScoreEl.innerText = "Chance:" + chance;
    }
  } else {
    alert("Enter a valid number");
  }
});

function check_again() {
  //change bg color
  document.body.style.backgroundColor = "rgb(56, 55, 55)";
  //update message
  messageEl.innerText = "Start guessing...";
  guessNumberEl.innerText = "?";
  guessNumberEl.style.fontSize = "80px";
  guessNumberEl.style.fontWeight = "bolder";
  userInputEl.value = "";
  getRandomNumber();
}
