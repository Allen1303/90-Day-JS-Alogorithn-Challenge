// ============================================================
// 90-DAY JAVASCRIPT ALGORITHM CHALLENGE
// MONTH 1 — Arrays, Strings, Objects & Basic Loops
// Days 1–30 | Difficulty: Easy
// ============================================================
// HOW TO USE:
//   1. Read the problem description and hint for the day
//   2. Write your solution inside the starter function
//   3. Run with: node month1.js
//      (comment out test lines from other days to isolate)
//   4. Bring anything that doesn't click to chat
// ============================================================

// ════════════════════════════════════════════════════════════
//  WEEK 1 — Array Traversal Toolkit (Days 1–7)
//
//  Thread: One new idea added each day.
//    Day 1 → walk and accumulate
//    Day 2 → walk with a tracked total
//    Day 3 → walk with a write pointer
//    Day 4 → walk backwards with carry
//    Day 5 → walk tracking one running state variable
//    Day 6 → walk with two pointers, same direction
//    Day 7 → walk tracking two state variables (extend or reset)
//
//  By Day 7 you have a complete array traversal toolkit.
// ════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────────
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
};

console.log(JSON.stringify(runningBalance([100, -20, 50, -30, 10]))); // [100,80,130,100,110]
console.log(JSON.stringify(runningBalance([1, 2, 3, 4]))); // [1,3,6,10]
console.log(JSON.stringify(runningBalance([5]))); // [5]

// ────────────────────────────────────────────────────────────
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
};

console.log(balancePoint([1, 7, 3, 6, 5, 6])); // 3
console.log(balancePoint([2, 1, -1])); // 0
console.log(balancePoint([1, 2, 3])); // -1

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
};

console.log(JSON.stringify(pushToBack([0, 1, 0, 3, 12]))); // [1,3,12,0,0]
console.log(JSON.stringify(pushToBack([0, 0, 1]))); // [1,0,0]
console.log(JSON.stringify(pushToBack([1, 2, 3]))); // [1,2,3]

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
  Why:    129 + 1 = 130

  Input:  [9, 9, 9]
  Output: [1, 0, 0, 0]
  Why:    999 + 1 = 1000 — a new digit is needed at the front

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
};

console.log(JSON.stringify(incrementDigits([1, 2, 9]))); // [1,3,0]
console.log(JSON.stringify(incrementDigits([9, 9, 9]))); // [1,0,0,0]
console.log(JSON.stringify(incrementDigits([0]))); // [1]

// ────────────────────────────────────────────────────────────
// Day 5 — Best Trade (Easy)
// Topic: Single Pass + Running State Variable
// Builds On: Day 4 (one pass, one tracked variable that updates conditionally)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A stock trading app that highlights the single most
  profitable day to buy and sell within a historical window.
  You can only make one trade (one buy, one sell).

Problem:
  Given an array of prices where prices[i] is the price of
  a stock on day i, return the maximum profit you can achieve.
  You must buy before you sell. If no profit is possible,
  return 0.

Example:
  Input:  [7, 1, 5, 3, 6, 4]
  Output: 5
  Why:    Buy on day 2 (price 1), sell on day 5 (price 6). Profit = 5.

  Input:  [7, 6, 4, 3, 1]
  Output: 0
  Why:    Prices only decrease — no profitable trade exists.

Constraints:
  - 1 <= prices.length <= 10000
  - 0 <= prices[i] <= 10000

Hint:
  You don't need to check every pair. Walk forward and track
  the lowest price seen so far. At each step, ask: what would
  my profit be if I sold today? Track the maximum of those
  potential profits.
*/

const bestTrade = (prices) => {
  // your solution here
};

console.log(bestTrade([7, 1, 5, 3, 6, 4])); // 5
console.log(bestTrade([7, 6, 4, 3, 1])); // 0
console.log(bestTrade([2, 4, 1])); // 2

// ────────────────────────────────────────────────────────────
// Day 6 — Deduplicate Sorted (Easy)
// Topic: Two Pointers — Slow Write / Fast Read
// Builds On: Day 5 (two variables; now both are indices moving forward)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A database system removing duplicate user IDs from a
  sorted list before writing to a unique-constraint table.
  No extra array allowed — memory is tight.

