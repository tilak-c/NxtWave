// document.bod

let a = document.getElementById('checkboxWithLabelContainer');

let checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'checkbox';

let label = document.createElement('label');
label.htmlFor = 'checkbox';
label.id = 'checkboxLabel';
label.textContent = "Click Me";

a.appendChild(checkbox);
a.appendChild(label);
