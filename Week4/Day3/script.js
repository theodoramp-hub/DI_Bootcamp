

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]


const total = party.reduce((a, b) => {
    if (b.desert !== 'Apple  Pie')
        return a + b.calories
    }
    return acc
, 0)

cons