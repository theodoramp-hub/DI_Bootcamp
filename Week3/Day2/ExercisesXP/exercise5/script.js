
// STEP 1 - Retrieve the div
let myDiv = document.getElementById("container");
console.log(myDiv);

// STEP 2 - Change the attribute 
myDiv.setAttribute ('id', 'socialNetworkNavigation');

// STEP 3 - Retrieve both ul elements
let myLists = document.querySelector("ul");

// STEP 4 - Create new li
let newLi = document.createElement('li')

// STEP 5 - Create text note 
let newText = document.createTextNode(“Logout” )

// STEP 6 - Append the text node to the newly created list node (<li>).
newLi.appendChild('Logout');

// STEP 7 - Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
myLists.appendChild(newLi);

// STEP 8 -Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).



