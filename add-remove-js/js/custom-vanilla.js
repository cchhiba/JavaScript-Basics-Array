// All custom js Here

// This is global scope
function program() {

  // all of your code
  (function() {
    'use strict';

    var getDiv = document.querySelector('.holder');
    var getBtnA = document.querySelector('#addClassAnimation');
    var getBtnB = document.querySelector('#removeClassAnimation');

    console.log(getDiv);
    console.log(getBtnA);
    console.log(getBtnB);

    // START of onclick event
    getBtnA.onClick = function() {
      console.log(getBtnA + 'hello');
      getDiv.classList.add('animation');

    }; // END of onclick event


  }()); // iife ends
} // end of program function


// calling the function
program();
