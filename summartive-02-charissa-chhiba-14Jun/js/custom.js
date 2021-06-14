// custom JavaScript written here:

$(document).ready(function() {

  var dataObj = {
    hotel: {
      guests: [1, 2, 3],
      cost: 157,
      minNight: 1,
      maxNight: 5
    },

    hostel: {
      guests: [1],
      cost: 30,
      minNight: 1,
      maxNight: 10
    },

    glamping: {
      guests: [2, 3, 4],
      cost: 90,
      minNight: 3,
      maxNight: 10
    },

    House: {
      guests: [1, 2, 3, 4],
      cost: 240,
      minNight: 2,
      maxNight: 15
    }
  };


  // full page ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors: ['firstPage', 'secondPage'],
    navigation: false
  });

  //modal ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  $("#demo02").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#444444',
    // Callbacks
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
    // end of enimatedModal function
  });

  // video section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  var vid = document.getElementById("myVideo");

  function setPlaySpeed() {
    vid.playbackRate = 0.5;
  }
  // firing the function
  setPlaySpeed();

  // guests section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    var guestQty = document.querySelector('.guest-qty');
    var getGuestBtn = document.querySelector('.guest-btn');
    var getGuestText = document.querySelector('.guest-text');


    getGuestBtn.onclick = function() {

      getGuestText.textContent = (`You have selected ${guestQty.value}`);
      console.dir(guestQty);
        if (guestQty.valueAsNumber === 1) {
          console.log('hotel, hostel, house');
        }

        if (guestQty.valueAsNumber === 2 || guestQty.valueAsNumber === 3) {
          console.log('hotel, glamping, house');
        }

        if (guestQty.valueAsNumber === 4) {
          console.log('glamping, house');
        }

    };


  // Location section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  var getLocation = document.querySelector('.location-sec-content');
  var getLogo = document.querySelector('.logo3');
  var getAccomodation = document.querySelector('.location-accomodation1');

  // getLogo.onclick = function() {
  //   console.log('working?');
  // };

  $(getLogo).click(function() {
    $(getLocation).hide(),
      $(getAccomodation).show();
  });


  // Date Picker section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  $(function() {

    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
    });

  });

  // Mapbox section ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  mapboxgl.accessToken = 'pk.eyJ1Ijoic2Vhc2hlbGxzbnoiLCJhIjoiY2twNG9lZmc2MDQ1bzJ1cjBjN3VnbnQxMSJ9.1jS2lhqq4jZ5bBGTda1prA';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/seashellsnz/ckpugg6j700v218nw6gw3r9na', // style URL
    center: [174.422942, -41.590179], // starting position [lng, lat]
    zoom: 4.5 // starting zoom
  });






  // end of document ends
});
