var Game = require('./../js/game.js').gameModule;


$(document).ready(function() {
  var newGame = new Game();
  var card1, card2, match;
  var clickCount = 0;

  $('.card').click(function() {
    $(this).children().show();

    if (clickCount === 0) {
      card1 = $(this).attr('id');
    } else if (clickCount === 1) {
      card2 = $(this).attr('id');
    }

    clickCount ++;

    if (clickCount === 2) {
      match = newGame.findMatch($('#'+card1).children().attr('src'), $('#'+card2).children().attr('src'));
      clickCount = 0;
      if (match === true && newGame.matchCount === 5) {
        setTimeout(function(){alert('You win!')}, 1000);
      } else if (match === false) {
        setTimeout(function(){
          $('#'+card1).children().hide();
          $('#'+card2).children().hide();
        }, 1000);
      }
    }
  });
});
