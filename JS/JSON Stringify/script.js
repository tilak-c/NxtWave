let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
const container = document.getElementById('jsonContainer');
const bikesJSON = JSON.stringify(bikes);
const personJSON = JSON.stringify(person);
const todosJSON = JSON.stringify(todos);

const bikesEl = document.createElement('p');
bikesEl.textContent = bikesJSON;

const personEl = document.createElement('p');
personEl.textContent = personJSON;

const todosEl = document.createElement('p');
todosEl.textContent = todosJSON;

container.appendChild(bikesEl);
container.appendChild(personEl);
container.appendChild(todosEl);
