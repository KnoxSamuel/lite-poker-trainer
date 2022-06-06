
export default class Game {
    constructor() {
        this.round = 'idle';        // current round
        this.deck = new Deck();     // deck of playing cards
        this.deck.shuffle();
        
        console.log('----- DEALING HOLECARDS -----');
        this.hero_card1 = this.deck.deal();
        this.hero_card2 = this.deck.deal();
        this.villain_card1 = this.deck.deal();
        this.villain_card2 = this.deck.deal();

        this.flop = [this.deck.deal(), this.deck.deal(), this.deck.deal()];   // 3 card objects loaded in
                                                                            // from top of deck
        this.flop_str = '';
        this.hero_card_str = '';
        this.villain_card_str = '';

        //get lower case card strings for odds
        this.hero_card_str = this.hero_card1.value+this.hero_card1.suit.toLowerCase()
                                + this.hero_card2.value+this.hero_card2.suit.toLowerCase();
                                
        this.villain_card_str = this.villain_card1.value+this.villain_card1.suit.toLowerCase()
                                    + this.villain_card2.value+this.villain_card2.suit.toLowerCase();
        
        // card object & translation verification
        console.log("hero str : ", this.hero_card_str);                    
        console.log("villain str : ", this.villain_card_str);
    
        // begin game, start 'deal' Round
        console.log('----- HOLECARDS DEALT -----');
        this.round = 'deal';
        
        this.start();
    }


    reset() {
        console.log('-----GAME.RESET-----');
        let flopSlot = document.querySelector('.hhand');
        while (flopSlot.hasChildNodes()) {
            flopSlot.removeChild(flopSlot.firstChild);
        }
        // rm Hand 1 objects
        let heroSlot = document.querySelector('.hero-hand');
        heroSlot.removeChild(heroSlot.firstElementChild);
        heroSlot.removeChild(heroSlot.firstElementChild);
        // rm Hand 2 objects
        let villainSlot = document.querySelector('.villain-hand');
        villainSlot.removeChild(villainSlot.firstElementChild);
        villainSlot.removeChild(villainSlot.firstElementChild);
        
        this.round = 'idle';        // current round
        this.deck = new Deck();     // deck of playing cards
        this.deck.shuffle();
        
        console.log('----- DEALING HOLECARDS -----');
        this.hero_card1 = {new :Card} = this.deck.deal();
        this.hero_card2 = {new :Card} = this.deck.deal();
        this.villain_card1 = {new :Card} = this.deck.deal();
        this.villain_card2 = {new :Card} = this.deck.deal();

        this.flop = [this.deck.deal(), this.deck.deal(), this.deck.deal()];   // 3 card objects loaded in
                                                                            // from top of deck
        this.flop_str = '';
        this.hero_card_str = '';
        this.villain_card_str = '';

        //get lower case card strings for odds
        this.hero_card_str = this.hero_card1.value+this.hero_card1.suit.toLowerCase()
                                + this.hero_card2.value+this.hero_card2.suit.toLowerCase();
                                
        this.villain_card_str = this.villain_card1.value+this.villain_card1.suit.toLowerCase()
                                    + this.villain_card2.value+this.villain_card2.suit.toLowerCase();
        this.start();
    };


    // Render dealt player cards on canvas
    //
    renderPlayerHands() {
        let heroSlot = document.querySelector('.hero-hand');
        let villainSlot = document.querySelector('.villain-hand');
        // HANDS
        heroSlot.appendChild(this.hero_card1.getHTML());
        heroSlot.appendChild(this.hero_card2.getHTML());
        villainSlot.appendChild(this.villain_card1.getHTML());
        villainSlot.appendChild(this.villain_card2.getHTML());
    }


    // Render the random 3 cards on current canvas
    //
    renderDeck() {
        console.log("----- FLOP DEALT -----")
        let flopSlot = document.querySelector('.hhand');
        // FLOP
        for(var i = 0; i < 3; i++)
        {
            //this.flop[i] = this.deck.cards[i];
            this.flop_str += this.deck.cards[i].value + this.deck.cards[i].suit.toLowerCase();
            flopSlot.appendChild(this.deck.cards[i].getHTML());
        }
        console.log("flop str : ", this.flop_str)
    }


    // Get equity odds for random deck and hand configuration and show output
    //
    compareEquities(hand_chosen, hand_compare) {
        console.log("\n\nchosen hand : ", hand_chosen);
        //retrieve cli run-cmd to show to tinkering user percentages
        console.log("run-cmd: npx poker-odds-calculator -b " + this.flop_str +" "+ hand_chosen +" "+ hand_compare);

        // compile hand calculation objects
        console.log("chosen hand: ", hand_chosen,"on",this.flop_str);
        console.log("other hand: ", hand_compare,"on",this.flop_str);
    }


    // FILE WRITING MICROSERVICE IMPLEMENTATION (FOR TINKERING USERS)
    //
    startFileWriting() {
        var blob = new Blob(["start-new-write-operation\n"], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "start-writing.txt");
    }
    stopFileWriting() {
        var blob = new Blob(["stop-write-operation\n"], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "start-writing.txt");
    }
    downloadPracticeFile() {
        var blob = new Blob([this.hero_card_str + " vs. " + this.villain_card_str
            + " on flop: " + this.flop_str 
            
            + "\n run-cmd: npx poker-odds-calculator -b " + this.flop_str + this.hero_card_str + this.villain_card_str
            
            + "\n" ],
            {type: "text/plain;charset=utf-8"});

        saveAs(blob, "start-writing.txt");
    }


    // MAIN ENTRY POINT
    //
    start() {
        this.renderDeck();
        this.renderPlayerHands();
    };
};

window.Game = Game;

