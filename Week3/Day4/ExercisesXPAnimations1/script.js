// Exercise 1: Timer
//Part I

function sayHi(phrase) {
  alert(phrase);
}

setTimeout(sayHi, 2000, "Hello"); 

//Part II
const myDiv = document.getElementById("container")

function addP() {
    const myP = document.createElement("p");
    myDiv.appendChild(myP)
    myP.textContent = 'Hello World'
}

setTimeout(addP, 2000); 

//Part III

function addP2() {
    const myP = document.createElement("p");
    myDiv.appendChild(myP)
    myP.textContent = 'Hello World'

    myPar()
}

// Part 4
const timer = setInterval(addP2, 2000); 

const myButton = document.getElementById("clear")
myButton.addEventListener('click', stopTimer)

function stopTimer() {
        clearInterval(timer); 
}

// Part 5
function myPar() {
    const paragraphs = myDiv.querySelectorAll("p");
    
    console.log(paragraphs.length);
    
    if (paragraphs.length >= 5) {
    clearInterval(timer);
    }
}
