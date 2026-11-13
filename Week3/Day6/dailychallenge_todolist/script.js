const tasks = []

const myForm = document.querySelector("form")

const myInput = document.querySelector("input")
const myclick = document.getElementById("submit")
myclick.addEventListener("click", addTask)

function addTask(event) {
    event.preventDefault();

    const myText = myInput.value.trim()
    
        if (myText.length > 0) {
        
        const myTaskObject = {
        task_id: tasks.length,
        text: myText,
        done: false
        };
        tasks.push(myTaskObject);

        const mylisttask = document.querySelector(".listTasks")
        const myTask = document.createElement("div")
        const myX = document.createElement("button")

        myTask.dataset.taskId = tasks.length - 1;

        myX.textContent = "X";
        myX.type = "button";
        myTask.appendChild(myX);

                const myCheckbox = document.createElement("input");
        myCheckbox.type = "checkbox";
        myTask.appendChild(myCheckbox);

        myCheckbox.addEventListener("change", doneTask);

        const myLabel = document.createElement("label");
        myLabel.textContent = myText;
        myTask.appendChild(myLabel);

        mylisttask.appendChild(myTask)
          
        myInput.value = ""

        console.log(tasks)
    }
}

function doneTask(event) {

    const myCheckbox = event.target;

    const myTask = myCheckbox.parentElement;

    const myId = Number(myTask.dataset.taskId);

    tasks[myId].done = myCheckbox.checked;

    const myLabel = myTask.querySelector("label");

    if (myCheckbox.checked) {
    myLabel.style.color = "red";
    myLabel.style.textDecoration = "line-through";
    } else {
    myLabel.style.color = "black";
    myLabel.style.textDecoration = "none";
    }   

console.log(tasks);
}