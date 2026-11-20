// const student = {
//     name: "Alex",
//     age: 10,
//     subject: "JavaScript"
// };
// const {age} = student
// console.log(age)

// const {name, subject} = student
// console.log(name, subject)

// const product = {
//     title: "Laptop",
//     price: 800
// };

// const{title:productName} = product;
// console.log(productName)

// const game = {
//     title: "Minecraft",
//     rating: 9
// };

// const {title, rating = 5} = game
// console.log(title, rating)

// const employee = {
//     firstname: "Jon",
//     lastname: "Snow",
//     dateofbirth: "1990"
// };

// const{firstname, country = "Cyprus"} = employee
// console.log(firstname, country)

// const employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// Destructuring the object into variables without 
// assigning default values 
// const { firstname, lastname, country } = employee;
// console.log( firstname, lastname, country);

// const { firstname, lastname, country = "Greece" } = employee;
// console.log( firstname, lastname, country);

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// const keys = Object.keys(object1)
// console.log(keys)

// console.log(Object.values(object1))
// console.log(Object.entries(object1))

// for (let [key, value] of Object.entries(object1)) {
//   console.log (`Key ${key} has value ${value}`)
// }

// const shopping = [
//     ["apple", "$2"],
//     ["pear", "$1"],
//     ["banana", "$0.77"]
// ];

// const shoppingObject = Object.fromEntries(shopping);

// console.log(shoppingObject);

// const pairs = [
//     ["name", "Alex"],
//     ["age", 10]
// ];

// const person = Object.fromEntries(pairs)
// console.log(person);


// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// const keysNumber = Object.keys(myObj)
// // console.log(keysNumber)
// console.log(keysNumber.length)
// // console.log(keysNumber.index)

// const valueNumber = Object.values(myObj)
// // console.log(valueNumber)
// console.log(valueNumber.length)
// // console.log(valueNumber.index)

// let number = 1;
// for (let [key , value] of  Object.entries(myObj)) {
//   console.log(`The ${number} # key is : ${key} The ${number}# value is : ${value}`)
//   number++
// }

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };

// const {name, age, scores:{maths, english, science=50}} = student
// console.log (english)

// function displaySummary(student) {
//     console.log(student.name);
//     console.log(student.scores.maths);
// }
// displaySummary(student)

// function displaySummary({ name, scores: { maths } }) {
//     console.log(name);
//     console.log(maths);
// }

// displaySummary(student);

// function displaySummary({
//     name,
//     scores: { maths = 0, english = 0, science = 0 }
//     }) {
//     console.log(name, maths, english, science);
// }
// displaySummary(student);

// const car = {
//     color: "blue",
//     brand: "Ford"
// };

// const myCar = {color:"black", ...car}
// console.log(myCar)

// let myCar = {
//     color: "blue",
//     details: {
//         plateNumber: 123,
//         name: "Ford"
//     }
// };

// let myNewCar = { ...myCar };

// myCar.color = "red";
// console.log(myNewCar.color); 

// myCar.details.plateNumber = 345;
// console.log(myNewCar.details.plateNumber)

// const myCar = {
//     color: "blue",
//     details: {
//         plateNumber: 123,
//         name: "Ford"
//     }
// };

// const myNewCar = {
//     ...myCar,
//     details: { ...myCar.details }
// };

// myCar.details.plateNumber = 345;

// console.log(myCar.details.plateNumber);    
// console.log(myNewCar.details.plateNumber);

// const student = {
//     name: "Alex",
//     scores: {
//         maths: 80,
//         english: 90
//     }
// };

// const myStudent = {
//   ...student, 
//   scores:{...student.scores}
// }

// myStudent.scores.maths = 100
// console.log(student.scores.maths)
// console.log(myStudent.scores.maths)

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// const box = new Rectangle(10, 5);
// console.log(box.height); // 10
// console.log(box.width);  // 5


// const myRectangle = new Rectangle(8,3)
// console.log(myRectangle.width); // 10

// class Pet {
//     constructor(name, animal) {
//         this.name = name;
//         this.animal = animal;
//     }
// }

// const myPet = new Pet("Luna", "cat")
// console.log(myPet.name)
// console.log(myPet.animal)

// class Pet {
//     constructor(name, animal) {
//         this.name = name;
//         this.animal = animal;
//     }

//     introduce() {
//         console.log(`I am ${this.name}, a ${this.animal}.`);
//     }
// }

// const myPet = new Pet("Luna", "cat")
// myPet.introduce();

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}