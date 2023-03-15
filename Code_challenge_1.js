const list = [1,2,3,4,5,6]
const list2 = [10,20,30,40,50]
const list3 = [5]
const list4 = [1,2,5,10,15,23,24,27,55]


function changePositions(list, s) {
  let res = [] 
  for (let i = list.length - 1; i >= 0; i--) {
    const num = list[i];
    const strNum = num.toString()
    let finalNum = ""
    for (let j = 0; j < strNum.length; j++) {
      const dig = strNum[j]; 
      const digToInt = parseInt(dig)
      if (digToInt < s) {
        finalNum = finalNum+dig
      }
    } 
    if (finalNum != "") {
      res.push(parseInt(finalNum))
    }
  }
  return res
}

console.log(changePositions(list4, 5))