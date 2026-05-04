// ============================================================
// 90-DAY JAVASCRIPT ALGORITHM CHALLENGE
// MONTH 1 — Arrays, Strings, Objects & Basic Loops
// Days 1–30 | Difficulty: Easy
// ============================================================
// HOW TO USE:
//   1. Check the revision prompt at the top of each day
//   2. Complete all revisions first — month1_revisions.js
//   3. Read the full problem: Real World, Conceptual Explanation,
//      Input, Output, Examples, Constraints, and Hint
//   4. Write your solution in the starter function
//   5. Run with: node month1_challenges.js
//
// NORAL COMMITMENT:
//   No AI. No Google. MDN and Eloquent JS only.
//   No code examples appear in this file — only concepts.
//   Your job is to translate understanding into code.
// ============================================================

// ════════════════════════════════════════════════════════════
//  WEEK 1 — Array Traversal Toolkit (Days 1–7)
//  Thread: walk + accumulate → walk + track → walk + write
//          → walk backwards → walk + one state variable
//          → walk + two same-direction pointers
//          → walk + two state variables (extend or reset)
// ════════════════════════════════════════════════════════════
// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 1 ─────────────────────────────────────
// No revisions due today. Proceed to the challenge below.
// ─────────────────────────────────────────────────────────────────────
// Day 1 — Running Balance (Easy)
// Topic: Array Traversal + In-Place Accumulation
/*
Real World:
  A banking app that displays the running account balance after each transaction is applied to the previous balance.

Conceptual Explanation:
  Walk through the array once. At each position, instead of storing the original value, store the sum of all values from the beginning up to and including the current position. Each new value depends only on the value immediately before it — you never need to look further back than one step. Because each element only depends on its neighbor, you can update the array as you walk forward without needing a second array to hold intermediate results.

Input:
  An array of integers representing individual transactions (deposits as positive, withdrawals as negative).

Output:
  The same array modified so each position holds the running total up to that index.

Example:
  Input:  [100, -20, 50, -30, 10]
  Output: [100, 80, 130, 100, 110]
  Why:    100 stays. 100+(-20)=80. 80+50=130. 130-30=100. 100+10=110.

Constraints:
  - 1 <= array length <= 1000
  - -1000 <= each value <= 1000

Hint:
  You only need one extra variable — a running total that starts at zero. Walk forward from the first element. At each step add the current element to your running total, then store that total back into the array at the current position. Return the array when done.
*/

const RunningBalance = (nums) => {
  // your solution here
  let total = 0;
  nums.forEach((item, index) => {
    total += item;
    nums[index] = total;
  });
  return nums;
};

console.log(JSON.stringify(RunningBalance([100, -20, 50, -30, 10]))); // [100,80,130,100,110]
console.log(JSON.stringify(RunningBalance([1, 2, 3, 4]))); // [1,3,6,10]

