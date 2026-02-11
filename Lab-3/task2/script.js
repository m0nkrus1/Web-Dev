const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskText = input.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Спрашиваем, важная ли задача
    const isImportant = confirm("Это важная задача?");

    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        span.classList.toggle('done', checkbox.checked);
    });

    const span = document.createElement('span');
    span.className = 'todo-label';
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Если задача важная — вставляем в начало, иначе в конец
    if (isImportant) {
        todoList.insertBefore(li, todoList.firstChild);
    } else {
        todoList.appendChild(li);
    }

    // Clear input
    input.value = "";
    input.focus();
}

addBtn.addEventListener('click', addTask);

// Allow "Enter" key to add task
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});