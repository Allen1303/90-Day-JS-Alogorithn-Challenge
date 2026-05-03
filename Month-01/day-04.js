"use strict";

// ────────────────────────────────────────────────────────────
// Day 4 — Increment Digits (Easy)
// Topic: Backward Traversal + Carry Logic
// Builds On: Day 3 (direction of traversal matters; here: backwards)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A build system stores version numbers as arrays of digits.
  When a build completes, the version is incremented by 1.

Problem:
  Given a non-empty array of digits representing a non-negative
  integer, increment the integer by one and return the result
  as an array of digits. The digits are stored in order from
  most significant to least significant.

Example:
  Input:  [1, 2, 9]
  Output: [1, 3, 0]
  Why:    The number represented by [1,2,9] is 129; incrementing by 1 gives 130, which is [1,3,0].

  Input:  [9, 9, 9]
  Output: [1, 0, 0, 0]
  Why:    The number 999 incremented by 1 becomes 1000, requiring an additional digit at the most significant position.

Constraints:
  - 1 <= digits.length <= 100
  - 0 <= digits[i] <= 9
  - The number does not have leading zeros

Hint:
  Start from the last digit. If it's less than 9, add 1
  and you're done. If it's 9, set it to 0 and carry the 1
  to the left. The only case where you need a new array
  element is if all digits were 9.
*/

const incrementDigits = (digits) => {
  // your solution here
  for (let i = digits.length - 1; i >= 0; i--) {
  
  }
};

console.log(JSON.stringify(incrementDigits([1, 2, 9]))); // [1,3,0]
console.log(JSON.stringify(incrementDigits([9, 9, 9]))); // [1,0,0,0]
console.log(JSON.stringify(incrementDigits([0]))); // [1]
