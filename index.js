// Code your solution in this file!



const returnFirstTwoDrivers = function(arr) {
 return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr) {
 return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(value1){
 return function(value2){
    return value1 * value2
 }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func){
 return func(arr)
}