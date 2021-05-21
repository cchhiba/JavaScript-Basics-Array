// custom JavaScript written here

// console.log('file linked and working');

// Task one - initial set up
// 1a: create a function to wrap your code in
// 1b. create a variable for the update btn
// 1c: create a click function and test


// Task two - background colour
// 2a: create an object to contain the imabackgroundge data
// 2b: create an id for each background
// 2c: create a variable for each background id
// 2d: create an if statement for each condition





// START of updateAll function
function updateAll () {

// object data STARTS ----------------------------------------------------------



// object data ENDS ----------------------------------------------------------

// variables START -------------------------------------------------------------
  var getSubmitBtn = document.querySelector('#submit');
  var getImageCon = document.querySelector('#image').value;


  var getCardDiv = document.querySelector('#cardDiv');
  var getImg = document.querySelector('.img-class');
  // console.dir(typeof getImageCon);
  // console.dir(getCardDiv);
  // console.log(getbkground);
  // console.log(getbkgroundColor);
// variables END ---------------------------------------------------------------

// onclick START -------------------------------------------------------------

// Update background START ------------------------------------------------------

  getSubmitBtn.onclick = function () {

    var getbkground = document.querySelector('#background').value;
    var getbkgroundColor = document.querySelector('.card');


      console.log(getbkgroundColor);
      console.log('button working');
      // console.log(getbkground);

      if (getbkground === 'graphite') {
        // console.log('graphite works');
        getbkgroundColor.classList.add('graphiteBackground');
      }

      if (getbkground === 'rose') {
        // console.log('graphite works');
        getbkgroundColor.classList.add('roseBackground');
      }
// Update background END ------------------------------------------------------
// update image START ----------------------------------------------------------

    var getImageCon = document.querySelector('#image').value;
    var getImg = document.querySelector('.img-class');

      if (getImageCon === 'christmas') {
        // console.log('img works');
        getImg = getImg.src="assets/christmas.jpg";
      }

      if (getImageCon === 'valentines') {
        getImg = getImg.src="assets/valentines.jpg";
      }

      if (getImageCon === 'birthday') {
        getImg = getImg.src="assets/birthday.jpg";
      }


// update image END ----------------------------------------------------------

    // alert(getImage.selectedIndex);
    // if (getImage.selectedIndex[0]) {
    //   getImage.src = getImage.src="./christmas.jpg";
    // }
      // if (getbkground.value = 'Graphite') {
      //   console.log(getbkground.value);
        // getbkgroundColor.classList.add('dark-mode-form');
          // getCardDiv.style.backgroundColor = 'red';



  }; // end of click function
// onclick ENDS -------------------------------------------------------------



}; // end of updateAll function

// calling the wrap function
updateAll();
