const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const errorImg = document.getElementById('errorIMG');
const errorImg2 = document.getElementById('errorIMG2');
const errorImg3 = document.getElementById('errorIMG3');
const errorImg4 = document.getElementById('errorIMG4');

const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const error3 = document.getElementById('error3');
const error4 = document.getElementById('error4');

form.addEventListener('submit', (e) => {

    if (firstName.value === '' || firstName.value == null) {
        error.style.display = "flex";
        errorImg.style.opacity = "1";
        firstName.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    if (lastName.value === '' || lastName.value == null) {
        error2.style.display = "flex";
        errorImg2.style.opacity = "1";
        lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    if (email.value === '' || email.value == null) {
        error3.style.display = "flex";
        errorImg3.style.opacity = "1";
        email.style.border = "2px solid hsl(0, 100%, 74%)";
    }
    if (password.value === '' || password.value == null) {
        error4.style.display = "flex";
        errorImg4.style.opacity = "1";
        password.style.border = "2px solid hsl(0, 100%, 74%)";
    }

    e.preventDefault()
});