/*
  Check to see if a string has the same amount of 'x's and 'o's
  Example input/output
  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
*/

const XO = (str) => {
  const countX = (`${str}`.match(/x/gi) || '').length,
    countO = (`${str}`.match(/o/gi) || '').length;
  return countX === countO;
};
