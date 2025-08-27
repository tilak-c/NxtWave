let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];
let todosCount = todoList.length;

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todosCount;
    let labelId = "label" + todosCount;
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
    inputElement.id = checkboxId;

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
    labelElement.id = labelId;

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);

    deleteIcon.addEventListener('click', function() {
        todoItemsContainer.removeChild(todoElement);
    })
}
let addTodoButton = document.getElementById('addTodoButton');
let todoUserInput = document.getElementById('todoUserInput');

addTodoButton.onclick = function() {
    let userInputValue = todoUserInput.value.trim();
    if (userInputValue === "") {
        alert("Enter valid text");
        return;
    }
    todosCount += 1;
    createAndAppendTodo({
        text: userInputValue,
        uniqueNo: todosCount
    });
    todoUserInput.value = ""
}

document.addEventListener("DOMContentLoaded", function() {
    let userInput = todoUserInput.value;
    if (userInput !== "") {
        let newTodo = {
            text: userInput
        };
        createAndAppendTodo(newTodo);
        todoUserInput.value = "";
    }
})

for (let todo of todoList) {
    createAndAppendTodo(todo);
}
