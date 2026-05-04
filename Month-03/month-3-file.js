// ============================================================
// 90-DAY JAVASCRIPT ALGORITHM CHALLENGE
// MONTH 3 — Linked Lists, Trees, Hash Maps & Dynamic Programming
// Days 61–90 | Difficulty: Medium
// ============================================================
// HOW TO USE:
//   1. Check the revision prompt — complete all revisions first
//   2. Read Real World, Conceptual Explanation, Input, Output,
//      Examples, Constraints, and Hint fully before coding
//   3. Write your solution in the starter function
//   4. Run: node month3_challenges.js
//
// NORAL COMMITMENT:
//   No AI. No Google. MDN and Eloquent JS only.
//   No code examples in this file — concepts only.
// ============================================================

// ── Shared Node Classes ─────────────────────────────────────
// ListNode and TreeNode are defined here for use in problems
// that require linked list or binary tree structures.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// ════════════════════════════════════════════════════════════
//  WEEK 9 — Linked Lists (Days 61–67)
//  Thread: detect loop → find middle → digit-by-digit traversal
//          → dual chain → group rewiring → rotate by position
//          → deep clone with non-linear references
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 61 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 52: Best Window Average (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 57: Two Basket Problem (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 60: Flip Budget (+1 day)
//       File: month2_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 61 — Loop Detector
// Topic: Floyd's Cycle Detection Fast and Slow Pointer
/*
Real World:
  A process monitor that checks whether a background job has entered an infinite loop by detecting if its execution trace revisits a previous state.

Conceptual Explanation:
  Two pointers move through the list at different speeds — one advances one node at a time while the other advances two nodes at a time. If the list has no cycle the fast pointer will reach the end. If a cycle exists the fast pointer eventually laps the slow pointer inside the cycle. Because the fast pointer gains one step on the slow pointer every iteration they must eventually occupy the same node. The moment they point to the same node a cycle is confirmed.

Input:
  The head of a linked list that may or may not contain a cycle.

Output:
  True if the list contains a cycle. False if it terminates.

Example:
  Input:  3→2→0→-4 with tail pointing back to index 1
  Output: true
  Why:    Fast pointer laps slow inside the cycle.

  Input:  Single node with no cycle
  Output: false
  Why:    Fast pointer reaches null.

Constraints:
  - 0 <= list length <= 10000
  - -100000 <= node values <= 100000

Hint:
  Initialize both slow and fast to the head. While fast and fast's next are not null advance slow one step and fast two steps. If slow and fast ever point to the same node return true. If fast reaches null return false.
*/

const LoopDetector = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 62 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 53: No Repeats (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 58: Find All Scrambles (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 61: Loop Detector (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 62 — Find the Middle
// Topic: Fast and Slow Pointer Midpoint
// Builds On: Day 61 (fast slow pointer) — same two pointers different goal
/*
Real World:
  A media player that needs to find the exact midpoint of a dynamically loaded playlist without counting total tracks first.

Conceptual Explanation:
  The same fast and slow pointer technique from the previous challenge serves a different purpose here. Slow advances one step at a time and fast advances two. When fast reaches the last node or null slow is at the middle. For even-length lists there are two middle nodes and this technique naturally lands on the second one because fast runs out of room one step later.

Input:
  The head of a singly linked list.

Output:
  The middle node of the list. If two middles exist return the second one.

Example:
  Input:  1→2→3→4→5
  Output: node with value 3
  Why:    Fast runs to end, slow lands at position 3.

  Input:  1→2→3→4→5→6
  Output: node with value 4
  Why:    Even length — second of two middles.

Constraints:
  - 1 <= list length <= 100

Hint:
  Initialize both slow and fast to head. While fast and fast's next are not null advance slow one step and fast two steps. Return slow.
*/

const FindtheMiddle = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 63 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 54: Vowel Window (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 59: Max Stretch (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 62: Find the Middle (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 63 — Big Number Add
// Topic: Parallel List Traversal Plus Carry Logic
// Builds On: Day 4 (carry logic) + Day 34 (parallel list traversal)
/*
Real World:
  A big-number calculator that handles integers too large to fit in a standard 64-bit number with each digit stored as a separate node.

Conceptual Explanation:
  Walk both lists simultaneously one node at a time. At each step the sum of the two current digits plus any carry from the previous step produces a new digit and a new carry. The new digit is the sum modulo ten and the new carry is whether the sum was ten or greater. Attach each new digit to a result list. Continue until both lists are exhausted. After finishing both lists check whether a final carry of one remains — if so add one more node. Using a dummy head node simplifies building the result list without special-casing the first node.

Input:
  Two non-empty linked lists representing non-negative integers with digits stored in reverse order — least significant digit first.

Output:
  A linked list representing the sum of both numbers also in reverse order.

Example:
  Input:  2→4→3 and 5→6→4
  Output: 7→0→8
  Why:    342 plus 465 equals 807 stored as 7→0→8.

Constraints:
  - 1 <= each list length <= 100
  - 0 <= each node value <= 9
  - No leading zeros except the number zero itself

Hint:
  Create a dummy head for the result. Initialize carry to zero and current to the dummy. While either list has nodes or carry is nonzero compute the sum of the two current values plus carry. The new node value is sum modulo ten and the new carry is the integer part of sum divided by ten. Attach the new node and advance. Return the dummy's next.
*/

const BigNumberAdd = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 64 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 55: Hit the Target (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 60: Flip Budget (+4 days)
//       File: month2_revisions.js
//     → Revision 1/3 — Day 63: Big Number Add (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 64 — Split and Regroup
// Topic: Dual Chain Linked List Restructuring
// Builds On: Day 51 (odd even chain) — same concept more deliberate pointer awareness
/*
Real World:
  A task priority manager that must separate odd-indexed and even-indexed tasks into two chains while keeping each group in its original relative order then run all high-priority tasks first.

Conceptual Explanation:
  Walk through the list once building two separate chains simultaneously. One chain collects nodes at odd index positions and one collects nodes at even positions. The first node is at position one which is odd. Save the head of the even chain before the walk so you can reconnect it to the tail of the odd chain after completing the walk. Alternating the pointer assignments between the two chains as you advance through the list achieves the regrouping in a single pass.

Input:
  The head of a singly linked list.

Output:
  The head of the rearranged list with all odd-indexed nodes first in their original order followed by all even-indexed nodes in their original order.

Example:
  Input:  1→2→3→4→5
  Output: 1→3→5→2→4
  Why:    Positions 1,3,5 then positions 2,4.

Constraints:
  - 0 <= list length <= 10000
  - -1000000 <= node values <= 1000000

Hint:
  Handle empty and single-node edge cases. Save the even head. Set odd to head and even to head's next. While even and even's next both exist redirect odd's next to even's next and advance odd, then redirect even's next to odd's next and advance even. After the loop connect odd's next to the saved even head. Return the original head.
*/

const SplitandRegroup = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 65 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 56: Scrambled Match (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 61: Loop Detector (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 64: Split and Regroup (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 65 — Pair Swap
// Topic: Group Pointer Rewiring with Dummy Head
// Builds On: Day 64 (rewiring) — now rewiring in chunks of two
/*
Real World:
  A card game engine that swaps adjacent card pairs in a player's hand without changing the actual card values.

Conceptual Explanation:
  Use a dummy node before the head to avoid special-casing the first pair. Set a previous pointer to the dummy. While there are at least two nodes remaining after previous identify the first and second nodes of the pair. Redirect previous's next to the second node, the second node's next to the first node, and the first node's next to whatever came after the second node. Then advance previous to the first node — which is now second in position — ready for the next pair. This four-pointer rewiring repeats for every adjacent pair.

Input:
  The head of a singly linked list.

Output:
  The head of the list with every pair of adjacent nodes swapped.

Example:
  Input:  1→2→3→4
  Output: 2→1→4→3
  Why:    Each pair swapped — 1 and 2 swap, 3 and 4 swap.

  Input:  1→2→3
  Output: 2→1→3
  Why:    Only the first pair swaps. Third node has no partner.

Constraints:
  - 0 <= list length <= 100
  - 0 <= node values <= 100

Hint:
  Create a dummy node pointing to head. Set previous to dummy. While previous's next and previous's next's next both exist identify first as previous's next and second as first's next. Wire previous's next to second, first's next to second's next, and second's next to first. Advance previous to first. Repeat. Return dummy's next.
*/

const PairSwap = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 66 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 57: Two Basket Problem (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 62: Find the Middle (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 65: Pair Swap (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 66 — Rotate Chain
// Topic: Find Tail Then Break at New Head
// Builds On: Day 62 (finding a position) + Day 61 (cycle awareness)
/*
Real World:
  A round-robin scheduler that rotates a circular task queue so the kth task from the end becomes the first task.

Conceptual Explanation:
  Find the length of the list and locate the tail node in one pass. Connecting the tail back to the head temporarily forms a cycle. The rotation by k positions is equivalent to breaking the cycle at position length minus k from the start — because rotating right by k is the same as moving the break point k from the end. Handle the case where k is larger than the list length by taking k modulo length. Find the new tail by walking length minus k minus one steps from the head then set the new head to new tail's next and break the cycle.

Input:
  The head of a linked list and a non-negative integer k.

Output:
  The head of the list after rotating it to the right by k positions.

Example:
  Input:  1→2→3→4→5, k=2
  Output: 4→5→1→2→3
  Why:    Last two nodes move to the front.

  Input:  0→1→2, k=4
  Output: 2→0→1
  Why:    4 modulo 3 equals 1 — same as rotating by 1.

Constraints:
  - 0 <= list length <= 500
  - -100 <= node values <= 100
  - 0 <= k <= 2 billion

Hint:
  Walk the list to find the length and tail. If length is one or k modulo length is zero return head unchanged. Set k to k modulo length. Connect tail to head forming a cycle. Walk length minus k minus one steps from head to find the new tail. Set new head to new tail's next. Break the cycle by setting new tail's next to null. Return new head.
*/

const RotateChain = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 67 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 58: Find All Scrambles (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 63: Big Number Add (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 66: Rotate Chain (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 67 — Deep Clone
// Topic: Hash Map Plus Two Pass Linked List Clone
// Builds On: Day 15 (hash map for index mapping) — applied to node references
/*
Real World:
  A document editor that deep-copies a threaded comment chain where each comment also has a related comment pointer that can reference any other comment.

Conceptual Explanation:
  Two passes solve this cleanly. The first pass creates a new node for every original node and stores the mapping from the original node to its new copy in a hash map. No pointers between new nodes are set yet — only the values are copied. The second pass walks the original list again and for each original node uses the map to set the new node's next and random pointers. The map provides instant access to the corresponding new node for any original node reference making the pointer wiring straightforward.

Input:
  The head of a linked list where each node has a value, a next pointer, and a random pointer that can point to any node or null.

Output:
  The head of a completely independent deep copy of the list with all next and random pointers correctly wired to new nodes.

Example:
  Input:  List of two nodes with cross-references
  Output: A new list with identical structure but entirely new node objects
  Why:    No original node objects appear in the copy.

Constraints:
  - 0 <= list length <= 1000
  - -10000 <= node values <= 10000
  - Random pointers point to nodes in the list or null

Hint:
  First pass — walk the original list and for each node create a new node with the same value and store original-to-copy in a map. Second pass — walk the original list again. For each original node set the copy's next to the map entry for original's next and set the copy's random to the map entry for original's random. Null entries in the map return null which is correct. Return the map entry for the original head.
*/

const DeepClone = (...args) => {
  // your solution here
};

// add your test cases here

// ════════════════════════════════════════════════════════════
//  WEEK 10 — Trees (Days 68–74)
//  Thread: DFS traversal → mirror check → BFS level order
//          → BST validation with bounds → rightmost per level
//          → DFS backtracking → BST-guided LCA
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 68 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 59: Max Stretch (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 64: Split and Regroup (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 67: Deep Clone (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 68 — Inorder Walk
// Topic: DFS Tree Traversal
// Builds On: Day 36 (tree recursion) — now collecting values in a specific order
/*
Real World:
  A file explorer that lists all files in a directory tree in sorted order — in a Binary Search Tree inorder traversal visits nodes in ascending order.

Conceptual Explanation:
  Inorder traversal visits the left subtree completely, then the current node, then the right subtree. This recursive structure means for any node you fully explore everything to its left before recording the node itself and everything to its right comes after. The result is a flat sequence of values in left-root-right order. The iterative version achieves the same result using an explicit stack to simulate the recursion — push left nodes until reaching null, pop and collect, then move to the right child.

Input:
  The root node of a binary tree.

Output:
  An array of node values in inorder — left subtree, root, right subtree — sequence.

Example:
  Input:  [1,null,2,3]
  Output: [1,3,2]
  Why:    Node 1 has no left child. Its right child 2 has left child 3.

Constraints:
  - 0 <= number of nodes <= 100
  - -100 <= node values <= 100

Hint:
  Recursive approach — if the node is null return. Recursively process the left subtree, then push the current node's value to the result, then recursively process the right subtree. Iterative approach — use a stack and a current pointer starting at root. While current is not null or the stack is not empty push current and move left. When current is null pop from the stack, collect the value, and move to the right child.
*/

const InorderWalk = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 69 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 60: Flip Budget (+9 days)
//       File: month2_revisions.js
//     → Revision 2/3 — Day 65: Pair Swap (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 68: Inorder Walk (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 69 — Mirror Check
// Topic: Simultaneous DFS on Two Subtrees
// Builds On: Day 68 (DFS) — now traversing two branches simultaneously
/*
Real World:
  A UI layout validator checking whether a component tree renders symmetrically across a central axis.

Conceptual Explanation:
  A tree is symmetric if its left and right subtrees are mirror images of each other. Write a helper that checks whether two subtrees are mirrors. Two subtrees are mirrors when both are null, or both are non-null with equal root values and the left subtree of one is a mirror of the right subtree of the other and vice versa. The outer pair check and the inner pair check both happen recursively.

Input:
  The root node of a binary tree.

Output:
  True if the tree is symmetric around its center axis. False otherwise.

Example:
  Input:  [1,2,2,3,4,4,3]
  Output: true
  Why:    Left and right subtrees are perfect mirrors.

  Input:  [1,2,2,null,3,null,3]
  Output: false
  Why:    Left subtree has a right child but right subtree has only a right child too — not mirrored.

Constraints:
  - 1 <= number of nodes <= 1000
  - -100 <= node values <= 100

Hint:
  Write a helper taking two nodes — left and right. If both are null return true. If either is null return false. If their values differ return false. Recursively check whether left's left mirrors right's right and left's right mirrors right's left — both must be true. Call the helper with root's left and root's right from the main function.
*/

const MirrorCheck = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 70 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 61: Loop Detector (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 66: Rotate Chain (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 69: Mirror Check (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 70 — Floor by Floor
// Topic: BFS with a Queue
// Builds On: Day 36 and Day 68 (tree traversal) — now level by level instead of depth first
/*
Real World:
  An org chart tool printing all employees level by level — the CEO first then all direct reports then their reports.

Conceptual Explanation:
  Breadth-first search processes all nodes at the current depth before moving to the next. Use a queue — an array where elements are added to the back and removed from the front. Start with the root in the queue. At the beginning of processing each level record the current queue length — that tells you exactly how many nodes belong to this level. Process exactly that many nodes, collect their values, and add their children to the back of the queue for the next level. The level-size snapshot is what separates levels correctly.

Input:
  The root node of a binary tree.

Output:
  An array of arrays where each inner array contains the node values at that depth level from left to right.

Example:
  Input:  [3,9,20,null,null,15,7]
  Output: [[3],[9,20],[15,7]]
  Why:    Three levels processed separately.

Constraints:
  - 0 <= number of nodes <= 2000
  - -1000 <= node values <= 1000

Hint:
  If root is null return an empty array. Initialize the queue with the root. While the queue is not empty capture the current queue length as the level size. Create an empty array for this level. Loop exactly level-size times removing from the front of the queue collecting values and pushing children to the back. After the inner loop push the level array to the result. Return the result.
*/

const FloorbyFloor = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 71 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 62: Find the Middle (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 67: Deep Clone (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 70: Floor by Floor (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 71 — Valid BST
// Topic: DFS with Min Max Bounds
// Builds On: Day 68 and Day 70 (tree traversal) — now carrying constraints down the tree
/*
Real World:
  A configuration management tool validating that a hierarchical settings tree maintains correct priority ordering throughout — not just between a parent and its immediate child.

Conceptual Explanation:
  Comparing each node only to its direct parent is insufficient. A node deep in the right subtree must be greater than all of its ancestors not just its parent. The solution passes valid ranges down the tree recursively. When descending into a left subtree the current node's value becomes the new upper bound — everything in the left subtree must be less than it. When descending into a right subtree the current node's value becomes the new lower bound. Both bounds tighten as you go deeper.

Input:
  The root node of a binary tree.

Output:
  True if the tree is a valid Binary Search Tree where every left subtree contains only values less than the node and every right subtree contains only values greater. False otherwise.

Example:
  Input:  [2,1,3]
  Output: true
  Why:    1 is left of 2, 3 is right of 2. All bounds satisfied.

  Input:  [5,1,4,null,null,3,6]
  Output: false
  Why:    4 is in the right subtree of 5 but 4 is less than 5.

Constraints:
  - 1 <= number of nodes <= 10000
  - -2 billion <= node values <= 2 billion

Hint:
  Write a recursive helper taking a node, a minimum bound, and a maximum bound. If the node is null return true — the base case. If the node's value is not strictly greater than min or not strictly less than max return false. Recurse left passing the same min and the current value as the new max. Recurse right passing the current value as the new min and the same max. Both recursive calls must return true. Start with negative and positive infinity as bounds.
*/

const ValidBST = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 72 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 63: Big Number Add (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 68: Inorder Walk (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 71: Valid BST (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 72 — Right Side View
// Topic: BFS Capture Last Node Per Level
// Builds On: Day 70 (BFS level order) — one small addition: capture the last of each level
/*
Real World:
  A business reporting tool that shows only the rightmost data point at each depth level of a decision tree.

Conceptual Explanation:
  Perform the same level-order BFS from the previous challenge. The only addition is that after processing all nodes in a level record the last value collected from that level. The last node processed at each depth is the rightmost visible node when viewing the tree from the right side. One extra line added to the level processing loop compared to Day 70.

Input:
  The root node of a binary tree.

Output:
  An array of values representing the rightmost visible node at each depth level from top to bottom.

Example:
  Input:  [1,2,3,null,5,null,4]
  Output: [1,3,4]
  Why:    Rightmost at each level — 1 at depth 0, 3 at depth 1, 4 at depth 2.

Constraints:
  - 0 <= number of nodes <= 100
  - -100 <= node values <= 100

Hint:
  Use the same BFS level-order structure from Day 70. After collecting all values for a level add the last value in that level's collection to the result array. Return the result array after all levels are processed.
*/

const RightSideView = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 73 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 64: Split and Regroup (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 69: Mirror Check (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 72: Right Side View (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 73 — All Root Paths
// Topic: DFS Backtracking
// Builds On: Day 68 (DFS) — now tracking the full path and backtracking on return
/*
Real World:
  A route planning app that finds every possible path from a starting city to a destination where the cumulative distance equals exactly a target.

Conceptual Explanation:
  Depth-first search carries two pieces of state — the current path of node values and the remaining sum needed. At every node add the current value to the path and subtract it from the remaining sum. When you reach a leaf node check whether the remaining sum is exactly zero — if so the current path is a valid solution and a copy of it is added to the results. After processing both children of any node remove the current value from the path before returning to the parent. This removal is backtracking — it ensures the path only ever reflects nodes on the current branch being explored.

Input:
  The root of a binary tree and a target sum integer.

Output:
  All root-to-leaf paths where the sum of node values along the path equals the target sum.

Example:
  Input:  Tree with root 5 and target 22
  Output: [[5,4,11,2],[5,8,4,5]]
  Why:    Two paths sum to 22.

Constraints:
  - 0 <= number of nodes <= 5000
  - -1000 <= node values <= 1000
  - -1000 <= target sum <= 1000

Hint:
  Write a recursive helper taking a node, the remaining sum, the current path array, and the results array. If the node is null return. Push the current value to the path and subtract it from remaining. If the node is a leaf and remaining is zero push a copy of the path to results. Recurse into the left child then the right child. Pop the current value from the path before returning — this is the backtracking step.
*/

const AllRootPaths = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 74 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 65: Pair Swap (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 70: Floor by Floor (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 73: All Root Paths (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 74 — Common Manager
// Topic: BST Properties for Efficient LCA
// Builds On: Day 71 (BST validation with bounds) — now using the BST property for navigation
/*
Real World:
  An org chart tool finding the lowest-level manager who has authority over two specific employees — the most relevant shared supervisor.

Conceptual Explanation:
  In a Binary Search Tree the structure tells you exactly where to search. If both target values are less than the current node's value both targets must be in the left subtree — recurse left. If both are greater both are in the right subtree — recurse right. If they split — one is smaller and one is larger than the current node — or if one of them equals the current node then the current node is the lowest common ancestor. No need to explore both subtrees at any step.

Input:
  The root of a BST and two target values p and q that both exist in the tree.

Output:
  The value of the lowest common ancestor node — the deepest node that has both targets as descendants where a node counts as a descendant of itself.

Example:
  Input:  BST with values 0-9, p=2, q=8
  Output: 6
  Why:    6 is the root and both 2 and 8 fall on different sides.

  Input:  Same BST, p=2, q=4
  Output: 2
  Why:    Node 2 is an ancestor of 4 so 2 is the LCA.

Constraints:
  - 2 <= number of nodes <= 100000
  - -1 billion <= node values <= 1 billion
  - Both p and q exist in the tree and are distinct

Hint:
  At the current node compare both target values to the current value. If both are less recurse into the left subtree. If both are greater recurse into the right subtree. Otherwise the current node is the answer — return it. This works because any split or equality with the current node means the current node is the meeting point of the two paths.
*/

const CommonManager = (...args) => {
  // your solution here
};

// add your test cases here

// ════════════════════════════════════════════════════════════
//  WEEK 11 — Hash Maps Advanced (Days 75–81)
//  Thread: sorted-key grouping → bucket sort → prefix sum in map
//          → Set sequence building → matrix serialization
//          → prefix sum + modulo → generalized K-distinct window
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 75 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 66: Rotate Chain (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 71: Valid BST (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 74: Common Manager (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 75 — Anagram Groups
// Topic: Hash Map Keyed by Sorted String
// Builds On: Day 10 (anagram detection) — now grouping many at once
/*
Real World:
  A plagiarism detection tool grouping submitted essays that use the exact same word set in different orders.

Conceptual Explanation:
  Two words are anagrams if and only if their sorted characters are identical. Sorting a word produces a canonical form that all its anagrams share. Use a map where each key is a sorted word and each value is an array of all original words that sort to that key. Walk through every word, sort its characters to produce the key, and push the original word into the map at that key. The map groups anagrams automatically.

Input:
  An array of strings.

Output:
  An array of groups where each group contains all strings that are anagrams of each other.

Example:
  Input:  ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  Why:    Three groups — one unique, one pair, one triple.

Constraints:
  - 1 <= array length <= 10000
  - 0 <= each string length <= 100
  - Strings consist of lowercase English letters

Hint:
  Create an empty map. Walk every string. Sort its characters and use the result as the map key. If the key does not exist initialize it with an empty array. Push the original string to that key's array. Return all the map values as the result.
*/

const AnagramGroups = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 76 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 67: Deep Clone (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 72: Right Side View (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 75: Anagram Groups (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 76 — Top K Frequent
// Topic: Frequency Map Plus Bucket Sort
// Builds On: Day 18 (frequency map) + Day 38 (bucket thinking)
/*
Real World:
  A social media trending engine surfacing the K most mentioned hashtags in the past hour from millions of posts.

Conceptual Explanation:
  First build a frequency map counting how many times each value appears. To find the top K most frequent values efficiently without a full sort use bucket sort — create an array of n plus one buckets indexed by frequency where n is the input length. Place each unique value in the bucket corresponding to its frequency. Then walk the buckets from the highest frequency downward collecting values until you have K of them. This achieves linear time because no comparison-based sorting is used.

Input:
  An array of integers and an integer k.

Output:
  The k most frequently occurring elements in any order.

Example:
  Input:  [1,1,1,2,2,3], k=2
  Output: [1,2]
  Why:    1 appears three times, 2 appears twice — the top two.

Constraints:
  - 1 <= array length <= 100000
  - k is always valid — between 1 and the number of unique elements
  - The answer is unique

Hint:
  Build a frequency map. Create an array of empty arrays with length equal to the input length plus one. For each unique value in the frequency map push it into the bucket at the index equal to its frequency. Walk the bucket array from the last index downward collecting values into a result until the result has k elements. Return the result.
*/

const TopKFrequent = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 77 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 68: Inorder Walk (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 73: All Root Paths (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 76: Top K Frequent (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 77 — Sum to K
// Topic: Prefix Sum Stored in Hash Map
// Builds On: Day 2 (prefix sum concept) + Day 15 (complement lookup)
/*
Real World:
  A financial audit system counting how many consecutive date ranges within a fiscal year show a net cash flow of exactly K.

Conceptual Explanation:
  Walk the array maintaining a running prefix sum. At every position the sum of any subarray ending here equals the current prefix sum minus a previous prefix sum. You want that difference to equal k — which means you want to find how many previous prefix sums equal the current prefix sum minus k. Store every prefix sum seen so far in a map along with how many times it has occurred. Before storing the current prefix sum look up how many times current minus k has already appeared — that count is the number of valid subarrays ending at this position.

Input:
  An array of integers and an integer k.

Output:
  The total count of contiguous subarrays whose elements sum to exactly k.

Example:
  Input:  [1,1,1], k=2
  Output: 2
  Why:    Positions 0-1 and positions 1-2 both sum to 2.

  Input:  [1,2,3], k=3
  Output: 2
  Why:    The subarray 3 alone and the subarray 1,2 both sum to 3.

Constraints:
  - 1 <= array length <= 20000
  - -1000 <= each value <= 1000
  - -1 billion <= k <= 1 billion

Hint:
  Initialize a map with the entry zero mapped to one — representing the empty prefix. Initialize prefix sum and count both to zero. Walk the array adding each element to the prefix sum. Look up how many times prefix sum minus k appears in the map and add that to count. Then increment the map entry for the current prefix sum. Return count after the full traversal.
*/

const SumtoK = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 78 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 69: Mirror Check (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 74: Common Manager (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 77: Sum to K (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 78 — Longest Consecutive Run
// Topic: Hash Set Plus Sequence Building
// Builds On: Day 16 (Set for existence) + Day 24 (streak counting)
/*
Real World:
  A streaming platform finding the longest uninterrupted run of episode numbers a user has watched.

Conceptual Explanation:
  Put all values into a Set for constant-time existence checking. Then walk through every unique value in the Set. For each value only begin counting a sequence if that value minus one does not exist in the Set — this confirms it is the start of a sequence rather than the middle. From a confirmed start count forward checking whether the next consecutive value exists in the Set. Track the maximum sequence length found. Each value is visited at most twice across all sequence building so the total work remains linear.

Input:
  An unsorted array of integers.

Output:
  The length of the longest consecutive integer sequence present in the array.

Example:
  Input:  [100,4,200,1,3,2]
  Output: 4
  Why:    The sequence 1,2,3,4 has length four.

Constraints:
  - 0 <= array length <= 100000
  - -1 billion <= each value <= 1 billion

Hint:
  Create a Set from the array. Initialize max length to zero. Walk every number in the Set. If the number minus one is not in the Set it is a sequence start. Count forward from it by checking whether the next integer exists in the Set and incrementing a streak counter. Update max length when the streak ends. Return max length.
*/

const LongestConsecutiveRun = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 79 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 70: Floor by Floor (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 75: Anagram Groups (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 78: Longest Consecutive Run (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 79 — Row Column Match
// Topic: Matrix Serialization Plus Hash Map
// Builds On: Day 29 (serialize to string) + Day 10 (frequency map)
/*
Real World:
  A spreadsheet quality tool that flags rows and columns containing identical data sequences — indicating potential duplicated or transposed data entry errors.

Conceptual Explanation:
  Serialize each row as a single string by joining its values with a separator. Store the serialized form of every row in a map counting how many rows produce each serialized form. Then serialize each column the same way by collecting values down each column index. Look up each serialized column in the row map. Every matching entry in the map contributes its count to the total number of matching row-column pairs.

Input:
  A square matrix of integers — n rows and n columns.

Output:
  The number of pairs of a row index r and a column index c where the row and column contain identical sequences of values.

Example:
  Input:  [[3,2,1],[1,7,6],[2,7,7]]
  Output: 1
  Why:    Row 2 matches Column 1 — both contain 2,7,7.

Constraints:
  - n equals grid row count equals grid column count
  - 1 <= n <= 200
  - 1 <= each value <= 100000

Hint:
  Build a map by serializing each row as its values joined by a comma and mapping each serialized form to its count. Walk each column index from zero to n minus one. Build the column's serialized form by collecting the value at that column index for each row. Look up the serialized column in the map and add the count to the result. Return the result.
*/

const RowColumnMatch = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 80 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 71: Valid BST (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 76: Top K Frequent (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 79: Row Column Match (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 80 — Divisible Range
// Topic: Prefix Sum Plus Modulo Plus Hash Map
// Builds On: Day 77 (prefix sum in map) — now checking for equal remainders
/*
Real World:
  A payroll system checking whether any consecutive range of daily wages sums to an exact multiple of the weekly pay period.

Conceptual Explanation:
  Two prefix sums that share the same remainder when divided by k means the subarray between their positions sums to a multiple of k. Walk the array maintaining a running prefix sum and take its remainder modulo k at each step. Store the first index where each remainder was seen in a map. If the current remainder has been seen before and the gap between the current index and the stored index is at least two that subarray is divisible by k and has the required minimum length. Initialize the map with remainder zero at index negative one to handle subarrays starting from the beginning.

Input:
  An array of non-negative integers and a non-negative integer k.

Output:
  True if there exists a contiguous subarray of length at least two whose sum is a multiple of k. False otherwise.

Example:
  Input:  [23,2,4,6,7], k=6
  Output: true
  Why:    The subarray 2,4 sums to 6 which is a multiple of 6.

Constraints:
  - 1 <= array length <= 100000
  - 0 <= each value <= 1 billion
  - 0 <= k <= 1 billion

Hint:
  Initialize a map with zero mapped to negative one. Initialize prefix sum to zero. Walk every index adding to prefix sum and computing the remainder as prefix sum modulo k. If this remainder exists in the map and the difference between the current index and the stored index is at least two return true. Only store the remainder in the map if it is not already there — you want the earliest occurrence to maximize the gap. Return false after the full traversal.
*/

const DivisibleRange = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 81 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 72: Right Side View (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 77: Sum to K (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 80: Divisible Range (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 81 — K Distinct Window
// Topic: Sliding Window Plus Distinct Count in Map
// Builds On: Day 57 (two basket problem) — generalized to K distinct values
/*
Real World:
  A language analysis tool finding the longest passage of text using at most K unique characters — useful for detecting writing style patterns.

Conceptual Explanation:
  A direct generalization of the two basket problem where the constraint was at most two distinct values. Now the constraint is at most K distinct values. Use a map tracking frequency counts of values in the current window. Expand the right pointer freely. When the number of distinct keys in the map exceeds K shrink from the left — decrement the count of the departing element and remove it from the map entirely when its count reaches zero so the map size accurately reflects the number of distinct values currently in the window. Track the maximum valid window size.

Input:
  A string and an integer k.

Output:
  The length of the longest substring containing at most k distinct characters.

Example:
  Input:  'eceba', k=2
  Output: 3
  Why:    The substring ece contains exactly 2 distinct characters.

  Input:  'aa', k=1
  Output: 2
  Why:    Both characters are the same — fits within one distinct.

Constraints:
  - 1 <= string length <= 50000
  - 0 <= k <= 50

Hint:
  Create an empty map. Initialize left to zero and max length to zero. Walk right through every character. Add it to the map incrementing its count. While the map has more than k keys decrement the count of the character at left and if that count reaches zero delete it from the map, then advance left. Update max length with the current window size. Return max length.
*/

const KDistinctWindow = (...args) => {
  // your solution here
};

// add your test cases here

// ════════════════════════════════════════════════════════════
//  WEEK 12 — Dynamic Programming Introduction (Days 82–90)
//  Thread: 1D two-variable DP → adjacent constraint → reachability
//          → 2D grid DP → unbounded knapsack → 2D string DP
//          → two-state tracking → validity checks → word boundary scan
// ════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 82 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 73: All Root Paths (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 78: Longest Consecutive Run (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 81: K Distinct Window (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 82 — Cheapest Path Up
// Topic: Bottom Up DP with Two Variables
// Builds On: Day 33 (step counter shape) — same structure now with costs
/*
Real World:
  A delivery route optimizer finding the minimum cost path through a sequence of stops where you can skip one stop at a time and each stop has a toll fee.

Conceptual Explanation:
  At every step you have two choices — step up from the previous position paying its cost, or step up from two positions back paying that cost. The minimum cost to reach any step is the minimum of those two options. Because each step only depends on the two steps before it you need only two variables rather than a full array. Build up from the base cases iteratively updating the two variables as you progress.

Input:
  An array of non-negative integers where each value is the cost to leave that step.

Output:
  The minimum total cost to reach the top — the position just past the last step. You may start from index zero or index one.

Example:
  Input:  [10,15,20]
  Output: 15
  Why:    Start at index 1 cost 15, jump two to the top.

  Input:  [1,100,1,1,1,100,1,1,100,1]
  Output: 6
  Why:    Optimal path costs 6 total.

Constraints:
  - 2 <= array length <= 1000
  - 0 <= each cost <= 999

Hint:
  Initialize two variables for the cost to reach index zero and the cost to reach index one both equal to their respective array values. Walk from index two to the end. At each step the new cost is the current array value plus the minimum of the two previous costs. Shift the variables forward. The answer is the minimum of the final two variable values.
*/

const CheapestPathUp = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 83 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 74: Common Manager (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 79: Row Column Match (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 82: Cheapest Path Up (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 83 — Max Haul
// Topic: Linear DP with Adjacent Constraint
// Builds On: Day 82 (two variable DP) — same pattern different constraint
/*
Real World:
  A sales commission planner maximizing total commissions when scheduling does not allow booking two consecutive client calls.

Conceptual Explanation:
  At every position you choose to either include it — adding its value to the best result from two positions back — or exclude it — carrying forward the best result from one position back. The adjacency constraint means you can never include two consecutive positions. With only two variables tracking the best result one step back and two steps back you can compute the optimal answer in a single forward pass without storing the full history.

Input:
  An array of non-negative integers representing values at each position.

Output:
  The maximum sum achievable when no two chosen elements are adjacent.

Example:
  Input:  [1,2,3,1]
  Output: 4
  Why:    Take index 0 value 1 and index 2 value 3.

Constraints:
  - 1 <= array length <= 100
  - 0 <= each value <= 400

Hint:
  Initialize prev2 to the first element and prev1 to the maximum of the first two elements. Walk from index two to the end. At each step current equals the maximum of prev1 and prev2 plus the current value. Shift prev2 to prev1 and prev1 to current. Return prev1 after the loop.
*/

const MaxHaul = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 84 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 75: Anagram Groups (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 80: Divisible Range (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 83: Max Haul (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 84 — Can You Reach End
// Topic: Greedy Reachability Tracking
// Builds On: Day 24 (tracking a running max) — now the max is a reachability frontier
/*
Real World:
  A network packet routing simulation checking whether data can travel from a source to a destination when each node specifies its maximum forward hop range.

Conceptual Explanation:
  Track the furthest index reachable at any point as you walk forward. At every position the furthest reachable index is the maximum of the current furthest and the current index plus the value at that index. If you ever reach a position that exceeds the current furthest reachable index you are stuck — that position is unreachable and so is everything beyond it. If you reach the last index without getting stuck the destination is reachable.

Input:
  An array of non-negative integers where each value represents the maximum jump length from that position.

Output:
  True if it is possible to reach the last index starting from index zero. False otherwise.

Example:
  Input:  [2,3,1,1,4]
  Output: true
  Why:    Multiple paths reach the end.

  Input:  [3,2,1,0,4]
  Output: false
  Why:    Every path leads to index 3 whose value is zero — stuck.

Constraints:
  - 1 <= array length <= 10000
  - 0 <= each value <= 100000

Hint:
  Initialize max reach to zero. Walk every index. If the current index exceeds max reach return false — it is unreachable. Update max reach to the maximum of max reach and current index plus the current value. If you complete the loop return true.
*/

const CanYouReachEnd = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 85 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 76: Top K Frequent (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 81: K Distinct Window (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 84: Can You Reach End (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 85 — Grid Routes
// Topic: 2D DP Grid
// Builds On: Day 82 and Day 83 (1D DP) — now the table has two dimensions
/*
Real World:
  A warehouse robot counting all valid routes from the top-left corner to the bottom-right corner of a grid when it can only move right or down.

Conceptual Explanation:
  Every cell in the grid can only be reached from the cell directly above it or the cell directly to its left. The number of ways to reach any cell is therefore the sum of the ways to reach those two source cells. The entire top row has exactly one way to reach each cell — move right from the start. The entire left column has exactly one way to reach each cell — move down from the start. Every other cell follows the addition rule. Build the grid row by row.

Input:
  Two integers m and n representing the number of rows and columns in the grid.

Output:
  The number of unique paths from the top-left corner to the bottom-right corner.

Example:
  Input:  m=3, n=7
  Output: 28
  Why:    28 unique paths exist.

  Input:  m=3, n=2
  Output: 3
  Why:    Three paths: right-down-down, down-right-down, down-down-right.

Constraints:
  - 1 <= m, n <= 100

Hint:
  Create a two-dimensional array of size m by n filled with ones. Walk from row one to m minus one and column one to n minus one. At each cell set its value to the sum of the cell above and the cell to the left. Return the value at the bottom-right corner.
*/

const GridRoutes = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 86 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 77: Sum to K (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 82: Cheapest Path Up (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 85: Grid Routes (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 86 — Minimum Coins
// Topic: Unbounded Knapsack DP
// Builds On: Day 82 (build a dp array) — now with an inner loop over coin choices
/*
Real World:
  A payment terminal calculating the fewest number of currency denominations needed to make exact change.

Conceptual Explanation:
  Build a one-dimensional table where each index represents an amount and each value represents the minimum coins needed to make that amount. The table starts with infinity everywhere except index zero which is zero — zero coins make zero amount. For each amount from one to the target try every coin denomination. If a coin's value is at most the current amount the current entry can be improved by taking one more coin than whatever was needed for the remaining amount. The final answer is whatever is stored at the target amount.

Input:
  An array of coin denominations and a target amount.

Output:
  The minimum number of coins needed to reach the exact target amount. Return -1 if it is impossible.

Example:
  Input:  [1,5,10,25], amount=36
  Output: 3
  Why:    25 plus 10 plus 1 equals 36.

Constraints:
  - 1 <= number of denominations <= 12
  - 0 <= target amount <= 10000

Hint:
  Create a table of size amount plus one filled with infinity. Set index zero to zero. Walk every amount from one to the target. For every coin denomination if the coin value is at most the current amount update the current table entry to the minimum of its current value and one plus the entry at current amount minus the coin value. After filling the table return the entry at the target amount or negative one if it is still infinity.
*/

const MinimumCoins = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 87 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 78: Longest Consecutive Run (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 83: Max Haul (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 86: Minimum Coins (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 87 — Shared Story
// Topic: 2D DP on Two Strings
// Builds On: Day 85 (2D DP grid) — now rows and columns represent characters from two strings
/*
Real World:
  A version control diffing tool measuring how similar two file versions are by finding the length of their longest shared edit sequence.

Conceptual Explanation:
  Build a two-dimensional table where the row index represents a position in the first string and the column index represents a position in the second string. Each cell stores the length of the longest common subsequence of the prefixes ending at those positions. When the characters at the current positions in both strings match the cell value is one more than the value diagonally up-left. When they do not match the cell value is the maximum of the cell above and the cell to the left — taking the best result from ignoring one character in either string.

Input:
  Two strings.

Output:
  The length of the longest subsequence present in both strings in the same relative order.

Example:
  Input:  'abcde', 'ace'
  Output: 3
  Why:    The subsequence ace appears in both strings in order.

  Input:  'abc', 'def'
  Output: 0
  Why:    No characters in common.

Constraints:
  - 1 <= each string length <= 1000
  - Both consist of lowercase English letters

Hint:
  Create a table of size m plus one by n plus one filled with zeros where m and n are the string lengths. Walk row one to m and column one to n. If the characters at position i minus one in the first string and j minus one in the second string match set the cell to one plus the diagonal cell. Otherwise set it to the maximum of the cell above and the cell to the left. Return the bottom-right cell value.
*/

const SharedStory = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 88 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 79: Row Column Match (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 84: Can You Reach End (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 87: Shared Story (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 88 — Max Product Stretch
// Topic: DP Tracking Two State Variables
// Builds On: Day 7 (Kadane's two-variable DP) — now tracking both minimum and maximum
/*
Real World:
  A quantitative finance tool finding the most profitable consecutive stretch of multiplied returns accounting for the fact that two negative periods can multiply into a large positive gain.

Conceptual Explanation:
  Unlike maximum sum where only the running maximum matters here a negative running product can become the running maximum when multiplied by another negative value. You must therefore track both the maximum and minimum product ending at each position. When processing a new element the new maximum might come from multiplying the previous maximum by a positive number or multiplying the previous minimum by a negative number. The same logic applies to the new minimum. Update a global maximum at every step.

Input:
  An array of integers.

Output:
  The largest product achievable from any contiguous subarray.

Example:
  Input:  [2,3,-2,4]
  Output: 6
  Why:    The subarray 2,3 has product 6.

  Input:  [-2,3,-4]
  Output: 24
  Why:    The full array product: -2 times 3 times -4 equals 24.

Constraints:
  - 1 <= array length <= 20000
  - -10 <= each value <= 10

Hint:
  Initialize current max, current min, and global max all to the first element. Walk from the second element onward. At each step temporarily save the current max. Set the new current max to the maximum of the current element alone, current element times saved current max, and current element times current min. Set the new current min to the minimum of the same three options. Update the global max with the new current max. Return the global max.
*/

const MaxProductStretch = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 89 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 80: Divisible Range (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 85: Grid Routes (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 88: Max Product Stretch (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 89 — Decode Ways
// Topic: Linear DP with Validity Checks
// Builds On: Day 33 (step counter shape) — same one-or-two step look-back now with validity constraints
/*
Real World:
  A messaging app that encodes notifications as digit strings where each letter maps to a number from one to twenty-six. Count how many ways the encoded string can be interpreted.

Conceptual Explanation:
  Build a table where each index represents the number of ways to decode the string up to that position. The empty prefix has exactly one way — do nothing. For each position check two things independently. First whether the single digit at this position is valid — any digit from one to nine is a valid single-character code, but zero alone is never valid. Second whether the two-digit number ending at this position is valid — it must fall between ten and twenty-six. Each valid option adds the count from the appropriate earlier position to the current one.

Input:
  A string of digit characters.

Output:
  The number of distinct ways to decode the string. Return zero if no valid decoding exists.

Example:
  Input:  '12'
  Output: 2
  Why:    Decode as 1,2 meaning AB or as 12 meaning L.

  Input:  '226'
  Output: 3
  Why:    BBF, VF, or BZ.

  Input:  '06'
  Output: 0
  Why:    Zero alone is never a valid code.

Constraints:
  - 1 <= string length <= 100
  - String contains only digit characters

Hint:
  Create a table of length n plus one initialized to zero. Set index zero to one. Set index one to one if the first character is not zero, otherwise zero. Walk from index two to n. If the single digit at index i minus one is not zero add the value at i minus one to the current cell. If the two-digit number formed by indices i minus two and i minus one falls between ten and twenty-six inclusive add the value at i minus two to the current cell. Return the last cell.
*/

const DecodeWays = (...args) => {
  // your solution here
};

// add your test cases here

// ─────────────────────────────────────────────────────────────────────
// ─── REVISION CHECK — Day 90 ─────────────────────────────────────
// ⚠️  Complete these revisions BEFORE attempting today's challenge:
//
//     → Revision 3/3 — Day 81: K Distinct Window (+9 days)
//       File: month3_revisions.js
//     → Revision 2/3 — Day 86: Minimum Coins (+4 days)
//       File: month3_revisions.js
//     → Revision 1/3 — Day 89: Decode Ways (+1 day)
//       File: month3_revisions.js
//
// After each revision complete the Feynman Checkpoint in the revision file.
// ✅ Return here only after ALL revisions and checkpoints are done.
// ─────────────────────────────────────────────────────────────────────
// Day 90 — Word Break
// Topic: DP with Inner Word Boundary Scan
// Builds On: Day 89 (position-based DP) — now the look-back scans all word lengths
/*
Real World:
  A search engine autocomplete system checking whether a user's unspaced query string can be split into valid dictionary words.

Conceptual Explanation:
  Build a boolean table where each index represents whether the substring from the beginning up to that position can be validly segmented. The empty string is always valid — index zero is true. For each position walk backward through all earlier positions that are already marked valid and check whether the substring between that earlier position and the current position exists in the dictionary. If any such substring exists mark the current position as valid. Converting the dictionary to a Set provides instant word lookup.

Input:
  A string and an array of dictionary words.

Output:
  True if the string can be broken into a sequence of one or more dictionary words. False otherwise.

Example:
  Input:  'leetcode', ['leet','code']
  Output: true
  Why:    'leet' plus 'code' covers the full string.

  Input:  'catsandog', ['cats','dog','sand','and','cat']
  Output: false
  Why:    No complete segmentation is possible.

Constraints:
  - 1 <= string length <= 300
  - 1 <= dictionary size <= 1000
  - Dictionary contains no duplicates

Hint:
  Convert the dictionary to a Set. Create a boolean table of length n plus one initialized to false. Set index zero to true. Walk from index one to n. For each position walk backward from that position to zero. Whenever you find an earlier position marked true check whether the substring from that earlier position to the current position exists in the Set. If it does mark the current position as true and break the inner loop. Return the last table entry.
*/

const WordBreak = (...args) => {
  // your solution here
};

// add your test cases here

// ════════════════════════════════════════════════════════════
// 90 DAYS COMPLETE
// ════════════════════════════════════════════════════════════
//
// Every major pattern — arrays, strings, hash maps, recursion,
// sorting, two pointers, sliding window, linked lists, trees,
// advanced hash maps, dynamic programming — built through
// deliberate practice and spaced repetition without shortcuts.
//
// What is next:
//   Graphs — BFS and DFS from trees transfer directly
//   Apply patterns in React — useReducer is a state machine,
//   component trees are literal trees, useMemo is memoization
//
// ════════════════════════════════════════════════════════════
