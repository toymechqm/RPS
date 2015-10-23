var move;
var total;

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
            $('.computerwins').html(parseInt($('.computerwins').html(), 10)+1);
            $('.pturns').html(parseInt($('.pturns').html(), 10)+1);
        }
        else if(playerMove == "paper" && computerMove == "rock"){
            $('.humanwins').html(parseInt($('.humanwins').html(), 10)+1);
            $('.rturns').html(parseInt($('.rturns').html(), 10)+1);
        }
        else if(playerMove == "paper" && computerMove == "scissors"){
            $('.computerwins').html(parseInt($('.computerwins').html(), 10)+1);
            $('.sturns').html(parseInt($('.sturns').html(), 10)+1);
        }
        else if(playerMove == "scissors" && computerMove == "paper"){
            $('.humanwins').html(parseInt($('.humanwins').html(), 10)+1);
            $('.pturns').html(parseInt($('.pturns').html(), 10)+1);
        }
        else if(playerMove == "scissors" && computerMove == "rock"){
            $('.computerwins').html(parseInt($('.computerwins').html(), 10)+1);
            $('.rturns').html(parseInt($('.rturns').html(), 10)+1);
        }
        else if(playerMove == "rock" && computerMove == "scissors"){
            $('.humanwins').html(parseInt($('.humanwins').html(), 10)+1);
            $('.sturns').html(parseInt($('.sturns').html(), 10)+1);
        }
        else{
            //Tie Game score counter
            $('.ties').html(parseInt($('.ties').html(), 10)+1);
                if(computerMove === "rock") {
                    $('.rturns').html(parseInt($('.rturns').html(), 10)+1);
                } if(computerMove === "paper") {
                    $('.pturns').html(parseInt($('.pturns').html(), 10)+1);
                } if(computerMove === "scissors") {
                    $('.sturns').html(parseInt($('.sturns').html(), 10)+1);
                 }
            }
            $('.totalgames').html(parseInt($('.totalgames').html(), 10)+1);

            // Need to pull integer out of
            var text = $('.totalgames').text();
            var total = parseInt(text, 10);

            var text2 = $('.humanwins').text();
            var hums = parseInt(text2, 10);
            console.log(hums/total)
            $('.average').html(parseFloat(hums/total, 10).toFixed(2));

        }


});
