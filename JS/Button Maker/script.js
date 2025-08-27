let backgroundColorElement = document.getElementById('bgColorInput');
let fontColorElement = document.getElementById('fontColorInput');
let fontSizeElement = document.getElementById('fontSizeInput');
let fontWeightElement = document.getElementById('fontWeightInput');
let paddingElement = document.getElementById('paddingInput');
let borderRadiusElement = document.getElementById('borderRadiusInput');
let customButtonElement = document.getElementById('customButton');

function makeCustomButton() {
    customButtonElement.style.backgroundColor = backgroundColorElement.value;
    customButtonElement.style.color = fontColorElement.value;
    customButtonElement.style.fontSize = fontSizeElement.value;
    customButtonElement.style.fontWeight = fontWeightElement.value;
    customButtonElement.style.padding = paddingElement.value;
    customButtonElement.style.borderRadius = borderRadiusElement.value;
}
