/*
  You have a square matrix of unsigned integer values. Say, 5 + 5.
  Each row of that matrix contains numbers from 1 to 5 (or to whatever length of the matrix), randomly sorted.
  You can move through the matrix only one step at the time - either straight down, left-down or right-down.
  Your challenge is to write a code that will start at the middle of the top row, and find the path down with the highest sum.
  Example:
  For the following matrix, you start in c/0. For this matrix the best path would be: c/0, d/1, d/2, e/3, d/4 which scores 4+4+5+4+5 = 22.
     a b c d e
     - - - - -
  0| 2 1 4 5 3
  1| 5 2 1 4 3 
  2| 1 3 2 5 4
  3| 1 5 2 3 4
  4| 3 2 1 5 4
*/

const bestPath = (matrix = []) => {
  let currentIndex = Math.round((matrix[0].length - 1) / 2);
  const path = [
    `${String.fromCharCode(97 + currentIndex)}/0`
  ];
  matrix.forEach((row, index) => {
    if(index !== matrix.length - 1) {
      const arr = [
        matrix[index+1][currentIndex - 1] || 0,
        matrix[index+1][currentIndex] || 0,
        matrix[index+1][currentIndex + 1] || 0
      ];
      currentIndex = currentIndex - 1 + arr.indexOf(Math.max(...arr));
      path.push(`${String.fromCharCode(97 + currentIndex)}/${index + 1}`);
    }
  });
  return path.join(', ');
};

bestPath([
  [2, 1, 4, 5, 3],
  [5, 2, 1, 4, 3],
  [1, 3, 2, 5, 4],
  [1, 5, 2, 3, 4],
  [3, 2, 1, 5, 4]
]); // c/0, d/1, d/2, e/3, d/4

bestPath([
  [9, 10, 5],
  [1, 2, 6],
  [1, 6, 1]
]); // b/0, c/1, b/2
