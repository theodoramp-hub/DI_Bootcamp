// let login = {
//     username: "Theo",
//     password: "Pet"
// }
// let database = [login]
// console.log (database)

// let newsfeed = [
//     {username: "Theo", timeline: "Pet"},
//     {username: "Mar", timeline: "MOm"},
//     {username: "Pet", timeline: "Chr"}
// ]
// console.log (newsfeed)

// for (let i = 0; i < 2; i++) {
//     console.log("the current number is " + i)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
//  let arr = [1, 4, 7, 10]
//     for (let i=0; i<arr.length; i++) {
//         console.log(arr[i]);
//     }

// for (let i = 0; i < 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + "is even")
//     } else {
//          console.log(i + "is odd")
//     }
// }
// let i = 0;
// do {
//   console.log("The number is " + i)
//   i++;
// }
// while (i < 10);

// let names = ["john", "sarah", 23, "Rudolf",34]

// for (let i=0; i < names.length; i++) {
//     if (typeof names[i] !== "string") {
//         continue
//     }
//     if (names[i][0] !== names[i][0].toUpperCase()) {
//         names[i] = names[i][0].toUpperCase() + names[i].slice(1);
//     }

//     console.log(names[i]);
// }

let names = ["john", "sarah", 23, "Rudolf",34]

for (let i=0; i < names.length; i++) {
    if (typeof names[i] !== "string") {
        break
    }
    console.log(names[i]);
    }
