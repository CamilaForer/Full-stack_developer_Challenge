const list = [1, 2, 3, 5, 10, 15, 23, 24, 25]

function changePositions(list, s) {
  let res = []
  for (let i = list.length - 1; i >= 0; i--) {
    const num = list[i];
    const strNum = num.toString()
    for (let j = 0; j < strNum.length; j++) {
      const dig = strNum[j];
      console.log(dig)
    }
  }
  return res
}

console.log(changePositions(list, 5))