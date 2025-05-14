function getComputerChoice() {
  const computer_choice = Math.random();
  let computer_selection = "";

  if (computer_choice <= 0.33) {
    computer_selection = "Rock";
  } else if (computer_choice <= 0.66) {
    computer_selection = "Paper";
  } else {
    computer_selection = "Scissors";
  }

  return computer_selection;
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
let maxRounds = 5;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "OMG, That's a tie!";
  }

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    return `${humanChoice} beats ${computerChoice}! You win this time!`;
  } else {
    computerScore++
    return `${humanChoice} loses to ${computerChoice}! Better luck next time!`
  }
}

const roundStart = document.createElement("div")
const scoreBoard = document.createElement("div");
const roundNumber = document.createElement("h3");
const resultMessage = document.createElement("p");
const finalScore = document.createElement("div");

roundNumber.textContent = `--- Round ${currentRound} ---`;
scoreBoard.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

document.body.appendChild(roundStart);
document.body.appendChild(scoreBoard);
document.body.appendChild(roundNumber);
document.body.appendChild(resultMessage);
document.body.appendChild(finalScore);

["Rock", "Paper", "Scissors"].forEach(choice => {
  const button = document.createElement("button")
  button.textContent = choice;
  button.setAttribute("data-choice", choice);
  roundStart.appendChild(button);

  button.addEventListener("click", () => {
    if (currentRound > maxRounds) return;

    const humanChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);
    resultMessage.textContent = result;

    scoreBoard.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

    if (currentRound < maxRounds) {
      currentRound++
      roundNumber.textContent = `--- Round ${currentRound} ---`;
    } else {
      roundNumber.textContent = `===== GAME OVER =====`;
      if (humanScore > computerScore) {
        finalScore.textContent = `Kuddos on you, you beat the machine!`;
      } else if (humanScore < computerScore) {
        finalScore.textContent = `You lost to the computer bruv!`;
      } else {
        finalScore.textContent = `You managed to think the same as the machine, are you an AI?`;
      }
    }
  })
})

