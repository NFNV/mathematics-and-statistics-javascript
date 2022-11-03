const calculateMean = (list) => {
  const average = (list) => list.reduce((curr, next) => curr + next) / list.length

  const even = (list) => {
    return !(list.length % 2)
  }

  const listIsEven = even(list)

  if (listIsEven) {
    const evenListMiddle1Index = list.length / 2 - 1

    const evenListMiddle2Index = list.length / 2

    const listOfHalves = []
    listOfHalves.push(list[evenListMiddle1Index])
    listOfHalves.push(list[evenListMiddle2Index])

    return average(listOfHalves)
  } else {
    const middleOfOddListIndex = Math.floor(list.length / 2)
    const oddMeanList = list[middleOfOddListIndex]
    return oddMeanList
  }
}

console.log(calculateMean([10, 20, 30]))
console.log(calculateMean([10, 20, 30, 40]))
