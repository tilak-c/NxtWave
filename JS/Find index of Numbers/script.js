let numbers = [17, 31, 77, 20, 63];

// let userInput=document.getElementById('userInput');
// let indexOfNumber=document.getElementById('indexOfNumber');
// let findBtn=document.getElementById('findBtn');

function findIndexOfNumber() {
    let userInput = document.getElementById('userInput');
    let indexOfNumber = document.getElementById('indexOfNumber');
    let userInputValue = parseInt(userInput.value);

    let result = numbers.findIndex(function(item) {
        return item === userInputValue;
    });

    indexOfNumber.textContent = result;
}
