// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number){
    return function(){
        return number * number;
    }
}

const fareDoubler = function(fare){
    return fare * 2;
}

const fareTripler = function(fare){return fare * 3;}

function selectDifferentDrivers(drivers, selectingDrivers){
    if(selectingDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else{
        return returnLastTwoDrivers(drivers);
    }
}