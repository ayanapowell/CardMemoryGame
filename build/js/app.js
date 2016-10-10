(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/game.js":1}]},{},[2]);
