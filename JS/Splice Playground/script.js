let arr = [1, 7, 3, 1, 0, 20, 77];

let stringifyArr = JSON.stringify(arr);
let spliceBtn = document.getElementById('spliceBtn');
let startIndexInput = document.getElementById('startIndexInput');
let deleteCountInput = document.getElementById('deleteCountInput');
let itemToAddInput = document.getElementById('itemToAddInput');
let updatedArray = document.getElementById('updatedArray')

spliceBtn.addEventListener('click', function() {
    if (startIndexInput.value.trim() === "") {
        alert('Enter the start Index');
        return;
    } else {
        const itemToAdd = itemToAddInput.value;

        const index = parseInt(startIndexInput.value);
        let count = deleteCountInput.value === "" ? 0 : parseInt(deleteCountInput.value);
        if (itemToAdd === "") {
            arr.splice(index, count);
        } else {

            arr.splice(index, count, itemToAdd);
        }
        // document.getElementById('updatedArray').textContent = JSON.stringify(arr)
        updatedArray.textContent = JSON.stringify(arr);
    }
})
