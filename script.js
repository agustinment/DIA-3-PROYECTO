const unorderList = document.getElementsByClassName('task-list')[0];
const input = document.getElementById('taskInput');
const button = document.getElementById('addbtn');
let taskCount = 0;

// Maneja la creación y eliminación de tareas
const listManager = () => {
    
    // Evita tareas vacías o con solo espacios
    if (input.value.trim() === ''){
        input.value = '';
        return;}

    // Guardamos taskText para evitar leer el textContent (que incluye el botón)
    const taskText = input.value.trim();

    let task = document.createElement('li')
    task.textContent = input.value;

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X';
    deleteButton.style.display = 'inline';
    deleteButton.style.marginLeft = '1rem';

    // Cuando se clickee, elimina la tarea
    deleteButton.addEventListener('click', () => {
        unorderList.removeChild(task);
        console.log(`Tarea ${taskText} eliminada correctamente.`);
        // Decrementa el contador y refleja en pantalla el valor
        taskCount--;
        updateCount();
    })

    task.appendChild(deleteButton);
    unorderList.appendChild(task);

    // Incrementa el contador y refleja en pantalla el valor
    taskCount++;
    updateCount();

    // Limpiar input para próxima tarea
    input.value = ''; 
};

const updateCount = () => {
    document.getElementById("taskCount").textContent = taskCount;
}

button.addEventListener('click', listManager);

// Agrega tareas con el enter
input.addEventListener('keydown', (keyboard) => {
    keyboard.key === 'Enter' ? listManager() : undefined;
})