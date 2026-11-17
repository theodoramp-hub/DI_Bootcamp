// Exercise 7 - Part I

function makeJuice(size) {

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        return ingredient1 + ", " + ingredient2 + ", " + ingredient3;
    }

    function displayJuice() {
        const ingredients = addIngredients("apple", "orange", "banana");

        const mySentence = document.createElement("p");

        mySentence.textContent = "The client wants a " + size +
            " juice, containing " + ingredients;

        document.body.appendChild(mySentence);
    }

    displayJuice();
}

makeJuice("large");

function makeJuice(size) {

    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const mySentence = document.createElement("p");

        mySentence.textContent = "The client wants a " + size +
            " juice, containing " + ingredients.join(", ");

        document.body.appendChild(mySentence);
    }

    addIngredients("apple", "orange", "banana");
    addIngredients("mango", "strawberry", "pineapple");

    displayJuice();
}

makeJuice("large");