// custom JavaScript written here


// Object pattern Starts;
var card = {

  getSubmitBtn: document.querySelector('#submit'),

  // start of init function method ::::::::::::::::::::::::::::::::::::::::::::
  init: function () {
    console.log('init working');

      // start of onclick function within init method --------------------------
      card.getSubmitBtn.onclick = function () {
        console.log('button click working');
        card.updateImageMethod();
        card.updateBackgroundMethod();
        card.updateFontMethod();
        card.updateBorderMethod();
        card.updateMessageMethod();
      };
      // end of onclick function within inin method ---------------------------

      // ***** This is an example of a function within a function method*******
      // // start of updateImage function ---------------------------------------
      // function updateImage () {
      //
      //   var getImage = document.querySelector('#image').value;
      //   var getImageType = document.querySelector('.img-type');
      //
      //   if (getImage === 'christmas') {
      //     getImageType.src='assets/christmas.jpg';
      //   }
      //   if (getImage === 'valentines') {
      //     getImageType.src='assets/valentines.jpg';
      //   }
      //   if (getImage === 'birthday') {
      //     getImageType.src='assets/birthday.jpg';
      //   }
      //
      // }; // end of updateImage function ------------------------------------

  }, // end of init function method ::::::::::::::::::::::::::::::::::::::::::::

// ***** This is an a function method *******
  // start of updateImageMethod ::::::::::::::::::::::::::::::::::::::::::::
  updateImageMethod: function () {
      var getImage = document.querySelector('#image').value;
      var getImageType = document.querySelector('.img-type');

      if (getImage === 'christmas') {
          getImageType.src='assets/christmas.jpg';
        }
      if (getImage === 'valentines') {
        getImageType.src='assets/valentines.jpg';
      }
      if (getImage === 'birthday') {
        getImageType.src='assets/birthday.jpg';
      }
  },

  // start of updateBackgroundMethod ::::::::::::::::::::::::::::::::::::::::::::
  updateBackgroundMethod: function () {
    var getbkground = document.querySelector('#background').value;
    var getbkgroundColor = document.querySelector('.card');

      if (getbkground === 'graphite') {
        getbkgroundColor.classList.add('graphiteBackground');
        getbkgroundColor.classList.remove('roseBackground', 'celadonBackground');
      }
      if (getbkground === 'rose') {
        getbkgroundColor.classList.add('roseBackground');
        getbkgroundColor.classList.remove('graphiteBackground', 'celadonBackground');
      }
      if (getbkground === 'celadon') {
        getbkgroundColor.classList.add('celadonBackground');
        getbkgroundColor.classList.remove('roseBackground', 'graphiteBackground');
      }
  },
  // start of updateBackgroundMethod :::::::::::::::::::::::::::::::::::::::::::
  updateFontMethod: function () {
    var getFont = document.querySelector('#font').value;
    var getFontType = document.querySelector('.font-type');

      if (getFont === 'handwriting') {
        getFontType.classList.add('handwriting');
        getFontType.classList.remove('sketch', 'print');
      }

      if (getFont === 'print') {
        getFontType.classList.add('print');
        getFontType.classList.remove('sketch', 'handwriting');
      }
      if (getFont === 'sketch') {
        getFontType.classList.add('sketch');
        getFontType.classList.remove('print', 'handwriting');
      }
  },
  // start of updateBorderMethod :::::::::::::::::::::::::::::::::::::::::::::::
    updateBorderMethod: function () {
      var getBorder = document.querySelector('#border').value;
      var getBorderType = document.querySelector('.border-type');

        if (getBorder === 'thin') {
          console.log('thin works');
          getBorderType.classList.add('smallBorder');
          getBorderType.classList.remove('bigBorder', 'filledBorder', 'noneBorder');
        }
        if (getBorder === 'thick') {
          getBorderType.classList.add('bigBorder');
          getBorderType.classList.remove('smallBorder', 'filledBorder', 'noneBorder');
        }
        if (getBorder === 'filled') {
          getBorderType.classList.add('filledBorder');
          getBorderType.classList.remove('smallBorder', 'bigBorder', 'noneBorder');
        }
        if (getBorder === 'none') {
          getBorderType.classList.add('noneBorder');
          getBorderType.classList.remove('smallBorder', 'bigBorder', 'filledBorder');
        }
    },
  // start of updateMessageMethod :::::::::::::::::::::::::::::::::::::::::::::::
  updateMessageMethod: function () {
    var getMessage = document.querySelector('#message').value;
    var getMessageType = document.querySelector('.message-type');
    getMessageType.textContent = getMessage;
  }

}; // end of card method

// calling the init method within the card object
card.init();
