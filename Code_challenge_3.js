function combineAndSum(accum, index,coins, sums){
  if (index>=coins.length) {
    sums.push(accum)
  }else {
    combineAndSum(accum+coins[index], index+1, coins, sums)
    combineAndSum(accum,index+1,coins,sums)
  }
}
function findJump(sums){
  let i = 0;
  let jump = null
  while (i < sums.length-1) {
    const change = sums[i];
    if (change != sums[i+1] && change+1 !=sums[i+1]) {
      jump = change+1
    } 
    i++
  }
  if (jump == null) {
    jump = sums[sums.length-1]+1
  }
  return jump
} 
function noChange(coins){
  let sums = []
  combineAndSum(0,0,coins,sums)
  sums=sums.sort()
  return findJump(sums)
  
}

console.log(noChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))
