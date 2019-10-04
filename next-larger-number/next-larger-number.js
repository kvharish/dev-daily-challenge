/*
  Your goal is to create a function that takes a positive integer and returns the next bigger number formed using the same digits.
  A number like 2019 would not become 9210, as that is the largest possible number that can be created using those digits. The answer would be 2091, as that is the next larger number.
  For example:
  12 ==> 21
  513 ==> 531
  If a larger number cannot be composed using those digits, return -1 or null.
*/

const nextLargerNumber = (num) => {
  const largerNumber = parseInt(`${num}`.split('').sort().reverse().join(''));
  return num == largerNumber ? -1 : largerNumber;
};
