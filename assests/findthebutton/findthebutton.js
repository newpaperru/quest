let container = document.getElementById('cont');
let randomIndex = Math.floor(Math.random()*500);
let randomIndexMobile952 = Math.floor(Math.random()*100);
let randomIndexMobile508 = Math.floor(Math.random()*49);
let dialogWrap = document.getElementById('dw');
let dialogText = document.getElementById('dialog-text');
let h2OfFindButton = document.getElementById('hfb');
let cats = document.getElementById('cat');
const availableScreenWidth = window.screen.availWidth;
let count = 0;

// debug
dialogWrap.style.display = 'none';



if (availableScreenWidth < 952 && availableScreenWidth > 508) {
    for (let x = 0; x < 100; x++) {
        let btn = document.createElement('button');
        btn.classList.add('ticket');
        btn.innerText = x;
        container.append(btn);
    }
} else if(availableScreenWidth <= 508) {
    for (let x = 0; x < 50; x++) {
        let btn = document.createElement('button');
        btn.classList.add('ticket');
        btn.innerText = x;
        container.append(btn);
    }
}
else {
    for (let x = 0; x < 500; x++) {
        let btn = document.createElement('button');
        btn.classList.add('ticket');
        btn.innerText = x;
        container.append(btn);
    }
}



let allButtons = Array.from(document.querySelectorAll('button.ticket'));
function offAllButtons(array) {
    for (let index = 0; index < array.length; index++) {
        array[index].disabled = true;
    }
}


document.querySelectorAll('button.ticket').forEach((item, index) => item.addEventListener('click', function() {
    if (index != randomIndex) {
        this.style.background = 'red';
        count++;
        this.disabled = true;
        this.style.cursor = 'default';
        setTimeout(() => {
            this.style.opacity = '0'
        }, 1000);
    }
    if (availableScreenWidth >= 952) {
        if (count == 15){
            setTimeout(() => {
                $(dialogWrap).fadeIn('fast');
                dialogWrap.style.display = 'block';
                dialogText.innerText = 'мау?';
            }, 0)
        } else if (count == 30) {
            dialogText.innerText = 'мау-мау...'
        } else if (count == 60) {
            dialogText.innerText = 'м..МАУУУ!!!';
        } else if (count > 80) {
            dialogText.innerText = 'мау.'
            setTimeout(function() {
                $(cats).fadeOut('fast');
                $(dialogWrap).fadeOut('fast');
            }, 1000);
        }
        if (index == randomIndex) {
            this.style.background = 'green';
            offAllButtons(allButtons);
            if (dialogWrap.style.display == 'none' && count > 80) {
                dialogText.innerText = 'МААУ!! <3';
                setTimeout(() => {
                    $(cats).fadeIn('fast');
                    $(dialogWrap).fadeIn('fast');
                }, 1000)
            }
            if (dialogWrap.style.display == 'block' && (count > 15 && count <= 80)) {
                    dialogText.innerText = 'МААУ!! <3';
            }  
            if(dialogWrap.style.display == 'none' && count < 15) {
                setTimeout(() => {
                    $(cats).fadeIn('fast');
                    setTimeout(() => {
                        $(dialogWrap).fadeIn('fast');
                        dialogText.innerText = 'МААУ!! <3';
                    }, 300);
                }, 0);
            }
            setTimeout(() => {
                h2OfFindButton.innerText = 'Переход на следующий уровень....'
                setTimeout(() => {
                    window.location.href = '../minigames/minigames.html';
                }, 3000);
            }, 2000)
        }
    }

    else if(availableScreenWidth < 952 && availableScreenWidth > 508) {
        if (count == 10){
            setTimeout(() => {
                $(dialogWrap).fadeIn('fast');
                dialogWrap.style.display = 'block';
                dialogText.innerText = 'мау?';
            }, 0)
        } else if (count == 20) {
            dialogText.innerText = 'мау-мау...'
        } else if (count == 30) {
            dialogText.innerText = 'м..МАУУУ!!!';
        } else if (count > 40) {
            dialogText.innerText = 'мау.'
            setTimeout(function() {
                $(cats).fadeOut('fast');
                $(dialogWrap).fadeOut('fast');
            }, 1000);
        }
        if (index == randomIndexMobile952) {
            this.style.background = 'green';
            offAllButtons(allButtons);
            if (dialogWrap.style.display == 'none' && count > 40) {
                dialogText.innerText = 'МААУ!! <3';
                setTimeout(() => {
                    $(cats).fadeIn('fast');
                    $(dialogWrap).fadeIn('fast');
                }, 1000)
            }
            if (dialogWrap.style.display == 'block' && (count > 10 && count <= 40)) {
                    dialogText.innerText = 'МААУ!! <3';
            }  
            if(dialogWrap.style.display == 'none' && count < 10) {
                setTimeout(() => {
                    $(cats).fadeIn('fast');
                    setTimeout(() => {
                        $(dialogWrap).fadeIn('fast');
                        dialogText.innerText = 'МААУ!! <3';
                    }, 300);
                }, 0);
            }
            setTimeout(() => {
                h2OfFindButton.innerText = 'Переход на следующий уровень....'
                setTimeout(() => {
                    window.location.href = '../minigames/minigames.html';
                }, 3000);
            }, 2000)
        }
    }

    else {
        if (count == 7){
            setTimeout(() => {
                $(dialogWrap).fadeIn('fast');
                dialogWrap.style.display = 'block';
                dialogText.innerText = 'мау?';
            }, 0)
        } else if (count == 10) {
            dialogText.innerText = 'мау-мау...'
        } else if (count == 15) {
            dialogText.innerText = 'м..МАУУУ!!!';
        } else if (count > 20) {
            dialogText.innerText = 'мау.'
            setTimeout(function() {
                $(cats).fadeOut('fast');
                $(dialogWrap).fadeOut('fast');
            }, 1000);
        }
        if (index == randomIndexMobile508) {
            this.style.background = 'green';
            offAllButtons(allButtons);
            if (dialogWrap.style.display == 'none' && count > 20) {
                dialogText.innerText = 'МААУ!! <3';
                setTimeout(() => {
                    $(cats).fadeIn('fast');
                    $(dialogWrap).fadeIn('fast');
                }, 1000)
            }
            if (dialogWrap.style.display == 'block' && (count > 7 && count <= 20)) {
                    dialogText.innerText = 'МААУ!! <3';
            }  
            if(dialogWrap.style.display == 'none' && count < 7) {
                setTimeout(() => {
                    $(cats).fadeIn('fast');
                    setTimeout(() => {
                        $(dialogWrap).fadeIn('fast');
                        dialogText.innerText = 'МААУ!! <3';
                    }, 300);
                }, 0);
            }
            setTimeout(() => {
                h2OfFindButton.innerText = 'Переход на следующий уровень....'
                setTimeout(() => {
                    window.location.href = '../minigames/minigames.html';
                }, 3000);
            }, 2000)
        }
    }
    
}));
