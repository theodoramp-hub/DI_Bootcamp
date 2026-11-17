//Exercise 7

(function (username) {
    const myNavbar = document.getElementById("navbar");
    const myDiv = document.createElement("div")

    const myName = document.createElement('p')
    myName.textContent = "Welcome" + username
  
    const myImg = document.createElement('img')
    img.src = "https://i.pravatar.cc/100";
    img.alt = "Profile picture";
    img.width = 50;

    myNavbar.appendChild(myName)
    myNavbar.appendChild(myImg)

})("John")