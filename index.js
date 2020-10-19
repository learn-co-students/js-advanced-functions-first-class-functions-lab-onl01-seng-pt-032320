// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};
// returnFirstTwoDrivers()

const returnLastTwoDrivers = function (drivers) {
return drivers.slice(2, 4);
};
// returnLastTwoDrivers()

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multi) {
    // return the function that will multiply a fare for a ride accordingly.
    return function (int) {
      return multi * int;
    };
  };
  
  const fareDoubler = createFareMultiplier(2)

  const fareTripler = createFareMultiplier(3)
  const  selectDifferentDrivers = function(drivers, selectDrivers) {
      return selectDrivers(drivers)
  }