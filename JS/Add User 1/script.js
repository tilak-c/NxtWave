let form = document.getElementById('addUserForm');
let name = document.getElementById('name')
let email = document.getElementById('email');
let nameErrMsg = document.getElementById('nameErrMsg');
let emailErrMsg = document.getElementById('emailErrMsg');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    nameErrMsg.textContent = '';
    emailErrMsg.textContent = '';

    if (name.value.trim() === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
    if (email.value.trim() === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
    }
    fetch("https://gorest.co.in/public-api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_ACCESS_TOKEN" // Replace with a valid token
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.code === 422) {
                // Validation error (e.g. email already taken)
                const emailError = data.data.find(error => error.field === "email");
                if (emailError) {
                    emailErrMsg.textContent = emailError.message;
                }
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
})
