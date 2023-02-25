
// first page
const FirstPage = document.getElementById('firstPage');
const buttonStartGame = document.getElementById('btnStart');

// animation h1
let text = 'Добро пожаловать на тематический квест!'
let content = document.querySelector('#anim')

for (let i in [...text]) {
  let letter = document.createElement('span')
  letter.textContent = [...text][i]
  if(letter.textContent.match(/\s/)) {
    letter.style.margin = 'auto 3px'
  }
  letter.style.animationDelay = i/10+'s'
  content.appendChild(letter)
}

// debug
FirstPage.style.display = 'block';

// start button
buttonStartGame.addEventListener('click', function() {
    if (FirstPage.style.display === 'block') {
        FirstPage.style.display = 'none';
        secondPage.classList.remove('hide-page');
    }
});


// second page
const secondPage = document.getElementById('secondPage');

//method random Numbers
let randomNum = () => {
    return Math.ceil(Math.random()*100);
}

// array with operators and functions
let operators = [{
    sign: "+",
    method: function(a,b){ return a + b; }
}, {
    sign: "-",
    method: function(a,b){ return a - b; }
}, {
    sign: "*",
    method: function(a,b){return a * b;}
}];

// var's to change in HTML
let num1Wrap = document.getElementById('num1');
let operatorWrap = document.getElementById('oper');
let num2Wrap = document.getElementById('num2');
let personAnswer = document.getElementById('res');
let buttonRightAnswer = document.getElementById('btnCheckAnswer');
let rightGif = document.getElementById('gifYR');
let falseGif = document.getElementById('gifYF');
let resultCleaning = document.getElementById('res');
let h2 = document.getElementById('test');
let counter = document.getElementById('count');
let counterWrap = document.getElementById('CounterWrap');
let buttonTryAgain = document.getElementById('btnTryAgain');
let math = document.getElementById('math');


// var's that store the data of random numbers, random operator and result
let num1;
let num2;
let selectedOperator;
let randomOperator;
let correctAnswer;
let count = 3;


function DisplayingRandomMathematicalEquations() {
    num1 = randomNum(); // first random number 1-100
    num2 = randomNum(); // second random number 1-100
    selectedOperator = Math.floor(Math.random()*operators.length); // random index from array "operators"
    randomOperator = operators[selectedOperator].sign; // selected operator with random index
    correctAnswer = operators[selectedOperator].method(num1, num2); // result 
    num1Wrap.innerHTML = num1; // displaying first number
    operatorWrap.innerHTML = randomOperator; // displaying operator
    num2Wrap.innerHTML = num2; // displaying second number
}
DisplayingRandomMathematicalEquations(); // call function

// checking right answer from person
buttonRightAnswer.addEventListener('click', function() {
    if (personAnswer.value == correctAnswer) {
        h2.innerText = 'Правильно! Молодец!';
        rightGif.classList.remove('hide-page');
        counterWrap.classList.add('hide-page');
        buttonRightAnswer.style.display = 'none';
        math.style.display = 'none';
        setTimeout(() => {
            h2.innerText = 'loading next lvl..';
        }, 3000);
        setTimeout(() => {
            rightGif.classList.add('hide-page');
            secondPage.classList.add('hide-page');
            window.location.href = 'assests/guessTheNumber/guessTheNumber.html';
        }, 5000);
    }
    else if(personAnswer.value === '') {
        resultCleaning.classList.add('false');
        setTimeout(() => {
            resultCleaning.classList.remove('false');
        }, 1000);
    } else if (count === 1) {
        h2.innerText = 'ТЫ ПРОИГРАЛ';
        count = count - 1;
        counter.innerText = count;
        buttonRightAnswer.classList.add('hide-page');
        math.classList.add('hide-page');
        counterWrap.classList.add('hide-page'); 
        setTimeout(() => {
            buttonTryAgain.classList.remove('hide-page');
            buttonTryAgain.addEventListener('click', function() {
                cleanUP();
            })
        }, 3000);
    }
    else {
        falseGif.classList.remove('hide-page');
        buttonRightAnswer.classList.add('hide-page');
        count = count - 1;
        counter.innerText = count;
        setTimeout(() => {
            falseGif.classList.add('hide-page');
            buttonRightAnswer.classList.remove('hide-page');
            DisplayingRandomMathematicalEquations();
            resultCleaning.value = '';
        }, 3000);
    }
})

function cleanUP() {
    secondPage.classList.add('hide-page');
    counterWrap.classList.remove('hide-page'); 
    FirstPage.style.display = 'block';
    count = 3;
    resultCleaning.value = '';
    counter.innerHTML = count;
    h2.innerHTML = 'Решите математическую задачу!';
    buttonTryAgain.classList.add('hide-page');
    buttonRightAnswer.classList.remove('hide-page');
    math.classList.remove('hide-page');
}