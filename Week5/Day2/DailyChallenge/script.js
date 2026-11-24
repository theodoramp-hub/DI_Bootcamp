const myForm = document.querySelector("form")

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);
    const person = Object.fromEntries(formData);

    console.log(person);

    const myJSON =JSON.stringify(person)
    console.log(myJSON)
})

