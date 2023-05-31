const bill = document.getElementById('bill');
const resetButton = document.getElementById('resetButton');
const customTip = document.getElementById('customTip');
const totalPrice = document.getElementById('totalPrice');
const tipAmount = document.getElementById('tipAmount');
const numberOfPeople = document.getElementById('numberOfPeople');
const error = document.getElementById('error');
const percentages = document.querySelectorAll('#btn');

percentages.forEach((buttonNumber) => {
    buttonNumber.addEventListener('click', () => {
        if (numberOfPeople.value > 0) {
            error.style.display = 'none';

            let sum = bill.value * (1 + buttonNumber.innerHTML / 100) / numberOfPeople.value;
            let tip = (bill.value * (1 + buttonNumber.innerHTML / 100) - bill.value) / numberOfPeople.value;

            tipAmount.textContent = '$' + tip.toFixed(2);
            totalPrice.textContent = '$' + sum.toFixed(2);
        } else {
            error.style.display = 'flex';
        }
    })
})

function calculatingCustomTip() {
    if (customTip.value > 0) {
        let sum = bill.value * (1 + customTip.value / 100) / numberOfPeople.value;
        let tip = (bill.value * (1 + customTip.value / 100) - bill.value) / numberOfPeople.value;
        tipAmount.textContent = '$' + tip.toFixed(2);
        totalPrice.textContent = '$' + sum.toFixed(2);
    }
}

customTip.addEventListener('input', calculatingCustomTip());

resetButton.addEventListener('click', () => {
    error.style.display = 'none';
    customTip.value = '';
    bill.value = '';
    numberOfPeople.value = '';
    tipAmount.innerHTML = '$0.00';
    totalPrice.innerHTML = '$0.00';
})