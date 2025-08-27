let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let a = document.querySelector('.ul-items');
for (let i = 0; i < skillList.length; i++) {
    let li = document.createElement('li');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'checkbox' + skillList[i].uniqueNo;


    let label = document.createElement('label');
    label.id = "label" + skillList[i].uniqueNo;
    label.textContent = skillList[i].skillName;
    label.htmlFor = input.id;

    input.addEventListener('change', function() {
        label.classList.toggle("selected");
    });
    li.appendChild(input);
    li.appendChild(label);

    a.appendChild(li);

}
