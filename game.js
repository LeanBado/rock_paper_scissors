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
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock" && computerSelection == "rock"){
        return "you tied";
        playerScore ++;
        computerScore ++;
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "you lose";
        computerScore ++;
    } else if (playerSelection == "rock" && computerSelection == "scissor"){
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

function score(playerScore, computerScore){
    if(playerScore > computerScore){
        return "YOU WIN THE MATCH"
    } else return "YOU LOSE THE MATCH"
}

