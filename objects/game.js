
var debug = true;
function logd(message) {
    if (debug) {
        console.log(message);
    }
}


function Game() {
    // Game attributes
    this.round = 'idle';        // current round in a game
    this.communityCards = [];   // array of Card object, five cards in center of the table
    this.deck = new Deck();     // deck of playing cards
    this.hero = [card1 = {}, card2 = {}];
    this.villain = [card1 = {}, card2 = {}];
    this.flop = [];
    
    this.start();
}



Game.prototype.reset = function() {
    logd('Game reset');

    flopSlot = document.querySelector('.hhand');
    while (flopSlot.hasChildNodes()) {
        flopSlot.removeChild(flopSlot.firstChild);
    }

    heroSlot = document.querySelector('.hero-hand');
    heroSlot.removeChild(heroSlot.firstElementChild);
    heroSlot.removeChild(heroSlot.firstElementChild);

    villianSlot = document.querySelector('.villian-hand');
    villianSlot.removeChild(villianSlot.firstElementChild);
    villianSlot.removeChild(villianSlot.firstElementChild);

    this.game = new Game;
};



Game.prototype.dealCards = function() {
    logd('===== START: DEALING CARDS =====');
    // deal two cards to each players
    this.hero.card1 = this.deck.deal();
    this.villain.card1 = this.deck.deal();
    this.hero.card2 = this.deck.deal();
    this.villain.card2 = this.deck.deal();

    // begin game, start 'deal' Round
    logd('======= DONE: CARDS DEALT =======');
    this.round = 'deal';
    console.log(this.hero.card1.value + this.hero.card1.suit);
    console.log(this.hero.card2.value + this.hero.card2.suit);
    console.log(this.villain.card1.value + this.villain.card1.suit);
    console.log(this.villain.card2.value + this.villain.card2.suit);
}


Game.prototype.renderPlayerHands = function() {
    heroSlot = document.querySelector('.hero-hand');
    villianSlot = document.querySelector('.villian-hand');
    // HANDS
    heroSlot.appendChild(this.hero.card1.getHTML());
    heroSlot.appendChild(this.hero.card2.getHTML());
    villianSlot.appendChild(this.villain.card1.getHTML());
    villianSlot.appendChild(this.villain.card2.getHTML());
}



Game.prototype.renderDeck = function() {
    flopSlot = document.querySelector('.hhand');
    // FLOP
    for(var i = 0; i < 3; i++)
    {
        this.flop[i] = this.deck.cards[i];
        flopSlot.appendChild(this.deck.cards[i].getHTML());
    }
}


/* Game.prototype.compareEquities = function() {
    
} */
Game.prototype.startFileWriting = function() {
    var blob = new Blob(["start-new-write-operation\n"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "start-writing.txt");
}

Game.prototype.stopFileWriting = function() {
    var blob = new Blob(["stop-write-operation\n"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "start-writing.txt");
}


Game.prototype.downloadPracticeFile = function() {

    var blob = new Blob([this.hero.card1.value + this.hero.card1.suit+' '+this.hero.card2.value + this.hero.card2.suit
        + " vs. "
        + this.villain.card1.value + this.villain.card1.suit+' '+this.villain.card2.value + this.villain.card2.suit
        + " on flop: " + this.flop[0].value+this.flop[0].suit+' '+this.flop[1].value+this.flop[1].suit+' '+ this.flop[2].value+this.flop[2].suit+"\n" ],
        {type: "text/plain;charset=utf-8"});

    saveAs(blob, "start-writing.txt");
}


Game.prototype.start = function() {
    console.log('game.prototype.start()');
    console.log(this.deck);

    this.deck.shuffle();
    this.dealCards(); //return to player hands
    this.renderDeck();
    this.renderPlayerHands();
};