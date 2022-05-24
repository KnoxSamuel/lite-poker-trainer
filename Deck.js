class Deck {

    constructor() {
        this.deck = [];
        this.resetDeck();
        this.shuffleDeck();
    }


    resetDeck() {
        this.deck = [];

        const suits = ['h', 's', 'c', 'd'];
        const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]}${suits[suit]}`);
            }
        }
    }


    /*
      Receives HTTP GET response from Jason's
      hash generation service
      @ https://cs361-numgen.herokuapp.com/hex
    */
    shuffleDeck() {
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--); // HTTP GET HEROKU

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }


    renderDeck() {
        document.getElementById('deck').innerHTML = '';
        for(var i = 0; i < deck.length; i++)
        {
            var card = document.createElement("div");
            var value = document.createElement("div");
            var suit = document.createElement("div");
            card.className = "card";
            value.className = "value";
            suit.className = "suit " + deck[i].Suit;
    
            value.innerHTML = deck[i].Value;
            card.appendChild(value);
            card.appendChild(suit);
    
            document.getElementById("deck").appendChild(card);
        }
    }
    

    load() {
        deck = getDeck();
        shuffleDeck();
        renderDeck();
    }


    deal() {
        return this.deck.pop();
    }
}
