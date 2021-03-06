/*
  The Pony Express was a mail service that operated from 1859-60 in the United States.
  It was made completely obsolete by the intercontinental telegraph.
  There were a number of stations where a rider would stop to switch to a fresh horse, or pass the mail bag along to another rider to continue the trek.
  stations is an array/list of distances in miles from one station to the next along the route.
  Implement a riders function, to return how many riders it would take to get from point A to point B.
  Riders will never agree to riding more than 100 miles.
  example: stations = [43, 23, 40, 13]
  output: 2 riders
*/

const riders = (stations = []) => {
  let numOfRiders = + !!stations.reduce((acc, distance) => acc + distance, 0), totalDistance = 0;
  stations.forEach((distance) => {
    if(totalDistance + distance <= 100) {
      totalDistance += distance;
    }
    else {
      numOfRiders++;
      totalDistance = distance;
    }
  });
  return numOfRiders;
};

console.log(riders()); // 0
console.log(riders([])); // 0
console.log(riders([0, 0, 0, 0, 0])); // 0
console.log(riders([43, 23, 40, 13])); // 2
console.log(riders([100, 100, 100, 50, 50, 30, 20, 25, 25, 25, 25])); // 6
