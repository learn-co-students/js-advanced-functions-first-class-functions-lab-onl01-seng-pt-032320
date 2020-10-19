// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};
// returnFirstTwoDrivers()

const returnLastTwoDrivers = function (drivers) {
return drivers.slice(2, 4);
};
returnLastTwoDrivers()

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];
