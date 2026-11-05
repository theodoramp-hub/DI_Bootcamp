const people = ["Greg", "Mary", "Devon", "James"];

people.shift()
console.log(people)

people.splice(2,1,'Jason')
console.log(people)

people.push('Theodora')
console.log(people)

console.log(people.indexOf('Mary'))

console.log(people.slice(1))

console.log(people.indexOf('Foo'))

let last =  people[people.length -1]
console.log(last)

for (let i = 0; i < people.length ; i++) {
    console.log(people[i])
}

for (let i = 0; i < people.length ; i++) {
    console.log(people[i])
    if (people[i] === "Devon") {
        break
    }
}

let colour = ["blue", "green", "red", "yellow", "orange"]
