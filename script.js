const unorderList = document.getElementsByClassName('task-list')[0];
const input = document.getElementById('taskInput');
const button = document.getElementById('addbtn');

const addList = () => {
    if (input.value === ""){return;}

    let list = document.createElement('li')
    list.textContent = input.value;

    unorderList.appendChild(list);
    input.value = ""
};

button.addEventListener('click', addList);