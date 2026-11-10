const planets = [
    { name: "Mercury", moons: 0 },
    { name: "Venus", moons: 0 },
    { name: "Earth", moons: 1 },
    { name: "Mars", moons: 2 },
    { name: "Jupiter", moons: 4 },
    { name: "Saturn", moons: 5 },
    { name: "Uranus", moons: 3 },
    { name: "Neptune", moons: 2 }
]

const mySection = document.querySelector(".listPlanets")

for (const planet of planets) {
    const myDiv = document.createElement("div")

    myDiv.classList.add("planet");
    myDiv.classList.add(planet.name.toLowerCase());

    mySection.appendChild(myDiv)
    
    for (let i = 0; i < planet.moons; i++) {
    const myMoon = document.createElement("div");
    myMoon.classList.add("moon");

    myMoon.style.left = (i * 45) + "px";

    myDiv.appendChild(myMoon)
    
    }
}