Problem:
  Given a sorted array of integers, remove duplicates
  in place so that each unique value appears only once.
  Return the number of unique elements. The first k
  elements of the array should hold the unique values
  in order (the rest doesn't matter).

Example:
  Input:  [1, 1, 2, 3, 3, 4]
  Output: 4  (array becomes [1, 2, 3, 4, ...])
  Why:    4 unique values: 1, 2, 3, 4

Constraints:
  - 1 <= nums.length <= 1000
  - Array is sorted in non-decreasing order

Hint:
  Because the array is sorted, duplicates are always
  adjacent. A slow pointer tracks the last unique position
  written. A fast pointer scans ahead. When fast finds a
  value different from slow, copy it to slow+1 and advance
  slow.
*/

const deduplicateSorted = (nums) => {
  // your solution here
};

console.log(deduplicateSorted([1, 1, 2, 3, 3, 4])); // 4
console.log(deduplicateSorted([1, 1, 1])); // 1
console.log(deduplicateSorted([1, 2, 3])); // 3

// ────────────────────────────────────────────────────────────
// Day 7 — Peak Streak (Easy)
// Topic: Kadane's Algorithm — Two State Variables
// Builds On: Day 6 (two variables; now: current streak + best streak)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A sales analytics tool finding the highest-performing
  consecutive stretch of days in a monthly revenue log.

Problem:
  Given an array of integers (which can be negative), find
  the contiguous subarray that has the largest sum and
  return that sum. The array will have at least one element.

Example:
  Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  Output: 6
  Why:    The subarray [4, -1, 2, 1] has the largest sum = 6.

  Input:  [-1, -2, -3]
  Output: -1
  Why:    All negative — best single element is -1.

Constraints:
  - 1 <= nums.length <= 1000
  - -1000 <= nums[i] <= 1000

Hint:
  Walk forward with two variables: currentSum and maxSum.
  At each step ask: is it better to extend the current
  streak (currentSum + nums[i]) or start fresh (nums[i])?
  Take the larger one. Update maxSum whenever currentSum
  beats it.
*/

const peakStreak = (nums) => {
  // your solution here
};

console.log(peakStreak([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(peakStreak([-1, -2, -3])); // -1
console.log(peakStreak([1])); // 1

// ════════════════════════════════════════════════════════════
//  WEEK 2 — String Manipulation (Days 8–14)
//
//  Thread: Builds on Week 1 patterns (two pointers, write pointer,
//          state tracking) — applied now to strings.
//    Day 8  → two pointer swap on a string
//    Day 9  → two pointer + cleaning step
//    Day 10 → character frequency with an object
//    Day 11 → two-pass frequency (count then search)
//    Day 12 → shrink a candidate string
//    Day 13 → split, transform each piece, rejoin
//    Day 14 → two pointers on two different strings
// ════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────────
// Day 8 — Mirror Text (Easy)
// Topic: Two Pointer Swap on Array/String
// Builds On: Day 6 two-pointer idea — now pointers move toward each other
// ────────────────────────────────────────────────────────────
/*
Real World:
  A mobile keyboard's "flip text" feature that reverses
  whatever the user has typed.

Problem:
  Given an array of characters, reverse it in place.
  Do not return a new array — modify the input directly.

Example:
  Input:  ["h", "e", "l", "l", "o"]
  Output: ["o", "l", "l", "e", "h"]

Constraints:
  - 1 <= chars.length <= 10000
  - Each element is a single printable ASCII character

Hint:
  Place one pointer at index 0 and one at the last index.
  Swap the values they point to, then move them toward
  each other. Stop when they meet or cross.
*/

const mirrorText = (chars) => {
  // your solution here
};

const a = ["h", "e", "l", "l", "o"];
mirrorText(a);
console.log(JSON.stringify(a)); // ["o","l","l","e","h"]

const b = ["A", "B", "C", "D"];
mirrorText(b);
console.log(JSON.stringify(b)); // ["D","C","B","A"]

// ────────────────────────────────────────────────────────────
// Day 9 — Read Both Ways (Easy)
// Topic: Two Pointer + String Normalization
// Builds On: Day 8 (two pointer moving inward) + a cleaning step first
// ────────────────────────────────────────────────────────────
/*
Real World:
  A search engine normalizing user queries to check whether
  a phrase reads the same forwards and backwards, ignoring
  punctuation and casing.

Problem:
  Given a string, determine whether it is a palindrome
  after removing all non-alphanumeric characters and
  converting to lowercase. Return true or false.

Example:
  Input:  "A man, a plan, a canal: Panama"
  Output: true
  Why:    Cleaned → "amanaplanacanalpanama" — reads same both ways.

  Input:  "race a car"
  Output: false
  Why:    Cleaned → "raceacar" — not a palindrome.

Constraints:
  - 1 <= s.length <= 100000
  - s consists of printable ASCII characters

Hint:
  Clean the string first — keep only letters and numbers,
  lowercase everything. Then apply the two-pointer swap
  check from Day 8: instead of swapping, compare.
  Stop as soon as you find a mismatch.
*/

const readBothWays = (s) => {
  // your solution here
};

console.log(readBothWays("A man, a plan, a canal: Panama")); // true
console.log(readBothWays("race a car")); // false
console.log(readBothWays(" ")); // true

// ────────────────────────────────────────────────────────────
// Day 10 — Same Letters (Easy)
// Topic: Character Frequency Object
// Builds On: Day 7 state tracking — now tracking counts in an object
// ────────────────────────────────────────────────────────────
/*
Real World:
  A plagiarism detector checking whether two short texts
  use exactly the same characters — just rearranged.

Problem:
  Given two strings s and t, return true if t is an anagram
  of s (contains the exact same characters in any order),
  and false otherwise.

Example:
  Input:  s = "anagram", t = "nagaram"
  Output: true

  Input:  s = "rat", t = "car"
  Output: false

Constraints:
  - 1 <= s.length, t.length <= 50000
  - Strings consist of lowercase English letters

Hint:
  Two strings are anagrams if they have the same character
  frequencies. Build a frequency object from s (increment),
  then walk t (decrement). If any count goes negative, or
  if the strings have different lengths, it's not an anagram.
*/

const sameLetters = (s, t) => {
  // your solution here
};

console.log(sameLetters("anagram", "nagaram")); // true
console.log(sameLetters("rat", "car")); // false
console.log(sameLetters("ab", "a")); // false

// ────────────────────────────────────────────────────────────
// Day 11 — First Solo (Easy)
// Topic: Two-Pass Frequency (Count Then Search)
// Builds On: Day 10 (frequency object) — now you do two passes with it
// ────────────────────────────────────────────────────────────
/*
Real World:
  A live chat app that highlights the first emoji in a
  message that was used only once — a quick uniqueness signal.

Problem:
  Given a string, find the index of the first character
  that appears exactly once. Return its index, or -1 if
  every character repeats.

Example:
  Input:  "leetcode"
  Output: 0
  Why:    'l' appears once and is the first such character.

  Input:  "aabb"
  Output: -1
  Why:    All characters repeat.

Constraints:
  - 1 <= s.length <= 100000
  - s consists of lowercase English letters

Hint:
  Pass 1: build a frequency object counting every character.
  Pass 2: walk the string again. Return the index of the
  first character whose count is exactly 1.
  Two passes, one object — no nested loops needed.
*/

const firstSolo = (s) => {
  // your solution here
};

console.log(firstSolo("leetcode")); // 0
console.log(firstSolo("loveleet")); // 2
console.log(firstSolo("aabb")); // -1

// ────────────────────────────────────────────────────────────
// Day 12 — Shared Start (Easy)
// Topic: Candidate Shrinking
// Builds On: Day 11 (scanning multiple strings; now comparing across them)
// ────────────────────────────────────────────────────────────
/*
Real World:
  An autocomplete feature that finds the longest shared
  prefix across all matching search suggestions, so it can
  pre-fill that much in the input field.

Problem:
  Given an array of strings, find the longest common prefix
  shared by all of them. If no common prefix exists, return
  an empty string "".

Example:
  Input:  ["flower", "flow", "flight"]
  Output: "fl"

  Input:  ["dog", "racecar", "car"]
  Output: ""
  Why:    No common prefix.

Constraints:
  - 1 <= strs.length <= 200
  - 0 <= strs[i].length <= 200
  - Strings consist of lowercase English letters

Hint:
  Take the first string as your candidate prefix.
  Loop through every other string. If the current string
  does not start with your candidate, shorten the candidate
  by one character from the end. Repeat until it does.
  If the candidate becomes empty, return "".
*/

const sharedStart = (strs) => {
  // your solution here
};

console.log(sharedStart(["flower", "flow", "flight"])); // "fl"
console.log(sharedStart(["dog", "racecar", "car"])); // ""
console.log(sharedStart(["interview", "inter", "interlude"])); // "inter"

// ────────────────────────────────────────────────────────────
// Day 13 — Word Flip (Easy)
// Topic: Split → Map Transform → Join
// Builds On: Day 8 (reversing) — now applied to each word individually
// ────────────────────────────────────────────────────────────
/*
Real World:
  A subtitle formatting tool that reverses the letters of
  every word in a line without changing the order of words.

Problem:
  Given a string s, reverse the characters of each word
  individually while preserving whitespace and word order.

Example:
  Input:  "Let's take LeetCode contest"
  Output: "s'teL ekat edoCteeL tsetnoC"

  Input:  "Hello World"
  Output: "olleH dlroW"

Constraints:
  - 1 <= s.length <= 5000
  - s contains printable ASCII characters and spaces
  - Words are separated by single spaces

Hint:
  Split on spaces to get an array of words.
  Map over each word — for each one, apply the reversal
  logic you built in Day 8 (or use split/reverse/join).
  Then join the transformed words back with spaces.
  This chain should be readable as a single expression.
*/

const wordFlip = (s) => {
  // your solution here
};

console.log(wordFlip("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoC"
console.log(wordFlip("Hello World")); // "olleH dlroW"
console.log(wordFlip("a")); // "a"

// ────────────────────────────────────────────────────────────
// Day 14 — In Order (Easy)
// Topic: Two Pointers on Two Different Strings
// Builds On: Day 6 (two pointers) — now each pointer lives in a different string
// ────────────────────────────────────────────────────────────
/*
Real World:
  A keyboard input validator checking whether a user's
  shortcut keystrokes appear — in order — within a longer
  recorded input sequence.

Problem:
  Given strings s and t, return true if s is a subsequence
  of t. A subsequence is formed by deleting some (or no)
  characters from t without changing the order of remaining
  characters.

Example:
  Input:  s = "ace", t = "abcde"
  Output: true
  Why:    a→b→c→d→e — we can pick a, c, e in order.

  Input:  s = "aec", t = "abcde"
  Output: false
  Why:    'e' comes after 'c' in t, so aec can't be picked in order.

Constraints:
  - 0 <= s.length <= 100
  - 0 <= t.length <= 10000
  - Both strings consist of lowercase English letters

Hint:
  Two separate pointers — one for s, one for t.
  Walk t forward always. Only advance the s pointer
  when s[sPointer] === t[tPointer]. If the s pointer
  reaches s.length, you found all characters in order.
*/

const inOrder = (s, t) => {
  // your solution here
};

console.log(inOrder("ace", "abcde")); // true
console.log(inOrder("aec", "abcde")); // false
console.log(inOrder("", "ahbgdc")); // true

// ════════════════════════════════════════════════════════════
//  WEEK 3 — Objects & Hash Maps (Days 15–21)
//
//  Thread: Builds on the frequency object from Week 2.
//    Day 15 → one-pass object lookup (complement search)
//    Day 16 → Set for existence checking
//    Day 17 → XOR as a lookup-free alternative
//    Day 18 → frequency object with a threshold check
//    Day 19 → Set intersection across two arrays
//    Day 20 → bidirectional object mapping
//    Day 21 → bidirectional mapping variation
// ════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────────
// Day 15 — Two Sum (Easy)
// Topic: One-Pass Hash Map (Complement Lookup)
// Builds On: Day 10 frequency object — now you check the object as you build it
// ────────────────────────────────────────────────────────────
/*
Real World:
  An e-commerce checkout system finding two items in a
  cart whose combined price hits an exact promotional
  discount threshold.

Problem:
  Given an array of integers and a target number, return
  the indices of the two numbers that add up to the target.
  Exactly one solution exists. You may not use the same
  element twice.

Example:
  Input:  nums = [2, 7, 11, 15], target = 9
  Output: [0, 1]
  Why:    nums[0] + nums[1] = 2 + 7 = 9

  Input:  nums = [3, 2, 4], target = 6
  Output: [1, 2]

Constraints:
  - 2 <= nums.length <= 10000
  - -10000 <= nums[i] <= 10000
  - Exactly one valid solution exists

Hint:
  For each number, its complement is target - num.
  Store numbers you've already seen in an object (key: number,
  value: index). Before storing each number, check if its
  complement already exists in the object. If yes — you
  found your pair. One pass, no nested loop.
*/

const twoSum = (nums, target) => {
  // your solution here
};

console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9))); // [0,1]
console.log(JSON.stringify(twoSum([3, 2, 4], 6))); // [1,2]
console.log(JSON.stringify(twoSum([3, 3], 6))); // [0,1]

// ────────────────────────────────────────────────────────────
// Day 16 — Repeat Check (Easy)
// Topic: Set for O(1) Existence Checking
// Builds On: Day 15 (object for fast lookup) — Set is cleaner when you only need existence
// ────────────────────────────────────────────────────────────
/*
Real World:
  A form validator checking whether any email address
  appears more than once in a submitted registration list.

Problem:
  Given an array of integers, return true if any value
  appears at least twice in the array, and false if all
  elements are distinct.

Example:
  Input:  [1, 2, 3, 1]
  Output: true

  Input:  [1, 2, 3, 4]
  Output: false

Constraints:
  - 1 <= nums.length <= 100000
  - -100000 <= nums[i] <= 100000

Hint:
  A Set only stores unique values. As you add elements,
  check before adding: if the element is already in the
  Set, you've found a duplicate. Alternatively: add all
  elements to a Set and compare its size to the array length.
  Understand both approaches.
*/

const repeatCheck = (nums) => {
  // your solution here
};

console.log(repeatCheck([1, 2, 3, 1])); // true
console.log(repeatCheck([1, 2, 3, 4])); // false
console.log(repeatCheck([1, 1, 1, 3])); // true

// ────────────────────────────────────────────────────────────
// Day 17 — The Odd One Out (Easy)
// Topic: XOR Bitwise Operation
// Builds On: Day 16 (finding the unique element) — XOR does it without extra space
// ────────────────────────────────────────────────────────────
/*
Real World:
  An inventory audit system where every product is scanned
  exactly twice during a stocktake — except one item that
  was damaged and only scanned once. Find the anomaly.

Problem:
  Given an array where every element appears exactly twice
  except for one element which appears exactly once,
  return that single element.

Example:
  Input:  [4, 1, 2, 1, 2]
  Output: 4

  Input:  [2, 2, 1]
  Output: 1

Constraints:
  - 1 <= nums.length <= 30000
  - Array length is always odd
  - Every element except one appears exactly twice

Hint:
  XOR has two key properties:
    n ^ n = 0 (a number XORed with itself cancels out)
    n ^ 0 = n (a number XORed with 0 is itself)
  XOR all elements together. Pairs cancel to 0.
  What's left is the single element.
*/

const oddOneOut = (nums) => {
  // your solution here
};

console.log(oddOneOut([4, 1, 2, 1, 2])); // 4
console.log(oddOneOut([2, 2, 1])); // 1
console.log(oddOneOut([1])); // 1

// ────────────────────────────────────────────────────────────
// Day 18 — Crowd Favorite (Easy)
// Topic: Frequency Object + Majority Threshold
// Builds On: Day 10/15 (frequency object) — now checking against a threshold
// ────────────────────────────────────────────────────────────
/*
Real World:
  A live audience poll dashboard finding the option that
  more than half the audience voted for — guaranteed to exist.

Problem:
  Given an array of integers, find the element that appears
  more than n/2 times (where n is the array length).
  This element always exists in the input.

Example:
  Input:  [3, 2, 3]
  Output: 3

  Input:  [2, 2, 1, 1, 1, 2, 2]
  Output: 2

Constraints:
  - 1 <= nums.length <= 50000
  - The majority element always exists

Hint:
  Build a frequency object. For each number, if its count
  exceeds Math.floor(nums.length / 2), return it.
  You can do this in one pass — check the threshold as you
  count, not after. After solving, look up Boyer-Moore
  Voting Algorithm for a space-efficient alternative.
*/

const crowdFavorite = (nums) => {
  // your solution here
};

console.log(crowdFavorite([3, 2, 3])); // 3
console.log(crowdFavorite([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(crowdFavorite([1])); // 1

// ────────────────────────────────────────────────────────────
// Day 19 — Common Ground (Easy)
// Topic: Set Intersection
// Builds On: Day 16 (Set membership) — now applied across two separate arrays
// ────────────────────────────────────────────────────────────
/*
Real World:
  A social platform feature showing which users two people
  both follow — their mutual connections.

Problem:
  Given two arrays of integers, return an array of their
  intersection — the values that appear in both arrays.
  Each value in the result must be unique.

Example:
  Input:  nums1 = [1, 2, 2, 1], nums2 = [2, 2]
  Output: [2]

  Input:  nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
  Output: [9, 4]  (order doesn't matter)

Constraints:
  - 1 <= nums1.length, nums2.length <= 1000
  - 0 <= nums1[i], nums2[i] <= 1000

Hint:
  Convert one array to a Set. Filter the other array
  keeping only values that exist in the Set.
  Then convert the result to a Set again to remove
  any duplicates in the filtered result.
  Think about: why does a Set outperform Array.includes()
  here for large inputs?
*/

const commonGround = (nums1, nums2) => {
  // your solution here
};

console.log(JSON.stringify(commonGround([1, 2, 2, 1], [2, 2]))); // [2]
console.log(JSON.stringify(commonGround([4, 9, 5], [9, 4, 9, 8, 4]))); // [4,9] or [9,4]

// ────────────────────────────────────────────────────────────
// Day 20 — Code Map (Easy)
// Topic: Bidirectional Object Mapping
// Builds On: Day 15 (single-direction map) — now the mapping must hold in both directions
// ────────────────────────────────────────────────────────────
/*
Real World:
  A cipher validator checking whether a secret code
  consistently maps each code letter to exactly one word —
  and each word maps back to exactly one code letter.

Problem:
  Given a pattern string and a string s of space-separated
  words, return true if s follows the same pattern.
  "Follows" means there is a bijection between each letter
  in pattern and each word in s.

Example:
  Input:  pattern = "abba", s = "dog cat cat dog"
  Output: true

  Input:  pattern = "abba", s = "dog cat cat fish"
  Output: false

  Input:  pattern = "aaaa", s = "dog cat cat dog"
  Output: false

Constraints:
  - 1 <= pattern.length <= 300
  - pattern contains only lowercase English letters
  - s contains only lowercase English words separated by spaces
  - The number of words equals the length of pattern

Hint:
  You need two maps: one from pattern char → word,
  one from word → pattern char. Both directions must
  be consistent. If a char maps to a different word
  than expected, or a word maps to a different char,
  return false.
*/

const codeMap = (pattern, s) => {
  // your solution here
};

console.log(codeMap("abba", "dog cat cat dog")); // true
console.log(codeMap("abba", "dog cat cat fish")); // false
console.log(codeMap("aaaa", "dog cat cat dog")); // false

// ────────────────────────────────────────────────────────────
// Day 21 — Same Shape (Easy)
// Topic: Bidirectional Mapping Variation
// Builds On: Day 20 (bidirectional map) — same structure, applied to characters
// ────────────────────────────────────────────────────────────
/*
Real World:
  A font rendering engine determining whether two character
  sets can be substituted one-for-one without collisions —
  so one alphabet can be visually mapped to another.

Problem:
  Given two strings s and t of the same length, determine
  if they are isomorphic. Two strings are isomorphic if
  the characters in s can be replaced consistently to get t.
  No two characters may map to the same character, but a
  character may map to itself.

Example:
  Input:  s = "egg", t = "add"
  Output: true
  Why:    e→a, g→d. Consistent.

  Input:  s = "foo", t = "bar"
  Output: false
  Why:    o→a and o→r — o can't map to two different chars.

  Input:  s = "paper", t = "title"
  Output: true

Constraints:
  - 1 <= s.length <= 50000
  - s.length === t.length
  - Both strings consist of ASCII characters

Hint:
  Identical structure to Day 20 — two maps (s→t and t→s).
  At each position, if s[i] is already mapped to a different
  t[i], return false. Same for the reverse direction.
  The two-direction check is what prevents many-to-one mappings.
*/

const sameShape = (s, t) => {
  // your solution here
};

console.log(sameShape("egg", "add")); // true
console.log(sameShape("foo", "bar")); // false
console.log(sameShape("paper", "title")); // true

// ════════════════════════════════════════════════════════════
//  WEEK 4 — Consolidation (Days 22–30)
//
//  Thread: Every problem pulls from at least two patterns
//          you've already built. This week is about recognizing
//          which tool fits, then applying it cleanly.
// ════════════════════════════════════════════════════════════

// ────────────────────────────────────────────────────────────
// Day 22 — Merge From Back (Easy)
// Topic: Two Pointers — Starting From the End
// Builds On: Day 4 (backward traversal) + Day 6 (two pointers)
// ────────────────────────────────────────────────────────────
/*
Real World:
  Merging two sorted contact lists into one without
  allocating a third array — working in place from the back.

Problem:
  You are given two sorted integer arrays nums1 and nums2.
  nums1 has enough space at the end (filled with 0s) to
  hold all elements of nums2. m is the number of real
  elements in nums1, n is the length of nums2.
  Merge nums2 into nums1 in place, in sorted order.

Example:
  Input:  nums1 = [1, 3, 5, 0, 0, 0], m = 3
          nums2 = [2, 4, 6], n = 3
  Output: [1, 2, 3, 4, 5, 6]

Constraints:
  - nums1.length = m + n
  - 0 <= m, n <= 200
  - Both arrays are sorted in non-decreasing order

Hint:
  If you fill from the front, you overwrite elements you
  still need. Fill from the back instead. Place three
  pointers: one at index m-1 (end of real nums1), one at
  n-1 (end of nums2), one at m+n-1 (end of nums1 total).
  Always pick the larger of the two front candidates and
  place it at the back pointer.
*/

const mergeFromBack = (nums1, m, nums2, n) => {
  // your solution here
  // modifies nums1 in place
};

const arr1 = [1, 3, 5, 0, 0, 0];
mergeFromBack(arr1, 3, [2, 4, 6], 3);
console.log(JSON.stringify(arr1)); // [1,2,3,4,5,6]

const arr2 = [1, 0];
mergeFromBack(arr2, 1, [2], 1);
console.log(JSON.stringify(arr2)); // [1,2]

// ────────────────────────────────────────────────────────────
// Day 23 — Missing IDs (Easy)
// Topic: Frequency Object + Index Range Reasoning
// Builds On: Day 11 (two-pass frequency) + Day 2 (index as meaningful position)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A ticketing system detecting which seat numbers were
  never assigned in a fully booked venue where every
  seat from 1 to n should appear exactly once.

Problem:
  Given an array of n integers where each value is between
  1 and n (inclusive), some values appear twice and others
  are missing. Return all the integers in range [1, n]
  that do not appear in the array.

Example:
  Input:  [4, 3, 2, 7, 8, 2, 3, 1]
  Output: [5, 6]
  Why:    Values 5 and 6 are missing from the array.

Constraints:
  - 1 <= nums.length <= 100000
  - 1 <= nums[i] <= nums.length

Hint:
  Build a Set or frequency object from the array.
  Then walk from 1 to n and collect every number
  not found in your Set. The Set lookup is O(1),
  so the whole thing is O(n).
*/

const missingIDs = (nums) => {
  // your solution here
};

console.log(JSON.stringify(missingIDs([4, 3, 2, 7, 8, 2, 3, 1]))); // [5,6]
console.log(JSON.stringify(missingIDs([1, 1]))); // [2]

// ────────────────────────────────────────────────────────────
// Day 24 — Uptime Streak (Easy)
// Topic: Linear Scan with Counter + Max Tracker
// Builds On: Day 5 (tracking running state) + Day 7 (reset vs extend logic)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A server monitoring dashboard measuring the longest
  uninterrupted uptime streak — consecutive hours where
  the server was fully operational (represented as 1s).

Problem:
  Given a binary array (containing only 0s and 1s),
  return the maximum number of consecutive 1s.

Example:
  Input:  [1, 1, 0, 1, 1, 1]
  Output: 3
  Why:    The last three 1s form the longest streak.

Constraints:
  - 1 <= nums.length <= 100000
  - nums[i] is either 0 or 1

Hint:
  Two variables: currentStreak and maxStreak.
  Walk forward. On a 1: increment currentStreak, update
  maxStreak if currentStreak beats it. On a 0: reset
  currentStreak to 0. Very similar rhythm to Day 7.
*/

const uptimeStreak = (nums) => {
  // your solution here
};

console.log(uptimeStreak([1, 1, 0, 1, 1, 1])); // 3
console.log(uptimeStreak([1, 0, 1, 1, 0, 1])); // 2
console.log(uptimeStreak([0, 0, 0])); // 0

// ────────────────────────────────────────────────────────────
// Day 25 — Sorted Squares (Easy)
// Topic: Two Pointers — Fill Result Array From Back
// Builds On: Day 22 (fill from back) + Day 8 (pointers moving inward)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A sensor data pipeline that squares all readings
  (including negative ones) and needs the result
  in sorted order without re-sorting from scratch.

Problem:
  Given an integer array sorted in non-decreasing order,
  return an array of the squares of each number, also
  in non-decreasing (sorted) order.

Example:
  Input:  [-4, -1, 0, 3, 10]
  Output: [0, 1, 9, 16, 100]

Constraints:
  - 1 <= nums.length <= 10000
  - -10000 <= nums[i] <= 10000
  - Array is sorted in non-decreasing order

Hint:
  The largest squares are always at the two ends
  (the most negative or the most positive numbers).
  Two pointers from each end, fill a result array
  from the back (index n-1 down to 0). At each step,
  compare the squares of both ends and place the larger
  one at the current back position.
*/

const sortedSquares = (nums) => {
  // your solution here
};

console.log(JSON.stringify(sortedSquares([-4, -1, 0, 3, 10]))); // [0,1,9,16,100]
console.log(JSON.stringify(sortedSquares([-7, -3, 2, 3, 11]))); // [4,9,9,49,121]

// ────────────────────────────────────────────────────────────
// Day 26 — Spot the Addition (Easy)
// Topic: Frequency Differential
// Builds On: Day 10 (frequency object) + Day 17 (XOR as an alternative)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A file sync tool detecting the single character that was
  inserted when a string was shuffled and one character
  was added to produce a longer version.

Problem:
  You are given two strings s and t. String t is generated
  by randomly shuffling s and then adding one extra character
  at a random position. Find and return the added character.

Example:
  Input:  s = "abcd", t = "abcde"
  Output: "e"

  Input:  s = "ae", t = "aea"
  Output: "a"

Constraints:
  - 0 <= s.length <= 1000
  - t.length === s.length + 1
  - s and t consist of lowercase English letters

Hint:
  Approach 1 (frequency): Count characters in s with an
  object. Walk t decrementing counts. The character that
  goes below zero (or doesn't exist) is the added one.
  Approach 2 (XOR): XOR all characters from both strings
  together. Pairs cancel — you're left with the extra char.
  Try both. Understand why both work.
*/

const spotTheAddition = (s, t) => {
  // your solution here
};

console.log(spotTheAddition("abcd", "abcde")); // "e"
console.log(spotTheAddition("ae", "aea")); // "a"

// ────────────────────────────────────────────────────────────
// Day 27 — Budget Check (Easy)
// Topic: Character Budget Deduction
// Builds On: Day 10 (frequency object) — now you deplete a budget as you consume
// ────────────────────────────────────────────────────────────
/*
Real World:
  A content moderation tool verifying that a response
  message can be constructed entirely using characters
  available in a pre-approved template — not one character
  more than the template provides.

Problem:
  Given two strings ransomNote and magazine, return true
  if ransomNote can be constructed using the letters from
  magazine. Each letter in magazine can only be used once.

Example:
  Input:  ransomNote = "aa", magazine = "aab"
  Output: true

  Input:  ransomNote = "aa", magazine = "ab"
  Output: false
  Why:    Only one 'a' in magazine but ransomNote needs two.

Constraints:
  - 1 <= ransomNote.length, magazine.length <= 100000
  - Both strings consist of lowercase English letters

Hint:
  Build a frequency object from magazine (your budget).
  Walk ransomNote. For each character, decrement its count
  in the budget. If a count goes below 0 (or the key doesn't
  exist), you've run out of that letter — return false.
*/

const budgetCheck = (ransomNote, magazine) => {
  // your solution here
};

console.log(budgetCheck("aa", "aab")); // true
console.log(budgetCheck("aa", "ab")); // false
console.log(budgetCheck("bg", "edfbgill")); // true

// ────────────────────────────────────────────────────────────
// Day 28 — Pair Counter (Easy)
// Topic: Complement Lookup in Frequency Object
// Builds On: Day 15 (complement in a map) — now count all valid pairs
// ────────────────────────────────────────────────────────────
/*
Real World:
  A matchmaking engine counting how many player pairs in
  a roster have exactly K rating points between them —
  to form balanced competition brackets.

Problem:
  Given an integer array nums and an integer k, return the
  number of pairs (i, j) where i < j and
  Math.abs(nums[i] - nums[j]) === k.

Example:
  Input:  nums = [1, 2, 2, 1], k = 1
  Output: 4
  Why:    Pairs: (0,1), (0,2), (3,1), (3,2) all have diff of 1.

  Input:  nums = [1, 3, 2, 2], k = 2
  Output: 1
  Why:    Only (0,1): |1-3|=2.

Constraints:
  - 1 <= nums.length <= 200
  - 1 <= nums[i] <= 100
  - 1 <= k <= 99

Hint:
  Build a frequency object first. Then for each unique
  number n in the object, check if n+k exists. If it does,
  multiply the counts together — that's how many pairs
  that combination produces. Sum all such products.
*/

const pairCounter = (nums, k) => {
  // your solution here
};

console.log(pairCounter([1, 2, 2, 1], 1)); // 4
console.log(pairCounter([1, 3, 2, 2], 2)); // 1

// ────────────────────────────────────────────────────────────
// Day 29 — Same Message (Easy)
// Topic: Array Join + String Comparison
// Builds On: Day 13 (join) — now comparing two joined results
// ────────────────────────────────────────────────────────────
/*
Real World:
  A document diff tool checking whether two differently-
  chunked versions of the same file (split by paragraph,
  line, or word) actually represent the same full text.

Problem:
  Given two arrays of strings word1 and word2, return true
  if the two arrays represent the same string when
  concatenated in order.

Example:
  Input:  word1 = ["ab", "c"], word2 = ["a", "bc"]
  Output: true
  Why:    "ab"+"c" = "abc" and "a"+"bc" = "abc"

  Input:  word1 = ["a", "cb"], word2 = ["ab", "c"]
  Output: false

Constraints:
  - 1 <= word1.length, word2.length <= 1000
  - 1 <= word1[i].length, word2[j].length <= 1000

Hint:
  One line with the right array method — join both arrays
  with no separator and compare. Understand what you're
  actually comparing and why join with "" works here.
*/

const sameMessage = (word1, word2) => {
  // your solution here
};

console.log(sameMessage(["ab", "c"], ["a", "bc"])); // true
console.log(sameMessage(["a", "cb"], ["ab", "c"])); // false
console.log(sameMessage(["abc", "d", "defg"], ["abcddefg"])); // true

// ────────────────────────────────────────────────────────────
// Day 30 — Compress Ranges (Easy)
// Topic: Linear Scan with Range Detection
// Builds On: Day 7 (extend or reset) + Day 12 (building a result string)
// ────────────────────────────────────────────────────────────
/*
Real World:
  A calendar app that compresses a list of individually
  booked days into human-readable ranges like "Mon-Fri"
  rather than listing every day separately.

Problem:
  Given a sorted array of unique integers, return the
  smallest sorted list of range strings that covers
  all numbers exactly. A range "a->b" covers a through b
  (inclusive). A single number is just "a".

Example:
  Input:  [0, 1, 2, 4, 5, 7]
  Output: ["0->2", "4->5", "7"]
  Why:    0,1,2 are consecutive → "0->2". 4,5 → "4->5". 7 alone → "7".

  Input:  [0, 2, 3, 4, 6, 8, 9]
  Output: ["0", "2->4", "6", "8->9"]

Constraints:
  - 0 <= nums.length <= 20
  - -1000000000 <= nums[i] <= 1000000000
  - All values are unique and sorted

Hint:
  Track the start of each range. Walk forward.
  A range ends when the next number is not exactly
  current + 1 (or you've reached the end of the array).
  At that point, build the label: if start === end, just
  the number; otherwise "start->end". Then begin a new range.
*/

const compressRanges = (nums) => {
  // your solution here
};

console.log(JSON.stringify(compressRanges([0, 1, 2, 4, 5, 7]))); // ["0->2","4->5","7"]
console.log(JSON.stringify(compressRanges([0, 2, 3, 4, 6, 8, 9]))); // ["0","2->4","6","8->9"]
console.log(JSON.stringify(compressRanges([]))); // []
