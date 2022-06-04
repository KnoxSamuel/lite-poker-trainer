
let state = 'PICK';
let pickedHand;
var stats = { totalWins: 0, totalPlays: 0 };

function clearStats() {
    stats = {
        totalWins: 0,
        totalPlays: 0
    };
    updateStats();
}


function updateStats() {
    const WinRate =
        nf((100 * stats.totalWins) / stats.totalPlays || 0, 2, 1) + '%';
    select('#stats .total').html(stats.totalPlays);
    select('#stats .bar').style('width', WinRate);
    select('#stats .bar .win-rate').html(WinRate);
}


function setup() {
    console.log('setup()');
    noCanvas();
    clearStats();
    stats = getItem('poker-game-stats') || stats;
    updateStats();
    
    // game play
    var game = new Game();
    console.log(game.deck);


    select('button#hero').mousePressed(function () {
        game.compareEquities(game.hero, game.villian); // Hero > Villian
    });
    select('button#villian').mousePressed(function () {
        game.compareEquities(game.villian, game.hero); // Villian > Hero
    });


    select('button#play-again').mousePressed(function () {
        game.reset();
        console.log(game.deck);
    });


    select('button#download-files').mousePressed(function () {
        console.log("getting decks to output files");
        game.startFileWriting();
        game.downloadPracticeFile();
        game.stopFileWriting();
    });
}
