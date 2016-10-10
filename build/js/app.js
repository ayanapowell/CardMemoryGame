(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/game.js":1}]},{},[2]);
