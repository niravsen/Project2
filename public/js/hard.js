// LAYOUT PAGE: Buttons to navigate to EASY games 1, 2, 3
var hardBtnGame1 = $("#btn-hard-game1");
var hardBtnGame2 = $("#btn-hard-game2");
var hardBtnGame3 = $("#btn-hard-game3");

// GAME-EASY PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var game1 = $("#game1");
var game2 = $("#game2");
var game3 = $("#game3");
var progressCounter = 1;

$(document).ready(function () {
    hardBtnGame1.on("click", function () {
        game1.show();
        game2.hide();
        game3.hide();
    });

    hardBtnGame2.on("click", function () {
        game1.hide();
        game2.show();
        game3.hide();
    });

    hardBtnGame3.on("click", function () {
        game1.hide();
        game2.hide();
        game3.show();
    });
});