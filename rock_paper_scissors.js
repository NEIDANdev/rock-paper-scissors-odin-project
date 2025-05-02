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

  console.log("Computer chose: ", computer_selection);
  return computer_selection;
}

function getHumanChoice() {
  const input = prompt("What would you choose?");
  const human_choice = input.toLowerCase();
  let human_selection = "";

  switch (true) {
    case human_choice == "rock":
      human_selection = "Rock";
      break;

    case human_choice == "paper":
      human_selection = "Paper";
      break;

    case human_choice == "scissors":
      human_selection = "Scissors";
      break;

    default:
      alert("That is not an option!");
  }

  console.log("You chose: ", human_selection);
  return human_selection;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("OMG, That's a tie!")
    return;
  }

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log(`${humanChoice} beats ${computerChoice}! You win this time!`);
  } else {
    computerScore++
    console.log(`${humanChoice} loses to ${computerChoice}! Better luck next time!`)
  }
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (!humanChoice) {
      round--;
      continue;
    }

    playRound(humanChoice, computerChoice);
    console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
  }

  console.log(`===== GAME OVER =====`);
  if (humanScore < computerScore) {
    console.log(`You lose to the computer bruv!`)
  } else if (humanScore > computerScore) {
    console.log(`Kuddos on you, you beat the machine!`)
  } else {
    console.log(`You managed to think the same as the machine, are you a bot?`)
  }
}
