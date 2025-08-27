window.onload = function() {
    document.getElementById('name').addEventListener('blur', function() {
        const nameValue = this.value.trim();
        const nameError = document.getElementById('nameErrorMsg');
        nameError.textContent = nameValue === "" ? "Requried*" : "";
    })

    document.getElementById('email').addEventListener('blur', function() {
        const emailValue = this.value.trim();
        const emailError = document.getElementById('emailErrorMsg');
        emailError.textContent = emailValue === "" ? "Requried*" : "";
    })
}
