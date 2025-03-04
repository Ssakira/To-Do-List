function addTask() {
  const input = document.getElementById('todo-input'); //gets input element where you type the taks
  const taskText = input.value.trim();  //.value - gets actual text u type and .trim - removes any extra spaces at start & end

  if (taskText === '') {
      alert('Please enter a task!');  //if user inputs field blank and clicks "Add Task" an alert pops
      return;     // it stops the function right there, so no empty task gets added
  }

  const list = document.getElementById('todo-list'); //this gets <ul> elements where all task will be added

  const li = document.createElement('li'); //this creates a new <li> element
  li.innerHTML = ` ${taskText}<button onclick="removeTask(this)">❌</button>`;

  list.appendChild(li);
  input.value = ''; // this resets the input field to blank, ready for the next task
}

function removeTask(button) {  //button is actual button that the user clicked
  const listItem = button.parentElement; 
  listItem.remove(); //deletes entire <li> from the list - removing task from screen
}

