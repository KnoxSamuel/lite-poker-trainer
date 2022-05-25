
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
}



Game.prototype.reset = function() {
    logd('Game reset');
    this.round = 'idle';
    this.communityCards = [];   // clear cards on board
    this.deck = new Deck();     // use new deck of cards
};



Game.prototype.start = function() {
    this.reset();
    logd('========== STARTING GAME ==========');

    // deal two cards to each players
    this.hero.card1 = this.deck.deal();
    this.villain.card1 = this.deck.deal();
    this.hero.card2 = this.deck.deal();
    this.villain.card2 = this.deck.deal();

    // begin game, start 'deal' Round
    logd('========== ROUND DEALT ==========');
    this.round = 'deal';
};