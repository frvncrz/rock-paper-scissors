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
  let choice = prompt("Choose rock, paper, or scissors:");
  choice = choice.toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Not a valid choice, Try Again!");
    return getHumanChoice();
  }
};

// Players Score Tracking
const humanScore = 0;
const computerScore = 0;

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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// button eventListeners for rock, paper, scissors
document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getHumanChoice());
});

onsole.log(playRound(getHumanChoice, getComputerChoice));

// logic to play 5 rounds
// const playGame = () => {
//   for (let i = 0; i < 5; i++) {
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     console.log(playRound(humanChoice, computerChoice));
//   }
// };

