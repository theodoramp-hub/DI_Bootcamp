const anagram = (string1, string2) => {
    
    const mystring1 = string1.trim().toLowerCase().replaceAll(" ", "").split("").sort()
    const mystring2 = string2.trim().toLowerCase().replaceAll(" ", "").split("").sort()


    console.log(mystring1)
    console.log(mystring2)

    const mystring1join = mystring1.join("")
    const mystring2join = mystring2.join("")

    console.log(mystring1join)
    console.log(mystring2join)
    
    return mystring1join === mystring2join? true : false
}
console.log(anagram("Astronomer", "Moon starter"))
console.log(anagram("School master", "The classroom"))
console.log(anagram("The Morse Code", "Here come dots"))