
// STEP 1: Select the HTML elements
const myRadius = document.getElementById("radius");
const myVolume = document.getElementById("volume");
const myForm = document.getElementById("MyForm");

// STEP 2: Add event listener
myForm.addEventListener("submit", calculate);

// STEP 3: Create the calculate function
function calculate(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the radius and convert it to a number
    const radius = Number(myRadius.value);

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * (radius ** 3);

    // Display the result
    myVolume.value = volume.toFixed(2);

    // Display the result in the console
    console.log("Radius:", radius);
    console.log("Volume:", volume.toFixed(2));
}

