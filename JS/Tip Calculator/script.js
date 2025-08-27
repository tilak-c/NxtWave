let billAmountElement = document.getElementById('billAmount');
let percentageTipElement = document.getElementById('percentageTip')
let tipAmountElement = document.getElementById('tipAmount');
let totalAmountElement = document.getElementById('totalAmount');
let errorMessageElement = document.getElementById('errorMessage');

function calculateTip() {
    const billAmount = billAmountElement.value;
    const percentageTip = percentageTipElement.value;
    if (billAmount === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input."
    } else if (percentageTip === "") {
        errorMessageElement.textContent = "Please Enter a Valid Input."
    } else {
        errorMessageElement.textContent = "";
        let billAmount1 = parseInt(billAmount);
        let percentageTip1 = parseInt(percentageTip);

        let calculatedTip = (percentageTip1 / 100) * billAmount1;
        let totalAmount = billAmount1 + calculatedTip;

        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = totalAmount;
    }
}
