function produceDrivingRange(blockRange) {
  return function(start, end) {

    let startBlock = parseInt(start)
    let endBlock = parseInt(end)
    let distanceTravelled = Math.abs(endBlock - startBlock)
    let rangeDifference = blockRange - distanceTravelled

    if(rangeDifference > 0) {
      return `within range by ${rangeDifference}`
    } else {
      return `${Math.abs(rangeDifference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(amount) {
    return tipPercentage * amount
  }
}