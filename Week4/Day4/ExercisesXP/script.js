// Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => console.log((index+1) + "# choice is " + color))

console.log(colors.some(color => colour = "Violet"))

// Exercise 2 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    const number = index + 1;
    const ending = number === 3 ? ordinal[3] : (number === 2 ? ordinal[2] : (number === 1 ? ordinal[1]: ordinal[0] ));
    console.log(number + ending + " choice is " + color);
});

// Exercise 3 : Analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// Result = ['bread', 'carrot', 'potato;, 'chicken', 'apple', 'orange';

// ------2------
const country = "USA";
console.log([...country]);
// Result = ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Result = [ undefined, undefined ]  - The spread operator ... can turn empty array slots into undefined values.

// Exercise 4 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(user => 'Hello ' + user.firstName)
console.log(welcomeStudents)

const fullstackStudents = users.filter(user => user.role === 'Full Stack Resident')
console.log(fullstackStudents)

const lastname = users.filter(user => user.role === 'Full Stack Resident').map(user => 'Hello ' + user.lastName)
console.log(lastname)

// Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log(epic.reduce((a,b) => a + ' ' + b))

//Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


const studentsPass = students.filter(student => student.isPassed)
console.log(studentsPass)

const greeting = students.filter(student => student.isPassed).forEach(student => {
    console.log('Good job '+ student.name +', you passed the course in '+ student.course )})