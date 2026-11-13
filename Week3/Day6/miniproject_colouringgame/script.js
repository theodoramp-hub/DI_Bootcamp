
const mypallete = document.getElementById("palette");

const colours = [
    "red", "blue", "green",
    "yellow", "orange", "purple",
    "pink", "brown", "black",
    "white", "gray", "cyan",
    "magenta", "lime", "navy",
    "teal", "olive", "gold",
    "coral", "salmon", "indigo"
];

let selectedColor = "red";
let isDrawing = false;

// CREATE THE COLOR PALETTE
for (let color of colours) {

    const myDiv = document.createElement("div");

    myDiv.style.backgroundColor = color;
    myDiv.style.height = "40px";

    mypallete.appendChild(myDiv);

    myDiv.addEventListener("click", pickcolor);

    function pickcolor() {
        selectedColor = color;
        console.log(selectedColor);
    }
}


// CREATE THE PAINTING AREA
const mypainting_area = document.getElementById("painting_area");

const squareSize = 10;
const gap = 1;

function createPaintingGrid() {

    // Remove existing squares
    mypainting_area.innerHTML = "";

    // Measure the painting area
    const width = mypainting_area.clientWidth;
    const height = mypainting_area.clientHeight;

    // Calculate columns and rows
    const columns = Math.floor((width + gap) / (squareSize + gap));
    const rows = Math.floor((height + gap) / (squareSize + gap));

    // Set grid columns and rows
    mypainting_area.style.gridTemplateColumns =
        `repeat(${columns}, ${squareSize}px)`;

    mypainting_area.style.gridTemplateRows =
        `repeat(${rows}, ${squareSize}px)`;

    // Create the white squares
    for (let i = 0; i < columns * rows; i++) {

        const myDiv2 = document.createElement("div");

        myDiv2.style.backgroundColor = "white";

        mypainting_area.appendChild(myDiv2);

        // Paint when clicked
        myDiv2.addEventListener("click", applyColor);

        function applyColor() {
            myDiv2.style.backgroundColor = selectedColor;
        }
        // OPTION 2: Start drawing when mouse is pressed
        myDiv2.addEventListener("mousedown", startDrawing);

        function startDrawing() {
            isDrawing = true;
        }

        // Paint when mouse moves over squares
        myDiv2.addEventListener("mouseover", drawColor);

        function drawColor() {
            if (isDrawing) {
                myDiv2.style.backgroundColor = selectedColor;
            }
        }
    }
}

   

// CREATE GRID WHEN PAGE LOADS
createPaintingGrid();


// RECALCULATE WHEN WINDOW IS RESIZED
window.addEventListener("resize", createPaintingGrid);

//CLEAR BUTTON

const myClear = document.getElementById("clear")
myClear.addEventListener("click", clearCells)

function clearCells() {
    const squares = mypainting_area.querySelectorAll("div");

    for (let square of squares) {
    square.style.backgroundColor = "white";
    }
}