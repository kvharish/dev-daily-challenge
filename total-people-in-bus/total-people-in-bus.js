/*
  There is a bus moving in the city, and it takes and drop some people at each bus stop.
  You are provided with a list (or array) of integer arrays (or tuples).
  Each integer array has two items which represent the number of people that get on the bus (The first item) and the number of people that get off the bus (The second item) at a bus stop.
  Your task is to return number of people who are still left on the bus after the last bus station (after the last array).
*/

const totalPeopleInBus = (arr) => arr.reduce((total, [enter, exit]) => total + enter - exit, 0);
