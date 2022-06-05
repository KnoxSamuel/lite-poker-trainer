
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
        console.log(game.hero_card_str);
        game.compareEquities(game.hero_card_str, game.villain_card_str); // Hero > villain
    });

    select('button#villain').mousePressed(function () {
        console.log(game.villain_card_str);
        game.compareEquities(game.villain_card_str, game.hero_card_str); // villain > Hero
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
