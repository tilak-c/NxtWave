let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let greetingParse = JSON.parse(greeting);

const p = document.createElement('p');
p.className = 'greet';

const greetFromEl = document.getElementById('greetFrom');
const greetToEl = document.getElementById('greetTo');
const greetTextEl = document.getElementById('greetText');

greetFromEl.textContent = `From: ${greetingParse.from}`;
greetToEl.textContent = `To: ${greetingParse.to}`;
greetTextEl.textContent = greetingParse.greetText;

// p.textContent = `From:${greetingParse.from}, To:${greetingParse.to}`;
document.body.appendChild(p);

const greetTextP = document.createElement('p');
greetTextP.className = 'greet-text';
greetTextP.textContent = greetingParse.greetText;
document.body.appendChild(greetTextP);
