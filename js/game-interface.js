var Game = require('./../js/game.js').gameModule;


$(document).ready(function() {
  var newGame = new Game();
  $('.card').click(function() {
    var cardId = $(this).attr("id");
    var card = newGame.allCards[cardId];
    $(this).html('<img src="img/' + card.img + '">');
    newGame.roundCards.push(card);
    var match;
    if (newGame.roundCards.length == 2) {
      match = newGame.findMatch(newGame.roundCards[0], newGame.roundCards[1]);
    }
    if (match === true && newGame.cardCount === 0) {
      alert("Congrats! You've won!");
    } else if (match === true) {
      newGame.roundCards = [];
    } else {
      var id1, id2;
      var cardId1 = newGame.roundCards[0].id;
      var cardId2 = newGame.roundCards[1].id;
      newGame.allCards.forEach(function(card) {
        if (card.id === cardId1) {
          id1 = newGame.allCards.indexOf(card);
        } else if (card.id === cardId2) {
          id2 = newGame.allCards.indexOf(card);
        }
      });
      setInterval(function() {
        $('#' + id1).html('<img src="img/default.jpeg">');
        $('#' + id2).html('<img src="img/default.jpeg">');
      }, 1000);

      newGame.roundCards = [];
    }

  });
});
