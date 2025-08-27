let container = document.getElementById('bgContainer');
let heading = document.getElementById('heading');
let themeUserInput = document.getElementById('themeUserInput');

themeUserInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        if (themeUserInput.value === "Light" || themeUserInput.value === "light") {
            container.style.backgroundImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png";
        } else if (themeUserInput.value === "Dark" || themeUserInput.value === "dark") {
            container.style.backgroundImage = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png";

        } else {
            alert('Enter the Valid Theme')
        }
    }
})
