"use strict";
function printDouble(msg) {
    console.log(msg);
    console.log(msg);
}
printDouble("Hello World :)");
const btn = document.getElementById("btn"); //  ! Non-Null Assertion operator
console.log(btn);
const input = document.getElementById("todoinput"); // Non-Null Assertion operator
// We do not use the Non-null assertion operator so when assiging form, we need to use form?= an d not form=
const form = document.querySelector("#todoform");
const list = document.getElementById("todolist");
const todos = readToDos();
todos.forEach(createTodoElement);
function readToDos() {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
}
//--- Non-Null Assertion operator --- force compiler to understand that the btn will never be null
//Use it when you are very sure of existance !!!
//const btn = document.getElementById("btn")!;
function handleSubmit(e) {
    e.preventDefault();
    alert(input.value);
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodoElement(newTodo);
    todos.push(newTodo);
    console.log("Submitted !!");
    saveTodos();
    input.value = "";
}
form?.addEventListener("submit", handleSubmit);
function createTodoElement(todo) {
    const newLI = document.createElement("li"); // html list element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    //we cannot use list.append() as when we assigned list we did not use non-null assignment operator. So the list = HTMLElement | null
    list?.append(newLI);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
