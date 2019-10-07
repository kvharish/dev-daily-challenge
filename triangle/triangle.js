/*
  You are given two angles of a triangle in degrees.
  Write a function to return the third angle. Only positive integers will be tested.
  Sample Tests:
  thirdAngle(30, 60)
  thirdAngle(60, 60)
  thirdAngle(43, 78)
  thirdAngle(10, 20)
*/

const thirdAngle = (angle1, angle2) => (angle3 = 180 - (angle1 + angle2)) > 0 ? angle3 : 'Invalid - Sum of all angles of a triangle should be 180 degrees';
