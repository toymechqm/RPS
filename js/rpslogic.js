var move;

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

$( document ).ready(function() {

    $( "#play" ).click(function() {
    $( ".col-xs-12" ).slideUp( "slow" );
    $( "#gameon" ).show( "slow" );
    });


    startGame = $('.pic img').click(function() {
        playerMove = $(this).attr('id');
        computerMove = randomPlay()
        $( "#hummove" ).empty().append(playerMove);
        $( "#pcmove" ).empty().append(computerMove);
        getWinner(playerMove,computerMove)
    });


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
            $('.ties').html(parseInt($('.ties').html(), 10)+1);
        }
        return winner;
    }

});
