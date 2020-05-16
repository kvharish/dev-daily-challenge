/*
  Given three integers a ,b ,c,
  return the largest number obtained after inserting the following operators and brackets: +, *, () 
  In other words , try every combination of a,b,c with [*,+,()] , and return the highest number.

  Here's an example:
  1 * (2 + 3) = 5
  1 * 2 * 3 = 6
  1 + 2 * 3 = 7
  (1 + 2) * 3 = 9 <-- So the maximum value that you can obtain is 9.
*/

const expressions_matter = (n1, n2, n3) => Math.max(n1 + n2 + n3,
                                                   n1 * n2 * n3,
                                                   n1 + n2 * n3,
                                                   (n1 + n2) * n3,
                                                   n1 * n2 + n3,
                                                   n1 * (n2 + n3));
