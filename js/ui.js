$( document ).ready(function() {

  $( "button" ).click(function() {
    $( ".col-xs-12" ).hide( "slow" );
    $( "#gameon" ).show( "slow" );
  });


  $( ".pic img" ).click(function() {
  move = $(this).attr('id');
  });



});
