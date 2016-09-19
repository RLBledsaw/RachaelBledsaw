//create a deck of cards using objects
function Card(rank, suite){
	this.rank = rank;
	this.suite = suite;
}

function Deck(){
	var cards = buildDeck(),
		shuffled = false;

	this.fetchCards = function(){
		return cards;
	}

function shuffle(){
	var endpoint = cards.length - 1,
		temp;

	while ( endpoint > 0){
		var randomCard = Math.floor(Math.random() * endpoint);
		temp = cards[randomCard];
		cards[randomCard] = cards[endpoint];
		cards[endpoint] = temp;
		endpoint -= 1;
	}
	shuffled = true;
	return cards;
}
this.reset = function (){
	cards = buildDeck();
	shuffled = false;
	return cards;
}
this.dealRandom = function(){
	if(!shuffled) { shuffle();}

	if (cards.length > 0) {
		return cards.pop();
	}
	else {
		console.log("You need to reset the deck.")
		return null;
	}
}

function buildDeck(){
	var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'],
		suites = ['diamonds', 'clubs', 'hearts', 'spades'],
		deckToReturn = [];

	suites.forEach(function(suite){
		ranks.forEach(function(rank){
			deckToReturn.push( new Card(rank, suite));
		});
	});

	return deckToReturn;
}
}

function Player(name){
	this.name = name;
	this.hand = [];
}
 this.takeCard = function {
 	this.hand.push(deck.dealRandom());
 	return this;
 }

 this.discard = function (cardis) {
 	if (this.hand.length > cardis) {
 		this.hand.splice(cardis, 1);
 	}
 	return this;
 }
