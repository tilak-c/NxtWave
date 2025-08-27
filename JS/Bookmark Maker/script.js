// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
document.addEventListener('DOMContentLoaded', function() {
    let siteNameInput = document.getElementById('siteNameInput');
    let formId = document.getElementById('bookmarkForm');
    let siteNameUrl = document.getElementById('siteUrlInput');
    let siteNameErrMsg = document.getElementById('siteNameErrMsg');
    let siteUrlErrMsg = document.getElementById('siteUrlErrMsg');
    let submitBtn = document.getElementById('submitBtn');
    let bookmarksList = document.getElementById('bookmarksList')
    formId.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        if (siteNameInput.value.trim() === "") {
            siteNameErrMsg.textContent = "Required*";
            siteNameErrMsg.style.color = 'red'
            isValid = false;
        } else {
            siteNameErrMsg.textContent = "";
        }
        if (siteNameUrl.value.trim() === "") {
            siteUrlErrMsg.textContent = "Required*";
            siteUrlErrMsg.style.color = 'red'
            isValid = false;
        } else {
            siteUrlErrMsg.textContent = "";
        }
        if (isValid) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = siteNameUrl.value;
            a.target = "_blank";
            a.textContent = siteNameInput.value;
            li.appendChild(a);
            bookmarksList.appendChild(li);

            siteNameInput.textContent = "";
            siteNameUrl.textContent = "";
        }
    })
    siteNameInput.addEventListener('change', function() {
        if (siteNameInput.value.trim() === "") {
            siteNameErrMsg.textContent = "Required*";
            siteNameErrMsg.style.color = 'red'
        } else {
            siteNameErrMsg.textContent = "";
        }
    });
    siteNameUrl.addEventListener('change', function() {
        if (siteNameUrl.value.trim() === "") {
            siteUrlErrMsg.textContent = "Required*";
            siteUrlErrMsg.style.color = 'red'
        } else {
            siteUrlErrMsg.textContent = "";
        }
    })


})
