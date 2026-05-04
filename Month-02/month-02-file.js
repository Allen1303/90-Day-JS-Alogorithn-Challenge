// ============================================================
// 90-DAY JAVASCRIPT ALGORITHM CHALLENGE
// MONTH 2 — Recursion, Sorting, Two Pointers & Sliding Window
// Days 31–60 | Difficulty: Easy → Medium
// ============================================================
// HOW TO USE:
//   1. Check the revision prompt — complete all revisions first
//   2. Read Real World, Conceptual Explanation, Input, Output,
//      Examples, Constraints, and Hint fully before coding
//   3. Write your solution in the starter function
//   4. Run: node month2_challenges.js
//
// NORAL COMMITMENT:
//   No AI. No Google. MDN and Eloquent JS only.
//   No code examples in this file — concepts only.
// ============================================================

// ════════════════════════════════════════════════════════════
//  WEEK 5 — Recursion (Days 31–37)
//  Thread: base case → halving → overlapping subproblems
//          → recursion on linked structures → iterative vs recursive
//          → tree recursion → combining recursion with prior patterns
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 31 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 22: Merge From Back (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 27: Budget Check (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 30: Compress Ranges (+1 day)
//       File: month1_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 31 — Sequence Builder
// Topic: Basic Recursion + Memoization
/*
Real World:
  A financial projection tool calculating a value in a compound growth sequence where each value depends on the two before it.

Conceptual Explanation:
  Every value in the Fibonacci sequence is defined as the sum of the two values before it. This gives you a natural recursive structure — to find the value at position n you need the values at positions n minus one and n minus two. The base cases are position zero which equals zero and position one which equals one. The naive recursive approach recalculates the same positions repeatedly — exponential work. Memoization stores results the first time they are computed so every position is only ever calculated once, reducing the work to linear.

Input:
  A non-negative integer n.

Output:
  The nth Fibonacci number.

Example:
  Input:  4
  Output: 3
  Why:    F(4) = F(3)+F(2) = 2+1 = 3

  Input:  10
  Output: 55
  Why:    F(10) = 55

Constraints:
  - 0 <= n <= 30

Hint:
  Write the recursive solution first with base cases for zero and one. After it works correctly add a cache object outside or inside the function. Before computing a value check if it already exists in the cache and return it if so. After computing store the result in the cache before returning it. Compare the call count with and without the cache to see the difference.
*/

const SequenceBuilder = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 32 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 23: Missing IDs (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 28: Pair Counter (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 31: Sequence Builder (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — SequenceBuilder ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SequenceBuilder_rep1 = (n) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SequenceBuilder ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SequenceBuilder_rep2 = (n) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SequenceBuilder ───────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SequenceBuilder_rep3 = (n) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 31: SequenceBuilder
// Complete this BEFORE moving to Day 32
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
// ✅ Feynman checkpoint complete — proceed to Day 32
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 32 — Half and Check
// Topic: Recursive Halving
// Builds On: Day 31 (recursion) — now the input shrinks by half each call
/*
Real World:
  A memory allocator that validates whether a requested block size is a valid power of two — required for aligned memory allocation.

Conceptual Explanation:
  A power of two can only be reached by repeatedly multiplying by two starting from one — which means it can only be reduced back to one by repeatedly dividing by two. If at any point during that division you get an odd number that is not one it cannot be a power of two because the chain is broken. This halving approach mirrors the recursive structure from the previous challenge but instead of adding results you are simply checking divisibility at each step.

Input:
  A single integer.

Output:
  True if the integer is a power of two. False otherwise.

Example:
  Input:  16
  Output: true
  Why:    16 → 8 → 4 → 2 → 1. Pure halving chain.

  Input:  3
  Output: false
  Why:    3 → 1.5. Not an integer — not a power of two.

  Input:  1
  Output: true
  Why:    Two to the power of zero is one.

Constraints:
  - -2 billion <= n <= 2 billion

Hint:
  Handle the base cases first — if n is less than or equal to zero return false, if n equals one return true. If n is odd and not one return false. Otherwise recurse on n divided by two. After solving recursively, research the single-line bitwise approach using AND and understand why a power of two has exactly one bit set in binary.
*/

const HalfandCheck = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 33 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 24: Uptime Streak (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 29: Same Message (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 32: Half and Check (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — HalfandCheck ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const HalfandCheck_rep1 = (n) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — HalfandCheck ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const HalfandCheck_rep2 = (n) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — HalfandCheck ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const HalfandCheck_rep3 = (n) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 32: HalfandCheck
// Complete this BEFORE moving to Day 33
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
// ✅ Feynman checkpoint complete — proceed to Day 33
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 33 — Step Counter
// Topic: Overlapping Subproblems
// Builds On: Day 31 (Fibonacci pattern) — same structure different real context
/*
Real World:
  A workflow engine counting how many distinct ways a user can complete a multi-step onboarding form where each screen allows jumping ahead one or two steps.

Conceptual Explanation:
  The number of ways to reach step n equals the number of ways to reach step n minus one — from which you take one step — plus the number of ways to reach step n minus two — from which you take two steps. This is structurally identical to the Fibonacci sequence with different starting values. The base cases are that there is one way to be at step zero and one way to reach step one. Everything else follows from combining those two sub-results.

Input:
  A positive integer n representing the number of steps.

Output:
  The number of distinct ways to climb to the top.

Example:
  Input:  2
  Output: 2
  Why:    One plus one, or two. Two ways.

  Input:  4
  Output: 5
  Why:    Five distinct step combinations.

Constraints:
  - 1 <= n <= 45

Hint:
  The recursive approach with memoization from the previous challenge transfers directly here. Alternatively solve it iteratively with two variables representing the answers for n minus one and n minus two, updating them as you count upward to n. The iterative approach uses constant space.
*/

const StepCounter = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 34 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 25: Sorted Squares (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 30: Compress Ranges (+4 days)
//       File: month1_revisions.js
//     → Revision 1/3 — Day 33: Step Counter (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — StepCounter ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const StepCounter_rep1 = (n) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — StepCounter ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const StepCounter_rep2 = (n) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — StepCounter ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const StepCounter_rep3 = (n) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 33: StepCounter
// Complete this BEFORE moving to Day 34
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
// ✅ Feynman checkpoint complete — proceed to Day 34
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 34 — Merge Streams
// Topic: Recursion on Linked Structures
// Builds On: Day 33 (recursion) — now applied to linked list nodes
/*
Real World:
  A log aggregation system merging two sorted event streams from different servers into one chronological timeline.

Conceptual Explanation:
  At every step you face a simple decision — which of the two current heads is smaller. That smaller node belongs next in the merged list. After selecting it the remaining problem is merging the rest of that list with the other unchanged list. This is a recursive structure — the problem at each step is identical to the original problem but smaller. The base case occurs when either list is empty, in which case the answer is simply the other list.

Input:
  The heads of two sorted linked lists.

Output:
  The head of a single merged sorted linked list containing all nodes from both input lists.

Example:
  Input:  1→2→4 and 1→3→4
  Output: 1→1→2→3→4→4
  Why:    Smallest heads selected at each step.

Constraints:
  - 0 <= each list length <= 50
  - Both lists sorted in non-decreasing order
  - -100 <= node values <= 100

Hint:
  Check if either list is null — if so return the other. Compare the values of both heads. Whichever is smaller becomes the next node. Set its next pointer to the result of recursively merging its remaining tail with the other list unchanged. Return the smaller head.
*/

const MergeStreams = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 35 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 26: Spot the Addition (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 31: Sequence Builder (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 34: Merge Streams (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — MergeStreams ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeStreams_rep1 = (list1, list2) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MergeStreams ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeStreams_rep2 = (list1, list2) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MergeStreams ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeStreams_rep3 = (list1, list2) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 34: MergeStreams
// Complete this BEFORE moving to Day 35
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
// ✅ Feynman checkpoint complete — proceed to Day 35
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 35 — Flip the Chain
// Topic: Iterative and Recursive Linked List Reversal
// Builds On: Day 34 (linked lists) + Day 8 (reversal concept)
/*
Real World:
  A browser history manager that reverses the visited page sequence so the most recent page becomes the starting point for forward navigation.

Conceptual Explanation:
  The iterative approach uses three variables. One holds the previous node which starts as null, one holds the current node starting at the head, and one temporarily stores the next node before the current node's pointer is changed. At each step save the next node, redirect the current node's pointer backward to the previous node, advance the previous variable to the current node, and advance the current variable to the saved next. The recursive approach reverses the rest of the list first then makes the current head become the tail of the reversed portion. Both approaches produce the same result through different mental models.

Input:
  The head of a singly linked list.

Output:
  The head of the same list with all next pointers reversed.

Example:
  Input:  1→2→3→4→5
  Output: 5→4→3→2→1
  Why:    Every pointer direction reversed.

Constraints:
  - 0 <= list length <= 5000
  - -5000 <= node values <= 5000

Hint:
  Solve the iterative version first. Initialize previous to null and current to head. While current is not null store current's next in a temporary variable, point current's next to previous, advance previous to current, and advance current to the temporary. Return previous when done. Then solve the recursive version and observe how the call stack mirrors the iterative pointer chain.
*/

const FliptheChain = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 36 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 27: Budget Check (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 32: Half and Check (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 35: Flip the Chain (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — FliptheChain ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FliptheChain_rep1 = (head) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — FliptheChain ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FliptheChain_rep2 = (head) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — FliptheChain ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FliptheChain_rep3 = (head) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 35: FliptheChain
// Complete this BEFORE moving to Day 36
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
// ✅ Feynman checkpoint complete — proceed to Day 36
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 36 — Tree Depth
// Topic: Tree Recursion DFS
// Builds On: Day 35 (recursion) — now the structure branches left and right
/*
Real World:
  A file system analytics tool calculating the deepest level of nesting in a directory hierarchy.

Conceptual Explanation:
  The depth of any tree is one plus the maximum depth of its two subtrees. This definition is inherently recursive — to find the depth of a tree you need the depths of its children which each need the depths of their children and so on. The recursion bottoms out at null nodes which have depth zero. The maximum operation ensures you always take the deeper of the two subtrees.

Input:
  The root node of a binary tree.

Output:
  An integer representing the number of nodes along the longest path from the root to the farthest leaf.

Example:
  Input:  [3,9,20,null,null,15,7]
  Output: 3
  Why:    Three levels deep — root then 9 or 20 then 15 or 7.

  Input:  [1,null,2]
  Output: 2
  Why:    Two levels — root then its right child.

Constraints:
  - 0 <= number of nodes <= 10000
  - -100 <= node values <= 100

Hint:
  If the current node is null return zero — that is the base case. Otherwise return one plus the maximum of the recursive depth of the left subtree and the recursive depth of the right subtree. The entire solution fits in two lines.
*/

const TreeDepth = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 37 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 28: Pair Counter (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 33: Step Counter (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 36: Tree Depth (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — TreeDepth ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TreeDepth_rep1 = (root) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — TreeDepth ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TreeDepth_rep2 = (root) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — TreeDepth ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TreeDepth_rep3 = (root) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 36: TreeDepth
// Complete this BEFORE moving to Day 37
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
// ✅ Feynman checkpoint complete — proceed to Day 37
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 37 — Mirror List
// Topic: Slow Fast Pointer Plus Reversal
// Builds On: Day 35 (list reversal) + Day 9 (palindrome concept)
/*
Real World:
  A version control system checking whether a sequence of commits forms a symmetric undo and redo pattern — useful for validating reversible operation logs.

Conceptual Explanation:
  Three steps working together. First find the middle of the list using the slow and fast pointer technique — slow advances one step at a time while fast advances two, so when fast reaches the end slow is at the middle. Second reverse the second half of the list starting from the node after the middle using the reversal technique from the previous challenge. Third compare the first half and the reversed second half node by node — if all values match it is a palindrome.

Input:
  The head of a singly linked list.

Output:
  True if the list reads the same forwards and backwards. False otherwise.

Example:
  Input:  1→2→2→1
  Output: true
  Why:    First half 1,2 matches reversed second half 2,1.

  Input:  1→2
  Output: false
  Why:    First half 1 does not match second half 2.

Constraints:
  - 1 <= list length <= 100000
  - 0 <= node values <= 9

Hint:
  Find the middle using slow and fast pointers. Reverse everything from the node after the middle to the end. Walk both the start of the list and the start of the reversed second half simultaneously comparing values. If any values differ return false. If you reach the end without a mismatch return true.
*/

const MirrorList = (...args) => {
  // your solution here
};

// add your test cases here

// ════════════════════════════════════════════════════════════
//  WEEK 6 — Sorting (Days 38–44)
//  Thread: partition → sort with index → three-way partition
//          → custom comparator → Kth element → sort then merge
//          → string-based comparator
// ════════════════════════════════════════════════════════════

// ── Repetition 1/3 — MirrorList ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MirrorList_rep1 = (head) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MirrorList ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MirrorList_rep2 = (head) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MirrorList ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MirrorList_rep3 = (head) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 37: MirrorList
// Complete this BEFORE moving to Day 38
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
// ✅ Feynman checkpoint complete — proceed to Day 38
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 38 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 29: Same Message (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 34: Merge Streams (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 37: Mirror List (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 38 — Even First
// Topic: Partition Custom Filter
// Builds On: Day 3 (write pointer) — now partitioning into two groups
/*
Real World:
  A data pipeline that must route even transaction IDs to one processing queue and odd IDs to another while preserving relative order within each group.

Conceptual Explanation:
  Two clean approaches exist here. The first uses the filter method to create a list of evens and a separate list of odds then concatenates them — readable and expressive but creates intermediate arrays. The second uses two pointers from opposite ends of the array swapping when the left pointer holds an odd and the right pointer holds an even, working toward the middle — efficient and in-place but order within groups is not guaranteed. Understand the trade-off between readability and the in-place constraint before choosing.

Input:
  An array of integers.

Output:
  The array rearranged so all even integers appear before all odd integers. Relative order within each group does not need to be preserved.

Example:
  Input:  [3,1,2,4]
  Output: [2,4,3,1] or any valid grouping
  Why:    Evens before odds — any ordering within each group is acceptable.

Constraints:
  - 1 <= array length <= 5000
  - 0 <= each value <= 10000

Hint:
  Approach one — filter the array twice, once keeping only even values and once keeping only odd values, then concatenate both results and return. Approach two — use two pointers from each end swapping when the left holds an odd and the right holds an even, stopping when they meet. Implement both and compare the trade-offs.
*/

const EvenFirst = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 39 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 30: Compress Ranges (+9 days)
//       File: month1_revisions.js
//     → Revision 2/3 — Day 35: Flip the Chain (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 38: Even First (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — EvenFirst ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const EvenFirst_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — EvenFirst ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const EvenFirst_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — EvenFirst ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const EvenFirst_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 38: EvenFirst
// Complete this BEFORE moving to Day 39
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
// ✅ Feynman checkpoint complete — proceed to Day 39
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 39 — Podium
// Topic: Sort with Index Tracking
// Builds On: Day 38 (sorting) — now you sort but must remember original positions
/*
Real World:
  A competition scoring system that assigns Gold, Silver, and Bronze medals to the top three finishers then maps all rankings back to the original contestant order.

Conceptual Explanation:
  If you sort the scores directly you lose track of which score belonged to which contestant. Instead create a mapping from score value to rank label before sorting disturbs anything, or sort a copy of the scores to determine ranks and then build a lookup from each score to its rank label. Then walk the original unsorted array and replace each score with its rank label using the lookup. The key insight is that sorting a copy preserves the original index information.

Input:
  An array of unique integer scores.

Output:
  An array of rank labels in the same order as the input. The highest score gets Gold Medal, second gets Silver Medal, third gets Bronze Medal, and the rest get their numeric rank as a string.

Example:
  Input:  [5,4,3,2,1]
  Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
  Why:    Sorted order maps directly to rank labels.

Constraints:
  - 1 <= array length <= 10000
  - 0 <= each score <= 1000000
  - All scores are unique

Hint:
  Sort a copy of the scores in descending order. Build an object mapping each score value to its rank label — first position gets Gold Medal, second gets Silver Medal, third gets Bronze Medal, rest get their one-based position as a string. Walk the original array and use the mapping to produce the result array.
*/

const Podium = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 40 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 31: Sequence Builder (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 36: Tree Depth (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 39: Podium (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — Podium ────────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const Podium_rep1 = (score) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — Podium ────────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const Podium_rep2 = (score) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — Podium ────────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const Podium_rep3 = (score) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 39: Podium
// Complete this BEFORE moving to Day 40
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
// ✅ Feynman checkpoint complete — proceed to Day 40
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 40 — Three Groups
// Topic: Dutch National Flag
// Builds On: Day 38 (partition) + Day 6 (two pointers) — now three regions
/*
Real World:
  A warehouse sorting system that must group inventory into three urgency levels in a single pass through the conveyor belt.

Conceptual Explanation:
  Three pointers divide the array into four regions — a confirmed-zero region at the left, an unexamined region in the middle, and a confirmed-two region at the right, with ones naturally falling into their correct place as the middle region shrinks. The middle pointer walks forward examining each element. When it finds a zero it swaps with the low pointer and both pointers advance. When it finds a two it swaps with the high pointer but only the high pointer retreats — the newly swapped element at the middle pointer has not been examined yet so the middle pointer must not advance.

Input:
  An array containing only the values zero, one, and two.

Output:
  The same array sorted in place so all zeros come first, then ones, then twos. No sorting function may be used.

Example:
  Input:  [2,0,2,1,1,0]
  Output: [0,0,1,1,2,2]
  Why:    Single pass — three regions consolidated.

Constraints:
  - 1 <= array length <= 300
  - Each value is 0, 1, or 2

Hint:
  Initialize low to zero, middle to zero, and high to the last index. While middle is less than or equal to high examine the element at middle. If it is zero swap with low and advance both low and middle. If it is one advance middle only. If it is two swap with high and retreat high only — do not advance middle because the swapped element needs examination.
*/

const ThreeGroups = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 41 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 32: Half and Check (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 37: Mirror List (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 40: Three Groups (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — ThreeGroups ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ThreeGroups_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — ThreeGroups ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ThreeGroups_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — ThreeGroups ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ThreeGroups_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 40: ThreeGroups
// Complete this BEFORE moving to Day 41
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
// ✅ Feynman checkpoint complete — proceed to Day 41
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 41 — Rare First
// Topic: Custom Sort Comparator Plus Frequency Map
// Builds On: Day 10 (frequency map) + Day 38 (custom sort)
/*
Real World:
  A recommendation engine that surfaces the least common items first — rarer items get higher priority with ties broken by showing larger values first.

Conceptual Explanation:
  First build a frequency map counting how many times each value appears. Then sort the array using a custom comparator that uses the frequency map to compare elements. When two elements have different frequencies the one with the lower frequency should come first. When two elements have the same frequency the one with the larger numeric value should come first. The frequency map is built once before sorting and consulted inside the comparator.

Input:
  An array of integers.

Output:
  The array sorted so less frequent values appear first. Ties in frequency are broken by placing larger values first.

Example:
  Input:  [1,1,2,2,2,3]
  Output: [3,1,1,2,2,2]
  Why:    3 appears once, 1 twice, 2 three times.

Constraints:
  - 1 <= array length <= 100
  - -100 <= each value <= 100

Hint:
  Build a frequency object mapping each value to its count. Call the sort method with a custom comparator function. Inside the comparator compare the frequencies of the two elements using the frequency map. If frequencies differ sort by frequency ascending. If frequencies are the same sort by value descending. Return the sorted array.
*/

const RareFirst = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 42 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 33: Step Counter (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 38: Even First (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 41: Rare First (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — RareFirst ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RareFirst_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — RareFirst ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RareFirst_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — RareFirst ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RareFirst_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 41: RareFirst
// Complete this BEFORE moving to Day 42
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
// ✅ Feynman checkpoint complete — proceed to Day 42
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 42 — Kth Biggest
// Topic: Sort Plus Index
// Builds On: Day 39 (sorted index) — now you only need one specific position
/*
Real World:
  A live leaderboard system that must return the player in exactly the Kth position without sorting the entire board.

Conceptual Explanation:
  The straightforward approach sorts the array in descending order and returns the element at index k minus one. This is correct and readable. A more efficient approach called Quickselect finds the kth largest element in linear average time without fully sorting — it partitions the array around a pivot, determines which side the kth element must be on, and recurses only on that side. For this challenge implement the sort approach first then research Quickselect to understand why it is faster for this specific task.

Input:
  An array of integers and an integer k.

Output:
  The kth largest element in the array. Not the kth unique element — the kth position when sorted in descending order.

Example:
  Input:  [3,2,1,5,6,4], k=2
  Output: 5
  Why:    Sorted descending: 6,5,4,3,2,1. Second position is 5.

Constraints:
  - 1 <= k <= array length <= 10000
  - -10000 <= each value <= 10000

Hint:
  Sort a copy of the array in descending order. Return the element at index k minus one. After completing this approach, research the Quickselect algorithm and understand why sorting is unnecessarily thorough when you only need one specific position.
*/

const KthBiggest = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 43 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 34: Merge Streams (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 39: Podium (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 42: Kth Biggest (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — KthBiggest ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const KthBiggest_rep1 = (nums, k) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — KthBiggest ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const KthBiggest_rep2 = (nums, k) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — KthBiggest ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const KthBiggest_rep3 = (nums, k) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 42: KthBiggest
// Complete this BEFORE moving to Day 43
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
// ✅ Feynman checkpoint complete — proceed to Day 43
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 43 — Merge Blocks
// Topic: Sort Plus Linear Merge
// Builds On: Day 40 and Day 41 (sort) + Day 22 (merge) — sort first then merge overlaps
/*
Real World:
  A calendar app that consolidates overlapping meeting time blocks into a clean non-overlapping schedule.

Conceptual Explanation:
  Sort all intervals by their start time. Once sorted any overlapping intervals must be adjacent — an interval that starts before the previous one ends must overlap with it because they are already in start-time order. Walk through the sorted intervals maintaining a result list. If the current interval's start time is less than or equal to the end time of the last interval in the result they overlap — extend the last interval's end time if necessary. If they do not overlap add the current interval to the result as a new entry. Sorting is the step that makes the linear merge possible.

Input:
  An array of intervals where each interval is a pair of start and end times.

Output:
  An array of merged non-overlapping intervals covering all ranges in the input.

Example:
  Input:  [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Why:    1 to 3 and 2 to 6 overlap — merged to 1 to 6.

Constraints:
  - 1 <= number of intervals <= 10000
  - 0 <= start <= end <= 10000

Hint:
  Sort the intervals by their start value. Initialize a result array with the first interval. Walk through each remaining interval. If its start value is less than or equal to the last result interval's end value they overlap — update the last result interval's end to the maximum of both ends. Otherwise push the current interval to the result as a new entry. Return the result.
*/

const MergeBlocks = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 44 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 35: Flip the Chain (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 40: Three Groups (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 43: Merge Blocks (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — MergeBlocks ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeBlocks_rep1 = (intervals) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MergeBlocks ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeBlocks_rep2 = (intervals) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MergeBlocks ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MergeBlocks_rep3 = (intervals) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 43: MergeBlocks
// Complete this BEFORE moving to Day 44
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
// ✅ Feynman checkpoint complete — proceed to Day 44
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 44 — Biggest Combo
// Topic: Custom String Comparator
// Builds On: Day 41 (custom comparator) — now comparing string concatenations
/*
Real World:
  A report ID generator that assembles the largest possible identifier from a set of numeric parts.

Conceptual Explanation:
  The question of which number should come first is not answered by their numeric values alone. For example three and thirty — three should come first because three-thirty is larger than thirty-three. The correct comparison for any two numbers is to check which concatenation order produces a larger string. Convert both numbers to strings, concatenate them in both orders, and whichever concatenation is lexicographically larger represents the correct ordering. Pass this as the comparator to the sort method.

Input:
  An array of non-negative integers.

Output:
  A string representing the largest number that can be formed by concatenating the integers in some order.

Example:
  Input:  [10,2]
  Output: "210"
  Why:    Two comes before ten: two-ten is 210, ten-two is 102.

  Input:  [3,30,34,5,9]
  Output: "9534330"
  Why:    Sorted by concatenation comparison.

Constraints:
  - 1 <= array length <= 100
  - 0 <= each value <= 1 billion

Hint:
  Convert all numbers to strings. Sort using a custom comparator that compares the two possible concatenation orders of each pair and places the one producing the larger string first. Join the sorted array into a single string. Handle the edge case where all values are zero — the result should be the string zero not a string of multiple zeros.
*/

const BiggestCombo = (...args) => {
  // your solution here
};

// add your test cases here

// ════════════════════════════════════════════════════════════
//  WEEK 7 — Two Pointers Deep Dive (Days 45–51)
//  Thread: one allowed skip → sorted converging → fixed outer loop
//          → greedy move decision → fixed gap → stack simulation
//          → dual chain restructuring
// ════════════════════════════════════════════════════════════

// ── Repetition 1/3 — BiggestCombo ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BiggestCombo_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — BiggestCombo ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BiggestCombo_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — BiggestCombo ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BiggestCombo_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 44: BiggestCombo
// Complete this BEFORE moving to Day 45
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
// ✅ Feynman checkpoint complete — proceed to Day 45
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 45 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 36: Tree Depth (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 41: Rare First (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 44: Biggest Combo (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 45 — One Skip Palindrome
// Topic: Two Pointer Plus Single Skip Allowance
// Builds On: Day 9 (palindrome check) — now you get one free skip
/*
Real World:
  A spell-checker that allows one character deletion and still flags a word as a valid palindrome.

Conceptual Explanation:
  Apply the standard two-pointer palindrome check moving both pointers inward. When a mismatch is found you have used your one allowed deletion. At that point you have two choices — skip the character at the left pointer and check if the remaining substring is a palindrome, or skip the character at the right pointer and check if that remaining substring is a palindrome. If either option produces a palindrome return true. Write a helper function that performs the standard two-pointer palindrome check on a substring defined by left and right bounds.

Input:
  A string of lowercase letters.

Output:
  True if the string can be made into a palindrome by removing at most one character. False otherwise.

Example:
  Input:  'abca'
  Output: true
  Why:    Remove b to get aca or remove c to get aba — both palindromes.

  Input:  'abc'
  Output: false
  Why:    No single removal produces a palindrome.

Constraints:
  - 1 <= string length <= 100000
  - Consists of lowercase English letters

Hint:
  Write a helper that takes a string and two index bounds and returns true if that portion is a palindrome using two pointers. In the main function apply two pointers from each end. When a mismatch is found call the helper twice — once skipping the left character and once skipping the right character. If either call returns true return true. If you reach the center without a mismatch return true.
*/

const OneSkipPalindrome = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 46 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 37: Mirror List (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 42: Kth Biggest (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 45: One Skip Palindrome (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — OneSkipPalindrome ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const OneSkipPalindrome_rep1 = (s) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — OneSkipPalindrome ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const OneSkipPalindrome_rep2 = (s) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — OneSkipPalindrome ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const OneSkipPalindrome_rep3 = (s) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 45: OneSkipPalindrome
// Complete this BEFORE moving to Day 46
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
// ✅ Feynman checkpoint complete — proceed to Day 46
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 46 — Sorted Two Sum
// Topic: Converging Two Pointers on Sorted Input
// Builds On: Day 15 (two sum) — sorted input lets you skip the hash map entirely
/*
Real World:
  A budgeting tool that finds two expense line items from a sorted list of costs whose total matches a target budget exactly.

Conceptual Explanation:
  Because the array is sorted in ascending order you can exploit that property to avoid a hash map entirely. Place one pointer at the beginning and one at the end. Their sum is either too large, too small, or exactly right. If too large moving the right pointer left will reduce the sum because the array is sorted and smaller values are to the left. If too small moving the left pointer right will increase the sum because larger values are to the right. If exactly right you have found the answer. This converging approach works because the sorted order guarantees which direction to move.

Input:
  A sorted array of integers and a target integer. The result uses one-based indices.

Output:
  An array containing the one-based indices of the two numbers that sum to the target.

Example:
  Input:  [2,7,11,15], target=9
  Output: [1,2]
  Why:    Index 1 value 2 plus index 2 value 7 equals 9.

Constraints:
  - 2 <= array length <= 30000
  - Array sorted in non-decreasing order
  - Exactly one solution exists

Hint:
  Place left at index zero and right at the last index. While left is less than right compute their sum. If the sum equals the target return both indices plus one for one-based indexing. If the sum is greater than the target move right inward. If less than the target move left inward.
*/

const SortedTwoSum = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 47 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 38: Even First (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 43: Merge Blocks (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 46: Sorted Two Sum (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — SortedTwoSum ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SortedTwoSum_rep1 = (numbers, target) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — SortedTwoSum ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SortedTwoSum_rep2 = (numbers, target) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — SortedTwoSum ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const SortedTwoSum_rep3 = (numbers, target) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 46: SortedTwoSum
// Complete this BEFORE moving to Day 47
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
// ✅ Feynman checkpoint complete — proceed to Day 47
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 47 — Triple Zero
// Topic: Fixed Outer Loop Plus Two Pointer Inner Search
// Builds On: Day 46 (converging pointers) — now run it for each fixed element
/*
Real World:
  A financial fraud detection system finding all sets of three transactions that net to exactly zero indicating circular money movement.

Conceptual Explanation:
  Sort the array first. Fix one element at a time using an outer loop. For the remaining elements to the right of the fixed element use the converging two-pointer technique from the previous challenge to find pairs that sum to the negative of the fixed element — because fixed plus pair sum must equal zero. Sorting enables two important things — the two-pointer technique works only on sorted data, and you can skip duplicate values in both the outer loop and the inner pointers to avoid returning duplicate triplets in the result.

Input:
  An array of integers.

Output:
  All unique triplets of values that sum to zero. No duplicate triplets in the result.

Example:
  Input:  [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Why:    Two unique triplets sum to zero.

Constraints:
  - 3 <= array length <= 3000
  - -100000 <= each value <= 100000

Hint:
  Sort the array. Loop through each index as the fixed element skipping duplicate values by comparing to the previous index. For the two-pointer search start one pointer just after the fixed index and one at the end. When a triplet is found add it to results then skip any duplicates on both pointers before continuing. Move pointers based on whether the current sum is too large or too small.
*/

const TripleZero = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 48 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 39: Podium (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 44: Biggest Combo (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 47: Triple Zero (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — TripleZero ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TripleZero_rep1 = (nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — TripleZero ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TripleZero_rep2 = (nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — TripleZero ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TripleZero_rep3 = (nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 47: TripleZero
// Complete this BEFORE moving to Day 48
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
// ✅ Feynman checkpoint complete — proceed to Day 48
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 48 — Max Container
// Topic: Greedy Two Pointer Decision
// Builds On: Day 46 and Day 47 (converging pointers) — now with a greedy move rule
/*
Real World:
  A civil engineering simulation finding which two structural walls can hold the maximum amount of rainwater between them.

Conceptual Explanation:
  The amount of water held between two walls equals their horizontal distance multiplied by the height of the shorter wall — the water can only rise as high as the shorter wall before spilling. Start with pointers at both ends for maximum width. At each step the water amount is fully calculable. To potentially improve the result you must find a taller minimum wall — the only way to do that is to move the pointer pointing to the shorter wall inward. Moving the taller wall's pointer inward can only make things worse because you reduce the width while the minimum height is still bounded by the wall you did not move.

Input:
  An array of non-negative integers where each value represents the height of a wall at that position.

Output:
  The maximum amount of water that can be held between any two walls.

Example:
  Input:  [1,8,6,2,5,4,8,3,7]
  Output: 49
  Why:    Walls at positions 1 and 8 with heights 8 and 7. Width 7 times height 7 equals 49.

Constraints:
  - 2 <= array length <= 100000
  - 0 <= each height <= 100000

Hint:
  Initialize left at zero and right at the last index. Track the maximum water seen. While left is less than right calculate the current water as the distance between pointers times the minimum of both heights. Update the maximum. Move the pointer pointing to the shorter wall inward. Return the maximum.
*/

const MaxContainer = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 49 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 40: Three Groups (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 45: One Skip Palindrome (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 48: Max Container (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — MaxContainer ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MaxContainer_rep1 = (height) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MaxContainer ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MaxContainer_rep2 = (height) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MaxContainer ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MaxContainer_rep3 = (height) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 48: MaxContainer
// Complete this BEFORE moving to Day 49
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
// ✅ Feynman checkpoint complete — proceed to Day 49
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 49 — Remove From End
// Topic: Two Pointers with a Fixed Gap
// Builds On: Day 6 (slow fast pointer) — now on a linked list with a deliberate gap
/*
Real World:
  A task queue manager that removes the Nth most recently added item from a live queue without first knowing the total length.

Conceptual Explanation:
  The trick is to create a gap of exactly n nodes between two pointers. Advance the fast pointer n steps ahead of the slow pointer. Then move both pointers forward together until the fast pointer reaches the end of the list. At that point the slow pointer is positioned at the node immediately before the node that needs to be removed. Using a dummy head node at the start eliminates the special case of removing the first node because the slow pointer will still land before the target.

Input:
  The head of a linked list and a positive integer n.

Output:
  The head of the modified list with the nth node from the end removed.

Example:
  Input:  1→2→3→4→5, n=2
  Output: 1→2→3→5
  Why:    The second from last node, value 4, is removed.

Constraints:
  - 1 <= list length <= 30
  - 1 <= n <= list length
  - 0 <= node values <= 100

Hint:
  Create a dummy node pointing to the head. Set both fast and slow to the dummy. Advance fast n plus one steps. Then advance both until fast reaches null. The slow pointer is now just before the node to remove. Update slow's next pointer to skip the target node. Return the dummy's next.
*/

const RemoveFromEnd = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 50 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 41: Rare First (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 46: Sorted Two Sum (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 49: Remove From End (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — RemoveFromEnd ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RemoveFromEnd_rep1 = (head, n) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — RemoveFromEnd ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RemoveFromEnd_rep2 = (head, n) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — RemoveFromEnd ─────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const RemoveFromEnd_rep3 = (head, n) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 49: RemoveFromEnd
// Complete this BEFORE moving to Day 50
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
// ✅ Feynman checkpoint complete — proceed to Day 50
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 50 — Backspace Compare
// Topic: Stack Simulation
// Builds On: Day 35 (building from back) — simulate a text editor with a stack
/*
Real World:
  A collaborative text editor comparing two users typed sequences accounting for all backspace keystrokes to check whether their final documents are identical.

Conceptual Explanation:
  Simulate what a text editor does when processing each string. Use an array as a stack. Walk through each character — if it is a regular letter push it onto the stack. If it is the backspace character pop the last letter off the stack if the stack is not already empty. When you finish processing a string the stack contains only the characters that survived all the backspaces. Convert it to a string and compare both results.

Input:
  Two strings where the hash character represents a backspace keystroke.

Output:
  True if both strings produce the same final text after all backspaces are processed. False otherwise.

Example:
  Input:  'ab#c', 'ad#c'
  Output: true
  Why:    Both become 'ac' after processing backspaces.

  Input:  'a#c', 'b'
  Output: false
  Why:    First becomes 'c', second stays 'b'.

Constraints:
  - 1 <= each string length <= 200
  - Strings contain only lowercase letters and the hash character

Hint:
  Write a helper function that takes a string and returns the final text after processing backspaces using a stack. Call the helper on both input strings and compare the results.
*/

const BackspaceCompare = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 51 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 42: Kth Biggest (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 47: Triple Zero (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 50: Backspace Compare (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — BackspaceCompare ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BackspaceCompare_rep1 = (s, t) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — BackspaceCompare ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BackspaceCompare_rep2 = (s, t) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — BackspaceCompare ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BackspaceCompare_rep3 = (s, t) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 50: BackspaceCompare
// Complete this BEFORE moving to Day 51
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
// ✅ Feynman checkpoint complete — proceed to Day 51
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 51 — Odd Even Chain
// Topic: Linked List Restructuring with Two Pointers
// Builds On: Day 34 and Day 35 (linked list pointer work) — maintaining two parallel chains
/*
Real World:
  A job scheduler that must separate odd-indexed and even-indexed tasks into two chains while keeping each group in original relative order then run all odd-indexed tasks before even-indexed ones.

Conceptual Explanation:
  Walk through the list once maintaining two separate pointer chains — one collecting odd-indexed nodes and one collecting even-indexed nodes. The first node is odd-indexed, the second is even-indexed, alternating from there. Save the head of the even chain before the walk begins so you can reconnect it after the odd chain is complete. At the end of the walk connect the tail of the odd chain to the saved head of the even chain.

Input:
  The head of a singly linked list.

Output:
  The head of the rearranged list with all odd-indexed nodes first followed by all even-indexed nodes. Relative order within each group is preserved.

Example:
  Input:  1→2→3→4→5
  Output: 1→3→5→2→4
  Why:    Odd-indexed nodes 1,3,5 then even-indexed 2,4.

Constraints:
  - 0 <= list length <= 10000
  - -1000000 <= node values <= 1000000

Hint:
  Handle edge cases of empty or single-node lists first. Save the even head. Set odd to head and even to head's next. While even and even's next both exist set odd's next to even's next, advance odd. Set even's next to odd's next, advance even. After the loop connect odd's next to the saved even head. Return the original head.
*/

const OddEvenChain = (...args) => {
  // your solution here
};

// add your test cases here

// ════════════════════════════════════════════════════════════
//  WEEK 8 — Sliding Window (Days 52–60)
//  Thread: fixed window → variable window → fixed + Set
//          → variable + sum threshold → fixed + frequency map
//          → variable + distinct count → multi-result fixed
//          → validity formula → budget-based window
// ════════════════════════════════════════════════════════════

// ── Repetition 1/3 — OddEvenChain ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const OddEvenChain_rep1 = (head) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — OddEvenChain ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const OddEvenChain_rep2 = (head) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — OddEvenChain ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const OddEvenChain_rep3 = (head) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 51: OddEvenChain
// Complete this BEFORE moving to Day 52
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
// ✅ Feynman checkpoint complete — proceed to Day 52
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 52 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 43: Merge Blocks (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 48: Max Container (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 51: Odd Even Chain (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 52 — Best Window Average
// Topic: Fixed Sliding Window
// Builds On: Day 7 (running state) — now with a fixed-size window that slides
/*
Real World:
  A fitness app finding the k consecutive days with the highest average step count in a user's 30-day log.

Conceptual Explanation:
  Instead of re-summing all k elements from scratch at each position slide the window by subtracting the element leaving on the left and adding the element entering on the right. The sum is maintained incrementally across the entire array in linear total work. Build the initial window sum from the first k elements then slide from there. Track the maximum sum encountered and divide by k at the end.

Input:
  An array of integers and a positive integer k representing the window size.

Output:
  The maximum average value achievable from any contiguous subarray of length exactly k.

Example:
  Input:  [1,12,-5,-6,50,3], k=4
  Output: 12.75
  Why:    The subarray 12,-5,-6,50 sums to 51. 51 divided by 4 is 12.75.

Constraints:
  - 1 <= k <= array length <= 100000
  - -10000 <= each value <= 10000

Hint:
  Compute the sum of the first k elements as the initial window sum. Set this as both the current sum and the max sum. Then walk from index k to the end adding the new element and subtracting the element at index minus k. Update the max sum after each slide. Return the max sum divided by k.
*/

const BestWindowAverage = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 53 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 44: Biggest Combo (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 49: Remove From End (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 52: Best Window Average (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — BestWindowAverage ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BestWindowAverage_rep1 = (nums, k) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — BestWindowAverage ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BestWindowAverage_rep2 = (nums, k) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — BestWindowAverage ─────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const BestWindowAverage_rep3 = (nums, k) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 52: BestWindowAverage
// Complete this BEFORE moving to Day 53
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
// ✅ Feynman checkpoint complete — proceed to Day 53
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 53 — No Repeats
// Topic: Variable Sliding Window Plus Hash Map
// Builds On: Day 52 (sliding window) — now the window size changes based on content
/*
Real World:
  A password strength checker finding the longest possible substring where no character appears twice.

Conceptual Explanation:
  Maintain a window using two pointers — left and right — that expands and contracts based on whether the current window contains any repeating characters. Expand the right pointer freely. Use a map to track the most recent index where each character was seen. When the right pointer reaches a character that already exists within the current window jump the left pointer past the previous occurrence of that character instantly rather than stepping one by one. The window at every moment contains only unique characters and the maximum window size seen is the answer.

Input:
  A string.

Output:
  The length of the longest substring containing no repeating characters.

Example:
  Input:  'abcabcbb'
  Output: 3
  Why:    The substring abc has length 3 with no repeats.

  Input:  'bbbbb'
  Output: 1
  Why:    Every character repeats — best single character.

Constraints:
  - 0 <= string length <= 50000
  - Consists of letters digits symbols and spaces

Hint:
  Create a map to store each character's most recent index. Initialize left to zero and max length to zero. Walk right through every index. If the current character exists in the map and its stored index is at or after left, move left to one past that stored index — this instantly removes the duplicate from the window. Update the map with the current character's index. Update the max length with the current window size. Return the max length.
*/

const NoRepeats = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 54 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 45: One Skip Palindrome (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 50: Backspace Compare (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 53: No Repeats (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — NoRepeats ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const NoRepeats_rep1 = (s) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — NoRepeats ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const NoRepeats_rep2 = (s) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — NoRepeats ─────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const NoRepeats_rep3 = (s) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 53: NoRepeats
// Complete this BEFORE moving to Day 54
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
// ✅ Feynman checkpoint complete — proceed to Day 54
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 54 — Vowel Window
// Topic: Fixed Window Plus Set Membership
// Builds On: Day 52 (fixed window) + Day 16 (Set lookup) — combine both
/*
Real World:
  A speech synthesis engine scanning text to find the k-length window with the most vowels.

Conceptual Explanation:
  Fixed window of size k combined with a Set for instant vowel membership checking. Count the vowels in the first k characters to establish the initial window. Then slide the window one character at a time — subtract one from the count if the character leaving the left side is a vowel and add one if the character entering the right side is a vowel. A Set containing the five vowels allows the membership check in constant time. Track the maximum vowel count across all window positions.

Input:
  A string and an integer k.

Output:
  The maximum number of vowel characters in any contiguous substring of length exactly k.

Example:
  Input:  'abciiidef', k=3
  Output: 3
  Why:    The substring iii contains three vowels.

Constraints:
  - 1 <= k <= string length <= 100000
  - Consists of lowercase English letters

Hint:
  Create a Set containing the five vowels. Count vowels in the first k characters. Slide from index k to the end adding one if the entering character is a vowel and subtracting one if the departing character is a vowel. Track the maximum count. Return it.
*/

const VowelWindow = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 55 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 46: Sorted Two Sum (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 51: Odd Even Chain (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 54: Vowel Window (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — VowelWindow ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const VowelWindow_rep1 = (s, k) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — VowelWindow ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const VowelWindow_rep2 = (s, k) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — VowelWindow ───────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const VowelWindow_rep3 = (s, k) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 54: VowelWindow
// Complete this BEFORE moving to Day 55
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
// ✅ Feynman checkpoint complete — proceed to Day 55
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 55 — Hit the Target
// Topic: Variable Sliding Window with Sum Threshold
// Builds On: Day 53 (variable window) — now you shrink when a condition is MET
/*
Real World:
  A logistics planner finding the smallest group of consecutive shipments that meets a minimum total weight requirement.

Conceptual Explanation:
  Expand the right pointer continuously adding each element to a running sum. When the running sum meets or exceeds the target the window is valid — record its length as a candidate minimum then try to shrink it from the left. Keep shrinking from the left as long as the sum still meets the target because you want the minimum length. This differs from the previous sliding window challenge where you shrink when a condition is violated — here you shrink when the condition is satisfied to find the tightest valid window.

Input:
  A target integer and an array of positive integers.

Output:
  The minimum length of any contiguous subarray whose sum is greater than or equal to the target. Return zero if no such subarray exists.

Example:
  Input:  target=7, [2,3,1,2,4,3]
  Output: 2
  Why:    The subarray 4,3 sums to 7 with only two elements.

Constraints:
  - 1 <= target <= 1 billion
  - 1 <= each value <= 100000
  - 1 <= array length <= 100000

Hint:
  Initialize left to zero, current sum to zero, and minimum length to infinity. Walk right through every index adding to the sum. While the sum is greater than or equal to the target update the minimum length with the current window size then subtract the left element and advance left. After the loop return zero if minimum length is still infinity otherwise return it.
*/

const HittheTarget = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 56 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 47: Triple Zero (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 52: Best Window Average (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 55: Hit the Target (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — HittheTarget ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const HittheTarget_rep1 = (target, nums) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — HittheTarget ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const HittheTarget_rep2 = (target, nums) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — HittheTarget ──────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const HittheTarget_rep3 = (target, nums) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 55: HittheTarget
// Complete this BEFORE moving to Day 56
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
// ✅ Feynman checkpoint complete — proceed to Day 56
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 56 — Scrambled Match
// Topic: Fixed Window Plus Frequency Map Comparison
// Builds On: Day 10 (frequency map) + Day 52 (fixed window) — compare maps as you slide
/*
Real World:
  A genomics tool checking whether any segment of a DNA sequence contains all the base pairs of a target gene in any order.

Conceptual Explanation:
  A permutation of the pattern has exactly the same character frequencies as the pattern itself. Maintain a fixed window the size of the pattern sliding over the target string. Instead of rebuilding the frequency counts from scratch at each position update them incrementally — when a character enters the window on the right increment its count and when a character leaves on the left decrement its count. Track how many characters currently have matching counts between the window and the pattern. When all characters are matched return true.

Input:
  Two strings — a shorter pattern and a longer target.

Output:
  True if any contiguous substring of the target is a permutation of the pattern. False otherwise.

Example:
  Input:  'ab', 'eidbaooo'
  Output: true
  Why:    The substring ba at positions 3 and 4 is a permutation of ab.

Constraints:
  - 1 <= pattern length <= target length <= 10000
  - Both consist of lowercase English letters

Hint:
  Build a frequency map from the pattern. Maintain a window frequency map and a counter tracking how many characters are currently balanced. Slide the window tracking entering and departing characters and updating the balance counter. When the balance counter shows all characters matched return true. Return false after the full traversal.
*/

const ScrambledMatch = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 57 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 48: Max Container (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 53: No Repeats (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 56: Scrambled Match (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — ScrambledMatch ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ScrambledMatch_rep1 = (s1, s2) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — ScrambledMatch ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ScrambledMatch_rep2 = (s1, s2) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — ScrambledMatch ────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const ScrambledMatch_rep3 = (s1, s2) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 56: ScrambledMatch
// Complete this BEFORE moving to Day 57
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
// ✅ Feynman checkpoint complete — proceed to Day 57
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 57 — Two Basket Problem
// Topic: Variable Window Plus Distinct Count Constraint
// Builds On: Day 53 (variable window) — same pattern different shrink trigger
/*
Real World:
  A streaming data processor that can only track two event types at a time in memory — find the longest continuous segment fitting that constraint.

Conceptual Explanation:
  This is the longest subarray containing at most two distinct values problem. Use a map to count how many times each value appears in the current window. Expand the right pointer freely adding each element to the map. When the map has more than two distinct keys the constraint is violated — shrink from the left. To remove a value from the window decrement its count and if the count reaches zero delete the key from the map entirely so the map size accurately reflects how many distinct values remain. Track the maximum window size throughout.

Input:
  An array of integers representing fruit types.

Output:
  The maximum number of fruits collectible in a contiguous sequence using at most two basket types.

Example:
  Input:  [1,2,1]
  Output: 3
  Why:    All three fit in two baskets — types 1 and 2.

  Input:  [0,1,2,2]
  Output: 3
  Why:    Best window is 1,2,2 — two types, three fruits.

Constraints:
  - 1 <= array length <= 100000
  - 0 <= each value < array length

Hint:
  Create an empty map. Initialize left to zero and max length to zero. Walk right through every index. Add the current element to the map incrementing its count. While the map has more than two keys decrement the count of the element at left, delete it from the map if its count reaches zero, and advance left. Update max length with the current window size. Return max length.
*/

const TwoBasketProblem = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 58 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 49: Remove From End (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 54: Vowel Window (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 57: Two Basket Problem (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — TwoBasketProblem ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TwoBasketProblem_rep1 = (fruits) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — TwoBasketProblem ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TwoBasketProblem_rep2 = (fruits) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — TwoBasketProblem ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const TwoBasketProblem_rep3 = (fruits) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 57: TwoBasketProblem
// Complete this BEFORE moving to Day 58
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
// ✅ Feynman checkpoint complete — proceed to Day 58
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 58 — Find All Scrambles
// Topic: Fixed Window Plus Frequency Comparison Multi Result
// Builds On: Day 56 (scrambled match) — same technique now collect all positions
/*
Real World:
  A search engine that highlights every position in a document where a keyword's letters appear scrambled — useful for catching transposition errors.

Conceptual Explanation:
  Structurally identical to the scrambled match challenge. The only difference is instead of returning true on the first match you collect every starting index where the window's frequency map matches the pattern's frequency map. The same incremental update technique applies — add entering characters on the right, remove departing characters on the left, track a balance counter to know when frequencies match.

Input:
  A target string and a pattern string.

Output:
  An array of all starting indices in the target where a permutation of the pattern begins.

Example:
  Input:  'cbaebabacd', 'abc'
  Output: [0,6]
  Why:    Positions 0 and 6 start permutations of abc.

Constraints:
  - 1 <= target and pattern lengths <= 30000
  - Both consist of lowercase English letters

Hint:
  Use the same frequency map and balance counter approach from Day 56. When the balance counter indicates a full match add the current window's start index to a results array. Continue sliding rather than returning immediately. Return the results array after the full traversal.
*/

const FindAllScrambles = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 59 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 50: Backspace Compare (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 55: Hit the Target (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 58: Find All Scrambles (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — FindAllScrambles ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FindAllScrambles_rep1 = (s, p) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — FindAllScrambles ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FindAllScrambles_rep2 = (s, p) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — FindAllScrambles ──────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FindAllScrambles_rep3 = (s, p) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 58: FindAllScrambles
// Complete this BEFORE moving to Day 59
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
// ✅ Feynman checkpoint complete — proceed to Day 59
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 59 — Max Stretch
// Topic: Variable Window Plus Validity Condition
// Builds On: Day 55 (variable window) — now the shrink trigger is a formula
/*
Real World:
  A data compression tool finding the longest run of one character achievable by changing at most K other characters.

Conceptual Explanation:
  The window is valid when the number of characters you would need to replace — which equals the window size minus the count of the most frequent character in the window — does not exceed K. Track the count of the most frequent character seen so far. Expand the right pointer always. When the validity condition is violated shrink the window by moving the left pointer one step right. You never need to decrease the tracked maximum frequency — even if it becomes stale after shrinking it only causes the window to shrink by exactly one step which is correct behavior.

Input:
  A string of uppercase English letters and an integer k representing the maximum replacements allowed.

Output:
  The length of the longest valid substring where at most k characters differ from the most frequent character.

Example:
  Input:  'ABAB', k=2
  Output: 4
  Why:    Replace both Bs or both As — entire string becomes uniform.

  Input:  'AABABBA', k=1
  Output: 4
  Why:    One replacement produces a run of four identical characters.

Constraints:
  - 1 <= string length <= 100000
  - 0 <= k <= string length
  - Consists of uppercase English letters

Hint:
  Track the max frequency of any character seen in the current window. Walk right expanding the window and updating the max frequency count for the current character. If the window size minus the max frequency exceeds k move the left pointer one step right. Update the maximum valid window size at each step. Return the maximum.
*/

const MaxStretch = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 60 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 51: Odd Even Chain (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 56: Scrambled Match (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 59: Max Stretch (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.

// ── Repetition 1/3 — MaxStretch ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MaxStretch_rep1 = (s, k) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — MaxStretch ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MaxStretch_rep2 = (s, k) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — MaxStretch ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const MaxStretch_rep3 = (s, k) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 59: MaxStretch
// Complete this BEFORE moving to Day 60
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
// ✅ Feynman checkpoint complete — proceed to Day 60
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// Day 60 — Flip Budget
// Topic: Variable Window with a Flip Count Budget
// Builds On: Day 59 (validity condition) — same pattern budget equals allowed zero-to-one flips
/*
Real World:
  A network reliability tool finding the longest continuous run of stable connections when allowed to temporarily reroute through at most K unstable nodes.

Conceptual Explanation:
  Think of zeros as characters you are allowed to replace within your budget of K flips. The window is valid when the count of zeros inside it does not exceed K. Expand the right pointer always adding to a zero counter when the entering element is zero. When the zero count exceeds K shrink from the left subtracting from the zero counter when the departing element is zero. The maximum window size at any valid point is the answer. This is the same validity-condition window pattern from the previous challenge applied to binary values.

Input:
  A binary array and an integer k representing the maximum number of zeros that can be flipped to ones.

Output:
  The maximum number of consecutive ones achievable after flipping at most k zeros.

Example:
  Input:  [1,1,1,0,0,0,1,1,1,1,0], k=2
  Output: 6
  Why:    Flipping two zeros produces a run of six ones.

Constraints:
  - 1 <= array length <= 100000
  - Each value is 0 or 1
  - 0 <= k <= array length

Hint:
  Initialize left to zero, zero count to zero, and max length to zero. Walk right through every index. If the current element is zero increment the zero count. While the zero count exceeds k if the element at left is zero decrement the zero count then advance left. Update max length with the current window size. Return max length.
*/

const FlipBudget = (...args) => {
  // your solution here
};

// add your test cases here

// ── Repetition 1/3 — FlipBudget ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FlipBudget_rep1 = (nums, k) => {
  // reconstruct from memory
};

// test your rep1 solution here

// ── Repetition 2/3 — FlipBudget ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FlipBudget_rep2 = (nums, k) => {
  // reconstruct from memory
};

// test your rep2 solution here

// ── Repetition 3/3 — FlipBudget ────────────────────────────────────────
// Solve from scratch. No peeking at the solution above.
// Close all previous attempts before starting.

const FlipBudget_rep3 = (nums, k) => {
  // reconstruct from memory
};

// test your rep3 solution here

// ════════════════════════════════════════════════════════════
// FEYNMAN CHECKPOINT — Day 60: FlipBudget
// Complete this before moving to Month 3
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
// ✅ Month 2 complete
// ════════════════════════════════════════════════════════════

