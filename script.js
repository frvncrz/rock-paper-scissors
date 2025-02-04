// |||*************************|||
// |||  Rock, Paper, Scissors  |||
// |||*************************|||

// bot player choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "🛑error🛑";
  }
};

// Player 1 choice & button eventListeners for rock, paper, scissors
let humanChoice = "";
const resultDiv = document.getElementById("result");

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
  resultDiv.textConetnt = playRound(humanChoice, getComputerChoice());
});

// Players Score Tracking
const humanScore = 0;
const computerScore = 0;

// Game round logic
const playRound = (humanChoice, computerChoice) => {
  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "paper":
          return "Computer wins! 🏆";
        case "scissors":
          return "You win! 🏆";
        default:
          return "It's a tie!";
      }
    case "paper":
      switch (computerChoice) {
        case "scissors":
          return "Computer wins! 🏆";
        case "rock":
          return "You win! 🏆";
        default:
          return "It's a tie!";
      }
    case "scissors":
      switch (computerChoice) {
        case "rock":
          return "Computer wins! 🏆";
        case "paper":
          return "You win! 🏆";
        default:
          return "It's a tie!";
      }
    default:
      return "Invalid choice, Try Again!";
  }
};