/*
  Create a function which checks a number for three different properties.
  Is the number prime?
  Is the number even?
  Is the number a multiple of 10?
  Each should return either true or false, which should be given as an array.
*/

const numberCheck = (num) => {
  return [`isPrime: ${(() => {
      const sqrtOfNum = Math.sqrt(num);
      for(let index = 2; index <= sqrtOfNum; index++) {
        if(num % index === 0) {
          return false;
        }
      } 
      return num > 1;
    })()}`,
    `isEven: ${num % 2 === 0}`,
    `isMultipleOfTen: ${num % 10 === 0}`];
};
