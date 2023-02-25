let test = document.getElementById('textMobile');
const ww = window.screen.availWidth;
let imageChangeOnMobile = document.getElementById('imgMobileChange');


if (ww < 1200) {
    test.classList.remove('disabledOnPc');
    imageChangeOnMobile.src = '../imagesandgifs/lose.gif';
}
if (ww > 1200) {
    test.className = 'disabledOnPc';
    imageChangeOnMobile.src = '../imagesandgifs/pixelcutcat.gif';
}


