function getComputerChoice() {
  let randomChoice = Math.random() * 3;

  if (randomChoice < 1) {
    return "rock";
  } else if (randomChoice < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoices = prompt("Play Rock Paper Scissors, choose your card: ");
  return humanChoices;
}

//console.log(getHumanChoice());

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! " + humanChoice + " beats the " + computerChoice);
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! " + computerChoice + " beats the " + humanChoice);
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! " + humanChoice + " beats the " + computerChoice);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! " + computerChoice + " beats the " + humanChoice);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! " + humanChoice + " beats the " + computerChoice);
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! " + computerChoice + " beats the " + humanChoice);
      computerScore++; //+=1
    } else {
      console.log("Its a tie !");
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("You beat the Computer!");
  } else if (humanScore < computerScore) {
    console.log("Oh no you lose, computer beats you try next time!");
  } else {
    console.log("Wow its a tie breaker! ");
  }
}

playGame();