// ── Repetition 1/3 — RunningBalance ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RunningBalance_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — RunningBalance ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RunningBalance_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — RunningBalance ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RunningBalance_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 1: RunningBalance
// Complete this BEFORE moving to Day 2
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 2
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 2 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 1/3 — Day 1: Running Balance (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 2 — Balance Point (Easy)
// Topic: Prefix Sum + Total Tracking
// Builds On: Day 1 (accumulating a running total while walking)
/*
Real World:
  A warehouse shelf system checking whether a divider is placed so that both sides carry equal total weight.

Conceptual Explanation:
  Before walking the array, compute the total sum of all elements. Then walk forward maintaining a left sum that starts at zero and grows as you pass each element. At every position the right sum can be derived instantly — it is the total minus the left sum minus the current element itself. This means you never need to re-sum the right side from scratch at each step. Compare left and right at every position. The moment they match, you have found the balance point.

Input:
  An array of integers.

Output:
  The index where the sum of all elements to its left equals the sum of all elements to its right. Return -1 if no such index exists. The element at the balance index itself is not counted on either side.

Example:
  Input:  [1, 7, 3, 6, 5, 6]
  Output: 3
  Why:    Left of index 3 = 1+7+3=11. Right of index 3 = 5+6=11. Equal.

  Input:  [2, 1, -1]
  Output: 0
  Why:    Left of index 0 is empty = 0. Right = 1+(-1) = 0. Equal.

  Input:  [1, 2, 3]
  Output: -1
  Why:    No index has equal left and right sums.

Constraints:
  - 1 <= array length <= 1000
  - -1000 <= each value <= 1000

Hint:
  Compute the total sum before you start walking. Keep a left sum variable starting at zero. At each index the right sum is always total minus left sum minus the current element. If left sum equals right sum return the current index. After checking, add the current element to the left sum before moving forward. If you finish the loop without a match return -1.
*/

const BalancePoint = (nums) => {
  // your solution here
};

console.log(BalancePoint([1, 7, 3, 6, 5, 6])); // 3
console.log(BalancePoint([2, 1, -1])); // 0
console.log(BalancePoint([1, 2, 3])); // -1

// ── Repetition 1/3 — BalancePoint ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BalancePoint_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — BalancePoint ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BalancePoint_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — BalancePoint ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BalancePoint_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 2: BalancePoint
// Complete this BEFORE moving to Day 3
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 3
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 3 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 1/3 — Day 2: Balance Point (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 3 — Push to Back (Easy)
// Topic: In-Place Write Pointer
// Builds On: Day 2 (walking with a tracked index variable)
/*
Real World:
  A photo editor that pushes empty transparent layers to the end of the stack without changing the order of visible layers.

Conceptual Explanation:
  Use two conceptual pointers moving through the array — a read pointer that visits every element, and a write pointer that tracks the next available position for a non-zero value. Walk the read pointer forward. Every time it lands on a non-zero value, copy that value to the position the write pointer is pointing at, then advance the write pointer. When the read pointer finishes, every position from the write pointer to the end of the array should be filled with zero. The relative order of non-zero elements is preserved because you always write them in the order you encounter them.

Input:
  An array of integers that may contain zeros.

Output:
  The same array modified in place so all zeros are at the end and all non-zero elements appear at the front in their original relative order.

Example:
  Input:  [0, 1, 0, 3, 12]
  Output: [1, 3, 12, 0, 0]
  Why:    Non-zeros 1, 3, 12 keep their order. Zeros move to the end.

Constraints:
  - 1 <= array length <= 1000
  - 0 <= each value <= 1000

Hint:
  Declare a write pointer starting at index zero. Walk a read pointer through every index. When the current element is not zero, write it into the array at the write pointer position and advance the write pointer by one. After the first loop ends, run a second loop from the write pointer to the end of the array and set every remaining position to zero. Return the array.
*/

const PushtoBack = (nums) => {
  // your solution here
};

console.log(JSON.stringify(PushtoBack([0, 1, 0, 3, 12]))); // [1,3,12,0,0]
console.log(JSON.stringify(PushtoBack([0, 0, 1]))); // [1,0,0]

// ── Repetition 1/3 — PushtoBack ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PushtoBack_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — PushtoBack ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PushtoBack_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — PushtoBack ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PushtoBack_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 3: PushtoBack
// Complete this BEFORE moving to Day 4
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 4
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 4 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 1/3 — Day 3: Push to Back (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 4 — Increment Digits (Easy)
// Topic: Backward Traversal + Carry Logic
// Builds On: Day 3 (direction of traversal matters)
/*
Real World:
  A build system stores version numbers as arrays of digits. When a build completes the version is incremented by one.

Conceptual Explanation:
  Start from the last digit and work backwards. Adding one to a digit only causes a carry when that digit is nine — it becomes zero and the carry moves left. If the digit is less than nine you can simply add one and stop immediately because no carry is needed. The only case where you need to extend the array is when every digit was nine, producing all zeros with a one prepended at the front.

Input:
  An array of single digits representing a non-negative integer, stored most significant digit first with no leading zeros.

Output:
  An array of digits representing the original number plus one.

Example:
  Input:  [1, 2, 9]
  Output: [1, 3, 0]
  Why:    9 becomes 0, carry adds 1 to 2 making 3.

  Input:  [9, 9, 9]
  Output: [1, 0, 0, 0]
  Why:    All nines become zeros, a new leading 1 is added.

Constraints:
  - 1 <= array length <= 100
  - 0 <= each digit <= 9
  - No leading zeros

Hint:
  Start at the last index and walk backwards. If the current digit is less than nine, add one to it and return the array immediately — you are done. If it is nine, set it to zero and continue walking left to carry. If you exit the loop without returning, every digit was nine — prepend a one to the front of the array and return it.
*/

const IncrementDigits = (nums) => {
  // your solution here
};

console.log(JSON.stringify(IncrementDigits([1, 2, 9]))); // [1,3,0]
console.log(JSON.stringify(IncrementDigits([9, 9, 9]))); // [1,0,0,0]

// ── Repetition 1/3 — IncrementDigits ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const IncrementDigits_rep1 = (digits) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — IncrementDigits ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const IncrementDigits_rep2 = (digits) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — IncrementDigits ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const IncrementDigits_rep3 = (digits) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 4: IncrementDigits
// Complete this BEFORE moving to Day 5
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 5
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 5 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 2/3 — Day 1: Running Balance (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 4: Increment Digits (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 5 — Best Trade (Easy)
// Topic: Single Pass + Running State Variable
// Builds On: Day 4 (one pass, one tracked variable that updates conditionally)
/*
Real World:
  A stock trading app that highlights the single most profitable day to buy and sell within a historical window. You can only make one trade.

Conceptual Explanation:
  Walk through the prices once from left to right. Keep track of the lowest price you have seen so far. At every step calculate what the profit would be if you sold today at the current price having bought at the lowest price seen so far. Track the highest such profit encountered. You never need to look backwards because you always know the best buying opportunity up to the current day — it is stored in your running minimum variable.

Input:
  An array of prices where each element is the stock price on that day.

Output:
  The maximum profit achievable from one buy followed by one sell. Return zero if no profitable trade is possible.

Example:
  Input:  [7, 1, 5, 3, 6, 4]
  Output: 5
  Why:    Buy at price 1 on day 2, sell at price 6 on day 5. Profit = 5.

  Input:  [7, 6, 4, 3, 1]
  Output: 0
  Why:    Prices only decrease. No profitable trade exists.

Constraints:
  - 1 <= array length <= 10000
  - 0 <= each price <= 10000

Hint:
  Keep two variables — the lowest price seen so far and the maximum profit seen so far, both starting appropriately. Walk forward through every price. At each step first check if the current price minus the lowest price beats the current max profit and update if so. Then check if the current price is lower than your tracked minimum and update if so. Return the maximum profit after the loop.
*/

const BestTrade = (nums) => {
  // your solution here
};

console.log(BestTrade([7, 1, 5, 3, 6, 4])); // 5
console.log(BestTrade([7, 6, 4, 3, 1])); // 0

// ── Repetition 1/3 — BestTrade ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BestTrade_rep1 = (prices) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — BestTrade ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BestTrade_rep2 = (prices) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — BestTrade ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BestTrade_rep3 = (prices) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 5: BestTrade
// Complete this BEFORE moving to Day 6
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 6
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 6 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 2/3 — Day 2: Balance Point (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 5: Best Trade (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 6 — Deduplicate Sorted (Easy)
// Topic: Two Pointers — Slow Write / Fast Read
// Builds On: Day 5 (two variables; now both are indices moving forward)
/*
Real World:
  A database system removing duplicate user IDs from a sorted list before writing to a unique-constraint table. No extra array allowed.

Conceptual Explanation:
  Because the array is sorted, all duplicates of any value sit directly next to each other. Use a slow pointer to track the boundary of the deduplicated section — the last confirmed unique position. Use a fast pointer to scan every element. When the fast pointer finds a value different from what is at the slow pointer, that value is new and unique — copy it to the position just after the slow pointer and advance the slow pointer. When the fast pointer has visited every element the slow pointer tells you how many unique values exist.

Input:
  A sorted array of integers in non-decreasing order.

Output:
  The count of unique elements. The first that many positions of the array should contain the unique values in order.

Example:
  Input:  [1, 1, 2, 3, 3, 4]
  Output: 4
  Why:    Four unique values: 1, 2, 3, 4 placed at the first four positions.

Constraints:
  - 1 <= array length <= 1000
  - Array is sorted in non-decreasing order

Hint:
  Start the slow pointer at index zero. Walk the fast pointer from index one to the end. Whenever the value at the fast pointer differs from the value at the slow pointer, advance the slow pointer by one and copy the fast pointer value into that new slow pointer position. Return slow pointer plus one as the count of unique elements.
*/

const DeduplicateSorted = (nums) => {
  // your solution here
};

console.log(DeduplicateSorted([1, 1, 2, 3, 3, 4])); // 4
console.log(DeduplicateSorted([1, 2, 3])); // 3

// ── Repetition 1/3 — DeduplicateSorted ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const DeduplicateSorted_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — DeduplicateSorted ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const DeduplicateSorted_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — DeduplicateSorted ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const DeduplicateSorted_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 6: DeduplicateSorted
// Complete this BEFORE moving to Day 7
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 7
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 7 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 2/3 — Day 3: Push to Back (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 6: Deduplicate Sorted (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 7 — Peak Streak (Easy)
// Topic: Kadane's Algorithm — Two State Variables
// Builds On: Day 6 (two variables; now: current streak + best streak)
/*
Real World:
  A sales analytics tool finding the highest-performing consecutive stretch of days in a monthly revenue log.

Conceptual Explanation:
  Walk through the array once keeping two variables — the best sum ending at the current position and the best sum seen anywhere so far. At every element you face a choice: is it better to extend the current streak by adding this element to it, or to abandon the streak and start fresh from this element alone? Whichever is larger becomes the new current streak. Then check if this new current streak beats the overall best. This works because if the running sum ever goes negative it can only hurt any future subarray so it is better to restart.

Input:
  An array of integers which may include negative values. At least one element is present.

Output:
  The largest sum achievable from any contiguous subarray.

Example:
  Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  Output: 6
  Why:    The subarray [4, -1, 2, 1] has sum 6.

  Input:  [-1, -2, -3]
  Output: -1
  Why:    All negative — the best single element is -1.

Constraints:
  - 1 <= array length <= 1000
  - -1000 <= each value <= 1000

Hint:
  Initialize current sum and max sum both to the first element. Walk from the second element to the end. At each step set current sum to the larger of the current element alone versus current sum plus the current element. Then set max sum to the larger of max sum and current sum. Return max sum after the loop.
*/

const PeakStreak = (nums) => {
  // your solution here
};

console.log(PeakStreak([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(PeakStreak([-1, -2, -3])); // -1

// ════════════════════════════════════════════════════════════
//  WEEK 2 — String Manipulation (Days 8–14)
//  Thread: Builds on Week 1 patterns applied to strings.
//  Two pointers, frequency objects, split/transform/join,
//  and multi-string pointer work.
// ════════════════════════════════════════════════════════════

// ── Repetition 1/3 — PeakStreak ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PeakStreak_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — PeakStreak ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PeakStreak_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — PeakStreak ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PeakStreak_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 7: PeakStreak
// Complete this BEFORE moving to Day 8
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 8
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 8 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 2/3 — Day 4: Increment Digits (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 7: Peak Streak (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 8 — Mirror Text (Easy)
// Topic: Two Pointer Swap
// Builds On: Day 6 two-pointer idea — now pointers move toward each other
/*
Real World:
  A mobile keyboard flip text feature that reverses whatever the user has typed.

Conceptual Explanation:
  Place one pointer at the very beginning of the array and one at the very end. Swap the values at both positions. Then move the left pointer one step right and the right pointer one step left. Repeat until the two pointers meet or cross. At that point every element has been swapped with its mirror and the array is fully reversed.

Input:
  An array of characters.

Output:
  The same array reversed in place. No new array should be created.

Example:
  Input:  ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]
  Why:    Each character swapped with its mirror.

Constraints:
  - 1 <= array length <= 10000
  - Each element is a single printable ASCII character

Hint:
  Start with left at index zero and right at the last index. While left is less than right swap the values at those two positions then move left forward one step and right backward one step. Stop when they meet or cross. Return the array.
*/

const MirrorText = (input) => {
  // your solution here
};

const a = ["h", "e", "l", "l", "o"];
MirrorText(a);
console.log(JSON.stringify(a)); // ['o','l','l','e','h']

// ── Repetition 1/3 — MirrorText ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MirrorText_rep1 = (chars) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MirrorText ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MirrorText_rep2 = (chars) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MirrorText ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MirrorText_rep3 = (chars) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 8: MirrorText
// Complete this BEFORE moving to Day 9
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 9
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 9 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 2/3 — Day 5: Best Trade (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 8: Mirror Text (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 9 — Read Both Ways (Easy)
// Topic: Two Pointer + String Normalization
// Builds On: Day 8 (two pointer moving inward) plus a cleaning step first
/*
Real World:
  A search engine normalizing user queries to check whether a phrase reads the same forwards and backwards, ignoring punctuation and casing.

Conceptual Explanation:
  First produce a cleaned version of the string containing only letters and digits all converted to lowercase. Then apply the two-pointer technique from the previous challenge — one pointer at each end moving inward — but instead of swapping, compare. If the characters at both pointers match, move both inward. If they ever differ the string is not a palindrome. If the pointers meet without finding a mismatch it is a palindrome.

Input:
  A string of printable ASCII characters.

Output:
  True if the string is a palindrome after removing non-alphanumeric characters and lowercasing. False otherwise.

Example:
  Input:  'A man, a plan, a canal: Panama'
  Output: true
  Why:    Cleaned becomes 'amanaplanacanalpanama' which reads the same both ways.

  Input:  'race a car'
  Output: false
  Why:    Cleaned becomes 'raceacar' which is not a palindrome.

Constraints:
  - 1 <= string length <= 100000

Hint:
  Clean the string first by keeping only alphanumeric characters and converting to lowercase. Then use two pointers starting at each end and moving inward. At each step compare the characters at both pointers. If they differ return false. If the pointers meet return true.
*/

const ReadBothWays = (input) => {
  // your solution here
};

console.log(ReadBothWays("A man, a plan, a canal: Panama")); // true
console.log(ReadBothWays("race a car")); // false

// ── Repetition 1/3 — ReadBothWays ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ReadBothWays_rep1 = (s) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — ReadBothWays ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ReadBothWays_rep2 = (s) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — ReadBothWays ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ReadBothWays_rep3 = (s) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 9: ReadBothWays
// Complete this BEFORE moving to Day 10
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 10
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 10 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 1: Running Balance (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 6: Deduplicate Sorted (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 9: Read Both Ways (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 10 — Same Letters (Easy)
// Topic: Character Frequency Object
// Builds On: Day 7 state tracking — now tracking counts in an object
/*
Real World:
  A plagiarism detector checking whether two short texts use exactly the same characters just rearranged.

Conceptual Explanation:
  Two strings are anagrams if and only if they have identical character frequencies. Build a tally of every character in the first string using an object where each key is a character and each value is its count. Then walk the second string and for each character decrement its count in the tally. If any count drops below zero that character appears more in the second string than the first — not an anagram. If the strings have different lengths they cannot be anagrams regardless of content.

Input:
  Two strings.

Output:
  True if the second string is an anagram of the first — same characters same counts different order. False otherwise.

Example:
  Input:  'anagram', 'nagaram'
  Output: true
  Why:    Both use the same characters with the same frequencies.

  Input:  'rat', 'car'
  Output: false
  Why:    Different characters.

Constraints:
  - 1 <= string lengths <= 50000
  - Strings consist of lowercase English letters

Hint:
  Check lengths first — if different return false immediately. Build a frequency object from the first string by incrementing counts. Walk the second string decrementing counts. If any count goes below zero return false. Return true if you complete the walk without issue.
*/

const SameLetters = (nums) => {
  // your solution here
};

console.log(SameLetters("anagram", "nagaram")); // true
console.log(SameLetters("rat", "car")); // false

// ── Repetition 1/3 — SameLetters ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameLetters_rep1 = (s, t) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SameLetters ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameLetters_rep2 = (s, t) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SameLetters ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameLetters_rep3 = (s, t) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 10: SameLetters
// Complete this BEFORE moving to Day 11
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 11
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 11 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 2: Balance Point (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 7: Peak Streak (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 10: Same Letters (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 11 — First Solo (Easy)
// Topic: Two-Pass Frequency
// Builds On: Day 10 (frequency object) — now two passes with it
/*
Real World:
  A live chat app that highlights the first emoji in a message that was used only once.

Conceptual Explanation:
  Two passes through the string with one frequency object. The first pass counts how many times every character appears. The second pass walks the string again in order and returns the index of the first character whose count is exactly one. The order of the second pass matters — you must find the first occurrence in the original string, not just any character with count one.

Input:
  A string.

Output:
  The index of the first character that appears exactly once. Return -1 if every character appears more than once.

Example:
  Input:  'leetcode'
  Output: 0
  Why:    The character l appears once and is at index zero.

  Input:  'aabb'
  Output: -1
  Why:    Every character appears twice.

Constraints:
  - 1 <= string length <= 100000
  - Consists of lowercase English letters

Hint:
  First pass — walk the entire string and build a frequency object counting every character. Second pass — walk the string again from the beginning. Return the index of the first character whose frequency count is exactly one. If no such character exists return -1.
*/

const FirstSolo = (nums) => {
  // your solution here
};

console.log(FirstSolo("leetcode")); // 0
console.log(FirstSolo("aabb")); // -1

// ── Repetition 1/3 — FirstSolo ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FirstSolo_rep1 = (s) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — FirstSolo ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FirstSolo_rep2 = (s) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — FirstSolo ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FirstSolo_rep3 = (s) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 11: FirstSolo
// Complete this BEFORE moving to Day 12
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 12
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 12 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 3: Push to Back (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 8: Mirror Text (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 11: First Solo (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 12 — Shared Start (Easy)
// Topic: Candidate Shrinking
// Builds On: Day 11 (scanning multiple strings; now comparing across them)
/*
Real World:
  An autocomplete feature that finds the longest shared prefix across all matching search suggestions so it can pre-fill that portion in the input field.

Conceptual Explanation:
  Take the first string as your candidate prefix. Compare it against each subsequent string. If the current string does not start with the candidate, remove one character from the end of the candidate and compare again. Keep shrinking until the current string starts with the candidate or the candidate becomes empty. After checking every string whatever remains in the candidate is the longest common prefix.

Input:
  An array of strings.

Output:
  The longest string that is a prefix of every string in the array. An empty string if no common prefix exists.

Example:
  Input:  ["flower","flow","flight"]
  Output: "fl"
  Why:    fl is the longest prefix shared by all three.

  Input:  ["dog","racecar","car"]
  Output: ""
  Why:    No common prefix.

Constraints:
  - 1 <= array length <= 200
  - 0 <= each string length <= 200
  - Strings consist of lowercase English letters

Hint:
  Take the first string as the candidate. Loop through every other string. While the current string does not start with the candidate, remove the last character from the candidate. If the candidate becomes empty return an empty string immediately. Return whatever remains in the candidate after all strings are checked.
*/

const SharedStart = (nums) => {
  // your solution here
};

console.log(SharedStart(["flower", "flow", "flight"])); // 'fl'
console.log(SharedStart(["dog", "racecar", "car"])); // ''

// ── Repetition 1/3 — SharedStart ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SharedStart_rep1 = (strs) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SharedStart ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SharedStart_rep2 = (strs) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SharedStart ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SharedStart_rep3 = (strs) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 12: SharedStart
// Complete this BEFORE moving to Day 13
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 13
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 13 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 4: Increment Digits (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 9: Read Both Ways (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 12: Shared Start (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 13 — Word Flip (Easy)
// Topic: Split Map Transform Join
// Builds On: Day 8 (reversing) — now applied to each word individually
/*
Real World:
  A subtitle formatting tool that reverses the letters of every word in a line without changing the order of words.

Conceptual Explanation:
  The problem naturally breaks into three steps. First separate the string into individual words. Then transform each word by reversing its characters — the same mirror technique from the previous challenge but applied to each word independently. Finally reassemble the transformed words back into a single string with spaces between them. Each step is a distinct operation and JavaScript array methods make the chain clean and readable.

Input:
  A string of words separated by single spaces.

Output:
  A string where every word has its characters reversed but words remain in their original order.

Example:
  Input:  "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoC"
  Why:    Each word reversed individually, order unchanged.

Constraints:
  - 1 <= string length <= 5000
  - Words separated by single spaces

Hint:
  Split the string on spaces to get an array of words. Map over the array reversing each word's characters individually. Join the resulting array back with spaces between words and return the result.
*/

const WordFlip = (input) => {
  // your solution here
};

console.log(WordFlip("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoC"

// ── Repetition 1/3 — WordFlip ──────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const WordFlip_rep1 = (s) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — WordFlip ──────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const WordFlip_rep2 = (s) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — WordFlip ──────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const WordFlip_rep3 = (s) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 13: WordFlip
// Complete this BEFORE moving to Day 14
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 14
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 14 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 5: Best Trade (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 10: Same Letters (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 13: Word Flip (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 14 — In Order (Easy)
// Topic: Two Pointers on Two Different Strings
// Builds On: Day 6 (two pointers) — now each pointer lives in a different string
/*
Real World:
  A keyboard input validator checking whether a user's shortcut keystrokes appear in order within a longer recorded input sequence.

Conceptual Explanation:
  Use two separate pointers — one for each string. Walk the longer string forward always, one character at a time. Only advance the pointer in the shorter string when the current character in the longer string matches the current character in the shorter string. If the shorter string's pointer reaches the end all its characters were found in order — it is a subsequence. If the longer string's pointer reaches the end first and the shorter pointer has not finished then it is not a subsequence.

Input:
  Two strings — a shorter pattern string and a longer target string.

Output:
  True if every character in the pattern appears in the target in the same relative order. False otherwise.

Example:
  Input:  'ace', 'abcde'
  Output: true
  Why:    a then c then e all appear in order within abcde.

  Input:  'aec', 'abcde'
  Output: false
  Why:    e comes after c in the target so aec cannot be found in order.

Constraints:
  - 0 <= pattern length <= 100
  - 0 <= target length <= 10000
  - Both consist of lowercase English letters

Hint:
  Start both pointers at zero. Walk the target pointer forward on every iteration. Only advance the pattern pointer when the current target character matches the current pattern character. Return true if the pattern pointer reaches the length of the pattern. Return false if the target pointer reaches the end first.
*/

const InOrder = (input) => {
  // your solution here
};

console.log(InOrder("ace", "abcde")); // true
console.log(InOrder("aec", "abcde")); // false

// ════════════════════════════════════════════════════════════
//  WEEK 3 — Objects & Hash Maps (Days 15–21)
//  Thread: Frequency objects evolve into complement lookup,
//  Set operations, XOR alternatives, and bidirectional maps.
// ════════════════════════════════════════════════════════════

// ── Repetition 1/3 — InOrder ───────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const InOrder_rep1 = (s, t) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — InOrder ───────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const InOrder_rep2 = (s, t) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — InOrder ───────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const InOrder_rep3 = (s, t) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 14: InOrder
// Complete this BEFORE moving to Day 15
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 15
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 15 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 6: Deduplicate Sorted (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 11: First Solo (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 14: In Order (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 15 — Two Sum (Easy)
// Topic: One-Pass Hash Map
// Builds On: Day 10 (frequency object) — now checking the object as you build it
/*
Real World:
  An e-commerce checkout system finding two items in a cart whose combined price hits an exact promotional discount threshold.

Conceptual Explanation:
  For every number in the array its pair would be the target minus that number — called the complement. Instead of checking every possible pair with nested loops, store each number you have already visited in an object as you walk forward. Before storing the current number check whether its complement already exists in the object. If it does you have found both numbers in the pair. This works in a single pass because by the time you check for the complement of any number you have already stored all earlier numbers.

Input:
  An array of integers and a target integer.

Output:
  An array containing the two indices whose values add up to the target. Exactly one solution always exists.

Example:
  Input:  [2, 7, 11, 15], target=9
  Output: [0, 1]
  Why:    Value at index 0 is 2 and at index 1 is 7. 2+7=9.

  Input:  [3, 2, 4], target=6
  Output: [1, 2]
  Why:    Value at index 1 is 2 and at index 2 is 4. 2+4=6.

Constraints:
  - 2 <= array length <= 10000
  - Exactly one valid solution exists
  - Cannot use the same element twice

Hint:
  Create an empty object to store numbers you have seen along with their indices. Walk the array. For each element calculate its complement by subtracting it from the target. Check if that complement exists in the object. If it does return the complement's stored index and the current index. If not store the current element and its index in the object and continue.
*/

const TwoSum = (nums) => {
  // your solution here
};

console.log(JSON.stringify(TwoSum([2, 7, 11, 15], 9))); // [0,1]
console.log(JSON.stringify(TwoSum([3, 2, 4], 6))); // [1,2]

// ── Repetition 1/3 — TwoSum ────────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TwoSum_rep1 = (nums, target) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — TwoSum ────────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TwoSum_rep2 = (nums, target) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — TwoSum ────────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TwoSum_rep3 = (nums, target) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 15: TwoSum
// Complete this BEFORE moving to Day 16
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 16
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 16 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 7: Peak Streak (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 12: Shared Start (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 15: Two Sum (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 16 — Repeat Check (Easy)
// Topic: Set for O(1) Existence Checking
// Builds On: Day 15 (object for fast lookup) — Set is cleaner when you only need existence
/*
Real World:
  A form validator checking whether any email address appears more than once in a submitted registration list.

Conceptual Explanation:
  A Set is a collection that only holds unique values — attempting to add a value that already exists has no effect on the Set's size. Walk through the array and for each element check whether it already exists in the Set before adding it. If it does you have found a duplicate. Alternatively add every element to a Set and compare the resulting Set size to the original array length — if they differ duplicates existed.

Input:
  An array of integers.

Output:
  True if any value appears at least twice. False if all values are distinct.

Example:
  Input:  [1, 2, 3, 1]
  Output: true
  Why:    The value 1 appears at index 0 and index 3.

  Input:  [1, 2, 3, 4]
  Output: false
  Why:    All values appear exactly once.

Constraints:
  - 1 <= array length <= 100000
  - -100000 <= each value <= 100000

Hint:
  Create an empty Set. Walk the array. For each element if it already exists in the Set return true — a duplicate was found. Otherwise add it to the Set and continue. If you finish the loop without finding a duplicate return false.
*/

const RepeatCheck = (nums) => {
  // your solution here
};

console.log(RepeatCheck([1, 2, 3, 1])); // true
console.log(RepeatCheck([1, 2, 3, 4])); // false

// ── Repetition 1/3 — RepeatCheck ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RepeatCheck_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — RepeatCheck ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RepeatCheck_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — RepeatCheck ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RepeatCheck_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 16: RepeatCheck
// Complete this BEFORE moving to Day 17
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 17
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 17 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 8: Mirror Text (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 13: Word Flip (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 16: Repeat Check (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 17 — The Odd One Out (Easy)
// Topic: XOR Bitwise Operation
// Builds On: Day 16 (finding the unique element) — XOR does it without extra space
/*
Real World:
  An inventory audit system where every product is scanned exactly twice during a stocktake except one item that was damaged and only scanned once.

Conceptual Explanation:
  The XOR bitwise operation has two useful properties. When you XOR a number with itself the result is zero. When you XOR any number with zero the result is that number unchanged. If you XOR every number in the array together all pairs will cancel each other out to zero leaving only the single unpaired number. The order in which you XOR the values does not matter.

Input:
  An array where every element appears exactly twice except for one element which appears exactly once.

Output:
  The single element that appears only once.

Example:
  Input:  [4, 1, 2, 1, 2]
  Output: 4
  Why:    1 XOR 1 = 0, 2 XOR 2 = 0, leaving only 4.

  Input:  [2, 2, 1]
  Output: 1
  Why:    2 XOR 2 = 0, leaving only 1.

Constraints:
  - 1 <= array length <= 30000
  - Array length is always odd
  - Every element except one appears exactly twice

Hint:
  Start with a result variable set to zero. Walk the array and XOR every element into the result variable. Pairs will cancel to zero and the single unique element will remain. Return the result.
*/

const TheOddOneOut = (nums) => {
  // your solution here
};

console.log(TheOddOneOut([4, 1, 2, 1, 2])); // 4
console.log(TheOddOneOut([2, 2, 1])); // 1

// ── Repetition 1/3 — TheOddOneOut ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TheOddOneOut_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — TheOddOneOut ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TheOddOneOut_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — TheOddOneOut ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TheOddOneOut_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 17: TheOddOneOut
// Complete this BEFORE moving to Day 18
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 18
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 18 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 9: Read Both Ways (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 14: In Order (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 17: The Odd One Out (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 18 — Crowd Favorite (Easy)
// Topic: Frequency Object + Majority Threshold
// Builds On: Day 10 and Day 15 (frequency object) — now checking against a threshold
/*
Real World:
  A live audience poll dashboard finding the option that more than half the audience voted for.

Conceptual Explanation:
  Build a frequency count of every element using an object. As you count each element check whether its current count exceeds half the array length. Because the majority element is guaranteed to exist you will always find it before or when you finish counting. There is also a space-efficient algorithm called Boyer-Moore Voting that solves this with only two variables — worth studying after completing the object approach.

Input:
  An array of integers. A majority element always exists — it appears more than half the total number of elements.

Output:
  The element that appears more than half the total number of times.

Example:
  Input:  [3, 2, 3]
  Output: 3
  Why:    3 appears twice out of three elements — more than half.

  Input:  [2, 2, 1, 1, 1, 2, 2]
  Output: 2
  Why:    2 appears four times out of seven — more than half.

Constraints:
  - 1 <= array length <= 50000
  - The majority element always exists

Hint:
  Create a frequency object. Walk the array incrementing each element's count. After each increment check if that count now exceeds half the array length. If so return that element immediately. If you complete the loop and have not returned look through the frequency object for the element with the highest count and return it.
*/

const CrowdFavorite = (nums) => {
  // your solution here
};

console.log(CrowdFavorite([3, 2, 3])); // 3
console.log(CrowdFavorite([2, 2, 1, 1, 1, 2, 2])); // 2

// ── Repetition 1/3 — CrowdFavorite ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CrowdFavorite_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — CrowdFavorite ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CrowdFavorite_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — CrowdFavorite ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CrowdFavorite_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 18: CrowdFavorite
// Complete this BEFORE moving to Day 19
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 19
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 19 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 10: Same Letters (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 15: Two Sum (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 18: Crowd Favorite (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 19 — Common Ground (Easy)
// Topic: Set Intersection
// Builds On: Day 16 (Set membership) — now applied across two separate arrays
/*
Real World:
  A social platform feature showing which users two people both follow — their mutual connections.

Conceptual Explanation:
  Convert one array into a Set for fast existence checking. Walk the other array and keep only the elements that exist in the Set. This gives you the intersection but may include duplicates if the second array has repeated values. Convert the result to a Set to remove those duplicates then return it as an array. The key advantage of using a Set over an array for the lookup is that checking membership in a Set takes constant time regardless of its size.

Input:
  Two arrays of integers.

Output:
  An array of unique integers that appear in both input arrays. Order does not matter.

Example:
  Input:  [1, 2, 2, 1], [2, 2]
  Output: [2]
  Why:    Only the value 2 appears in both arrays.

  Input:  [4, 9, 5], [9, 4, 9, 8, 4]
  Output: [4, 9]
  Why:    Values 4 and 9 appear in both.

Constraints:
  - 1 <= each array length <= 1000
  - 0 <= each value <= 1000

Hint:
  Convert the first array to a Set. Filter the second array keeping only elements that exist in that Set. Convert the filtered result to a new Set to eliminate duplicates then spread it back into an array and return it.
*/

const CommonGround = (nums) => {
  // your solution here
};

console.log(JSON.stringify(CommonGround([1, 2, 2, 1], [2, 2]))); // [2]

// ── Repetition 1/3 — CommonGround ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CommonGround_rep1 = (nums1, nums2) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — CommonGround ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CommonGround_rep2 = (nums1, nums2) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — CommonGround ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CommonGround_rep3 = (nums1, nums2) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 19: CommonGround
// Complete this BEFORE moving to Day 20
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 20
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 20 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 11: First Solo (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 16: Repeat Check (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 19: Common Ground (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 20 — Code Map (Easy)
// Topic: Bidirectional Object Mapping
// Builds On: Day 15 (single-direction map) — now the mapping must hold in both directions
/*
Real World:
  A cipher validator checking whether a secret code consistently maps each code letter to exactly one word and each word maps back to exactly one code letter.

Conceptual Explanation:
  A valid bijection requires that the relationship holds in both directions — one pattern character maps to exactly one word AND one word maps back to exactly one pattern character. Use two separate objects for the two directions. As you walk through each pair of corresponding characters and words check both maps. If a pattern character is already mapped to a different word the mapping is inconsistent. If a word is already mapped to a different pattern character the reverse mapping is inconsistent. Either failure means the answer is false.

Input:
  A pattern string of characters and a string of space-separated words. The number of words equals the length of the pattern.

Output:
  True if there is a consistent one-to-one mapping between each pattern character and each word. False otherwise.

Example:
  Input:  'abba', 'dog cat cat dog'
  Output: true
  Why:    a maps to dog, b maps to cat. Both directions consistent.

  Input:  'abba', 'dog cat cat fish'
  Output: false
  Why:    a maps to dog but also to fish — inconsistent.

  Input:  'aaaa', 'dog cat cat dog'
  Output: false
  Why:    a maps to dog but dog maps back to multiple positions.

Constraints:
  - 1 <= pattern length <= 300
  - Number of words equals pattern length
  - Pattern contains only lowercase letters

Hint:
  Split the words string into an array. Create two empty objects — one mapping pattern characters to words and one mapping words to pattern characters. Walk through each index checking both mappings. If the pattern character is already mapped to a different word return false. If the word is already mapped to a different character return false. Otherwise record both mappings and continue. Return true if you complete the walk.
*/

const CodeMap = (input) => {
  // your solution here
};

console.log(CodeMap("abba", "dog cat cat dog")); // true
console.log(CodeMap("abba", "dog cat cat fish")); // false

// ── Repetition 1/3 — CodeMap ───────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CodeMap_rep1 = (pattern, s) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — CodeMap ───────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CodeMap_rep2 = (pattern, s) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — CodeMap ───────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CodeMap_rep3 = (pattern, s) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 20: CodeMap
// Complete this BEFORE moving to Day 21
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 21
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 21 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 12: Shared Start (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 17: The Odd One Out (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 20: Code Map (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 21 — Same Shape (Easy)
// Topic: Bidirectional Mapping Variation
// Builds On: Day 20 (bidirectional map) — same structure applied to characters
/*
Real World:
  A font rendering engine determining whether two character sets can be substituted one-for-one without collisions so one alphabet can be visually mapped to another.

Conceptual Explanation:
  Identical structure to the previous challenge but now both inputs are strings of the same length rather than a pattern and a list of words. At every position in the strings check whether the character in the first string has already been mapped to a different character in the second string, and whether the character in the second string has already been mapped back to a different character in the first string. Both directions must be consistent at every position.

Input:
  Two strings of equal length.

Output:
  True if the characters in the first string can be consistently replaced to produce the second string with no two characters mapping to the same target. False otherwise.

Example:
  Input:  'egg', 'add'
  Output: true
  Why:    e maps to a, g maps to d. Consistent in both directions.

  Input:  'foo', 'bar'
  Output: false
  Why:    o would need to map to both a and r — impossible.

  Input:  'paper', 'title'
  Output: true
  Why:    p→t, a→i, e→l, r→e. All consistent.

Constraints:
  - 1 <= string length <= 50000
  - Both strings have the same length
  - Consist of ASCII characters

Hint:
  Create two empty objects. Walk both strings simultaneously using the index. At each position check if the first string character is already mapped to something different than the current second string character — return false if so. Check the reverse direction as well. If both checks pass record both mappings and continue. Return true after completing the walk.
*/

const SameShape = (input) => {
  // your solution here
};

console.log(SameShape("egg", "add")); // true
console.log(SameShape("foo", "bar")); // false

// ════════════════════════════════════════════════════════════
//  WEEK 4 — Consolidation (Days 22–30)
//  Thread: Every problem pulls from at least two patterns
//  already built. Recognize which tool fits, apply cleanly.
// ════════════════════════════════════════════════════════════

// ── Repetition 1/3 — SameShape ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameShape_rep1 = (s, t) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SameShape ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameShape_rep2 = (s, t) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SameShape ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameShape_rep3 = (s, t) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 21: SameShape
// Complete this BEFORE moving to Day 22
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 22
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 22 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 13: Word Flip (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 18: Crowd Favorite (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 21: Same Shape (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 22 — Merge From Back (Easy)
// Topic: Two Pointer — Starting From the End
// Builds On: Day 4 (backward traversal) + Day 6 (two pointers)
/*
Real World:
  Merging two sorted contact lists into one without allocating a third array — working in place from the back.

Conceptual Explanation:
  If you try to merge from the front you risk overwriting values in the first array that you still need. Starting from the back solves this. The first array has extra space at the end equal to the size of the second array. Place three pointers — one at the last real element of the first array, one at the last element of the second array, and one at the very last position of the first array including the extra space. Always compare what both front pointers point to and place the larger value at the back pointer position then advance the appropriate pointers.

Input:
  Two sorted arrays and the count of real elements in the first array. The first array has extra zero-filled space at the end to accommodate all elements from the second array.

Output:
  The first array modified in place containing all elements from both arrays in sorted order.

Example:
  Input:  [1,3,5,0,0,0] with m=3 and [2,4,6] with n=3
  Output: [1,2,3,4,5,6]
  Why:    Merged in place from the back.

Constraints:
  - First array length equals m plus n
  - Both arrays are sorted in non-decreasing order
  - 0 <= m, n <= 200

Hint:
  Set three pointers — one at index m minus one for the first array's real elements, one at index n minus one for the second array, and one at index m plus n minus one as the write position. While both source pointers are valid compare their values and write the larger to the write position then advance both the used source pointer and the write pointer backward. If the second array's pointer finishes first the remaining first array elements are already in place. If the first array's pointer finishes first copy the remaining second array elements.
*/

const MergeFromBack = (nums) => {
  // your solution here
};

const a = [1, 3, 5, 0, 0, 0];
MergeFromBack(a, 3, [2, 4, 6], 3);
console.log(JSON.stringify(a)); // [1,2,3,4,5,6]

// ── Repetition 1/3 — MergeFromBack ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeFromBack_rep1 = (nums1, m, nums2, n) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MergeFromBack ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeFromBack_rep2 = (nums1, m, nums2, n) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MergeFromBack ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeFromBack_rep3 = (nums1, m, nums2, n) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 22: MergeFromBack
// Complete this BEFORE moving to Day 23
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 23
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 23 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 14: In Order (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 19: Common Ground (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 22: Merge From Back (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 23 — Missing IDs (Easy)
// Topic: Frequency Object + Index Range Reasoning
// Builds On: Day 11 (two-pass frequency) + Day 2 (index as meaningful position)
/*
Real World:
  A ticketing system detecting which seat numbers were never assigned in a fully booked venue where every seat from 1 to n should appear exactly once.

Conceptual Explanation:
  The values in the array are guaranteed to fall between 1 and the array's length. Build a Set or frequency object from all values present in the array. Then walk from 1 to the array's length checking each number. Any number in that range that is not in your Set is a missing value. Because Set lookups are constant time the entire process is linear.

Input:
  An array of integers where every value is between 1 and the array's length inclusive. Some values appear twice and some values are absent.

Output:
  An array of all integers in the range 1 to array length that do not appear in the input.

Example:
  Input:  [4,3,2,7,8,2,3,1]
  Output: [5,6]
  Why:    Values 5 and 6 are absent from the array.

Constraints:
  - 1 <= array length <= 100000
  - 1 <= each value <= array length

Hint:
  Build a Set from all values in the array. Then create an empty result array. Walk from 1 to the array's length inclusive. For each number if it is not in the Set add it to the result array. Return the result array.
*/

const MissingIDs = (nums) => {
  // your solution here
};

console.log(JSON.stringify(MissingIDs([4, 3, 2, 7, 8, 2, 3, 1]))); // [5,6]

// ── Repetition 1/3 — MissingIDs ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MissingIDs_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MissingIDs ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MissingIDs_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MissingIDs ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MissingIDs_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 23: MissingIDs
// Complete this BEFORE moving to Day 24
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 24
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 24 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 15: Two Sum (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 20: Code Map (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 23: Missing IDs (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 24 — Uptime Streak (Easy)
// Topic: Linear Scan with Counter + Max Tracker
// Builds On: Day 5 (tracking running state) + Day 7 (reset vs extend logic)
/*
Real World:
  A server monitoring dashboard measuring the longest uninterrupted uptime streak — consecutive hours where the server was fully operational.

Conceptual Explanation:
  Walk through the array once with two variables — a current streak counter and a maximum streak counter. When you encounter a one increment the current streak and check if it now beats the maximum. When you encounter a zero the streak is broken so reset the current streak to zero. The maximum variable never resets — it only ever grows. This is the same extend-or-reset pattern from the peak streak challenge applied to counting consecutive ones.

Input:
  A binary array containing only zeros and ones.

Output:
  The length of the longest consecutive sequence of ones.

Example:
  Input:  [1,1,0,1,1,1]
  Output: 3
  Why:    The last three ones form the longest streak.

  Input:  [0,0,0]
  Output: 0
  Why:    No ones present.

Constraints:
  - 1 <= array length <= 100000
  - Each value is 0 or 1

Hint:
  Initialize current streak and max streak both to zero. Walk every element. On a one increment current streak then update max streak if current streak is now larger. On a zero set current streak back to zero. Return max streak after the loop.
*/

const UptimeStreak = (nums) => {
  // your solution here
};

console.log(UptimeStreak([1, 1, 0, 1, 1, 1])); // 3
console.log(UptimeStreak([0, 0, 0])); // 0

// ── Repetition 1/3 — UptimeStreak ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const UptimeStreak_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — UptimeStreak ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const UptimeStreak_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — UptimeStreak ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const UptimeStreak_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 24: UptimeStreak
// Complete this BEFORE moving to Day 25
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 25
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 25 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 16: Repeat Check (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 21: Same Shape (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 24: Uptime Streak (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 25 — Sorted Squares (Easy)
// Topic: Two Pointers — Fill Result Array From Back
// Builds On: Day 22 (fill from back) + Day 8 (pointers moving inward)
/*
Real World:
  A sensor data pipeline that squares all readings including negative ones and needs the result in sorted order without re-sorting from scratch.

Conceptual Explanation:
  The input is sorted so the largest absolute values — and therefore the largest squares — are always at the two ends of the array, either the most negative or the most positive. Use two pointers starting at each end and moving inward. Create a result array of the same length. Fill the result array from back to front by always comparing the squares of both outer pointers and placing the larger one at the current back position then advancing that pointer inward.

Input:
  An integer array sorted in non-decreasing order which may contain negative values.

Output:
  An array of the squares of each number in non-decreasing sorted order.

Example:
  Input:  [-4,-1,0,3,10]
  Output: [0,1,9,16,100]
  Why:    Largest squares at the ends: 100 then 16 then 9 then 1 then 0.

Constraints:
  - 1 <= array length <= 10000
  - -10000 <= each value <= 10000
  - Array is sorted in non-decreasing order

Hint:
  Create a result array of the same length. Set left to index zero and right to the last index. Set a write position to the last index. While left is less than or equal to right compare the absolute values of the elements at both pointers. Square the larger absolute value and place it at the write position. Advance the pointer whose element was used inward and decrement the write position. Return the result array.
*/

const SortedSquares = (nums) => {
  // your solution here
};

console.log(JSON.stringify(SortedSquares([-4, -1, 0, 3, 10]))); // [0,1,9,16,100]

// ── Repetition 1/3 — SortedSquares ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SortedSquares_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SortedSquares ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SortedSquares_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SortedSquares ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SortedSquares_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 25: SortedSquares
// Complete this BEFORE moving to Day 26
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 26
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 26 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 17: The Odd One Out (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 22: Merge From Back (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 25: Sorted Squares (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 26 — Spot the Addition (Easy)
// Topic: Frequency Differential
// Builds On: Day 10 (frequency object) + Day 17 (XOR as an alternative)
/*
Real World:
  A file sync tool detecting the single character that was inserted when a string was shuffled and one extra character was added to produce a longer version.

Conceptual Explanation:
  Two approaches both work here. The frequency approach builds a tally from the first string and then walks the second string decrementing counts. The character whose count drops below zero or does not exist is the added one. The XOR approach treats all characters from both strings as a single collection and XORs them all together — every character that appears in both strings cancels out leaving only the extra character. Both approaches are worth implementing to deepen your understanding of both patterns.

Input:
  Two strings where the second is produced by shuffling the first and inserting one extra character.

Output:
  The single character that was added.

Example:
  Input:  'abcd', 'abcde'
  Output: 'e'
  Why:    e appears in the second string but not the first.

  Input:  'ae', 'aea'
  Output: 'a'
  Why:    a appears once in the first string and twice in the second.

Constraints:
  - 0 <= first string length <= 1000
  - Second string length is exactly first string length plus one

Hint:
  Approach one — build a frequency object from the first string. Walk the second string and decrement counts. The character that goes negative or is missing is the answer. Approach two — XOR every character from both strings together. Matching pairs cancel to zero and the extra character remains. Implement both and understand why both produce the correct answer.
*/

const SpottheAddition = (nums) => {
  // your solution here
};

console.log(SpottheAddition("abcd", "abcde")); // 'e'

// ── Repetition 1/3 — SpottheAddition ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SpottheAddition_rep1 = (s, t) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SpottheAddition ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SpottheAddition_rep2 = (s, t) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SpottheAddition ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SpottheAddition_rep3 = (s, t) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 26: SpottheAddition
// Complete this BEFORE moving to Day 27
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 27
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 27 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 18: Crowd Favorite (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 23: Missing IDs (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 26: Spot the Addition (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 27 — Budget Check (Easy)
// Topic: Character Budget Deduction
// Builds On: Day 10 (frequency object) — now depleting a budget as you consume
/*
Real World:
  A content moderation tool verifying that a response message can be constructed entirely using characters available in a pre-approved template.

Conceptual Explanation:
  Think of the magazine as a character budget. Build a frequency count of every character available in the magazine. Then walk through the ransom note and for each character decrement its count in the budget. If a character's count reaches below zero that character has been used more times than the magazine provides — it is impossible to construct the note. If you complete the walk without going negative the note can be constructed.

Input:
  Two strings — a ransom note to construct and a magazine to take characters from.

Output:
  True if the ransom note can be built using only characters from the magazine, each used at most as many times as it appears. False otherwise.

Example:
  Input:  'aa', 'aab'
  Output: true
  Why:    Two a's available in the magazine — enough for the note.

  Input:  'aa', 'ab'
  Output: false
  Why:    Only one a in the magazine but the note needs two.

Constraints:
  - 1 <= each string length <= 100000
  - Both consist of lowercase English letters

Hint:
  Build a frequency object from the magazine counting every character. Walk the ransom note. For each character decrement its count in the frequency object. If the count for any character goes below zero return false — the budget is exhausted. Return true if you complete the walk without going negative.
*/

const BudgetCheck = (input) => {
  // your solution here
};

console.log(BudgetCheck("aa", "aab")); // true
console.log(BudgetCheck("aa", "ab")); // false

// ── Repetition 1/3 — BudgetCheck ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BudgetCheck_rep1 = (ransomNote, magazine) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — BudgetCheck ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BudgetCheck_rep2 = (ransomNote, magazine) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — BudgetCheck ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BudgetCheck_rep3 = (ransomNote, magazine) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 27: BudgetCheck
// Complete this BEFORE moving to Day 28
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 28
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 28 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 19: Common Ground (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 24: Uptime Streak (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 27: Budget Check (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 28 — Pair Counter (Easy)
// Topic: Complement Lookup in Frequency Object
// Builds On: Day 15 (complement in a map) — now count all valid pairs
/*
Real World:
  A matchmaking engine counting how many player pairs in a roster have exactly K rating points between them to form balanced competition brackets.

Conceptual Explanation:
  Build a frequency object first so you know how many times each number appears. Then for every unique number in the array check whether that number plus K also exists in the frequency object. If it does multiply the count of the current number by the count of the paired number — that product is how many distinct pairs that combination produces. Sum all such products. Using a frequency object means each pair is found in constant time rather than requiring nested loops.

Input:
  An array of integers and a positive integer K.

Output:
  The count of pairs where the absolute difference between the two values equals exactly K.

Example:
  Input:  [1,2,2,1], k=1
  Output: 4
  Why:    Pairs: (1,2) at indices (0,1), (0,2), (3,1), (3,2). Four total.

  Input:  [1,3,2,2], k=2
  Output: 1
  Why:    Only the pair (1,3) has a difference of 2.

Constraints:
  - 1 <= array length <= 200
  - 1 <= each value <= 100
  - 1 <= k <= 99

Hint:
  Build a frequency object from the array. Then walk through every unique key in the object. For each key check if the key plus K also exists as a key. If it does multiply their counts and add the product to your running total. Return the total after checking all keys.
*/

const PairCounter = (nums) => {
  // your solution here
};

console.log(PairCounter([1, 2, 2, 1], 1)); // 4

// ── Repetition 1/3 — PairCounter ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PairCounter_rep1 = (nums, k) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — PairCounter ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PairCounter_rep2 = (nums, k) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — PairCounter ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const PairCounter_rep3 = (nums, k) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 28: PairCounter
// Complete this BEFORE moving to Day 29
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 29
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 29 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 20: Code Map (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 25: Sorted Squares (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 28: Pair Counter (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 29 — Same Message (Easy)
// Topic: Array Join + String Comparison
// Builds On: Day 13 (join) — now comparing two joined results
/*
Real World:
  A document diff tool checking whether two differently-chunked versions of the same file actually represent the same full text.

Conceptual Explanation:
  Both arrays represent the same full string if when you concatenate all their elements in order the resulting strings are identical. Join each array with no separator to produce the full string each array represents. Then compare the two resulting strings directly. This works because concatenation is associative — the order of joining does not matter as long as the individual elements are in order.

Input:
  Two arrays of strings.

Output:
  True if concatenating all strings in the first array produces the same result as concatenating all strings in the second array. False otherwise.

Example:
  Input:  ["ab","c"], ["a","bc"]
  Output: true
  Why:    "ab"+"c" = "abc" and "a"+"bc" = "abc". Identical.

  Input:  ["a","cb"], ["ab","c"]
  Output: false
  Why:    "acb" does not equal "abc".

Constraints:
  - 1 <= each array length <= 1000
  - 1 <= each string length <= 1000

Hint:
  Join the first array with an empty string separator to produce one combined string. Join the second array the same way. Compare the two resulting strings and return whether they are equal.
*/

const SameMessage = (input) => {
  // your solution here
};

console.log(SameMessage(["ab", "c"], ["a", "bc"])); // true

// ── Repetition 1/3 — SameMessage ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameMessage_rep1 = (word1, word2) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SameMessage ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameMessage_rep2 = (word1, word2) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SameMessage ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SameMessage_rep3 = (word1, word2) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 29: SameMessage
// Complete this BEFORE moving to Day 30
// ════════════════════════════════════════════════════════════
/*
The Feynman Technique: if you cannot explain it simply,
you do not understand it yet. No code — plain English only.

1. EXPLAIN
   Describe the core pattern of this problem in 2-3 sentences
   as if teaching someone who has never written code.
   What is the problem really asking?
   What insight makes the solution work?

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   Looking back at rep1, rep2, and rep3 — what did you
   hesitate on? What took the longest to reconstruct?
   Be specific and honest. Those hesitations are your gaps.

   YOUR GAPS:


3. CLOSE GAPS
   For each gap identified above find the concept on MDN
   or in Eloquent JS. Write the source next to each gap.
   Do not move forward until every gap has a reference.

   YOUR REFERENCES:


*/
// ✅ Feynman checkpoint complete — proceed to Day 30
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 30 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 21: Same Shape (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 26: Spot the Addition (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 29: Same Message (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 30 — Compress Ranges (Easy)
// Topic: Linear Scan with Range Detection
// Builds On: Day 7 (extend or reset) + Day 12 (building a result string)
/*
Real World:
  A calendar app that compresses a list of individually booked days into human-readable ranges rather than listing every day separately.

Conceptual Explanation:
  Walk through the sorted array tracking the start of the current range. A range ends when the next element is not exactly one more than the current element or when you reach the end of the array. At that point build the range label — if the start and current position are the same it is a single number otherwise it is start arrow end. Then begin a new range at the next element. The extend-or-reset logic mirrors the streak counting from previous challenges.

Input:
  A sorted array of unique integers.

Output:
  An array of strings where consecutive integers are compressed into range notation and single integers appear alone.

Example:
  Input:  [0,1,2,4,5,7]
  Output: ["0->2","4->5","7"]
  Why:    0 through 2 consecutive, 4 through 5 consecutive, 7 alone.

  Input:  [0,2,3,4,6,8,9]
  Output: ["0","2->4","6","8->9"]
  Why:    0 alone, 2 through 4 consecutive, 6 alone, 8 through 9 consecutive.

Constraints:
  - 0 <= array length <= 20
  - -1000000000 <= each value <= 1000000000
  - All values unique and sorted

Hint:
  Handle the empty array case first. Track the start of the current range. Walk from the second element to the end. At each position if the current value is not exactly one more than the previous value the range has ended — build the label using the stored start and the previous element then start a new range at the current element. After the loop close the final range. Return the collected labels.
*/

const CompressRanges = (input) => {
  // your solution here
};

console.log(JSON.stringify(CompressRanges([0, 1, 2, 4, 5, 7]))); // ['0->2','4->5','7']

// ── Repetition 1/3 — CompressRanges ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CompressRanges_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — CompressRanges ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CompressRanges_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — CompressRanges ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const CompressRanges_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 30: CompressRanges
// Complete this before moving to Month 2
// ════════════════════════════════════════════════════════════
/*
1. EXPLAIN
   Describe the core pattern in 2-3 sentences — plain English.

   YOUR EXPLANATION:


2. IDENTIFY GAPS
   What did you hesitate on across rep1, rep2, rep3?

   YOUR GAPS:


3. CLOSE GAPS
   MDN or Eloquent JS reference for each gap.

   YOUR REFERENCES:


*/
// ✅ Month 1 complete — proceed to Month 2
// ════════════════════════════════════════════════════════════
