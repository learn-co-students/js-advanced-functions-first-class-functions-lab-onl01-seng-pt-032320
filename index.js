const returnFirstTwoDrivers = function(arr){
  return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(integer){
  return function(value) {
    return integer * value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arr, whichDrivers){
  return whichDrivers(arr)
}
