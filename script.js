// Chargement initial des tâches depuis sessionStorage
window.onload = function() {
	const taskList = document.querySelector('#taskList');
	const tasks = JSON.parse(sessionStorage.getItem("tasks")) || [];
	 for (const task of tasks) {
		const li = document.createElement('li');
		li.textContent = task;
		taskList.appendChild(li);
	 }
}

const addTask = () => {
	const taskInput = document.querySelector('#newTask');
	const taskList = document.querySelector("#taskList");
	const taskText = taskInput.value;

	if (taskText !== '') {
		const li = document.createElement('li');
		li.textContent = taskText;
		taskList.appendChild(li);
		taskInput.value = '';

		// Ajout de la tâche à sessionStorage 
		const tasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
		tasks.push(taskText);
		sessionStorage.setItem('tasks', JSON.stringify(tasks));
	}
}
