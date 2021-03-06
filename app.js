//Selectors

const todoInput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event listner

todobutton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);



//Functions

function addTodo(Event) {
    //Prevent form from submitting
    Event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
}



function deleteCheck(e) {
    const item = e.target

    //Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        //Remove element after transition is ended
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    //Check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function filterTodo(e) {

    e.preventDefault();
    const todos = todoList.childNodes;

    todos.forEach((x) => {

        // console.log(x.classList);
        switch (e.target.value) {
            case "all":
                console.log("All: " + x);

                // x.style.display = "flex";
                break;

            case "completed":
                console.log("Completed:" + x);
            // if (x.classList.contains("completed")) {
            //     x.style.display = "flex";
            // }
            // else {
            //     x.style.display = "none";
            // }

            default:
                break;
        }

    });
}
















