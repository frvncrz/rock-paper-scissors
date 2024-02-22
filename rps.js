function getComputerChoice() {
  // Generates a random number between 0 and 2
  const randomNUmber = Math.floor(Math.random() * 3);
  // Assining each number to a string 0 = Rock 1 = Paper 2 = Scissors
  switch (randomNUmber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      // Incase input is invalid
      return "Invalid random number generated";
  }
}

// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            return "You Win!";
        } else {
            return "Computer Wins!";
        }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function playGame() {
    
}