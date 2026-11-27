// export {}

//Exercise 1: Hello, World! Program

const Hello : string  = ("Hello, World!")

console.log(Hello)

//Exercise 2: Type Annotations

const age : number = 46
const name: string = "Theodora"

console.log(age)
console.log(name)

// Exercise 3: Union Types

let id : string | number 

id = 4
console.log(id)

id = "Hello"
console.log(id)

id = true
console.log(id)

// Exercise 4: Control Flow with if...else

function numberchecker (number : number): string {
    if (number > 0) {
        return "This number is positive";
    } else if (number < 0) {
        return "This number is negative";
    } else {
        return "This number is zero";
    }
}

console.log(numberchecker(9))
console.log(numberchecker(0))
console.log(numberchecker(-1))

//#Exercise 5: Tuple Types

function getDetails (name: string, age: number): [string, number, string] {
    return [name, age,`'Hello, ${name}! You are ${age} years old.'`];
}

const details = getDetails("Alice", 25);

console.log(details)

//#Exercise 6: Object Type Annotations

type Person = {
    name: string;
    age:number
}

const createPerson : Person = {
    name : "Theodora",
    age : 46
}
console.log(createPerson)

// Exercise 8: switch Statement with Complex Conditions

function getAction (role: string) : string {
    switch (role) {
    case "admin":
        return "Manage users and settings"
    case "editor":
        return "Edit content"
    case "viewer":
        return "View content"
    case "guest":
        return "Edit content"
    default:
        return "Invalid role"
    }
}
 
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role

//Exercise 9: Function Overloading with Default Parameters

function greet (name: string):string
function greet (): string

function greet (name:string ="Theodora"): string{
    return `Welcome ${name}`;
}

console.log(greet("Maria"))