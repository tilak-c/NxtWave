let a = document.getElementById('userInput');
let ul = document.getElementById('keyCodeList')
a.addEventListener('keydown', function() {
    let li = document.createElement('li');
    li.textContent = event.keyCode;
    ul.appendChild(li)
})
