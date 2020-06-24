/*
  No one enjoys carrying around spare change.
  And to avoid all that jingling it's absolutely necessary to have an efficient algorithm to calculate the minimum number of coins needed to pay for something.
  So given a set of coin denominations determine the fewest number of coins required to add up to a given amount.
  Coin denominations WILL NOT be standard.

  Example
  US Currency includes the penny, nickel, dime and quarter or the coins with denominations: [1, 5, 10, 25]
  If I were to ask you to make 75 cents you would just return 3 since 75 cents can be made with 3 quarters.

  Denominations:
  coins1={1,5,10,25};
  coins2={1,2,5,10,20,50};

  Tests:
  coins1(123)
  coins2(123)
  coins1(75)
  coins2(75)
*/

const coins1 = [1, 5, 10, 25];
const coins2 = [1, 2, 5, 10, 20, 50];
const coins3 = [1, 5, 20, 25];
const coins4 = [2, 9, 5, 1];

const spareChange = (coins, amount) => {
  coins = coins.sort((a, b) => a - b);
  let remaining = amount,
      index = coins.length - 1,
      change = {};

  while(remaining !== 0 || index !== -1) {
    numOfCoins = Math.floor(remaining / coins[index])
    change[coins[index]] = numOfCoins;
    remaining = remaining % coins[index];
    index--;
  }

  console.log(change);
}

spareChange(coins1, 123);
/*
  {
    1: 3,
    5: 0,
    10: 2,
    25: 4
  }
*/
spareChange(coins2, 123);
/*
  {
    1: 1,
    2: 1,
    5: 0,
    10: 0,
    20: 1,
    50: 2
  }
*/
spareChange(coins1, 75);
/*
  {
    1: 0,
    5: 0,
    10: 0,
    25: 3
  }
*/
spareChange(coins2, 75);
/*
  {
    1: 0,
    2: 0,
    5: 1,
    10: 0,
    20: 1,
    50: 1
  }
*/
spareChange(coins3, 40);
/*
  {
    1: 0,
    5: 3,
    20: 0,
    25: 1
  }
*/
spareChange(coins4, 53);
/*
  {
    1: 1,
    2: 1,
    5: 1,
    9: 5
  }
*/
