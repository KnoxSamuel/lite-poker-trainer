const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
const suits = ['H', 'S', 'C', 'D'];

export class Deck {
    constructor(cards = freshDeck() ) {
        this.cards = cards;
    }


    get cardsLen() {
        return this.cards.length;
    }


    deal() {
        return this.cards.pop();
    }


    /* SECOND MICROSERVICE NOT FUNCTIONAL - Receives HTTP GET response from Jason's hash generation service
        @ https://cs361-numgen.herokuapp.com/hex
    */
    shuffle() {
        console.log('shuffle()');
        let m = this.cardsLen, i;

        while (m) {
            i = Math.floor(Math.random() * m--); // HTTP GET HEROKU

            [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
        }
    }
}


export class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    getHTML() {
        const cardDiv = document.createElement('img');
        cardDiv.className = 'card';
        cardDiv.srcset = 'scripts/richardschneider-cardsJS-fe5e857/cards/'+this.value+this.suit+'.svg';
        return cardDiv;
    }
    //<img class='card' src='helpers/richardschneider-cardsJS-fe5e857/cards/AC.svg'>
}


function freshDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(value, suit); //
        })
    });
}

window.Deck = Deck;
window.Card = Card;