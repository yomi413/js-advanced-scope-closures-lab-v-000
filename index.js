const produceDrivingRange = function(trip){
  return function(blockRange){
    return trip - blockRange
  }
}
