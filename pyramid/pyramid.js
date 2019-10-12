/*
  Write a function that will draw a pyramid.
  The function should take one integer parameter that will describe how many lines tall the pyramid should be.
*/

const padSpaceToSides = (str, len) => {
  const padlen = len - str.length,
    right = Math.ceil(padlen / 2),
    left = padlen - right;
  return str = Array(left + 1).join(' ') + str + Array(right + 1).join(' ');
},
pyramid = (height, atom = '*') => {
  const start = 1,
    step = 2;
  for(let i = start; i < height * 2; i += step) {
    console.log(padSpaceToSides(atom.repeat(i), height * 2 - 1));
  }
};
