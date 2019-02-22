const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const todoText = document.querySelector(".todo-text");
const todoList = document.querySelector(".todo-list");
const removeTodoButton = document.querySelector(".remove-todo-button")
const emptyMessage = document.querySelector(".empty-message");

// Add new todo task and hide empty message

const addNewTodo = newTodoText => {
    if (newTodoText === "") {
      alert("Please enter your to-do task first");
      return;
    }    
    todoList.innerHTML += `<li class="todo-list-item"><p class="todo-text">${newTodoText}</p><button class="remove-todo-button">x</button></li>`;
  };

addButton.addEventListener("click", () => {
    addNewTodo(todoInput.value);
    todoInput.value = "";
    
    if (todoList.children.length > 0) {
        emptyMessage.hidden = true;
    } 

  });

// Toggle task done/todo

todoList.addEventListener("click", event => {
    if (event.target.classList.contains('todo-list-item')) {
    event.target.classList.toggle('todo-list-item-done');
    }
});

// Remove task from list

todoList.addEventListener("click", event => {
    if (event.target.classList.contains('remove-todo-button')) {
    event.target.closest('.todo-list-item').remove();
}

if (todoList.children.length === 0) {
    emptyMessage.hidden = false;
}
})
