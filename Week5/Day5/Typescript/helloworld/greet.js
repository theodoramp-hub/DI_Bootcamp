"use strict";
// let greeting = "Hello, World!";
// greeting = 42
// console.log(greeting)
function executeCommand(command) {
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
