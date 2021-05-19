// All custom js here
console.log('working....');
// This is global
// iife immediately invoked functional expression
(function() {
  // Vars at the top of your code
  var getDiv = document.querySelector('.holder');
  var getBtnA = document.querySelector('#addClassAnimation');
  var getBtnB = document.querySelector('#removeClassAnimation');
  var getBtnC = document.querySelector('#addClassNavy');
  var getBtnD = document.querySelector('#removeClassNavy');
  // Setup click events
  getBtnA.onclick = function () {
    // calling the functions
    startAnimation();
  };
  getBtnB.onclick = function () {
    // calling the functions
    endAnimation();
  };
  getBtnC.onclick = function () {
    // calling the functions
    changeColor();
  };
  getBtnD.onclick = function () {
    // calling the functions
      removeColor();
  };
  function changeColor () {
    console.log('btn c working');
    // Adding a class with vanilla .js
    getDiv.classList.add('navy');
  }
  function removeColor () {
    console.log('btn d working');
    // Removing a class with vanilla .js
    getDiv.classList.remove('navy');
  }
  function startAnimation () {
    console.log('working vanilla js....');
    // Adding a class with vanilla .js
    getDiv.classList.add('animation');
  }
  function endAnimation () {
    console.log('working vanilla js....');
    // Removing a class with vanilla .js
    getDiv.classList.remove('animation');
  }
}());
// iife ENDS
