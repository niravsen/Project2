// INDEX PAGE: Set variables for user input fields.
var firstName = $("#first-name");
var lastName = $("#last-name");
var age = $("#age");
var country = $("#country");

// INDEX PAGE: This is the index page submit button.
var indexSubmit = $("#index-submit");

// LAYOUT PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var language = $("#language");
var level = $("#level");
var games = $("#games");
var indexButtons = $("#indexBtns");
var signUp = $("#signUp");
var signIn = $("#signIn");

// LAYOUT PAGE: These are the buttons to navigate through the layout page.
var htmlBtn = $("#html-btn");
var cssBtn = $("#css-btn");
var signInBtn = $("#signInBtn");
var signUpBtn = $("#signUpBtn");

$(document).ready(function() {
  // INDEX PAGE: On click event for submit button on index page, to submit user information to database.
  indexSubmit.on("click", function() {
    db.User.create({
      first_name: firstName.val().trim(),
      last_name: lastName.val().trim(),
      age: parseInt(age.val().trim()),
      country: country.val().trim()
    })
  })

  // LAYOUT PAGE: When the use selects a language, it will hide() the language div, and show() the level div.
  htmlBtn.on("click", function() {
    language.hide();
    level.show();
    games.hide();  
  });

  cssBtn.on("click", function() {
    language.hide();
    level.show();
  });

  signIn.hide();
  signUp.hide();

  signInBtn.on("click", function() {
    indexButtons.hide();
    signUp.hide();
    signIn.show();
  });

  signUpBtn.on("click", function() {
    indexButtons.hide();
    signIn.hide();
    signUp.show();
  });
});