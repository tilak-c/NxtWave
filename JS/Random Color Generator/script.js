let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let background = document.getElementById('bgContainer')

function generate() {
    let randomIndex = Math.floor(Math.random() * bgColorsArray.length);
    let randomColor = bgColorsArray[randomIndex];
    background.style.backgroundColor = randomColor;
}
