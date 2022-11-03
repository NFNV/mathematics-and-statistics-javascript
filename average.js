const average = (list) => {
  let sum = 0

  for (let i = 0; i < list.length; i++) {
    sum += list[i]
  }

  return sum / list.length
}

const average2 = (list) => list.reduce((curr, next) => curr + next) / list.length

console.log(average([250, 300, 350, 500, 780, 900]))

console.log(average2([250, 300, 350, 500, 780, 900]))
