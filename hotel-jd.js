var data = {
  holidayOne: {
    place: 'Samoa',
    price: 889
  },
  holidayTwo: {
    place: 'Fiji',
    price: 759
  },
  hotelOne: {
    name: 'Hilton',
    pricePerNight: 269
  },
  hotelTwo: {
    name: 'Sheraton',
    pricePerNight: 249
  }
}
var prices = [];
console.log();


// START of var --------------------------------------------------------

// console.log("working");

// get button from the dom and create a new var
var getBtn = document.querySelector('.btn');

var getLocation = document.querySelector('#holidaySlt').value;


var getHotel = document.querySelector('#hotelSlt').value;


// END of var --------------------------------------------------------

// START of onclick function  --------------------------------------------------------
// add the new button var to a click event
getBtn.onclick = function() {

// console.log('are you working?');
// console.dir(getLocation);
if (getLocation === 'Samoa $889.00') {
  console.log('hello samoa');
} else if (getLocation === 'Fiji $759.00') {
  console.log('hello fiji');
} else if (getHotel === 'Hilton $269.00'){
  console.log('hello Hilton');
} else if (getHotel === 'Sheraton $249.00') {
  console.log('hello Sheraton');
} else {
  console.log('not a valid selection');
}









}; // end of getBtn onclick function
// END of onclick function  --------------------------------------------------------
