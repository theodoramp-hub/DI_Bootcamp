//STEP 1: 

var allBoldItems

//STEP 2: 
function getBoldItems() {
    allBoldItems = document.querySelectorAll("strong")
    for (const item of allBoldItems) {
    console.log(item.textContent);
    }
}
getBoldItems();
console.log(allBoldItems);

//STEP 3:
const myP = document.querySelector("p")
myP.addEventListener("mouseover", highlight);

function highlight() {
     for (const word of allBoldItems) {

        word.style.color = "blue"
     }
   
}


//STEP 4: 

myP.addEventListener("mouseout", returnItemsToDefault);

function returnItemsToDefault() {
    for (const word of allBoldItems) {
        word.style.color = "black"
     }
   
}

