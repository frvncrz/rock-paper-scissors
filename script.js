// |||*************************|||
// |||  Rock, Paper, Scissors  |||
// |||*************************|||

// Thise space is for code used from The Odin Project.



























// below is my personal code used with github copilot.

// showing results
// document.getElementById("resetButton").addEventListener("click", () => {
//   const humanChoice = getHumanChoice();
//   const computerChoice = getComputerChoice();
//   const result = playRound(humanChoice, computerChoice);
//   document.getElementById(
//     "result"
//   ).innerText = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`;
// });

// bot player choice
// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   switch (randomNumber) {
//     case 0:
//       return "rock";
//     case 1:
//       return "paper";
//     case 2:
//       return "scissors";
//     default:
//       return "🛑error🛑";
//   }
// };

// Player 1 choice
// const getHumanChoice = () => {
//   const userChoice = prompt("Choose 🪨, 📃, or ✂️:").toLowerCase();
//   if (
//     userChoice === "rock" ||
//     userChoice === "paper" ||
//     userChoice === "scissors"
//   ) {
//     return userChoice;
//   } else {
//     alert("Invalid input! Please choose rock, paper, or scissors.");
//     return getHumanChoice();
//   }
// };

// Players Score Tracking
// const humanScore = 0;
// const computerScore = 0;

// const playRound = (humanChoice, computerChoice) => {
//   switch (humanChoice) {
//     case "rock":
//       switch (computerChoice) {
//         case "paper":
//           return "Computer wins! 🏆";
//         case "scissors":
//           return "You win! 🏆";
//         default:
//           return "It's a tie!";
//       }
//     case "paper":
//       switch (computerChoice) {
//         case "scissors":
//           return "Computer wins! 🏆";
//         case "rock":
//           return "You win! 🏆";
//         default:
//           return "It's a tie!";
//       }
//     case "scissors":
//       switch (computerChoice) {
//         case "rock":
//           return "Computer wins! 🏆";
//         case "paper":
//           return "You win! 🏆";
//         default:
//           return "It's a tie!";
//       }
//     default:
//       return "Invalid choice, Try Again!";
//   }
// };
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

// logic to play entire game
// const playGame = () => {
//   for (let i = 0; i < 5; i++) {
//     const humanChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     console.log(playRound(humanChoice, computerChoice));
//   }
// };

// event listener for the Play Again button
// document.getElementById("resetButton").addEventListener("click", () => {
//   const humanChoice = getHumanChoice();
//   console.log(humanChoice);
// });
// console.log(getComputerChoice());
// console.log(getHumanChoice());
// console.log(playRound());
