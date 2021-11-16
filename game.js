function computerPlay(){
    let game = ["paper", "scissor", "rock"];
    return game[Math.floor((Math.random() * 3))]
   
}

const computerSelection = computerPlay(); 

let playerSelection = "RoCk"

console.log(playRound(playerSelection, computerSelection))

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){
        return "you tied";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        return "you lose";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        return "you win";
    }
}

