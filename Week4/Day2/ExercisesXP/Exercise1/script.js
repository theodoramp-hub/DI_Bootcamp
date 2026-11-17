// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:   Result = inside the funcOne function 3
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?  Result: TypeError: Assignment to constant variable because you cannot assign a new value on a variable declared with const so no alert is shown

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()  // 0 as a is declared in global scope
funcTwo()  // Changes a from 0 to 5.
funcThree()  // Shows 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ? 


const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree()  // 0 as a is declared in global scope
funcTwo()  // Will not change because const does not allow reassignment. 
funcThree()  // error stops execution

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// // #3.1 - run in the console:
// funcFour() //Creates a global property a on the window object and assigns "hello".
// funcFive() //Hello - because a is global

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:  Result: inside the funcSix function test
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? Result: inside the funcSix function test - because - nothing will be changed becasue both variables are declared

#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console - Result: 1st alert: in the if block 5 - becuase a is declared within the if block(block scope)function and 2nd alert : outside of the if block 2 : because it takes the variable of the global scope where a is declared 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ? Nothing because both variables are declared in different scope and non is reassigned