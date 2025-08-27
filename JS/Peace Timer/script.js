let twentyBtn = document.getElementById('twentySecondsBtn');
let thirtyBtn = document.getElementById('thirtySecondsBtn');
let fortyBtn = document.getElementById('fortySecondsBtn');
let oneMinuteBtn = document.getElementById('oneMinuteBtn');

let timerText = document.getElementById('timerText');
let intervalId = null;

function startTimer(duration) {
    clearInterval(intervalId);
    let timeLeft = duration;
    timerText.textContent = timeLeft;
    intervalId = setInterval(function() {
        timeLeft -= 1;
        if (timeLeft > 0) {
            timerText.textContent = timeLeft + " seconds left";
        } else {
            clearInterval(intervalId);
            timerText.textContent = "Your moment is complete"
        }
    }, 1000);
}

twentyBtn.addEventListener('click', function() {
    startTimer(20);
})


thirtyBtn.addEventListener('click', function() {
    startTimer(30);
})

fortyBtn.addEventListener('click', function() {
    startTimer(40);
})

oneMinuteBtn.addEventListener('click', function() {
    startTimer(60);
})
