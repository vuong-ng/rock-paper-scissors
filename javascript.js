var humanScore = 0;
var computerScore = 0;
var humanSel = "";
var gameOver = false;

const div = document.querySelector("buttons");
const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");
const newGame = document.getElementById("new-game");
    
rockBtn.addEventListener("click", () => {
    if (!gameOver){
        playRound("rock", getComputerChoice());
        displayScore();
    }
});

paperBtn.addEventListener("click", () => {
    if (!gameOver){
        playRound("paper", getComputerChoice());
        displayScore();
    }
});

scissorsBtn.addEventListener("click", () => {
    if (!gameOver){
        playRound("scissors", getComputerChoice());
        displayScore();
    }
});

newGame.addEventListener("click", () => {
    gameOver = false;
    humanScore = 0;
    computerScore = 0;
    alert("New game started");
});

function displayScore(){
    if (humanScore == 5 || computerScore == 5){
        gameOver = true;
        if (humanScore > computerScore){
            result = "You win";
        }
        else if (humanScore < computerScore){
            result = "You lose";
        }
        else {
            result = "Tie";
        }

        window.alert(`Your scores: ${humanScore}, Computer scores: ${computerScore}. ${result}`);
        // const div = document.createElement("div");
        // div.textContent = `${result}`;
        // const score = document.createElement("p");
        // score.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
    }
}

function getComputerChoice(){
    let p = Math.random();
    if (p < 0.33 ){
        return "rock";
    }
    else if (p >= 0.33 && p <= 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice){
    rule = {"scissors":"rock", "paper": "scissors", "rock":"paper"};
    if (humanChoice === computerChoice){
        humanScore += 1;
    }
    else if (rule[computerChoice] === humanChoice){
        computerScore += 1;
    }
    alert(`Computer choice: ${computerChoice}, your choice: ${humanChoice}`);
}



