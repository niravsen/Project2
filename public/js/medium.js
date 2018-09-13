// LAYOUT PAGE: Buttons to navigate to EASY games 1, 2, 3
var mediumBtnGame1 = $("#btn-medium-game1");
var mediumBtnGame2 = $("#btn-medium-game2");
var mediumBtnGame3 = $("#btn-medium-game3");

// GAME-EASY PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var game1 = $("#game1");
var game2 = $("#game2");
var game3 = $("#game3");
var progressCounter = 1;

$(document).ready(function () {
    mediumBtnGame1.on("click", function () {
        game1.show();
        game2.hide();
        game3.hide();
    });

    mediumBtnGame2.on("click", function () {
        game1.hide();
        game2.show();
        game3.hide();
    });

    mediumBtnGame3.on("click", function () {
        game1.hide();
        game2.hide();
        game3.show();
    });
});