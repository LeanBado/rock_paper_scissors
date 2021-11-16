function computerPlay(){
    let game = ["paper", "scissor", "rock"];
    return game[Math.floor((Math.random() * 3))]
   
}
const computerSelection = computerPlay(); 
let playerSelection = "rock"
console.log(playRound(playerSelection, computerSelection))

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "rock"){
        return "you tied";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "you lose";
    } else if (playerSelection == "rock" && computerSelection == "scissor"){
        return "you win";
    }
}
