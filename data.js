


  // custom js here -----------------------------------------------------------

$(window).ready(function(){

// creating a click event on the order button
$('#order').click(function () {

  updateDetails();

});
// CLick event ENDS

function updateDetails() {
// Vanilla .js for the rest of my code
var getCustName = document.getElementById('customerName');
console.dir(getCustName.value);


// grab the persons same and log it to the order details
var getCustDetails = document.getElementById('custNameDetails');
getCustDetails.textContent = getCustName.value;

// Grab the buger type and log it to the order form
var getBurger = document.getElementById('burger').value;
console.log(getBurger);

// creating an array of strings and slitting the array so we can ge the price as a new string. it separates the $ and the numbers
var getBurgerArr = getBurger.split('$');
console.log(getBurgerArr[1]);

var getTotal = document.getElementById('total');
console.log(getTotal);
getTotal.textContent = getBurgerArr[1];


var getBurgerDetails = document.getElementById('burgerDetails');
burgerDetails.textContent = document.getElementById('burger').value;

// Grab the Drink type and log it to the order form
var getDrink = document.getElementById('drink').value;
console.log(getDrink);



// creating an array of strings and slitting the array so we can ge the price as a new string. it separates the $ and the numbers
var getDrinkArr = getDrink.split('$');
console.log(getDrinkArr[1]);
console.log(parseFloat(getBurgerArr[1]) + parseFloat(getDrinkArr[1]));

var getTotal = document.getElementById('total');


var getDrinkDetails = document.getElementById('drinkDetails');
drinkDetails.textContent = document.getElementById('drink').value;


getTotal.textContent = (parseFloat(getBurgerArr[1]) + parseFloat(getDrinkArr[1]));

};

var promo1 = ['1 fries', '1 hash brown coupon', '1 free sauce'];
var promo2 = ['1 burger', '1 drink', '1 ice cream'];
var promo3 = ['1 burger', '2 drinks', '2 ice creams', '1 car wash ticket'];

});
