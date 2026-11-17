//Exercise 8

(function (username) {
    const myNavbar = document.getElementById("navbar");
    const myDiv = document.createElement("div")

    const myName = document.createElement('p')
    myName.textContent = "Welcome " + username
  
    const myImg = document.createElement('img')
    myImg.src = "https://i.pravatar.cc/100";
    myImg.alt = "Profile picture";
    myImg.width = 50;

    myDiv.appendChild(myName)
    myDiv.appendChild(myImg)
    myApp

})("John")