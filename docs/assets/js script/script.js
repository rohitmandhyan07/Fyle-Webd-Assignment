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

  
  $(document).ready(function(){
		// set up hover panels
		// although this can be done without JavaScript, we've attached these events
		// because it causes the hover to be triggered when the element is tapped on a touch device
		$('.hover').hover(function(){
			$(this).addClass('flip');
		},function(){
			$(this).removeClass('flip');
		});
	});


  