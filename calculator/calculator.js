/*
  Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression
*/

calculator = () => {
  return {
    evaluate: (str) => {
      try{
        return eval(str)
      }
      catch(error) {
        return 'Invalid expression'
      }
    }
  } 
}

calculator().evaluate('2 / 2 + 3 * 4 - 6') // 7
calculator().evaluate('2 / 2 + ') // Invalid expression
