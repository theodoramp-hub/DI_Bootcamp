// // Exercise 2 : Ternary operator

// function winBattle(){
//     return true;
// }

// const winBattle2 = ()=> true;
// console.log(winBattle2());

// let experiencePoints = winBattle2() ? 10 : 1;
// console.log (experiencePoints)

// Exercise 3 : Is it a string ?

// const isString = (value) => typeof value === "string" 
// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));

//Exercise 4 : Find the sum

// const sum = (a,b) => a + b
// console.log(sum(5,10)); 

//Exercise 5 : Kg and grams

// function weight (a) {
//     return a*1000
// }
// console.log(weight(5));


// const weight2 = function(a) {
//     return a * 1000;
// };

// console.log(weight2(5)); // 5000

// const weight3 = (a) => a*1000
// console.log(weight3(5));

//A function declaration can be called before it is defined, but a function expression assigned to const cannot.

// Exercise 6 : Fortune teller

// (function(job, location, name, children) {
//     document.body.textContent = (`You will be a ${job} in ${location}, and married to ${name} with ${children} kids.`)
// })("Developer", "London", "John", 2);

// Exercise 7 : Welcome
(function(name) {
    const navbar = document.getElementById("navbar");

    const myDiv = document.createElement("div");

    const myName = document.createElement("span");
    myName.textContent = `Welcome, ${name}!`;

    const myImage = document.createElement("img");
    myImage.src = "john.jpg";
    myImage.width = 50;

    myDiv.appendChild(myName);
    myDiv.appendChild(myImage);

    navbar.appendChild(myDiv);

})("John");