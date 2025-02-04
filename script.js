// |||*************************|||
// |||  Rock, Paper, Scissors  |||
// |||*************************|||

// bot player choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Player 1 choice & button eventListeners for rock, paper, scissors
let humanChoice = "";
const resultDiv = document.getElementById("result");
const humanScoreDiv = document.getElementById("humanScore");
const computerScoreDiv = document.getElementById("computerScore");
const winnerDiv = document.getElementById("winner");

document.getElementById("rock").addEventListener("click", () => {
  humanChoice = "rock";
  resultDiv.textContent = playRound(humanChoice, getComputerChoice());
});
document.getElementById("paper").addEventListener("click", () => {
  humanChoice = "paper";
  resultDiv.textContent = playRound(humanChoice, getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
  humanChoice = "scissors";
  resultDiv.textContent = playRound(humanChoice, getComputerChoice());
});

// Players Score Tracking
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const updateScores = () => {
  humanScoreDiv.textContent = `Player Score: ${humanScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
};

const checkWinner = () => {
  if (roundCount >= 5) {
    if (humanScore > computerScore) {
      winnerDiv.textContent = "Player wins the game! 🏆";
    } else if (humanScore < computerScore) {
      winnerDiv.textContent = "Computer wins the game! 🏆";
    } else {
      winnerDiv.textContent = "It's a tie!";
    }
  }
};

// Game round logic
const playRound = (humanChoice, computerChoice) => {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Player wins this round!";
    humanScore++;
  } else {
    result = "Computer wins this round!";
    computerScore++;
  }
  roundCount++;
  updateScores();
  checkWinner();
  return result;
};
