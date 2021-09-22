export const getArrOfRandomNums = (numRange = 24, arrLengthLimit = 4) => {
  const list = []
  while (list.length < arrLengthLimit) {
    const num = Math.floor(Math.random() * numRange)
    if (list.indexOf(num) === -1) {
      list.push(num)
    }
  }
  return list
}
