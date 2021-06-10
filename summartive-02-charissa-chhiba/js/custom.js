// custom JavaScript written here:

$(document).ready(function() {
  $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: true,
      anchors:['firstPage', 'secondPage'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom'
  });

      //demo 02
    $("#demo02").animatedModal({
      animatedIn:'lightSpeedIn',
      animatedOut:'bounceOutDown',
      color:'#444444',
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

      });
});
