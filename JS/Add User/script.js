let nameInput = document.getElementById('name');
let nameErrMsg = document.getElementById('nameErrMsg');
let emailInput = document.getElementById('email');
let emailErrMsg = document.getElementById('emailErrMsg');

nameInput.addEventListener('blur', function() {
    if (nameInput.value.trim() === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
})

emailInput.addEventListener('blur', function() {
    if (emailInput.value.trim() === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
    }
})
