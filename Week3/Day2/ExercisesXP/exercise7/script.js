const allBooks = [{
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/isbn/9780439708180-M.jpg",
    alreadyRead: true
    },
    {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg",
    alreadyRead: false
    }
]

const mySection = document.querySelector(".listBooks");
for (const book of allBooks) {
    const myDiv = document.createElement("div");
    const myP = document.createElement('p')
    const myImage = document.createElement('img')
    
    mySection.appendChild(myDiv);
    myDiv.appendChild(myP)
    myDiv.appendChild(myImage)
    myP.textContent = book.title + ' written by ' + book.author
    myImage.src = book.image
    myImage.width = 100
  
    if (book.alreadyRead === true) {
        myP.style.color = "red"

    }
}


