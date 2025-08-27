let button = document.getElementById('submitBtn');
const form = document.getElementById('questionsForm')
const result = document.getElementById('resultMsg');

const options = document.getElementsByName('capital');

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('change', function() {
        result.textContent = ''
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="capital"]:checked')

    if (!selectedOption) {
        result.textContent = "Please select the answer";
        result.style.color = "blue";
    } else if (selectedOption.value === "Delhi") {
        result.textContent = "Correct answer";
        result.style.color = "green";
    } else {
        result.textContent = "Wrong answer";
        result.style.color = "red";
    }
})
