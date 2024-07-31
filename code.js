let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) return 1;
    else if(choice == 1) return 2;
    else return 3;
}

function getHumanChoice() {
    let choice = prompt("1. Rock\n2. Paper\n3. Scissors")
    return choice;
}

function playRound(getComputerChoice, getHumanChoice) {

    if(getComputerChoice == getHumanChoice) console.log("Draw");

    else if(getComputerChoice == 1 && getHumanChoice == 2) {
        console.log("You Win!Paper beat Rock."); 
        humanScore++;
    } 

    else if(getComputerChoice == 2 && getHumanChoice == 3) {
        console.log("You Win!Scissors beat Paper."); 
        humanScore++;
    } 

    else if(getComputerChoice == 3 && getHumanChoice == 1) {
        console.log("You Win!Rock beat Scissors."); 
        humanScore++;
    } 

    else if(getHumanChoice == 1 && getComputerChoice == 2) {
        console.log("You Lose!Paper beat Rock."); 
        computerScore++;
    } 

    else if(getHumanChoice == 2 && getComputerChoice == 3) {
        console.log("You Lose!Scissors beat Paper."); 
        computerScore++;
    }

    else if(getHumanChoice == 3 && getComputerChoice == 1) {
        console.log("You Lose!Rock beat Scissors."); 
        computerScore++;
    }

}

function playGame(rounds) {

    while(rounds > 0) {
        playRound(getComputerChoice(), getHumanChoice());
        rounds--;
    }
    
    if(humanScore > computerScore) console.log("\n\nYou Win!!\nYour Score: " + humanScore + "\nComputer Score: " + computerScore);
    else if(computerScore > humanScore) console.log("\n\nYou Lose!!\nYour Score: " + humanScore + "\nComputer Score: " + computerScore);
    else  console.log("\n\nIt's a Draw!!\nYour Score: " + humanScore + "\nComputer Score: " + computerScore);

}

playGame(3);