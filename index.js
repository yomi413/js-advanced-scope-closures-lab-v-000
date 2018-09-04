function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let distance = Math.abs(end - start)
    let rangeDifference = blockRange - distance

    if(rangeDifference > 0) {
      return `within range by ${rangeDifference}`
    } else {
      return `${Math.abs(rangeDifference)} blocks out of range`
    }
  }
}
