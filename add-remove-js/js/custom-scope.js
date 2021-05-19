// All custom js here

console.log('working....');
// This is global

// iife immediately invoked functional expression
(function() {

  var cloudObject = {
    div: false,
    btnA: false,
    btnB: false
  };

  function setupClicks() {

    // Setup click events - you need to call object . property
    cloudObject.btnA.onclick = function() {
      // calling the functions
      startAnimation();
    };

    cloudObject.btnB.onclick = function() {
      // calling the functions
      endAnimation();
    };
  }

  // *** Vars below are inside the function scope // Hidden from external code
  // Use the cloud object to access them
  function setupElements() {



    var getDiv = document.querySelector('.holder');
    var getBtnA = document.querySelector('#addClassAnimation');
    var getBtnB = document.querySelector('#removeClassAnimation');

    // setting up a cloud Object
    cloudObject.div = getDiv;
    cloudObject.btnA = getBtnA;
    cloudObject.btnB = getBtnB;

    // setpupClicks - need to call this function.
    setupClicks();

  }



  function startAnimation() {
    console.log('working vanilla js....');
    // Adding a class with vanilla .js
    cloudObject.div.classList.add('animation');
  }

  function endAnimation() {
    console.log('working vanilla js....');
    // Removing a class with vanilla .js
    cloudObject.div.classList.remove('animation');
  }


// init function - calling the function
    setupElements();

}());
// iife ENDS
