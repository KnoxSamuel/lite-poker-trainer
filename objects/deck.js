function Card(num, value, suit){
    this.num = num;
    this.value = value;
    this.suit = suit;
}

function Deck() {
    this.values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
    this.suits = ['h', 's', 'c', 'd'];
    this.deck = [];

    this.init();
}

/* Deck.prototype.resetDeck = function(){
    this.deck = [];
    this.deck = new Deck;
} */
/* Deck.prototype.emptyCards = function() {
    for (var i = 0; i < 52; i++){
        this.deck.pop();
    }
    return this.deck;
} */

Deck.prototype.init = function() {
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.values.length; n++ ) {
            this.deck.push( new Card( n+1, this.values[n], this.suits[s] ) );
        }
    }

    
    /*
    for (let suit in this.suits) {
        for (let value in this.values) {
            this.deck.push( this.values[value] + this.suits[suit] );
        }
    }*/
}



/*
    Receives HTTP GET response from Jason's
    hash generation service
    @ https://cs361-numgen.herokuapp.com/hex
*/
Deck.prototype.shuffleDeck = function() {
    let { deck } = this;
    let m = deck.length, i;

    while (m) {
        i = Math.floor(Math.random() * m--); // HTTP GET HEROKU

        [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
}



Deck.prototype.renderDeck = function() {
    let { deck } = this;
    document.getElementById('deck').innerHTML = '';
    for(var i = 0; i < deck.length; i++)
    {
        var card = document.createElement("div");
        var value = document.createElement("div");
        var suit = document.createElement("div");
        card.className = "card";
        value.className = "value";
        suit.className = "suit " + deck[i].suit;

        value.innerHTML = deck[i].Value;
        card.appendChild(value);
        card.appendChild(suit);

        document.getElementById("deck").appendChild(card);
    }
}



Deck.prototype.deal = function() {
    return this.deck.pop();
}
