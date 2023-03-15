const numbers = [1,2,5,10]
function sortedSquareArray(array,s){
  let newArr  = []
  let squareNum = null
  const ss = parseInt(s.toString()+s.toString())
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    squareNum = num*num
    if (squareNum < ss ) {
      newArr.push(squareNum)     
    }
  }
  //for (let j = 0; j < newArr.length-1; j++) {
   // const num = newArr[j];
   // if
  //}
  console.log(newArr)
}
sortedSquareArray(numbers,5)