document.getElementById('flipToSignUp').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.card').classList.add('flipped');
});

document.getElementById('flipToSignIn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.card').classList.remove('flipped');
});