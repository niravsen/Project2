// LAYOUT PAGE: Buttons to navigate to FILL IN THE BLANKS games 1, 2, 3
var fillBtnGame1 = $("#btn-fill-game1");
var fillBtnGame2 = $("#btn-fill-game2");
var fillBtnGame3 = $("#btn-fill-game3");

// FILL GAME PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var fill1 = $("#fill1");
var fill2 = $("#fill2");
var fill3 = $("#fill3");
var counter = 0;

$(document).ready(function () {
    easyBtnGame1.on("click", function () {
        fill1.show();
        fill2.hide();
        fill3.hide();
    });

    easyBtnGame2.on("click", function () {
        fill1.hide();
        fill2.show();
        fill3.hide();
    });

    easyBtnGame3.on("click", function () {
        fill1.hide();
        fill2.hide();
        fill3.show();
    });

    
});