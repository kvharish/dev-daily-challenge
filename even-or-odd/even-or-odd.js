/*
  Given a string of numbers confirm whether the total of all the individual even numbers is greater than the total of all the individual odd numbers.
  Always a string of numbers will be given.
  If the sum of even numbers is greater than the odd numbers return: Even is greater than Odd
  If the sum of odd numbers is greater than the sum of even numbers return: Odd is greater than Even
  If the total of both even and odd numbers are identical return: Even and Odd are the same
*/

const evenOrOdd = (str) => {
  const evenCount = (`${str}`.match(/[02468]/g) || '').length,
    oddCount = (`${str}`.match(/[13579]/g) || '').length;
  return (evenCount === oddCount) ? 'Even and Odd are the same' : (evenCount > oddCount ) ? 'Even is greater than Odd' : 'Odd is greater than Even';
};
