var myString = "This is my TypeScript App";
console.log(myString);
var json_data = JSON.parse(localStorage.getItem('json_data'));
var myList = document.getElementById("todo-list");
// checks if empty
if (json_data) {
    json_data.forEach(function (element) {
        if (element) {
            newTodo(element.title, element.id);
        }
    });
}
registerEventListeners();
// allows delete buttons to remove list items
function registerEventListeners() {
    var closeButtons = document.getElementsByClassName("delete");
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', deleteTodo, false);
    }
}
function deleteTodo() {
    var li = this.parentElement;
    myList.removeChild(li);
    var json_temp = JSON.parse(localStorage.getItem('json_data'));
    delete json_temp[li.dataset.id];
    localStorage.setItem('json_data', JSON.stringify(json_temp));
}
// for new todo form
function newTodo(todoTitle, todoId) {
    //if the todo is created rather than pulled from local storage...
    if (!todoTitle && !todoId) {
        // .value doesn't exist on type HTMLElement and won't compile? So I've type cast it to an input element
        todoTitle = document.getElementById("todoTitle").value;
        todoId = storeTodoLocal(todoTitle);
        console.log(todoTitle);
    }
    var listItem = document.createElement("li");
    // dataset.attribute allows addings of attiributes
    listItem.dataset.id = todoId.toString();
    listItem.appendChild(document.createTextNode(todoTitle));
    var deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.className = "btn btn-sm btn-danger m-1 delete";
    deleteLink.appendChild(document.createTextNode("Delete"));
    listItem.appendChild(deleteLink);
    myList.appendChild(listItem);
    registerEventListeners();
}
//to store todos
function storeTodoLocal(todoTitle, completed) {
    // retrieve and parse existing JSON from localstorage
    var json_temp = JSON.parse(localStorage.getItem('json_data'));
    if (!json_temp) {
        json_temp = [];
    }
    // creating a new todo ID based on length of existing localstorage array
    var todoId = json_temp.length;
    // add new todo object to JSON
    json_temp.push({
        "id": todoId,
        "title": todoTitle,
        "completed": false
    });
    // log updated JSON to console
    console.log(json_temp);
    console.log(completed);
    // stringify updated JSON and store back in localStorage
    localStorage.setItem('json_data', JSON.stringify(json_temp));
    // return ID of new todo
    return todoId;
}
function deleteAllTodos() {
    if (confirm("Are you sure you want to delete all of your Todos?")) {
        localStorage.removeItem('json_data');
        myList.innerHTML = '';
    }
}
