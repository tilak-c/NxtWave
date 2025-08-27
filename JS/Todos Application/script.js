/* Follow the instructions found in the description to complete the JavaScript functionality.*/

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

const todoContainer = document.getElementById("todoItemsContainer");

function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.className = "todo-item";
    todoItem.listStyleType = "none";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = todoText;

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash";
    deleteIcon.addEventListener('click', () => {
        todoContainer.removeChild(todoItem);
    });
    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(deleteIcon);

    todoContainer.appendChild(todoItem);
}
for (const todo of todoList) {
    createTodoItem(todo.text);
}
