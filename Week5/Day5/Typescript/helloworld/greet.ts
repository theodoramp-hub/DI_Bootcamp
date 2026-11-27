// let greeting = "Hello, World!";
// greeting = 42
// console.log(greeting)



// function substract (a:number, b:number): number{
//     return a - b
// }
// console.log(substract(10,4))

// let greeting2 = 42;
// console.log(greeting2)

// let emptyObj: {} = {}
//console.log(emptyObj.valueOf()); 



// let point:[number, number, number] = [3, 4, 12];

// function distanceFromOrigin ([x,y,z]:[number, number, number]) : number{
//     return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
// }

// console.log(distanceFromOrigin(point))

// function fail(message: string): never {
//     throw new Error(message);
// }
// console.log(fail("This is a test error!"))

// function printType(value: number | string): void {
//   if (typeof value === "number") {
//     console.log("It's a number.");
//   } else if (typeof value === "string") {
//     console.log("It's a string.");
//   }
// }

// printType(10);
// printType("Hello");

// type Coordinates = [number, string]
// let point: Coordinates = [10, 20];

// console.log(point);

type Command = "start" | "stop" | "pause";

function executeCommand(command: Command): void {
  switch (command) {
    case "start":
      console.log("Starting...");
      break;
    case "stop":
      console.log("Stopping...");
      break;
    case "pause":
      console.log("Pausing...");
      break;
    default:
      console.log("Invalid command");
  }
}

executeCommand("start"); // Output: Starting...
executeCommand("stop"); // Output: Stopping...
executeCommand("pause"); // Output: Pausing...