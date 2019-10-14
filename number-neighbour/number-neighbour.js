/*
  Given a phone number of integer length N (1 ≤ N ≤ 10) as a number string (e.g. 555-555-5555 would be passed as "5555555555"), 
  return an array of all phone numbers as number strings that would be considered neighbors of that phone number (which is any numbers ±1).
  For example: someone with the phone number 555-555-5555 has neighbors 555-555-5554 and 555-555-5556.
*/

const numberNeighbour = (num) => {
  const neighbours = [];
  num.split('').forEach((value, index) => {
    if(parseInt(value) - 1 > 0) {
      let prevNum = num.split('');
      prevNum[index] = parseInt(value) - 1;
      prevNum = prevNum.join('');
      neighbours.push(prevNum.slice(0, 3) + "-" + prevNum.slice(3, 6) + "-" + prevNum.slice(6));
    }
    if(parseInt(value) + 1 < 10) {
      let nextNum = num.split('');
      nextNum[index] = parseInt(value) + 1;
      nextNum = nextNum.join('');
      neighbours.push(nextNum.slice(0, 3) + "-" + nextNum.slice(3, 6) + "-" + nextNum.slice(6));
    }
  });
  return neighbours;
};

numberNeighbour('5555555555');
/*[
"455-555-5555",
"655-555-5555",
"545-555-5555",
"565-555-5555",
"554-555-5555",
"556-555-5555",
"555-455-5555",
"555-655-5555",
"555-545-5555",
"555-565-5555",
"555-554-5555",
"555-556-5555",
"555-555-4555",
"555-555-6555",
"555-555-5455",
"555-555-5655",
"555-555-5545",
"555-555-5565",
"555-555-5554",
"555-555-5556"
]*/
numberNeighbour('1111111111');
/*[
"211-111-1111",
"121-111-1111",
"112-111-1111",
"111-211-1111",
"111-121-1111",
"111-112-1111",
"111-111-2111",
"111-111-1211",
"111-111-1121",
"111-111-1112"
]*/
numberNeighbour('9999999999');
/*[
"899-999-9999",
"989-999-9999",
"998-999-9999",
"999-899-9999",
"999-989-9999",
"999-998-9999",
"999-999-8999",
"999-999-9899",
"999-999-9989",
"999-999-9998"
]*/
