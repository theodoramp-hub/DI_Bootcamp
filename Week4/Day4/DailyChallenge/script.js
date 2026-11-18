//Daily Challenge

const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
//#1
const usernames = []

gameInfo.forEach(user => usernames.push(user.username + '!'))

console.log(usernames)

//#2
const usernames5 = []

gameInfo.forEach(user => user.score > 5 ? usernames5.push(user.username) : null)

console.log(usernames5)

//#3

const total = (gameInfo.reduce((a,b) => a + b.score, 0))
console.log(total)