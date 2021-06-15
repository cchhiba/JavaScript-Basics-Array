// custom JavaScript written here:

// doc ready  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

$(document).ready(function() {

  // Data object ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  var accomoObj = {
    hotel: {
      minGuest: 1,
      maxGuest: 3,
      cost: 157,
      minNight: 1,
      maxNight: 5
    },

    hostel: {
      minGuest: 1,
      maxGuest: 8,
      cost: 30,
      minNight: 1,
      maxNight: 10
    },

    glamping: {
      minGuest: 2,
      maxGuest: 4,
      cost: 90,
      minNight: 3,
      maxNight: 10
    },

    house: {
      minGuest: 1,
      maxGuest: 4,
      cost: 240,
      minNight: 2,
      maxNight: 15
    }
  };

  // variablies ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  var guestQty = document.querySelector('.guest-qty');
  var getGuestBtn = document.querySelector('.guest-btn');
  var getGuestText = document.querySelector('.guest-text');
  var getDays = document.querySelector('.days-text');
  var getLocation = document.querySelector('.location-sec-content');
  var getLogo = document.querySelector('.logo3');
  var getAccomodation = document.querySelector('.location-accomodation1');

  // full page ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  function playFullPage() {
// START of plauFullPage - initalizes fullpage plugin
    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: true,
      anchors: ['firstPage', 'secondPage'],
      navigation: false
    });
    // END of playFullPage function
  };

  // video section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  var starVid = document.getElementById("myVideo");
  // START setPlaySpeed function - sets the speed of the video
  function setPlaySpeed() {
    starVid.playbackRate = 0.5;
    // END of setPlaySpeed function
  };


  // guests section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// START of getGuestBtn onclick function - once button is clicked it will call any functions listed within it
  getGuestBtn.onclick = function() {

    playGuest();

// END of getGuestBtn function
  };

// START of playGuest function - finds the guests quantity and output it to the DOM
  function playGuest() {

    // This turns the input value into a number format
    var guestNum = parseInt(guestQty.value);
    // creating a new object property within accomoObj which I can access in any function through dot notation
    accomoObj.gstNum = guestNum;
    console.log(accomoObj.gstNum);


    getGuestText.textContent = (`You have selected ${accomoObj.gstNum} guests`);

// user testing with conditionals
    if (accomoObj.gstNum === 1) {
      console.log('hotel, hostel, house');
    }

    if (accomoObj.gstNum === 2 || accomoObj.gstNum === 3) {
      console.log('hotel, glamping, house');
    }

    if (accomoObj.gstNum === 4) {
      console.log('glamping, house');
    }
// END of playGuest function
  };

// Date Picker section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// START of playDatePicker function - this initializes the datepicker plugin
function playDatePicker() {

// START date picker jquery function
  $(function() {

    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
      // console.log(picker.startDate);
      // console.log(picker.endDate);

      var getDateValues = document.querySelector('.date-picker');

      // converting the date format MM-DD-YYYY in to number from January 1, 1970
      getStartDate = Date.parse(picker.startDate);
      getEndDate = Date.parse(picker.endDate);
      // console.log(getStartDate);
      // console.log(getEndDate);

      // creating a variable which equals the difference between the start and end date
      var dateQty = getEndDate - getStartDate;

      // math.floor rounds the number
      dateQtyTotal = Math.floor(dateQty / 864e5);
      // console.log(dateQtyTotal);

      // console.log(getDays);
      // console.log(accomoObj.gstNum);

      // targets the h3 getDays and output the calulation to the DOM
      getDays.textContent = (`You have selected ${dateQtyTotal} nights`);

// Testing one use case
      if (accomoObj.gstNum === 1 && dateQtyTotal === 2) {
        console.log('your condition is working');

// hide and show accomodation option 1 with the if conditional
        getLocation.style.display = 'none';
        getAccomodation.style.display = 'block';

      }

    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');

    });
// END date picker jquery function
  });

// END of playDatePicker function
};

// Location section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// LOGO hide and show code testing - apply click logic to markers on map

  // getLogo.onclick = function() {
  //   console.log('working?');
  // };

  // $(getLogo).click(function() {
  //   $(getLocation).hide(),
  //     $(getAccomodation).show();
  // });


  // Mapbox section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// START if playMap function - creates the map and map object
function playMap() {

  mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vhc2hlbGxzbnoiLCJhIjoiY2twNG9lZmc2MDQ1bzJ1cjBjN3VnbnQxMSJ9.1jS2lhqq4jZ5bBGTda1prA';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/seashellsnz/ckpugg6j700v218nw6gw3r9na', // style URL
    center: [174.422942, -41.590179], // starting position [lng, lat]
    zoom: 4.5 // starting zoom
  });

  var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [174.779822, -41.278971]
    },
    properties: {
      title: 'Mapbox',
      description: 'Yoobee'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-41.227157, 174.874180]
    },
    properties: {
      title: 'Mapbox',
      description: 'chch'
    }
  }]
};


// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});

// END of playMap function
};
  //modal ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// START of playModal - creates the modal
  function playModal() {

// START of modal plugin - demo02 is the id that belongs to the buttons attribute tag
    $("#demo02").animatedModal({
      animatedIn: 'lightSpeedIn',
      animatedOut: 'bounceOutDown',
      color: '#444444',
      // Callbacks
      // this seems to be methods functions within an object
      beforeOpen: function() {
        console.log("The animation was called");
      },
      afterOpen: function() {
        console.log("The animation is completed");
      },
      beforeClose: function() {
        console.log("The animation was called");
      },
      afterClose: function() {
        console.log("The animation is completed");
        // after close you got to page 4
        $.fn.fullpage.moveTo(4);
      }
    // END of modal plugin
    });

// END of playModal
  };

  // calling the functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  playFullPage();
  playModal();
  setPlaySpeed();
  playDatePicker();
  playMap();

  // end of document ends
});
