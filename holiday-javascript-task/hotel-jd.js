var data = {
  holidayOne: {
    place: 'Samoa',
    price: 889,
    image: "./samoa-image.png"
  },
  holidayTwo: {
    place: 'Fiji',
    price: 759,
    image: "./fiji-image.png"
  },
  hotelOne: {
    name: 'Hilton',
    pricePerNight: 269,
    image: "./hilton-image.png"
  },
  hotelTwo: {
    name: 'Sheraton',
    pricePerNight: 249,
    image: "./sher-image.png"
  }
}
var prices = [];
console.log(prices);
// START of var --------------------------------------------------------
// console.log("working");
// get button from the dom and create a new var
var getBtn = document.querySelector('.btn');
// END of var --------------------------------------------------------
// START of onclick function  --------------------------------------------------------
// add the new button var to a click event
getBtn.onclick = function() {
  var getLocation = document.querySelector('#holidaySlt').value;
  var getHotel = document.querySelector('#hotelSlt').value;
  var getTotal = document.getElementById('totalCosts');
  // var getSamoaImg = document.getElementById('samoaImg');
  // var getFijiImg = document.getElementById('fijiImg');
  // var getHitonImg = document.getElementById('hiltonImg');
  // var getSherImg = document.getElementById('sherImg');
  var getCardImg1 = document.getElementById('cardImg1');
  var getCardImg2 = document.getElementById('cardImg2');
  // console.log(getTotal);

// if statements START-----------------------------------------------------------
if (getLocation === 'Samoa $889.00' && getHotel === 'Hilton $269.00') {
		// console.log(data.holidayOne.price + data.hotelOne.pricePerNight);
    getTotal.textContent = data.holidayOne.price + data.hotelOne.pricePerNight;
    // console.dir(getSamoaImg);
    // getSamoaImg.style.display = 'inline';
    // getHitonImg.style.display = 'inline';
    // getFijiImg.style.display = 'none';
    // getSherImg.style.display = 'none';
    getCardImg1.src = data.holidayOne.image;
    getCardImg2.src = data.hotelOne.image;
	}
	if  (getLocation === 'Fiji $759.00' && getHotel === 'Sheraton $249.00') {
		// console.log(data.holidayTwo.price + data.hotelTwo.pricePerNight)
    // getTotal.textContent = data.holidayTwo.price + data.hotelTwo.pricePerNight;
    // getFijiImg.style.display = 'inline';
    // getSherImg.style.display = 'inline';
    // getSamoaImg.style.display = 'none';
    // getHitonImg.style.display = 'none';
    getCardImg1.src = data.holidayTwo.image;
    getCardImg2.src = data.hotelTwo.image;
	}
	if (getHotel === 'Hilton $269.00' && getLocation === 'Fiji $759.00') {
		// console.log(data.hotelOne.pricePerNight + data.holidayTwo.price);
    getTotal.textContent = data.hotelOne.pricePerNight + data.holidayTwo.price;
    // getHitonImg.style.display = 'inline';
    // getFijiImg.style.display = 'inline';
    // getSherImg.style.display = 'none';
    // getSamoaImg.style.display = 'none';
    getCardImg1.src = data.holidayTwo.image;
    getCardImg2.src = data.hotelOne.image;
  	}
	if (getHotel === 'Sheraton $249.00' && getLocation === 'Samoa $889.00') {
		// console.log(data.hotelTwo.pricePerNight + data.holidayOne.price);
    getTotal.textContent = data.hotelTwo.pricePerNight + data.holidayOne.price;
    // getSherImg.style.display = 'inline';
    // getSamoaImg.style.display = 'inline';
    // getHitonImg.style.display = 'none';
    // getFijiImg.style.display = 'none';
    getCardImg1.src = data.holidayOne.image;
    getCardImg2.src = data.hotelTwo.image;
	}

// if statements END-----------------------------------------------------------

//calculating total STARTS ---------------------------------------------------
// Convert the string into an array with the split() method, split at the $ sign mark
// var getLocationArr = getLocation.split('$');
// console.log(getLocationArr[1] + ' this is the cost of the holiday location');
// var getHotelArr = getHotel.split('$');
// console.log(getHotelArr[1] + ' this is the cost of the holiday hotel');
//calculating total ENDS ---------------------------------------------------

// Total section STARTS --------------------------------------------------------
// Get the total/amount element from the details page
 // var getTotal = document.getElementById('totalCosts');
// Add the 2 prices together to get the total
// var finalTotal =  parseFloat(getLocationArr[1]) + parseFloat(getHotelArr[1]);
// Log the total to the console
// console.log(finalTotal.toFixed(2));
// Add the total price to the element
// getTotal.textContent = '$' + finalTotal.toFixed(2);
// Total section ENDS --------------------------------------------------------


// name section STARTS --------------------------------------------------------
// creating a variable to get the customers name
var getCustName = document.getElementById('name');
// console.dir(getCustName.value);
//useing the var to update the text content in the DOM
var getCustDetails = document.getElementById('customerNameDetails');
getCustDetails.textContent = getCustName.value;
// name section Ends ----------------------------------------------------------

// image section STARTS --------------------------------------------------------
	// var getImage = document.getElementById('cardImg');
	// if (getLocation === 'Fiji $759.00') {
	// 	getImage.src = getImage.src="./holiday2.png";
	// } else if (getLocation === 'Samoa $889.00'){
	// 	getImage.src = getImage.src="./holiday3.png";
	// } else {
	// 	getImage.src = getImage.src="./holiday.png";
	// }
// image section ENDS ----------------------------------------------------------
}; // end of getBtn onclick function
// END of onclick function  ----------------------------------------------------
