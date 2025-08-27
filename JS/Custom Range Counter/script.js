let fromValue = document.getElementById('fromUserInput')
let toValue = document.getElementById('toUserInput');
let startBtn = document.getElementById('startBtn');
let p = document.getElementById('counterText');

startBtn.addEventListener('click', function() {
    if (fromValue.value.trim() === "") {
        alert("Enter the from value");
        return;
    }

    if (toValue.value.trim() === "") {
        alert("Enter the to value");
        return;
    }

    let fromValueInt = parseInt(fromValue.value);
    let toValueInt = parseInt(toValue.value);
    if (fromValueInt >= toValueInt) {
        alert("From value must be less than to Value")
    }
    p.textContent = fromValueInt;
    let counter = fromValueInt;
    let intervalId = setInterval(function() {
        counter += 1;
        p.textContent = counter;
        if (counter >= toValueInt) {
            clearInterval(intervalId);
        }
    }, 1000);
})
