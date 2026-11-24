// Exercise 1 : Location

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// Exercise 2: Display Student Info

function displayStudentInfo(objUser){
    const{first, last} = objUser;
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

//  Exercise 3: User & id

const users = { user1: 18273, user2: 92833, user3: 90315 }

const myUsers = Object.entries(users)
console.log(myUsers)

console.log(myUsers.map(([users, id]) => [users, id*2]))

// Exercise 4 : Person class

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//Output: Object

// Exercise 5 : Dog class

class Dog {
  constructor(name) {
    this.name = name;
  }
};

  // 4
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

//Exercise 6 : Challenges
//#1
[2] === [2] //false
{} === {}   //false

//Arrays and objects are compared by reference

//#2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)  //4
console.log(object3.number)  //4
console.log(object4.number)  //5

//Objects are compared by reference

//#1

class Animal {
    constructor (name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color);
    this.sound = sound;
  }
};

const farmerCow = new Mammal("Lily", "cow", "brown and white", "Mooo")
console.log(`${farmerCow.sound} I'm a ${farmerCow.type}, named ${farmerCow.name} and I'm ${farmerCow.color}`)