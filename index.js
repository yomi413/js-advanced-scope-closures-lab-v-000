function produceDrivingRange (blockRange) {
  return function(startingBlock, endingBlock) {
    let start = Math.parseInt(startingBlock)
    let end = Math.parseInt(endingBlock)
    let travelledDistance = Math.abs(end - start)

    if(blockRange - travelledDistance > 0) {
      return `within range by ${blockRange - travelledDistance}`
    }
  }
}
