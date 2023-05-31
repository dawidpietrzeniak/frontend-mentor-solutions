const submitButton = document.getElementById('submitButton');
const selectedRating = document.getElementById('selectedRating');

const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');

const rates = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
    ratingState.style.display = 'none';
    thankYouState.style.display = 'flex';
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        selectedRating.textContent = rate.innerHTML;
    })
})
