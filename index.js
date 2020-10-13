// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    //The first argument specifies where the slice starts, 
    //and the second argument specifies where it ends
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    //the last n elements of an array: pass it a negative index.
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply) {
    return function (fare) {
        return multiply * fare;
    }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selectDrivers) {
    return selectDrivers(drivers)
}