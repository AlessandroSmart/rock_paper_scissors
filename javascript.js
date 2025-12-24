function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 1/3 ) {
        return "rock";
    } else if (choice > 1/3 && choice <= 2/3 ) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let getHumanChoice = function() {
    return prompt("Enter your choice: ").toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

const statuss = document.querySelector(".comment");
const pScore = document.querySelector(".pscore");
const cScore = document.querySelector(".cscore");

function playRound(humanChoice, computerChoice) {
    let hChoice = humanChoice.toLowerCase();
    let cChoice = computerChoice.toLowerCase();
    if(hChoice == cChoice) {
        statuss.textContent = ` Tie! You picked ${hChoice} and the computer picked
         ${hChoice}`;
    }
    else if ((hChoice === "rock" && cChoice === "scissors")
        || (hChoice === "scissors" && cChoice === "paper")
        || (hChoice === "paper" && cChoice === "rock")) 
        {
            humanScore++;
            pScore.textContent = `Your score is ${humanScore}`;
            cScore.textContent = `The computer score is ${computerScore}`
            statuss.textContent = `You win! ${hChoice} beats ${cChoice}`
        }
        else {
            computerScore++;
            pScore.textContent = `Your score is ${humanScore}`;
            cScore.textContent = `The computer score is ${computerScore}`
            statuss.textContent = `You lose! ${cChoice} beats ${hChoice}`
        }

}

// EVENT DELEGATION
const selection = document.querySelector(".selection");
selection.addEventListener("click", (e) => {
  if(!e.target.matches("button")) return;

  const playerSelection = e.target.className; 
  playRound(playerSelection, getComputerChoice());

  if (humanScore === 5 || computerScore === 5) {
    selection.style.pointerEvents = "none";
    const winner = (humanScore === 5 ) ? 'You won! Congrats' : 'You lost! Good luck next time';
    statuss.textContent = winner;
  }
});


