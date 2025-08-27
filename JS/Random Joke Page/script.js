let jokeBtn = document.getElementById('jokeBtn')
let jokeText = document.getElementById('jokeText');

jokeBtn.addEventListener('click', function() {
    jokeText.innerHTML = '<div class="spinner"><span>Loading...</span></div>'
    fetch('https://apis.ccbp.in/jokes/random')
        .then(response => response.json())
        .then(data => {
            jokeText.textContent = data.value;
        })
})
