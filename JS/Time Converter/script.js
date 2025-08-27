let hoursInput = document.getElementById('hoursInput');
let minutesInput = document.getElementById('minutesInput');
let timeInSeconds = document.getElementById('timeInSeconds');
let p = document.getElementById('errorMsg');
let button = document.getElementById('convertBtn');

button.addEventListener('click', function() {
    let hoursValue = parseInt(hoursInput.value);
    let minutesValue = parseInt(minutesInput.value);
    if (!hoursValue) {
        p.style.display = "none"
        p.textContent = "Please enter a valid number of hours;"
    } else if (!minutesValue) {
        p.style.display = "none"
        p.textContent = "Please enter a valid number of minutes;"
    } else {
        p.style.display = "none"
        let seconds = hoursValue * 60 * 60 + minutesValue * 60
        timeInSeconds.textContent = seconds
    }
})
