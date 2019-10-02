/* Your goal is to create a function that removes the first and last letters of a string.
Strings with two characters or less are considered invalid.
You can choose to have your function return null or simply ignore. */

const stringPeeler = (str) => str.length > 2 ? str.substr(1, str.length - 2) : `Invalid input to stringPeeler function ${str}`;
