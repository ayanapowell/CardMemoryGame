function Game() {
  this.cardCount = 10;
  this.allCards = [new Card(1, 'one'), new Card(2, 'three'), new Card(3, 'five'), new Card(4, 'four'), new Card(5, 'three'), new Card(6, 'one'), new Card(7, 'two'), new Card(8, 'two'), new Card(9, 'five'), new Card(10, 'four')];
  this.allCards.sort(function() {
    return 0.5 - Math.random();
  });
  this.roundCards = [];
}

Game.prototype.findMatch = function(card1, card2) {
  if (card1.name == card2.name) {
    card1.match();
    card2.match();
    this.cardCount -= 2;
    return true;
  } else {
    return false;
  }
};

function Card(id, name) {
  this.id = id;
  this.name = name;
  this.img = this.name + '.jpeg';
}

exports.gameModule = Game;
