new p5();

let state = 'PICK';
let pickedHand;
var stats = { totalWins: 0, totalPlays: 0 };

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

function drawCards() {

}


function setup() {
    noCanvas();
    clearStats();
    stats = getItem('poker-game-stats') || stats;
    updateStats();
    
    // game play
    var game = new Game();
    
    console.log(game.deck);
    game.deck.renderDeck();

    game.reset();
    console.log(game.deck);

    game.deck.shuffleDeck();
    console.log(game.deck);
/* 
    game.start();
    console.log(game.deck); */

    //draw cards here

/*     select('button#shuffle-btn').mousePressed(function () {
        game.reset();
        console.log(game.deck);
    }); */
}
