let firstNumberElement = document.getElementById('firstNumber');
let secondNumberElement = document.getElementById('secondNumber');

let firstNumber = parseInt(firstNumberElement);
let secondNumber = parseInt(secondNumberElement);

let userInputElement = document.getElementById('userInput');
let userInput = parseInt(userInputElement);
let message = document.getElementById('gameResult');

function restartGame() {
    const randnum1 = Math.ceil(Math.random() * 100);
    const randnum2 = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = randnum1;
    secondNumberElement.textContent = randnum2;
    userInputElement.value = "";
    message.textContent = "";
}

function check() {
    if (firstNumber.value + secondNumber.value === userInput.value) {
        message.textContent = "Congratulations! You got it right."
    } else {
        message.textContent = "Please Try Again!"
    }
}

function restart() {
    message.textContent = "";
    // message.textContent;
}
window.onload = restartGame();
