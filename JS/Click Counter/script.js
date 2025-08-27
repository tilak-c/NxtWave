let clickCounterContainer = document.getElementById('clickCounterContainer');

let count = localStorage.getItem('clickCount');
count = count ? parseInt(count) : 0;

let h1 = document.createElement('h1');
h1.textContent = `The button has been clicked ${count} times`;

let span = document.createElement('span');
span.id = 'counterValue';
span.textContent = count;

let button = document.createElement('button');
button.id = 'incrementBtn';
button.textContent = 'Click Me';

clickCounterContainer.appendChild(h1);
clickCounterContainer.appendChild(span);
clickCounterContainer.appendChild(button);

button.addEventListener('click', () => {
    count++;
    span.textContent = count;
    h1.textContent = `The button has been clicked ${count} times`;
    localStorage.setItem('clickCount', count);
})
