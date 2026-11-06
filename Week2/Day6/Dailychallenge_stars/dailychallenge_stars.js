let stars =''

for (let i=1; i<7; i++) {
    stars = stars + '*'
    console.log(stars)
}


for (let i=1; i<7; i++) {
    let row = ""

    for (let j = 1; j <= i; j++) {
        row = row + '*'
    }
    console.log(row)
}
