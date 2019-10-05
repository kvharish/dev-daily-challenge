/*
  Write a function that accepts a string and returns the same string with all even indexed characters uppercased and all odd indexed characters lowercased.
  This indexing should be zero-based with the index in position zero being considered even.
  The input string will consist of only alphabetical characters and spaces. Spaces should only be present when there are multiple words.
  Example:
  to_weird_case('String'); # => returns 'StRiNg'
  to_weird_case('Weird string case') # => returns 'WeIrD StRiNg CaSe'
*/

const toWeirdCase = (str = '') => (str.split(' ').map((s) => ([...s].map((char, index) => (index % 2) ? char.toLowerCase() : char.toUpperCase())).join(''))).join(' ');
