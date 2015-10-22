////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';



$( document ).ready(function() {

  $( "button" ).click(function() {
    $( ".col-xs-12" ).hide( "slow" );
    $( "#gameon" ).show( "slow" );
    playToFive();
  });


  $( ".pic img" ).click(function() {
  move = $(this).attr('id');
  });



});


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
function getPlayerMove(move) {
    var move
        if (move != null){
            move = move;
        }
        else {
            move = getInput();
        }
    return move
}

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
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

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove == "rock" && computerMove == "paper"){
        winner = "computer";
        $('.pturns').html(parseInt($('.pturns').html(), 10)+1);
    }
    else if(playerMove == "paper" && computerMove == "rock"){
        winner = "player";
        $('.rturns').html(parseInt($('.rturns').html(), 10)+1);
    }
    else if(playerMove == "paper" && computerMove == "scissors"){
        winner = "computer";
        $('.sturns').html(parseInt($('.sturns').html(), 10)+1);
    }
    else if(playerMove == "scissors" && computerMove == "paper"){
        winner = "player";
        $('.pturns').html(parseInt($('.pturns').html(), 10)+1);
    }
    else if(playerMove == "scissors" && computerMove == "rock"){
        winner = "computer";
        $('.rturns').html(parseInt($('.rturns').html(), 10)+1);
    }
    else if(playerMove == "rock" && computerMove == "scissors"){
        winner = "player";
        $('.sturns').html(parseInt($('.sturns').html(), 10)+1);
    }
    else{
        winner = "tie";
        console.log("It's a tie!");
    }
    return winner;
}

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   while (playerWins <5 && computerWins < 5){
        var winner = getWinner(getPlayerMove(), getComputerMove());

        if (winner == "player") {
        playerWins++;
            $('.humanwins').html(parseInt($('.humanwins').html(), 10)+1);
            $('.totalgames').html(parseInt($('.totalgames').html(), 10)+1);
        } else if (winner == "computer") {
            computerWins++;
            $('.computerwins').html(parseInt($('.computerwins').html(), 10)+1);
            $('.totalgames').html(parseInt($('.totalgames').html(), 10)+1);
        } else {
            $('.ties').html(parseInt($('.ties').html(), 10)+1);
            $('.totalgames').html(parseInt($('.totalgames').html(), 10)+1);
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
