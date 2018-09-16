// LAYOUT PAGE: Buttons to navigate to MEMORY games 1, 2, 3
var memoryBtnGame1 = $("#btn-memory-game1");
var memoryBtnGame2 = $("#btn-memory-game2");
var memoryBtnGame3 = $("#btn-memory-game3");

// GAME-EASY PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var memory1 = $("#memory1");
var memory2 = $("#memory2");
var memory3 = $("#memory3");
var counter = 0;

$(document).ready(function () {
    hardBtnGame1.on("click", function () {
        memory1.show();
        memory2.hide();
        memory3.hide();
    });

    hardBtnGame2.on("click", function () {
        memory1.hide();
        memory2.show();
        memory3.hide();
    });

    hardBtnGame3.on("click", function () {
        memory1.hide();
        memory2.hide();
        memory3.show();
    });
});