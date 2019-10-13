/*
  write a function that accepts three integer values, calculates the mean, then returns the letter value associated with that grade.
  If the mean of those three integers ends in a number greater than five, append a plus sign to the letter grade.
  If it is less than five, append a minus sign.
  Numerical Score      Letter Grade
  90 <= score <= 100    'A'
  80 <= score < 90      'B'
  70 <= score < 80      'C'
  60 <= score < 70      'D'
   0 <= score < 60      'F'
  Examples:
  grade(64, 55, 92) => C- (70.3)
  grade(99, 89, 93) => A- (93.6)
  grade(33, 99, 95) => C+ (75.6)
*/

const grade = (...values) => {
  const grades = {9: 'A', 8: 'B', 7: 'C', 6: 'D'},
    mean = values.reduce((acc, value) => acc += value, 0) / values.length;
  return grades[Math.floor(mean / 10)] ? `${grades[Math.floor(mean / 10)]}${mean >= (Math.floor(mean / 10) * 10 + 5) ? '+' : '-'}` : Math.floor(mean / 10) > 9 ? 'A+' : 'F'
}
