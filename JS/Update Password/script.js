let newPasswordInput = document.getElementById('newPassword');
let confirmPasswordInput = document.getElementById('confirmPassword')
let newPasswordErrMsg = document.getElementById('newPasswordErrMsg');
let confirmPasswordErrMsg = document.getElementById('confirmPasswordErrMsg')
newPasswordInput.addEventListener('blur', function() {
    if (newPasswordInput.value.trim() === "") {
        newPasswordErrMsg.textContent = 'Required*'
    } else {
        newPasswordErrMsg.textContent = ""
    }
})
confirmPasswordInput.addEventListener('blur', function() {
    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordErrMsg.textContent = 'Required*'
    } else {
        confirmPasswordErrMsg.textContent = ""
    }
})
let updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', function() {
    if (newPasswordInput.value.trim() === "") {
        newPasswordErrMsg.textContent = 'New Password cant be empty'
    } else {
        newPasswordErrMsg.textContent = "";
    }
    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordErrMsg.textContent = "Confirm Password cant be empty";
    } else {
        confirmPasswordErrMsg.textContent = "";
    }
})
