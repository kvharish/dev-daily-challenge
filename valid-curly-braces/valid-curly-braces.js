/*
  Challenge
  Write a function areCurlyBracesMatched that takes in a string s containing only { and/or } and returns true if s is properly matched, and false otherwise.
  A string s is considered properly matched if the string is empty or if every open brace has a corresponding close brace.
  Examples
  {{}} is properly matched.
  {{{ is not properly matched.
  {}{}{} is properly matched.
  areCurlyBracesMatched("{{{}{}}}"), true;
  areCurlyBracesMatched("{{"), false;
  areCurlyBracesMatched("{}}"), false;
  areCurlyBracesMatched(""), true;
*/

const areCurlyBracesMatched = (str) => {
  let counter = 0;
  str.split('').every((brace) => !((counter = brace === '{' ? counter+1 : counter-1) < 0));
  return !counter;
};
