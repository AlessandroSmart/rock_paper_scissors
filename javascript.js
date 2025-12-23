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

function playRound(humanChoice, computerChoice) {
    let hChoice = humanChoice();
    let cChoice = computerChoice();
    if(hChoice == cChoice) {
        console.log("Tie!");
        console.log(`You picked ${hChoice} and the computer picked
         ${hChoice} `);
    }
    else if ((hChoice === "rock" && cChoice === "scissors")
        || (hChoice === "scissors" && cChoice === "paper")
        || (hChoice === "paper" && cChoice === "rock")) 
        {
            humanScore++;
            console.log(`You win! ${hChoice} beats ${cChoice}`);
        }
        else {
            computerScore++;
            console.log(`You lose! ${cChoice} beats ${hChoice}`);
        }


}
function playGame() {
   for(let i = 1; i <=5; i++) {
     playRound(getHumanChoice, getComputerChoice);
   }
   console.log(`Your final score is ${humanScore} vs ${computerScore}`);
}
playGame();