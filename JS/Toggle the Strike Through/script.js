let container = document.getElementById('checkBoxWithLabelContainer');
let input = document.createElement('input');
input.type = 'checkbox';
input.id = 'checkbox';

let label = document.createElement('label');
label.htmlFor = "checkbox";
label.id = 'checkboxLabel';
label.classList.add('checkbox-label');
label.textContent = "I am a Label"


container.appendChild(input);
container.appendChild(label);
input.addEventListener("change", function() {
    if (input.checked) {
        label.classList.add('strike-through');
    } else {
        label.classList.remove('strike-through');
    }
});
