document.getElementById('add-money-button').addEventListener('click', function(event) {
    event.preventDefault();

    const enterAmount = document.getElementById('enter-amount').value;
    const amountNumber = parseFloat(enterAmount);
    const pin = document.getElementById('enter-pin').value;

    if (pin === '1234') {
        const previousAmount = document.getElementById('previous-amount').innerText;
        const previousNumber = parseFloat(previousAmount);
        const newAmount = amountNumber + previousNumber;
        document.getElementById('previous-amount').innerText = newAmount;

    } else {
        alert('wrong pin number');
    }

})