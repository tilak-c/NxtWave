function addItem() {
    let a = document.querySelector('#cartItemTextInput');
    let b = document.querySelector('.ul-items');
    let c = document.createElement('li');
    c.textContent = a.value;
    b.appendChild(c);
    a.value = "";
}
