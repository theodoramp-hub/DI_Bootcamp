let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit)
    })
}

displayGroceries()

const cloneGroceries = () => {
    let user = client;

    client = "Betty"

    console.log(user)
    console.log(client)

    let shopping = groceries
    groceries.totalPrice = "35$"

    console.log(groceries.totalPrice)
    console.log(shopping.totalPrice)

    groceries.other.paid = "false"

    console.log(groceries.other.paid)
    console.log(shopping.other.paid)

}

cloneGroceries()  
// 1st case : We will see the modification only on client because for strings we pass by value
//2nd case: We will see the modification on both becasue for objects we pass by reference
//2nd case: We will see the modification on both becasue for objects we pass by reference
