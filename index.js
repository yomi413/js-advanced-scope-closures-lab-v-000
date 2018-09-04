const produceDrivingRange = function(trip){
  return function(blockRange1, blockRange2){
    if (trip === blockRange2 - blockRange1) {
      return '2 block out of range'
    }
  }
}
