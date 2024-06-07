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


  
  $(document).ready(function() {
    let currentIndex = 0;
    const totalImages = 3;
    const interval = 3000; // Change image every 3 seconds

    function updateRadioButtons(index) {
        $('.radio-buttons img').removeClass('active').addClass('inactive');
        $(`#dot-${index -1 }`).removeClass('inactive').addClass('active');


        

        // $('.radio-buttons img').removeClass('active').addClass('inactive');
        // $(`#dot-${index}`).removeClass('display').addClass('display-none');
        // $(`#dot-${index}`).removeClass('display-none').addClass('display');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        $('.slider').css('transform', `translateX(-${currentIndex * 33.33}%)`);
        updateRadioButtons(currentIndex);
    }

    setInterval(nextSlide, interval);
    updateRadioButtons(currentIndex);

    $('.radio-buttons img').click(function() {
        const id = $(this).attr('id');
        currentIndex = parseInt(id.split('-')[1]) - 1;
        $('.slider').css('transform', `translateX(-${currentIndex * 33.33}%)`);
        updateRadioButtons(currentIndex);
    });
});
