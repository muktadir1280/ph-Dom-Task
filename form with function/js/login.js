document.getElementById('login').addEventListener('click', function() {
    const inputPhnNumber = document.getElementById('input-phone-number').value;
    const inputPin = document.getElementById('input-pin').value;
    if (inputPhnNumber === '01755345843' && inputPin === '1234') {
        window.location.href = './home.html';
    } else {
        alert('Worng phone number or pin')
    }
})