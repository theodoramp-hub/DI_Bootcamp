//Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible() {
    let sum = 0;
   
    for (let i=0; i <= 500; i++) {
        if (i %23 === 0) {
            console.log(i);
            sum += i;
        }

    }
    console.log("Sum:", sum);
}

displayNumbersDivisible()


//BONUS

function displayNumbersDivisible(divisor) {
    let sum = 0;
   
    for (let i=0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }

    }
    console.log("Sum:", sum);
}
displayNumbersDivisible(3)
displayNumbersDivisible(45)


//Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    let newStock  = 0;

    for (let product of shoppingList) {
        if (stock[product] > 0) {
            console.log(prices[product]);
            total += prices[product]
            stock[product] -= 1;
        }
    }
    return total;
}
console.log("Total:", myBill());
console.log(stock)

//Exercise 3 : What’s in my wallet ?

function changeEnough(itemPrice, amountOfChange) {
    let quarters = 0.25
    let dimes = 0.10
    let nickel = 0.05
    let penny = 0.01

    let total = (amountOfChange[0] * quarters)
              + (amountOfChange[1] * dimes)
              + (amountOfChange[2] * nickel)
              + (amountOfChange[3] * penny);


    if(total >= itemPrice) {
        return true;
    }else {
        return false;
    }
}

console.log(changeEnough (4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2,100,0,0])) 
console.log(changeEnough(0.75, [0,0,20,5])) 


Exercise 4 : Vacations Costs

function hotelCost() {
    let total = 0
    let nights = prompt('Number of nights')
    let price = 140

    while (nights === null || nights.trim() === '' || isNaN(Number(nights))) {
        nights = prompt("Please enter a valid number of nights");
    }
    total = Number(nights) * price;
    
    return total
}


function planeRideCost() {
    
    let destinationPrompt = prompt('Destination')

    let destination = {
        "london": 183,
        "paris": 220,
    }

    while (destinationPrompt === null || destinationPrompt.trim() === '') {
        destinationPrompt = prompt("Please enter a valid destiantion");
    }
    let city = destinationPrompt.trim().toLowerCase();

    if (city in destination) {
        return destination[city];
    } else {
        return 300;
    }
   
}

function rentalCarCost() {
    let total = 0;
    let days = prompt("Number of days for car rental");
    let price = 40;
    let discount = 5;

    while (days === null || days.trim() === "" ||
           isNaN(Number(days)) || Number(days) <= 0 ||
           !Number.isInteger(Number(days))) {
        days = prompt("Please enter a valid number of days");
    }

    total = Number(days) * price;

    if (Number(days) > 10) {
        total = total * (1 - discount / 100);
    }

    return total;
}

function totalVacationCost() {

    let totalCost = hotelCost() + planeRideCost() + rentalCarCost();

    return totalCost;
}

console.log(totalVacationCost());

//BONUS


function hotelCost(nights) {
    let price = 140;
    let total = Number(nights) * price;

    return total;
}

function planeRideCost(city) {
    let destination = {
        "london": 183,
        "paris": 220
    };

    city = city.trim().toLowerCase();

    if (city in destination) {
        return destination[city];
    } else {
        return 300;
    }
}

function rentalCarCost(days) {
    let price = 40;
    let discount = 5;

    let total = Number(days) * price;

    if (Number(days) > 10) {
        total = total * (1 - discount / 100);
    }

    return total;
}

function totalVacationCost() {

    let nights = prompt("Number of nights");

    while (nights === null || nights.trim() === "" ||
           isNaN(Number(nights)) || Number(nights) <= 0 ||
           !Number.isInteger(Number(nights))) {
        nights = prompt("Please enter a valid number of nights");
    }

    let city = prompt("Destination");

    while (city === null || city.trim() === "") {
        city = prompt("Please enter a valid destination");
    }

    let days = prompt("Number of days for car rental");

    while (days === null || days.trim() === "" ||
           isNaN(Number(days)) || Number(days) <= 0 ||
           !Number.isInteger(Number(days))) {
        days = prompt("Please enter a valid number of days");
    }

    let hotel = hotelCost(nights);
    let plane = planeRideCost(city);
    let car = rentalCarCost(days);

    let totalCost = hotel + plane + car;

    console.log("Hotel cost: $" + hotel);
    console.log("Plane tickets cost: $" + plane);
    console.log("Car rental cost: $" + car);

    return totalCost;
}

console.log("Total Vacation Cost: $" + totalVacationCost());

