
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

    this.flop = [];

    this.hero_card1 = {new :Card};
    this.hero_card2 = {new :Card};

    this.villain_card1 = {new :Card};
    this.villain_card2 = {new :Card};

    this.flop_str = '';
    this.hero_card_str = '';
    this.villain_card_str = '';
    
    this.start();
}



Game.prototype.reset = function() {
    logd('-----GAME.RESET-----');

    flopSlot = document.querySelector('.hhand');
    while (flopSlot.hasChildNodes()) {
        flopSlot.removeChild(flopSlot.firstChild);
    }

    heroSlot = document.querySelector('.hero-hand');
    heroSlot.removeChild(heroSlot.firstElementChild);
    heroSlot.removeChild(heroSlot.firstElementChild);

    villainSlot = document.querySelector('.villain-hand');
    villainSlot.removeChild(villainSlot.firstElementChild);
    villainSlot.removeChild(villainSlot.firstElementChild);

    this.round = 'idle';        // current round in a game
    this.communityCards = [];   // array of Card object, five cards in center of the table
    this.deck = new Deck();     // deck of playing cards

    this.flop = [];

    this.hero_card1 = {new :Card};
    this.hero_card2 = {new :Card};

    this.villain_card1 = {new :Card};
    this.villain_card2 = {new :Card};

    this.flop_str = '';
    this.hero_card_str = '';
    this.villain_card_str = '';
    
    this.start();
};



Game.prototype.dealCards = function() {
    logd('----- DEALING HOLECARDS -----');
    // deal two cards to each players
    this.hero_card1 = this.deck.deal();
    this.hero_card2 = this.deck.deal();
    this.villain_card1 = this.deck.deal();
    this.villain_card2 = this.deck.deal();

    
    //get lower case card strings for odds
    this.hero_card_str = this.hero_card1.value+this.hero_card1.suit.toLowerCase()
                            + this.hero_card2.value+this.hero_card2.suit.toLowerCase();

    this.villain_card_str = this.villain_card1.value+this.villain_card1.suit.toLowerCase()
                                + this.villain_card2.value+this.villain_card2.suit.toLowerCase();
    
    // card object & translation verification
    console.log("hero str : ", this.hero_card_str);                    
    console.log("villain str : ", this.villain_card_str);

    // begin game, start 'deal' Round
    logd('----- HOLECARDS DEALT -----');
    this.round = 'deal';
}



// Render dealt player cards on canvas
//
//
Game.prototype.renderPlayerHands = function() {
    heroSlot = document.querySelector('.hero-hand');
    villainSlot = document.querySelector('.villain-hand');
    // HANDS
    heroSlot.appendChild(this.hero_card1.getHTML());
    heroSlot.appendChild(this.hero_card2.getHTML());
    villainSlot.appendChild(this.villain_card1.getHTML());
    villainSlot.appendChild(this.villain_card2.getHTML());
}



// Render the random 3 cards on current canvas
//
//
Game.prototype.renderDeck = function() {
    console.log("----- FLOP DEALT -----")
    flopSlot = document.querySelector('.hhand');
    // FLOP
    for(var i = 0; i < 3; i++)
    {
        this.flop[i] = this.deck.cards[i];
        this.flop_str += this.deck.cards[i].value + this.deck.cards[i].suit.toLowerCase();
        flopSlot.appendChild(this.deck.cards[i].getHTML());
    }
    console.log("flop str : ", this.flop_str)
}



// Attempt to show winning hand percentages on screen (or terminal)
//
//
/* 
Game.prototype.renderWinningAnimation = function() {
    heroSlot = document.querySelector('.hero-hand');
    villainSlot = document.querySelector('.villain-hand');
    // HANDS
    heroSlot.appendChild(this.hero.card1.getHTML());
    heroSlot.appendChild(this.hero.card2.getHTML());
    villainSlot.appendChild(this.villain.card1.getHTML());
    villainSlot.appendChild(this.villain.card2.getHTML());
}
*/



// Get equity odds for random deck and hand configuration and show output
//
//
Game.prototype.compareEquities = function(hand_chosen, hand_compare) {

    console.log("chosen hand str : ", hand_chosen);

    //retrieve percentages to show to user

    /* const player1Cards = CardGroup.fromString('JhJs');
    const player2Cards = CardGroup.fromString('JdQd');
    const board = CardGroup.fromString('7d9dTs');

    const result = OddsCalculator.calculate([player1Cards, player2Cards], board);

    console.log(`Player #1 - ${player1Cards} - ${result.equities[0].getEquity()}%`);
    console.log(`Player #2 - ${player2Cards} - ${result.equities[1].getEquity()}%`); */



    //call bash shell commands to get odds output from terminal
/*     var objShell = new ActiveXObject("shell.application");
    objShell.ShellExecute(commandtoRun, commandParms, "", "open", "1");
    iRetVal = objShell.ShellExecute(
        "poker-odds-calculator",
        [ "-b ", this.flop_str, this.hand_chosen, this.hand_compare ],
        [ "C:\Users\samue\Desktop\lite-poker-trainer\node_modules\.bin\poker-odds-calculator" ],
        [ "" ],
        [ 1 ]
    ); */

}



// FILE WRITING MICROSERVICE IMPLEMENTATION (FOR TINKERING USERS)
//
//
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



// MAIN ENTRY POINT
//
//
Game.prototype.start = function() {
    console.log('GAME CONSTRUCTOR start()');

    this.deck.shuffle();
    this.dealCards(); //return to player hands
    this.renderDeck();
    this.renderPlayerHands();
};