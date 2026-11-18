
let stories = []

const myform = document.getElementById("libform")
const mynoun = document.getElementById("noun")
const myadjective = document.getElementById("adjective")
const person = document.getElementById("person")
const verb = document.getElementById("verb")
const place = document.getElementById("place")
const myButton = document.getElementById("lib-button")
const myShuffle = document.getElementById("shuffle")
const story = document.getElementById("story")

myform.addEventListener("submit", addStory)
myShuffle.addEventListener("click", shuffleStory)

function addStory(event) {
    event.preventDefault()

    const myTextnoun = mynoun.value.trim()
    const myTextadjective = myadjective.value.trim()
    const myTextperson = person.value.trim()
    const myTextverb = verb.value.trim()
    const myTextplace = place.value.trim()

    if (
        myTextnoun === "" ||
        myTextadjective === "" ||
        myTextperson === "" ||
        myTextverb === "" ||
        myTextplace === ""
    ) {
        alert("Please fill in all fields")
        return
    }

    stories = [
        myTextperson + " went to " + myTextplace + " with a " + myTextadjective + " " + myTextnoun + " and decided to " + myTextverb + ".",

        myTextperson + " found a " + myTextadjective + " " + myTextnoun + " in " + myTextplace + " and started to " + myTextverb + ".",

        "One day, " + myTextperson + " decided to " + myTextverb + " in " + myTextplace + " with a " + myTextadjective + " " + myTextnoun + ".",

        "At " + myTextplace + ", " + myTextperson + " saw a " + myTextadjective + " " + myTextnoun + " trying to " + myTextverb + "."
    ]

    story.textContent = stories[0]
}

function shuffleStory() {

    if (stories.length === 0) {
        alert("Create a story first")
        return
    }

    let randomNumber = Math.floor(Math.random() * stories.length)

    while (story.textContent === stories[randomNumber]) {
        randomNumber = Math.floor(Math.random() * stories.length)
    }

    story.textContent = stories[randomNumber]
}
