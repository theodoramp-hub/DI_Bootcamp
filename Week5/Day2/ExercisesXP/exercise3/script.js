const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
//#1
const myJSON = JSON.stringify(marioGame)
console.log(myJSON)

//all objects are converted to strings except numbers. Nested objects are still nested inside each other with the smae structure but they are printed on one line. Only numbers are not strings.  Last comme after the last [roperty is removed. ]

//#2
const myJSON2 = JSON.stringify(marioGame, null, 2)
console.log(myJSON2)

//#3
//I put the breakpoint on line 32 and the code stopped before line 32. myJSON and myJSON2 are strings: they cannot be expanded. 


