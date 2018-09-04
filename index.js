function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let travelledDistance = Math.abs(end - start)

    if(blockRange - travelledDistance > 0) {
      return `within range by ${blockRange - travelledDistance}`
    }
  }
}
