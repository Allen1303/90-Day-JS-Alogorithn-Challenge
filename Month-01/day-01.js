"use strict"

// Day 1 — Running Balance (Easy)
// Topic: Array Traversal + In-Place Accumulation
// ────────────────────────────────────────────────────────────
/*
Real World:
  A banking app that shows the running account balance
  after each transaction is applied.

Problem:
  Given an array of integers, transform it so that each
  element becomes the sum of all elements from index 0
  up to and including that index.
  Modify the array in place and return it.

Example:
  Input:  [100, -20, 50, -30, 10]
  Output: [100, 80, 130, 100, 110]
  Why:    100 → 100+(-20)=80 → 80+50=130 → 130-30=100 → 100+10=110

Constraints:
  - 1 <= nums.length <= 1000
  - -1000 <= nums[i] <= 1000

Hint:
  You don't need a second array. Each element only depends
  on the element directly before it. Can you update in place
  as you walk forward from index 1?
*/

const runningBalance = (nums) => {

  // your solution here
  let arrTotal = 0 // running total - use to accumulates sum upto current index
  nums.forEach((element, index) => { // checking each element and it position (index)
    arrTotal += element;// arrTotal use here to hold the calculation of each element
    nums[index] = arrTotal; // assign the total sum to the original array at each index "(nums[index])"
  });
  return nums; //→ return the array
};

console.log(JSON.stringify(runningBalance([100, -20, 50, -30, 10]))); // [100,80,130,100,110]
console.log(JSON.stringify(runningBalance([1, 2, 3, 4]))); // [1,3,6,10]
console.log(JSON.stringify(runningBalance([5]))); // [5]
