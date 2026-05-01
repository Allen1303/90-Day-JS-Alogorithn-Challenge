"use strict";

// Day 2 — Balance Point (Easy)
// Topic: Prefix Sum + Total Tracking
// Builds On: Day 1 (accumulating a running total while walking)
// ────────────────────────────────────────────────────────────
/*
  Real World:
    A warehouse shelf system checking whether a divider is
    placed so that both sides carry equal total weight.

  Problem:
    Given an array of integers, find the index where the sum
    of all elements to its left equals the sum of all elements
    to its right. The element at that index is not included
    in either sum. Return the index, or -1 if none exists.

  Example:
    Input:  [2, 3, 1, 5, 3, 2]
    Output: 3
    Why:    Left of index 3 → 2+3+1=6. Right of index 3 → 3+2=5. Nope.
            Actually left of index 3 = 2+3+1=6, right = 3+2=5. Not equal.
            Let's try: [1, 7, 3, 6, 5, 6]
            Left of index 3 → 1+7+3=11. Right → 5+6=11. Yes — index 3.

    Input:  [1, 7, 3, 6, 5, 6]
    Output: 3
    Why:    Sum left of 3 = 1+7+3 = 11. Sum right of 3 = 5+6 = 11.

  Constraints:
    - 1 <= nums.length <= 1000
    - -1000 <= nums[i] <= 1000

  Hint:
    Compute the total sum before you start walking.
    As you move forward, the left sum grows by nums[i-1].
    The right sum is always: total - leftSum - nums[i].
    No second pass needed.
  */

const balancePoint = (nums) => {
  // your solution here
  //   Calculate the total using the reduce method
  let total = nums.reduce((acc, current) => acc + current, 0);

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // left equals the sum of all elements to its right
    if (leftSum === total - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }
  // element at that index is not included in either sum. Return the index, or -1 if none exists.
  return -1;
};

console.log(balancePoint([1, 7, 3, 6, 5, 6])); // 3
console.log(balancePoint([2, 1, -1])); // 0
console.log(balancePoint([1, 2, 3])); // -1
