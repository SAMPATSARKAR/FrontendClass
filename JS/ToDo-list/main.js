let form1 = document.querySelector("#taskForm");
let addInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");

form1.addEventListener("submit", (event) => {
    event.preventDefault();

    let task = addInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let element = document.createElement("li");
    element.textContent = task;

    let elementdelete = document.createElement("button");
    elementdelete.textContent = " Delete";
    elementdelete.className = "delete-button";

    elementdelete.addEventListener("click", () => {
        element.remove();
    });

    element.appendChild(elementdelete);
    taskList.appendChild(element);

    addInput.value = "";
});