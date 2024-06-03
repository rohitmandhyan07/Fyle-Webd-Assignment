const slider = document.querySelector('.slider');
const radioButtons = document.querySelectorAll('.radio-buttons img');

let currentIndex = 0;

function updateSlider() {
    const translateX = -currentIndex * 370; // Adjust based on image width
    slider.style.transform = `translateX(${translateX}px)`;
}

radioButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Initialize slider
updateSlider();