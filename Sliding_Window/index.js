/**
 *! 1 | Longest Substring Without Repeating Characters
 ** LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 ** GFG: https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
 *
 * --------------------------------------------------------------
 *! TECHNIQUE:
 *! Sliding Window + HashMap (Set)
 *
 *? PATTERN:
 *? Variable-size sliding window
 *? Expand window until duplicate appears → shrink from left
 *
 *! ALGO NAME:
 *! Two Pointers + HashSet Sliding Window
 *
 *? TIME COMPLEXITY: O(n)
 *? SPACE COMPLEXITY: O(min(n, alphabet))
 *
 *! ASKED IN:
 *! Google, Amazon, Meta, Microsoft, Uber, Bloomberg,
 *! Adobe, Oracle, Walmart Labs, Atlassian (MOST ASKED)
 *
 *? IMPORTANCE (out of 5):
 *?⭐⭐⭐⭐⭐ (5/5) — Must-do sliding window question
 *
 *? --------------------------------------------------------------
 *! EXAMPLE:
 *
 ** Input:  s = "abcabcbb"
 ** Output: 3
 ** Explanation: "abc" is the longest substring without repeating chars.
 *
 ** Input:  s = "bbbbb"
 ** Output: 1
 *
 ** Input:  s = "pwwkew"
 ** Output: 3  -> "wke"
 *
 *? --------------------------------------------------------------
 */

function lengthOfLongestSubstring(s) {
  const n = s.length;
  let max = 0;
  let i = 0;
  let has = new Map();
  let sum = 0;

  for (let r = 0; r < n; r++) {
    if (has.has(s[r])&& has.get(s[r]) >= i) {
      i = has.get(s[r]) + 1;
      sum = r - i + 1;
    }

    sum = r - i + 1;
    has.set(s[r], r);
    max = Math.max(sum, max);
  }

  console.log(max);

  return max;
}

// !--------------------------------------------------------------
// TEST RUN

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // 3
