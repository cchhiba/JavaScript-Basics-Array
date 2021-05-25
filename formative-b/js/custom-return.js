// custom JavaScript written here

// submitBtn function START ----------------------------------------------------
function submitBtn () {
  var getSubmitBtn = document.querySelector('#submit');
  return getSubmitBtn;
};

// click START ----------------------------------------------------------------
submitBtn().onclick = function () {
  updateMessage();
  updateBorder();
  updateFont();
  updateBackground();
  updateImage();
};

// update image START ------------------------------------------------------
function updateImage () {
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
};

// Update background START ---------------------------------------------------
function updateBackground () {
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
};

// Update font START ---------------------------------------------------------
function updateFont () {
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
};

// Update border START -------------------------------------------------------
function updateBorder () {
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
};


// Update message START ------------------------------------------------------

function updateMessage () {
    var getMessage = document.querySelector('#message').value;
    var getMessageType = document.querySelector('.message-type');
    getMessageType.textContent = getMessage;
};
