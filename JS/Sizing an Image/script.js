let imageElement = document.getElementById("image");
let spanElement = document.getElementById("imageWidth");
let defaultImageWidth = 200;
let warningMessage = document.getElementById('warningMessage');
imageElement.style.width = defaultImageWidth + "px";
let maxWidth = 300;
let minWidth = 100;

function increment() {
    let currentWidth = parseInt(imageElement.style.width);
    if (currentWidth + 5 <= maxWidth) {

        imageElement.style.width = (currentWidth + 5) + "px"
        spanElement.textContent = imageElement.style.width;
        warningMessage.textContent = "";
    } else {
        warningMessage.textContent = "Too Big. Decrease the size of the Image"

    }
}

function decrement() {
    let currentWidth = parseInt(imageElement.style.width);
    if (currentWidth - 5 >= minWidth) {
        imageElement.style.width = (currentWidth - 5) + "px"
        spanElement.textContent = imageElement.style.width;
        warningMessage.textContent = "";
    } else {
        warningMessage.textContent = "Too Small. Increase the size of the Image"

    }

}
