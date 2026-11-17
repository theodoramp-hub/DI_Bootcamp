//Exercise 7

function displayJuice () {
    
    const mySentense = document.createElement("p")

    mySentense.textContent = "The client wants a " + size + " juice, containing " + ingredients,join(",")

        document.body.appendChild(mySentense)
    }
    addIngredients("apple", "orange", "banana");
}
makeJuice("large");

//Exercise 7 - Part II

function makeJuice (size) {
    let ingredients = []

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3)
    }
        
        const mySentense = document.createElement("p")
        mySentense.textContent = "The client wants a " + size + " juice, containing " + ingredient1 + ", " + ingredient2 + ", " + ingredient3;c

        document.body.appendChild(mySentense)
    }
    addIngredients("apple", "orange", "banana");
    addIngredients("mango", "strawberry", "pineapple");

    displayJuice();

}
makeJuice("large");