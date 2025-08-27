let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let a = document.querySelector('.grocery-list');

for (let i = 0; i < groceryList.length; i++) {
    let li = document.createElement('li');
    li.textContent = groceryList[i];
    a.appendChild(li);
}
