// const slider = document.querySelector('.slider');
// const radioButtons = document.querySelectorAll('.radio-buttons img');

// let currentIndex = 0;

// function updateSlider() {
//     const translateX = -currentIndex * 370; // Adjust based on image width
//     slider.style.transform = `translateX(${translateX}px)`;
// }

// radioButtons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         currentIndex = index;
//         updateSlider();
//     });
// });

// // Initialize slider
// updateSlider();

const slider = document.querySelector('.slider');
  const radioButtons = document.querySelectorAll('.radio-buttons img');

  let currentIndex = 0;

  function updateSlider() {
    const translateX = -currentIndex * 400; // Adjust based on image width + margin
    slider.style.transform = `translateX(${translateX}px)`;

    // Update active class on radio buttons
    radioButtons.forEach((button, index) => {
      if (index === currentIndex) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  radioButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Initialize slider
  updateSlider();

  // checkbox checked or not for submit button
  // https://www.kodyaz.com/articles/javascript-enable-disable-button-by-values-of-checkboxes-checked.aspx

  // https://codepen.io/jasonnarciso/pen/JdVPOW
  $('#checkbox').click(function() {
    if ($(this).is(':checked')) {
      $('#submit').removeAttr('disabled');
    } else {
      $('#submit').attr('disabled', 'disabled');
    }
  });