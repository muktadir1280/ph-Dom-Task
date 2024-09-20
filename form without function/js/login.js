document.getElementById('button-login')
    .addEventListener('click', function(event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        if (phoneNumber === '01755345843' && pinNumber === '1234') {
            window.location.href = './home.html'
        } else {
            alert('wrong phone number or pin');
        }

    })