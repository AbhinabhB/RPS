let humanScore = 0;
let computerScore = 0;
const WINSCORE = 3;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) return 1;
    else if(choice == 1) return 2;
    else return 3;
}

function getHumanChoiceRock() {
    playRound(getComputerChoice(), 1);
}

function getHumanChoicePaper() {
    playRound(getComputerChoice(), 2);
}

function getHumanChoiceScissors() {
    playRound(getComputerChoice(), 3);
}

function playRound(getComputerChoice, getHumanChoice) {

    if(getComputerChoice == getHumanChoice) {
        document.getElementById("res").innerHTML = 
        `<p>
            Draw
        </p>`;
    } 

    else if(getComputerChoice == 1 && getHumanChoice == 2) {
        document.getElementById("res").innerHTML = 
        `<p>
            You Win!Paper beat Rock.
        </p>`;
        humanScore++;
    } 

    else if(getComputerChoice == 2 && getHumanChoice == 3) {
        document.getElementById("res").innerHTML = 
        `<p>
            You Win!Scissors beat Paper.
        </p>`;
        humanScore++;
    } 

    else if(getComputerChoice == 3 && getHumanChoice == 1) {
        document.getElementById("res").innerHTML = 
        `<p>
            You Win!Rock beat Scissors.
        </p>`;
        humanScore++;
    } 

    else if(getHumanChoice == 1 && getComputerChoice == 2) {
        document.getElementById("res").innerHTML = 
        `<p>
            You Lose!Paper beat Rock.
        </p>`;
        computerScore++;
    } 

    else if(getHumanChoice == 2 && getComputerChoice == 3) { 
        document.getElementById("res").innerHTML = 
        `<p>
            You Lose!Scissors beat Paper.
        </p>`;
        computerScore++;
    }

    else if(getHumanChoice == 3 && getComputerChoice == 1) {
        document.getElementById("res").innerHTML = 
        `<p>
            You Lose!Scissors beat Paper.
        </p>`;
        computerScore++;
    }

    displayScore();

}

function displayScore() {
    document.getElementById("score1").innerHTML = humanScore;
    document.getElementById("score2").innerHTML = computerScore;
    if(humanScore >= WINSCORE) {
        document.getElementById("result").innerHTML = 
        `<p>
            Congratulations!!You won!
        </p>`;
    } else if(computerScore >= WINSCORE) {
        document.getElementById("result").innerHTML = 
        `<p>
            Good Try!!Computer won!
        </p>`;
    }
}

