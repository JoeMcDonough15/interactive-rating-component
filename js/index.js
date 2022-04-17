
const submitButton = document.getElementById('rating-submit-button');
const ratingCard = document.getElementById('rating');
const thankYouCard = document.getElementById('thank-you');  
const radios = document.querySelectorAll('input[type=radio]');
const thankYouSmallHeader = document.getElementById('thank-you-small-header');


radios.forEach((radio) => {
    radio.addEventListener('click', (e) => {
        if (e.target.checked) {
            thankYouSmallHeader.innerText = `You Selected ${e.target.nextElementSibling.innerText
} out of 5`;
        }
    });
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    ratingCard.classList.add('hide');
    thankYouCard.classList.remove('hide');
});






