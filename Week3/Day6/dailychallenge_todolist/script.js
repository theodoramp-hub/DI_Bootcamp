const tasks = []

const myForm = document.querySelector("form")

const myInput = document.querySelector("input")
const myclick = document.getElementById("submit")
myclick.addEventListener("click", addTask)

function addTask(event) {
    event.preventDefault();

    const myText = myInput.value.trim()
    
    

    if (myText.length > 0) {
        tasks.push(myText)
        
        const mylisttask = document.querySelector(".listTasks")
        const myTask = document.createElement("div")
        
        const myX = document.createElement("button")
        myX.textContent = "X";
        myX.type = "button";
        myTask.appendChild(myX);

        const myCheckbox = document.createElement("input");
        myCheckbox.type = "checkbox";
        myTask.appendChild(myCheckbox);

        const myLabel = document.createElement("label");
        myLabel.textContent = myText;
        myTask.appendChild(myLabel);

        mylisttask.appendChild(myTask)
          
        myInput.value = ""

        console.log(tasks)
    }
}