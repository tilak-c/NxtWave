let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];
let a = document.getElementById('orderedItemsContainer');
let input = document.querySelector('.ul-items')

for (let i = 0; i < itemList.length; i++) {
    let li = document.createElement('li');
    li.id = "item" + itemList[i].uniqueNo;
    li.textContent = itemList[i].itemName;

    let button = document.createElement('button');
    button.id = "button" + itemList[i].uniqueNo;
    button.textContent = 'Cancel';

    button.addEventListener('click', function() {
        input.removeChild(li);
    })
    input.appendChild(li);
    li.appendChild(button);
    // a.appendChild(button);
}
