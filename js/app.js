// --==Cached element references==--

const todoInput = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')

// --==Event Listeners==--

// Functionality to add to to-dos   
//element.addEventListener(event, function, useCapture)
submitBtn.addEventListener('click', function (event) {
  if (todoInput.value === "") return
  const newTodo = document.createElement('li')
  newTodo.textContent = todoInput.value
  todoList.appendChild(newTodo)
  todoInput.value = ''
})

// Functionality to remove individual to-dos
todoList.addEventListener('click', function (event) {
  const parentNode = event.target.parentNode
  parentNode.removeChild(event.target)
})

// Functionality for Reset button to remove all to-dos
resetBtn.addEventListener('click', function (event) {
  todoList.innerHTML = ''
  todoInput.value = ''
})