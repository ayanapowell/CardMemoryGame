function Game() {
  this.matchCount = 0;
}

Game.prototype.findMatch = function(card1, card2) {
  if (card1 == card2) {
    this.matchCount += 1;
    return true;
  } else {
    return false;
  }
};

exports.gameModule = Game;
