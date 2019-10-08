/*
  Implement a change function that will accept an integer parameter that represents cents.
  The function should return the optimal change using the least number of coins.
  The function should also return a key for each coin of US currency (specifically 25¢, 10¢, 5¢, and 1¢ coins).
  The value of each coin should represent the count of each coin in the change.
  The value for each coin that is not included should return 0.
  Ex.
  change(31)
  { 25 => 1, 10 => 0, 5 => 1, 1 => 1 }
*/

const change = (amount) => {
  return {
    '25': Math.floor(amount/25),
    '10': Math.floor((a = amount%25)/10),
    '5': Math.floor((b = a%10)/5),
    '1': b % 5
  }
};
