let persAnsw = document.getElementById('personAnsw');
let checkAnswer = document.getElementById('imgCheck');
let textOfDialog = document.getElementById('textDialog');
let dialogWrap = document.getElementById('dialogWrap');
let trying = document.getElementById('try');
let tryWrap = document.getElementById('tryWrap');
let tryAgain = document.getElementById('again');
let redText = document.getElementById('redText');
let noGifAnswer = document.getElementById('noGif');
let yesGifAnswer = document.getElementById('yesGif');

let count = 7;
let randomNumber = Math.ceil(Math.random() * 100);

checkAnswer.addEventListener('click', function() {
    if(persAnsw.value == '') {
        persAnsw.classList.add('red');
        setTimeout(() => {
            persAnsw.classList.remove('red');
        }, 2000)
    } else if(persAnsw.value > 100 || persAnsw.value < 1) {
        redText.style.color = 'red'
        setTimeout(() => {
            redText.style.color = '';
        }, 3000);
    }
    else if (count == 0) {
        dialogWrap.classList.remove('hide');
        tryWrap.classList.add('hide');
        textOfDialog.style.whiteSpace = 'nowrap';
        textOfDialog.style.left = '48%';
        textOfDialog.style.fontSize = '10px'
        textOfDialog.innerText = 'You lose!';
        persAnsw
        setTimeout(() => {
            checkAnswer.classList.add('hide');
            persAnsw.classList.add('hide');
            tryAgain.classList.remove('hide');
            tryAgain.addEventListener('click', function() {
                window.location.href = '../../index.html';
            })
        }, 2000)
    }
    else if (persAnsw.value == randomNumber) {
        dialogWrap.classList.remove('hide');
        checkAnswer.classList.add('hide');
        yesGifAnswer.classList.remove('hide');
        textOfDialog.innerText = 'Угадал!';
        setTimeout(() => {
            textOfDialog.style.whiteSpace = 'nowrap';
            textOfDialog.style.left = '43%';
            textOfDialog.style.top = '-24px'
            textOfDialog.innerText = 'Next lvl...';
            setTimeout(() => {
                window.location.href = '../findthebutton/findthebutton.html';
            }, 3000)
        }, 2000);
    } else if (persAnsw.value < randomNumber) {
        dialogWrap.classList.remove('hide');
        checkAnswer.classList.add('hide');
        noGifAnswer.classList.remove('hide');
        textOfDialog.innerText = 'Больше!';
        count--;
        setTimeout(() => {
            textOfDialog.innerText = '';
            checkAnswer.classList.remove('hide');
            noGifAnswer.classList.add('hide');
            dialogWrap.classList.add('hide');
            trying.innerText = count;
            persAnsw.value = '';
        }, 2000)

    } else if(persAnsw.value > randomNumber) {
        dialogWrap.classList.remove('hide');
        checkAnswer.classList.add('hide');
        noGifAnswer.classList.remove('hide');
        textOfDialog.innerText = 'Меньше!';
        count--;
        setTimeout(() => {
            textOfDialog.innerText = '';
            checkAnswer.classList.remove('hide');
            noGifAnswer.classList.add('hide');
            dialogWrap.classList.add('hide');
            trying.innerText = count;
            persAnsw.value = '';
        }, 2000)
    }
});
