// custom.js - dom-updating-with-inputs.html

// console.log('file linked?');
// ***Task A: Add comments to the code below.

// ***Task B: Complete the code so when the user clicks the update button, the DOM/HTML is
// updated. Use Pseudo Code

// B1: write code under the button onclick function
// B2: create variable for main div that needs to be changed.
// B3: write if statements for each color options
// b4: test code is changing with onclick
// b5: write getBackgroundColor and getFontSize

// *** Task C:  Create a class that when added to the body with javascript, turns the entire UI
// into a dark theme. This will occur when he #dark button is clicked. You will need both .js
// and css for this.

// C1: create a new click event for the dark button
// C2: create a variable for body and add a class to it
// c3: write styles to change the body to dark mode in your styles section of the dom

// D1: put functions in to a button
// D2: create a cloud object which links to your button Variables
// D3: Setting up a cloud object in the function

// **********



// iife immediately invoked functional expression
(function() {
// cloud object STARTS---------------------------------------------------------
// ** it doesnt matter what the value of the cloudeObject is
var cloudObject = {
  updateBtn: false,
  darkBtn: false
};
// cloud object ENDS---------------------------------------------------------



// manipulation to darkmode STARTS---------------------------------------------
// start of click function
function clickButton () {
// reference the cloud
  cloudObject.darkBtn.onclick = function() {
    // console.log('dark button working');

    // adding a class to body and changing the colour
    var getDark = document.querySelector('body');
    getDark.classList.add('dark-mode');

    // adding a class to .holder div and changing the colour
    var getDarkHolder = document.querySelector('.holder');
    getDarkHolder.classList.add('dark-mode-holder');


    // adding a class to .form-inputs div and changing the colour
    var getDarkFrom = document.querySelector('.form-inputs');
    getDarkFrom.classList.add('dark-mode-form');

  } // End of click function



// manipulation to darkmode ENDS---------------------------------------------


// onclick event on the variable
  cloudObject.updateBtn.onclick = function() {

    // creating varibles to select ids within the dom
    var myDiv = document.querySelector('.holder');
    var getFontColor = document.getElementById('selectFontColor').value;
    var getBackgroundColor = document.getElementById('selectBackgroundColor').value;
    var getFontSize = document.getElementById('selectFontSize').value;


    // logging thr varaibles to the console will let you know if you have gotten them correctly
    console.log(getFontColor);
    console.dir(getFontColor);
    console.log(getFontSize);

    // manipulation the DOM/HTML STARTS---------------------------------------------


    // get the .holder using var myDiv and add the css details and then link it to another varible (make Sure value is added)
    myDiv.style.color = getFontColor;
    myDiv.style.backgroundColor = getBackgroundColor;
    myDiv.style.fontSize = getFontSize;

  }
}; // end of clickButton function

  // manipulation the DOM/HTML ENDS---------------------------------------------


  // start of buttons function---------------------------------------------------
  function buttons() {
      // Use the cloud object to access the variables
    // creating a varible to access the update id (button) in the dom
    var getUpdateButton = document.getElementById('update');
    var getDarkButton = document.getElementById('dark');

      // setting the cloud objects
      cloudObject.updateBtn = getUpdateButton;
      cloudObject.darkBtn = getDarkButton;

      // calling the click functions
      clickButton();
  } // End of buttons function---------------------------------------------------


// init function - calling the function
buttons();

}());
// iife ENDS
