const myform = document.querySelector('form')
console.log(myform)

const myInput1 = document.getElementById('fname')
console.log(myInput1)
const myInput2 = document.getElementById('lname')
console.log(myInput2)
const myInput3 = document.getElementById('submit')
console.log(myInput3)

const myInput1n = document.getElementsByName('firstname')
console.log(myInput1n)
const myInput2n = document.getElementsByName('lastname')
console.log(myInput2n)

myform.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const firstName = myInput1.value;
    const lastName = myInput2.value;

    if (firstName.trim() !== "" && lastName.trim() !== "") {
        console.log(firstName);
        console.log(lastName);

        // Create the first li
        const li1 = document.createElement("li");
        li1.textContent = firstName;

        // Create the second li
        const li2 = document.createElement("li")
        li2.textContent = lastName

        // Find the ul
        const myul = document.querySelector(".usersAnswer");

        // Append both li elements to the ul
        myul.appendChild(li1);
        myul.appendChild(li2);
    }
}


