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
  Why:    For index 3, left sum (2+3+1)=6, right sum (3+2)=5, not equal. The correct balance point is index 3 in [1,7,3,6,5,6]: left sum (1+7+3)=11, right sum (5+6)=11, equal.

  Input:  [1, 7, 3, 6, 5, 6]
  Output: 3
  Why:    At index 3, the sum of elements to the left (1+7+3=11) equals the sum to the right (5+6=11), excluding the element at index 3 itself.
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
