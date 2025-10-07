 // to add a new element in DOM
//1. create new element using create element function
//2. add data -> innerText / innerHTML
//3. Insert new elem in parent container using appendChild

let todo = {
    id: 2121,
    title: "study at 10"
};

let todoContainer = document.querySelector(".todocontainer"); // Fixed class name

function addTodo(todo) {
    let li = document.createElement("li");

    li.innerHTML = `
        <div>
            <input type="checkbox" name="">
            <h1>${todo.title}</h1>
            <div>
                <button>❌</button>
                <button>🎉</button>
            </div>
        </div>
    `;

    todoContainer.appendChild(li);
}

addTodo(todo);