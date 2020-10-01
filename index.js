// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  let drivers =   array.slice(0,2)
  return drivers
}

const returnLastTwoDrivers = (array) => {
    let drivers = array.slice(-2);
    return drivers
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = (int) => {
    return function(value){
        return value * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers,callback) => {
    return callback(drivers)
}
