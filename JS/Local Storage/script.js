let saveBtnEl = document.getElementById('saveBtn');
let clearBtnEl = document.getElementById('clearBtn');
let msgEl = document.getElementById('msg');

saveBtnEl.addEventListener('click', function() {
    localStorage.setItem('userInput', msgEl.value);
})

clearBtnEl.addEventListener('click', function() {
    msgEl.value = "";
    localStorage.removeItem('userInput');
})
