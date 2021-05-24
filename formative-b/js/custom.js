// custom JavaScript written here

// Pusedo code STARTS **********************************************************
// Task one - initial set up - read through css, html and review instructions
// 1a: create a function to wrap your code in
// 1b. create a variable for the update btn
// 1c: create a click function and test
// 1d: call function at end of page
// Task two - manipulate image
    // 2a: inside the click function create a variable which targets the image select
        // (add .value so js knows to reference the option value)
    // 2b: create a varible which targets the card class (add class in DOM)
    // 2c: write a conditional which if christmas value is selected (console log here)
    // 2d: once if conditional is captured in the console, use new var to add src mantipulation
    // 2e: repeat rule once its working for Christams image
// Task three - manitpulate background colour
    // 3a: create var and capture background select id (value)
    // 3b: create var and capture card id
    // 3c: console log both vars
    // 3d: create if conditional that target a background colour value. log to the console
    // 3e: use add and remove class referencing the classes in css
// Task four - manitpulate fonts
    // 4a: repeat steps above except target font ids and classes
// Task five - manitpulate border
    // 5a: repeat steps above except target border ids and classes
// Task six - grab textarea and output to card class
    // a: find out where in the html the message is meant to go.
    // b: create a varible for getting the textarea // IDEA:
    // c: create a varible for getting the h1 class, create a new one
    // d: use .textContent to output the message to the dom
// Task seven - wrap each section in its own function and call each function within

// Pusedo code ENDS **********************************************************

// Immediately invoked function expression
(function() {

// START of updateAll function::::::::::::::::::::::::::::::::::::::::::::::::
function updateAll () {
  var getSubmitBtn = document.querySelector('#submit');
  // start of onclick function------------------------------------------------
getSubmitBtn.onclick = function () {
  console.log('click working');
    updateMessage();
    updateBorder();
    updateFont();
    updateBackground();
    updateImage();
};

// update image START ------------------------------------------------------
function updateImage () {
    var getImage = document.querySelector('#image').value;
    var getImageType = document.querySelector('.img-type');
      if (getImage === 'christmas') {
        getImageType.src='assets/christmas.jpg';
      }
      if (getImage === 'valentines') {
        getImageType.src='assets/valentines.jpg';
      }
      if (getImage === 'birthday') {
        getImageType.src='assets/birthday.jpg';
      }
};

// Update background START ---------------------------------------------------
function updateBackground () {
    var getbkground = document.querySelector('#background').value;
    var getbkgroundColor = document.querySelector('.card');

      if (getbkground === 'graphite') {
        getbkgroundColor.classList.add('graphiteBackground');
        getbkgroundColor.classList.remove('roseBackground', 'celadonBackground');
      }
      if (getbkground === 'rose') {
        getbkgroundColor.classList.add('roseBackground');
        getbkgroundColor.classList.remove('graphiteBackground', 'celadonBackground');
      }
      if (getbkground === 'celadon') {
        getbkgroundColor.classList.add('celadonBackground');
        getbkgroundColor.classList.remove('roseBackground', 'graphiteBackground');
      }
};

// Update font START ---------------------------------------------------------
function updateFont () {
    var getFont = document.querySelector('#font').value;
    var getFontType = document.querySelector('.font-type');

      if (getFont === 'handwriting') {
        getFontType.classList.add('handwriting');
        getFontType.classList.remove('sketch', 'print');
      }

      if (getFont === 'print') {
        getFontType.classList.add('print');
        getFontType.classList.remove('sketch', 'handwriting');
      }
      if (getFont === 'sketch') {
        getFontType.classList.add('sketch');
        getFontType.classList.remove('print', 'handwriting');
      }
};

// Update border START -------------------------------------------------------
function updateBorder () {
    var getBorder = document.querySelector('#border').value;
    var getBorderType = document.querySelector('.border-type');

      if (getBorder === 'thin') {
        console.log('thin works');
        getBorderType.classList.add('smallBorder');
        getBorderType.classList.remove('bigBorder', 'filledBorder', 'noneBorder');
      }
      if (getBorder === 'thick') {
        getBorderType.classList.add('bigBorder');
        getBorderType.classList.remove('smallBorder', 'filledBorder', 'noneBorder');
      }
      if (getBorder === 'filled') {
        getBorderType.classList.add('filledBorder');
        getBorderType.classList.remove('smallBorder', 'bigBorder', 'noneBorder');
      }
      if (getBorder === 'none') {
        getBorderType.classList.add('noneBorder');
        getBorderType.classList.remove('smallBorder', 'bigBorder', 'filledBorder');
      }
};


// Update message START ------------------------------------------------------

function updateMessage () {
    var getMessage = document.querySelector('#message').value;
    var getMessageType = document.querySelector('.message-type');
    getMessageType.textContent = getMessage;
};



}; // end of updateAll function ::::::::::::::::::::::::::::::::::::::::::::::::

// calling the wrap function
updateAll();


}()); // end of iife
