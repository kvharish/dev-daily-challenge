/*
  Write a function that takes in a string of one or more words and returns the same string, but with all words with five letters or more reversed.
  Strings passed in will consist of only letters and spaces.
  Be sure to keep the order of the words the same and only reverse the letters.
*/

const reverseWords = sentence => sentence.split(' ')
                                         .map(word => word.length > 4 ? word.split('').reverse().join('') : word)
                                         .join(' ');
