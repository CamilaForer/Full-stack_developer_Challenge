function sortedSquareArray(array, s) {
  let newArr = []
  let orderNumbers = []
  const ss = parseInt(s.toString() + s.toString())
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const squareNum = num * num
    if (squareNum < ss) {
      newArr.push(squareNum)
    }
  }
  let left = 0
  let right = newArr.length - 1
  let element = null
  while (left <= right) {
    if (newArr[left] > newArr[right]) {
      element = [newArr[left]]
      left++
    } else {
      element = [newArr[right]]
      right--
    }
    orderNumbers = element.concat(orderNumbers)
  }
  console.log(orderNumbers)
}
sortedSquareArray([-2,-1,1,3,5,10], 5)