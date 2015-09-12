var ppl = require('./cards');

function Game() {

}



// num: how many of each type of card there is
function Deck(num) {
	this.deck = [];

	var cardTypes = [ppl.Duke, ppl.Contessa, ppl.Assassin, ppl.Captain, ppl.Ambassador];

	for (var i=0; i<num; i++) {
		cardTypes.forEach(card) {
			this.deck.push(new card());
		}
	}

}




Deck.prototype.shuffle = function() {
	var oldDeck = this.deck.slice();
	var newDeck = [];
	while (oldDeck.length) {
		var index = Math.floor(Math.random() * oldDeck.length);
		newDeck.push(oldDeck.splice(index, 1)[0]);
	}
	this.deck = newDeck;
};

Deck.prototype.draw = function() {
	return this.deck.pop();
};

Deck.prototype.putBack = function(card) {
	this.deck.push(card);
	this.shuffle();
};



module.exports = {
	Game: Game,
	Deck: Deck
}