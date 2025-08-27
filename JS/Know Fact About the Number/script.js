const inputEl = document.getElementById("userInput");
const factEl = document.getElementById('fact');
inputEl.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        const number = inputEl.value.trim();

        if (number === "") {
            alert('Please enter a number');
            return;
        }
        factEl.textContent = "Loading..."
        fetch(`https://apis.ccbp.in/numbers-fact?number=${number}`)
            .then(response => response.json())
            .then(data => {
                factEl.textContent = data.fact;
            })
            .catch(error => {
                factEl.textContent = "Something went wrong";
            })
    }
})
