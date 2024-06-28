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
function getHumanChoice(){
    let choice = window.prompt("Rock, Paper, Scissors?");
    choice = choice.toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        return "Invalid input!"
    }
    else {
        return choice;
    }
    
}
function playRound(humanChoice, computerChoice){


    rule = {"scissors":"rock", "paper": "scissors", "rock":"paper"};
    console.log(humanChoice, computerChoice);
    if (humanChoice === computerChoice){
        return 0;
    }
    else if (rule[computerChoice] === humanChoice){
        return 1
    }
    else {
        return 2;
    }
}
function playGame(){
    var humanScore = 0;
    var computerScore = 0;
    var humanSel = "";
    var computerSel = "";

    for (let i = 0; i < 3; i++){
        humanSel = getHumanChoice();
        computerSel = getComputerChoice();  
        console.log(humanSel, computerSel);  
        res = playRound(humanSel, computerSel);
        if (res == 1){
            humanScore += 1;
        }
        else if (res == 2){
            computerScore += 1;
        }
    }
    if (humanScore > computerScore){
        console.log("You win");
    }
    else if (humanScore < computerScore){
        console.log("You lose");
    }
    else {
        console.log("Tie!")
    }

}
playGame();

