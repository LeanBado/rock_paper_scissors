function computerPlay(){
    let game = ["paper", "scissor", "rock"];
    return game[Math.floor((Math.random() * 3))]
   
}

const computerSelection = computerPlay(); 

let playerSelection = "RoCk";
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection){
    const computerSelection = computerPlay(); 
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){
        return "you tied";
        playerScore ++;
        computerScore ++;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        return "you lose";
        computerScore ++;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        return "you win";
        playerScore ++;
    }
}
function game(){
    console.log(playRound(playerSelection));
    console.log(playRound(playerSelection));
    console.log(playRound(playerSelection));
    console.log(playRound(playerSelection));
    console.log(playRound(playerSelection));
}
game()

function score(){
    playRound();
    if(playerScore == 5){
        return "YOU WIN THE MATCH"
    } else if (computerScore == 5){
        return "YOU LOSE THE MATCH"
    }
}

