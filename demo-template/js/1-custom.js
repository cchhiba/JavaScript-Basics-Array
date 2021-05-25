// All Custom JS

// Console log the global scope
console.log(window);

// A self invoking function
(function(){
// Write all custom code here

// Setting up all of the tooltips
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip({animation: true, html: false});
	})

// Setting up popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

// Setting up modal

var offBtn = document.querySelector('.fa-power-off');

offBtn.onclick = function () {
	console.log('click working');
		$('#colorSelectModal').modal('show')
};

}());

// Global Wrapping Function ENDS

// tasks
// 1) grab selectColour .value
// 2) must be within onclick event of launch standby button
// 3) console.log to check you have button selected

// task B
// 1) getting icon dom querySelector
// 2) change colour of icon within click event - use hard code - get style fproperty rom directory
// 3) link varible to value
