// Exercise 2: Move the box

const myDiv = document.getElementById("container")
const myAnimate = document.getElementById("animate")

let pos = 0


function myMove() {
    const timer = setInterval(moveBox, 1); 

    function movebox() {

        if (pos >=350) {
        clearInterval(timer);
        } else {
            pos++
            myAnimate.style.left = pos + "px";
        }
    }
}

