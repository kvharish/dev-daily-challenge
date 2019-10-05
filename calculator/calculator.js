/*
  Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression
*/

calculator = () => {
  return {
    evaluate: (str) => {
      return (!str.match(/^\d+( [\+\-\/\*] \d+)*$/)) ? 'Invalid expression' : eval(str);
    }
  } 
}

calculator().evaluate('2 / 2 + 3 * 4 - 6') // 7
calculator().evaluate('2 / 2 + ') // Invalid expression
