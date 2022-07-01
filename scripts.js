let hasShownCookies = false;

function showCookie() {
    if(hasShownCookies == false) {
        document.querySelector('.cookie-message').style.visibility = 'visible';
    } 
    else {
        showAlert();
    }
}

function showAlert() {
    if(hasShownCookies == false) {
        document.querySelector('.cookie-message').remove();
        hasShownCookies = true;
    }
    alert('Loading weather report...');
}

function changeTemperature() {
    let number = document.querySelectorAll('.number');

    if(document.querySelector('#temperature-type').selectedIndex == 1) {
        for(let i = 0; i < number.length; i++) {
            number[i].innerHTML = Math.round((((number[i].innerHTML) * (9/5)) + 32));
        }
    }
    else {
        for(let i = 0; i < number.length; i++) {
            number[i].innerHTML = Math.round((((number[i].innerHTML)-32) * (5/9)));
        }
    }
}