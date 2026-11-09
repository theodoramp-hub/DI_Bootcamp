
// STEP 1 - Retrieve the div
let myDiv = document.querySelector("#container");
console.log(myDiv);

// STEP 2 - Retrieve both ul elements
let myLists = document.querySelectorAll("ul");

// STEP 3 - Change Pete to Richard
myLists[0].children[1].textContent = "Richard";

// STEP 4 - Delete Sarah from the second ul
myLists[1].children[1].remove();

// STEP 5 - Change the first li of each ul to your name
for (let list of myLists) {
    list.firstElementChild.textContent = "Theodora";
}

// STEP 6 - Add student_list class to both ul elements
for (let list of myLists) {
    list.classList.add("student_list");
}

// STEP 7 - Add two classes to the first ul
myLists[0].classList.add("university", "attendance");

// STEP 8 - Style the div
myDiv.style.backgroundColor = "lightblue";
myDiv.style.padding = "20px";

// STEP 9 - Hide Dan
myLists[1].lastElementChild.style.display = "none";

// STEP 10 - Add a border to Richard
myLists[0].children[1].style.border = "1px solid black";

// STEP 11 - Change body font size
document.body.style.fontSize = "20px";

// BONUS
if (myDiv.style.backgroundColor === "lightblue") {
    let name1 = myLists[0].firstElementChild.textContent;
    let name2 = myLists[1].firstElementChild.textContent;

    alert("Hello " + name1 + " and " + name2);
}









