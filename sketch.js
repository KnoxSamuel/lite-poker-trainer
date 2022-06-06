import Game from './game.js';
import './deck.js';
import './node_modules/pokersolver/pokersolver.js'

let game;

new p5 (function (p5)
{
    p5.setup = function() {
        p5.noCanvas();

        game = new Game(); // game entry point
        console.log(game.deck);

        // select first hand
        p5.select('button#hero').mousePressed(function () {
            game.compareEquities(game.hero_card_str, game.villain_card_str); // Hero > villain
        });
        // select second hand
        p5.select('button#villain').mousePressed(function () {
            game.compareEquities(game.villain_card_str, game.hero_card_str); // villain > Hero
        });

        // reset deck
        p5.select('button#play-again').mousePressed(function () {
            game.reset();
            console.log(game.deck);
        });

        // file writing microservice from teammate
        p5.select('button#download-files').mousePressed(function () {
            console.log("getting decks to output files");
            game.startFileWriting();
            game.downloadPracticeFile();
            game.stopFileWriting();
        });
    }
});

window.p5 = p5;