"use strict";

// ────────────────────────────────────────────────────────────
// Day 3 — Push to Back (Easy)
// Topic: In-Place Write Pointer
// Builds On: Day 2 (walking with a tracked index variable)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A photo editor that pushes empty (transparent) layers to
  the end of the stack without changing the order of
  visible layers.

Problem:
  Given an array of integers, move all 0s to the end while
  maintaining the relative order of all non-zero elements.
  Do this in place — do not create a new array.

Example:
  Input:  [0, 1, 0, 3, 12]
  Output: [1, 3, 12, 0, 0]
  Why:    Non-zeros (1, 3, 12) keep their order; zeros go to end.

Constraints:
  - 1 <= nums.length <= 1000
  - 0 <= nums[i] <= 1000

Hint:
  Use a write pointer starting at 0. Walk a read pointer
  through the array. Every time you see a non-zero, place
  it at the write pointer and advance it. What do you
  fill in for the remaining positions at the end?
*/

const pushToBack = (nums) => {
  // your solution here
  let writePointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[writePointer] = nums[i];
      writePointer += 1;
    }
  }
  for (let i = writePointer; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(JSON.stringify(pushToBack([0, 1, 0, 3, 12]))); // [1,3,12,0,0]
console.log(JSON.stringify(pushToBack([0, 0, 1]))); // [1,0,0]
console.log(JSON.stringify(pushToBack([1, 2, 3]))); // [1,2,3]
