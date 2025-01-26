document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            
            removeBtn.onclick = () => {
                taskList.removeChild(li);
                
                const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                const updatedTasks = currentTasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            
            const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = currentTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        currentTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(currentTasks));

        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});