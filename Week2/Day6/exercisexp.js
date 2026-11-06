// Exercise 1 : List of people

//Write code to remove “Greg” from the people array.

const people = ["Greg", "Mary", "Devon", "James"];

people.shift()
console.log(people)

//Write code to replace “James” to “Jason”

people.splice(2,1,'Jason')
console.log(people)

//Write code to add your name to the end of the people array.

people.push('Theodora')
console.log(people)

//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf('Mary'))

//Write code to make a copy of the people array using the slice method

console.log(people.slice(1))

//Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf('Foo'))

//Part II - Loops

let last =  people[people.length -1]
console.log(last)

//Part II - Loops

for (let i = 0; i < people.length ; i++) {
    console.log(people[i])
}

for (let i = 0; i < people.length ; i++) {
    console.log(people[i])
    if (people[i] === "Devon") {
        break
    }
}

// Exercise 2 : Your favorite colors

let colour = ["blue", "green", "red", "yellow", "orange"]

for (let i = 0; i < colour.length ; i++) {
    console.log('My #' + (i + 1) + ' ' + 'choice is' + ' ' + colour[i])
}

//Bonus

let colour2 = ["blue", "green", "red", "yellow", "orange"]
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colour2.length ; i++) {
    console.log('My' + ' ' + (i + 1)+ suffixes[i] + ' ' + 'choice is' + ' ' + colour[i])
}

// Exercise 3 : Repeat the question

// Prompt the user for a number.

// let number = prompt('Give me a number')
// console.log(typeof number)
// console.log(number)

// while (parseInt(number) < 10) {
//     number = prompt ('Give me a new number')
// }

//  Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.

console.log(building.numberOfFloors)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])
console.log(building.numberOfRoomsAndRent.dan[0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const sarahRent = building.numberOfRoomsAndRent.sarah[1]
const davidRent = building.numberOfRoomsAndRent.david[1]
const danRent = building.numberOfRoomsAndRent.dan[1]

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200
}

console.log(building.numberOfRoomsAndRent.dan[1])

Exercise 5 : Family

Create an object called family with a few key value pairs.

Exercise 5 : Family

const family = {
    name: 'Petrou',
    kids: 2,
    address: 'Elpidos'
};

// 2. Console.log the keys
for (let key in family) {
    console.log(key);
}

// console.log the values of the object.
for (let key in family) {
    console.log(family[key])
};

Exercise 6 : Rudolf

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

// Given the object above and using a for loop, Exercise 6 : Rudolf

let sentence = ''

for (let key in details) {
    sentence = sentence + key + ' ' + details[key] + ' ';
}

console.log (sentence)

//Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

const letters = []

 for (let i = 0 ; i < names.length; i++) [
    letters.push (names[i][0])
 ]

 letters.sort()

 console.log(letters.join(''))