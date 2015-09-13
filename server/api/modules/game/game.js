var ppl = require('./cards');
var cardTypes = [ppl.Duke, ppl.Contessa, ppl.Assassin, ppl.Captain, ppl.Ambassador];

// GAME CONSTANTS


function Game(participants) {
	var numPlayers = participants.length;
	var numOfEachType = (numPlayers < 6) ? 3 : 4;
	var players = [];

	for (var i=0; i<numPlayers; i++) {
		players.push(new Player(participants[i].name, i));
	}


}



// num: how many of each type of card there is
function Deck(num) {
	this.cards = [];

	

	var theDeck = this.cards;
	for (var i=0; i<num; i++) {
		cardTypes.forEach(function(card) {
			theDeck.push(new card());
		});
	}
	this.shuffle();

}


Deck.prototype.shuffle = function() {
	var oldDeck = this.cards.slice();
	var newDeck = [];
	while (oldDeck.length) {
		var index = Math.floor(Math.random() * oldDeck.length);
		newDeck.push(oldDeck.splice(index, 1)[0]);
	}
	this.cards = newDeck;
};

Deck.prototype.draw = function() {
	return this.cards.pop();
};

Deck.prototype.putBack = function(card) {
	this.cards.push(card);
	this.shuffle();
	return card;
};

Deck.prototype.getCards = function() {
	return this.cards;
}

Deck.prototype.displayCards = function() {
	return this.cards.map(function(card) {
		return card.name;
	})
}



module.exports = {
	Game: Game,
	Deck: Deck
}

var deck = new Deck(3);
console.log("original:",deck.displayCards().join(', '));
deck.shuffle();
console.log("shuffled:",deck.displayCards().join(', '));
var drawnCard = deck.draw();
console.log("draw one:",drawnCard.name);
console.log("remaining:",deck.displayCards().join(', '));
console.log("put back:",deck.putBack(drawnCard).name);
console.log("after putBack:",deck.displayCards().join(', '));

