document.getElementById('cash-out-button')
    .addEventListener('click', function(event) {
        event.preventDefault();

        const cashoutAmount = document.getElementById('cash-out-amount').value;
        const cashoutNumber = parseFloat(cashoutAmount);

        const cashoutPin = document.getElementById('cash-out-pin').value;
        if (cashoutPin === '1234') {
            const balance = document.getElementById('previous-amount').innerText;
            const balanceNumber = parseFloat(balance);

            const newBalance = balanceNumber - cashoutNumber;
            document.getElementById('previous-amount').innerText = newBalance;
        } else(
            alert('wrong pin number')
        )

    })