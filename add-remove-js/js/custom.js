// custom js


$(document).ready(function() {

  // 1. Get the button from dom
  // 2. Add click event to the buttons
  // 3. console.log your var and click event to make sure youve got interval
  // 4. get the .holder elements
  // 5. add the class navy to .holder

  $('#addClassNavy').click(function() {
    // console.log('button working');
    // console.log('.holder');
      $('.holder').addClass('navy');

  }); // end of click event

  $('#removeClassNavy').click(function() {
    // console.log('button working');
    // console.log('.holder');
    $('.holder').removeClass('navy');

  }); // end of click event

}); // end of doc ready
