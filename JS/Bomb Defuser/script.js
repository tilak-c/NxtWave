let defuser = document.getElementById("defuser");
let timer = document.getElementById('timer');
let timeInterval = 10;
let intervalId = setInterval(function() {
    timeInterval -= 1;
    if (timeInterval <= 0) {
        clearInterval(intervalId);
        timer.textContent = "BOOM"
    } else {
        timer.textContent = timeInterval;
    }
}, 1000)
