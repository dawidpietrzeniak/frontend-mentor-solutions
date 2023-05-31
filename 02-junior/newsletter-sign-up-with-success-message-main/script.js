const subscribeButton = document.getElementById('subscribe');
const emailInput = document.getElementById('emailInput');
const signUpForm = document.querySelector('.sign-up-form');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.getElementById('error');

function validateEmail() {
    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorMessage.style.display = 'flex';
        emailInput.style.color = 'var(--Tomato)';
        emailInput.style.borderColor = 'var(--Tomato)';
        emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, 15%)';
        return false;
    }

    errorMessage.style.display = 'none';
    emailInput.style.borderColor = 'var(--Grey)';
    emailInput.style.color = 'var(--Dark-Slate-Grey)';
    emailInput.style.backgroundColor = 'var(--White)';

    subscribeButton.addEventListener('click', () => {
        signUpForm.style.display = 'none';
        successMessage.style.display = 'flex';
    })

    return true;
}