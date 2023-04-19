// js
// planning

// stage 1
// todo 1: get the form and attach an event listener to it 
// todo 2: get the task from the input
// todo 3: diaplay the data

// stage 2
// todo 1: add a delete button to each task

// stage 3
// todo 1: select a priority level for task b4 submitting
// todo 2: change task color according to the priority

// stage 4
// todo 1: allow the user to sort the priorities in both directions

let taskObjArray = [];

document.addEventListener("DOMContentLoaded", () => {
  // your code here
    addingEventListener();
});

// get the form and add and event listener
function addingEventListener() {
  document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit);
  document.getElementById("sort-tasks").addEventListener("change", sortTasks); // stage 4
}

function handleFormSubmit(e) {
  // prevent disppearing
  e.preventDefault();
  console.log(e); // to examine the options to handle this
  // const task = document.getElementById ...
  // const task = e.target["new-task-description"].value
  const task = e.target[0].value
  console.log[task];

  const priorityLevel = e.target.priority.value; // stage 3
  console.log(priorityLevel);

  const taskObj = {task, priorityLevel}; // stage 4
  taskObjArray.push(taskObj);
  console.log(taskObjArray);

  sortTasks();

  displayTasks(task, priorityLevel); // stage 3 priority 

}

// function displayTasks(task, priority) {
//   const tasksUl = document.getElementById("tasks");
//   console.log(tasksUl); // getting a ul/li
//   const taskLi = document.createElement("li");

//   const deleteBtn = document.createElement("button"); // stage 2
//   deleteBtn.textContent = "x";
//   deleteBtn.addingEventListener("click", deleteTask);

//   taskLi.textContent = task + " ";
//   taskLi.style.color = getPriorityColor(priorityLevel); // stage 3
//   taskLi.appendChild(deleteBtn); // stage 2
//   console.log(taskLi);

//   tasksUl.appendChild(taskLi);
  
// }

function displayTasks(task, priority) { // stage 4
  const tasksUl = document.getElementById("tasks");
  tasksUl.innerHTML= "";

  taskObjArray.forEach((task => {
    const taskLi = document.createElement("li");
    const deleteBtn = document.createElement("button"); // stage 2

    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", (e) => deleteTask(e, task));

    taskLi.textContent = task.task + " ";
    taskLi.style.color = getPriorityColor(task.priorityLevel); // stage 3
    taskLi.appendChild(deleteBtn); // stage 2
    tasksUl.appendChild(taskLi);

  }))
}

function deleteTask(e, task) {
  //console.log(e.target);
  taskObjArray = taskObjArray.filter(e => e.task !== task.task);
  e.target.parentNode.remove();
}

function getPriorityColor(priority) { // stage 3
  console.log(priority);
  if (priority === 1) {
    return "red";
  } else if (priority === 2) {
    return "yellow";
  } else {
    return "green";
  }

}

// stage 4
// from
// https://medium.com/@mlgerardvla/javascript-how-to-use-sort-on-an-array-and-get-the-results-you-want-81d17924e478
 
function sortTasks() {
  console.log("in sort tasks");
 const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l") {
     taskObjArray.sort((a, b) => a.priorityLevel - b.priorityLevel)
  } else {
     taskObjArray.sort((a, b) => b.priorityLevel - a.priorityLevel)
  }
  // displayTasks()
}



