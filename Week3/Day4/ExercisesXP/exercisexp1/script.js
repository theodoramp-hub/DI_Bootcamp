//STEP 1: Retrieve the h1 and console.log it.

const myh1 = document.querySelector("h1")
console.log(myh1)

const myArticle = document.querySelector("article")
console.log(myArticle)

//STEP 2: remove the last paragraph in the <article> tag.
const myLastp = myArticle.lastElementChild
myArticle.removeChild(myLastp)

//STEP 3: Change the background color of the h2 to red, when it’s clicked on.

const myH2 = document.querySelector("h2")
myH2.addEventListener("click", changeColor);

function changeColor() {
    myH2.style.backgroundColor = "red"
}

//STEP 4: hide the h3 when it’s clicked o

const myH3 = document.querySelector("h3")
myH3.addEventListener("click", hide);

function hide() {
     myH3.style.display = "none";
}

//STEP 5: ADD BUTTON AND WHEN CLICKED TEXT BECOMES BOLD

const button = document.getElementById("button")
button.addEventListener("click", bold);

const myp = myArticle.getElementsByTagName("p")

function bold() {
    for (const p of myp) {
        p.style.fontWeight = "bold";
    }
}
//BONUS: 

myh1.addEventListener("mouseover", random);

function random() {
    const number = Math.floor(Math.random() * 100);
    myh1.style.fontSize = number + "px"
}

