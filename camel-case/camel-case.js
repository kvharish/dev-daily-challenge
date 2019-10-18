/*
  Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
  All words must have their first letter capitalized without spaces.
  For instance:
  camelcase("hello case") => HelloCase
  camelcase("camel case word") => CamelCaseWord
*/

const camelCase = (words = '') => words.split(' ')
                                       .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
                                       .join('');