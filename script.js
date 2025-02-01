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

// Player 1 choice
const getHumanChoice = () => {
  const userChoice = prompt("Choose 🪨, 📃, or ✂️:").toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    alert("Invalid input! Please choose rock, paper, or scissors.");
    return getHumanChoice();
  }
};

// Players Score Tracking
const humanScore = 0;
const computerScore = 0;

const playRound = (humanChoice, computerChoice) => {

}


console.log(getComputerChoice());
console.log(getHumanChoice());
