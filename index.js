alert('\\Kolotiy\\\n"Sergey"\n\u2732 +8800553535\n\u{1F5E1} Odessa');

let buttonTxt = ['Аavorite meal', 'Favorite alcoholic drink', 'Favorite soft drink'];
let bestAnswers = ['Shawarma', 'Nothing', 'Tea'];

let body = document.querySelector('body');
let headerWrapper = document.createElement('div');
let buttonWrapper = document.createElement('div');
let header = document.createElement('h1');
let answer = document.createElement('h2');

headerWrapper.style.cssText = 'background: lime; text-align: center; height: 100px;margin: 25px';
buttonWrapper.style.cssText = "display: flex;justify-content: space-around;";

header.innerText = 'Sergey Kolotiy';

headerWrapper.append(header,answer);
body.append(headerWrapper, buttonWrapper);


for (let i = 0; i < 3; i++) {
    let button = document.createElement('button');
    button.textContent = buttonTxt[i];
    button.addEventListener('click', showAnswer(i));
    buttonWrapper.append(button);
}

function showAnswer(answerIndex){
    return function() {answer.innerText = bestAnswers[answerIndex];};
}
