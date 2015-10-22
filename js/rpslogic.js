'use strict';
var move;

// function getInput() {
//     console.log("Please choose either 'rock', 'paper', or 'scissors'.")
//     return prompt();
// }
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    var move;
    move = move;
}

// function getPlayerMove(move) {
//     var move
//         if (move != null){
//             move = move;
//         }
//         else {
//             move = getInput();
//         }
//     return move
// }

function getComputerMove(move) {
    var move
        if (move != null){
            move = move;
        }
        else {
            move = randomPlay();
        }
    console.log("Computer chose " + move)
    return move
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove == "rock" && computerMove == "paper"){
        winner = "computer"
        console.log("Computer wins!");
    }
    else if(playerMove == "paper" && computerMove == "rock"){
        winner = "player"
        console.log("Player wins!");
    }
    else if(playerMove == "paper" && computerMove == "scissors"){
        winner = "computer"
        console.log("Computer wins!");
    }
    else if(playerMove == "scissors" && computerMove == "paper"){
        winner = "player"
        console.log("Player wins!");
    }
    else if(playerMove == "scissors" && computerMove == "rock"){
        winner = "computer"
        console.log("Computer wins!");
    }
    else if(playerMove == "rock" && computerMove == "scissors"){
        winner = "player"
        console.log("Player wins!");
    }
    else{
        winner = "tie"
        console.log("It's a tie!");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   while (playerWins <5 && computerWins < 5){
        var winner = getWinner(getPlayerMove(), getComputerMove());

        if (winner == "player") {
        playerWins++;
        console.log([playerWins, computerWins]);
        }
        else if (winner == "computer") {
        computerWins++;
        console.log([playerWins, computerWins]);
        }
        else {
        console.log("No change in score.");
        }

   }
    if (playerWins == 5) {
        console.log("Player wins overall!");
    }
    else {
        console.log("Computer wins overall!");
    }
    return [playerWins, computerWins];
}
