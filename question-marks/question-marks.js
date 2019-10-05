/*
  write a function which removes all question marks from a given string.
  For example: hello? would be hello
*/

const removeQuestionMarks = (str) => str.replace(/\?/gi, '');
