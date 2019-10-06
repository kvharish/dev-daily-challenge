/*
  You're having trouble falling asleep, so your challenge today is to count sheep!
  Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
  Input will always be valid, i.e. no negative integers.
*/

const murmur = (times) => Array(times).fill()
                                      .map((value, index) => `${index+1} sheep...`)
                                      .join(' ');
