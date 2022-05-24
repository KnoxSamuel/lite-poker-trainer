
let state = 'PICK';
let pickedHand;

let stats = { totalWins: 0, totalPlays: 0 };

function clearStats() {
    stats = {
        totalWins: 0,
        totalPlays: 0
    };
    clearStorage();
    updateStats();
}


function updateStats() {
    const WinRate =
        nf((100 * stats.totalWins) / stats.totalPlays || 0, 2, 1) + '%';
    select('#stats .total').html(stats.totalPlays);
    select('#stats .bar').style('width', WinRate);
    select('#stats .bar .win-rate').html(WinRate);
}


//function checkWin()
/*
    Starts Edward's file writing microservice &
    begins communicating deck exercises to output
    files.
*/
//function genDeckToFile(){

<<<<<<< HEAD

=======
>>>>>>> 852551a1df56c3ea9abda8a353419629c3bf38e8
function setup() {
    noCanvas();
    stats = getItem('poker-game-stats') || stats;
    updateStats();
    
    //deck
    const gameDeck = new Deck();

    console.log(gameDeck.deck);
    gameDeck.resetDeck();
    console.log(gameDeck.deck);

    //gameDeck.shuffleDeck()
    //console.log(gameDeck.deck);

    //gameDeck.deal()
    //console.log(gameDeck.deck);

    select('button#play-again').mousePressed(function () {
        gameDeck.resetDeck();
    });
}
