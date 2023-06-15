let noOfRound = +prompt("No of Rounds");
let round = 0;
document.getElementById("noRounds").textContent = round;

let playerScore = 0;
let computerScore = 0;
document.getElementById("playerS").textContent = playerScore;
document.getElementById("computerS").textContent = computerScore;

function playerOptionSelection(option) {
  func: 
  if (round == noOfRound) {
    break func;
  } 
  else if (option == "✊") {
    document.getElementById("forPlayer").textContent = option;
    let ce = computerSelection();
    if (ce == "✊") {
      playerScore = playerScore + 0;
      computerScore = computerScore + 0;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    } else if (ce == "✋") {
      playerScore = playerScore + 0;
      computerScore = computerScore + 1;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    } else if (ce == "✌") {
      playerScore = playerScore + 1;
      computerScore = computerScore + 0;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    }
    round = round + 1;
    document.getElementById("noRounds").textContent = round;
    if(round == noOfRound){
        if (playerScore > computerScore) {
            document.getElementById("winnerShow").textContent = "YOU WON!";
      } else if (playerScore == computerScore) {
            document.getElementById("winnerShow").textContent = "TIE";
      } else {
            document.getElementById("winnerShow").textContent = "COMPUTER WON!";
      }
    }
  } 
  else if (option == "✋") {
    document.getElementById("forPlayer").textContent = option;
    let ce = computerSelection();
    if (ce == "✋") {
      playerScore = playerScore + 0;
      computerScore = computerScore + 0;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    } else if (ce == "✌") {
      playerScore = playerScore + 0;
      computerScore = computerScore + 1;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    } else if (ce == "✊") {
      playerScore = playerScore + 1;
      computerScore = computerScore + 0;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    }
    round = round + 1;
    document.getElementById("noRounds").textContent = round;
    if(round == noOfRound){
        if (playerScore > computerScore) {
            document.getElementById("winnerShow").textContent = "YOU WON!";
      } else if (playerScore == computerScore) {
            document.getElementById("winnerShow").textContent = "TIE";
      } else {
            document.getElementById("winnerShow").textContent = "COMPUTER WON!";
      }
    }
  } 
  else if (option == "✌") {
    document.getElementById("forPlayer").textContent = option;
    let ce = computerSelection();
    if (ce == "✌") {
      playerScore = playerScore + 0;
      computerScore = computerScore + 0;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    } else if (ce == "✊") {
      playerScore = playerScore + 0;
      computerScore = computerScore + 1;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    } else if (ce == "✋") {
      playerScore = playerScore + 1;
      computerScore = computerScore + 0;
      document.getElementById("playerS").textContent = playerScore;
      document.getElementById("computerS").textContent = computerScore;
    }
    round = round + 1;
    document.getElementById("noRounds").textContent = round;
    if(round == noOfRound){
        if (playerScore > computerScore) {
            document.getElementById("winnerShow").textContent = "YOU WON!";
      } else if (playerScore == computerScore) {
            document.getElementById("winnerShow").textContent = "TIE";
      } else {
            document.getElementById("winnerShow").textContent = "COMPUTER WON!";
      }
    }
  }
}

const emojis = ["✊", "✋", "✌"];

function computerSelection() {
  let compEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("forComputer").textContent = compEmoji;
  return compEmoji;
}