document.addEventListener('DOMContentLoaded', () => {
  const hoverItems = document.querySelectorAll('.hover-item');
  const mainImage = document.getElementById('main-image');

  hoverItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          const newImage = item.getAttribute('data-image');
          mainImage.src = newImage;
      });
  });
});


  // https://codepen.io/jasonnarciso/pen/JdVPOW
  $('#checkbox').click(function() {
    if ($(this).is(':checked')) {
      $('#submit').removeAttr('disabled');
    } else {
      $('#submit').attr('disabled', 'disabled');
    }
  });


