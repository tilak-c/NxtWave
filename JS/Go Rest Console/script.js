let form = document.getElementById('consoleForm');
let requestUrl = document.getElementById('requestUrl');
let requestMethod = document.getElementById('requestMethod');
let requestBody = document.getElementById('requestBody');
let requestUrlErrMsg = document.getElementById('requestUrlErrMsg');
let responseStatus = document.getElementById('responseStatus');
let responseBody = document.getElementById('responseBody');

// Handle change event on requestUrl input
requestUrl.addEventListener('change', function() {
    requestUrlErrMsg.textContent = ""; // Clear error when user types
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate request URL
    const url = requestUrl.value.trim();
    if (url === "") {
        requestUrlErrMsg.textContent = "Required*";
        return;
    }

    requestUrlErrMsg.textContent = ""; // Clear previous error

    // Parse request body
    let bodyData;
    try {
        bodyData = JSON.parse(requestBody.value.trim());
    } catch (e) {
        alert("Invalid JSON in request body");
        return;
    }

    const method = requestMethod.value.toUpperCase(); // Either POST or PUT
    if (method !== "POST" && method !== "PUT") {
        alert("Unsupported method: " + method);
        return;
    }

    // Send the fetch request
    fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer b2d8461de1f1eac9ca5df728892265d23f55ebe156521d9ee866aa61132526e6"
            },
            body: JSON.stringify(bodyData)
        })
        .then(response => {
            responseStatus.value = response.status;
            return response.json();
        })
        .then(data => {
            responseStatus.value = data.code; // Use API's status code
            responseBody.value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            responseStatus.value = "Error";
            responseBody.value = error.message;
        });
});
