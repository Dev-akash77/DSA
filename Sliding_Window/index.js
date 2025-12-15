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
  let subArray = 0;

  for (let r = 0; r < n; r++) {
    if (has.has(s[r]) && has.get(s[r]) >= i) {
      i = has.get(s[r]) + 1;
      subArray = r - i + 1;
    }

    subArray = r - i + 1;
    has.set(s[r], r);
    max = Math.max(subArray, max);
  }

  console.log(max);

  return max;
}

// !--------------------------------------------------------------
//? TEST RUN

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // 3

/**
 *! 2 | Minimum Size Subarray SubArray
 ** LeetCode: https://leetcode.com/problems/minimum-size-subarray-subArray/
 ** GFG: https://www.geeksforgeeks.org/minimum-length-subarray-subArray-greater-given-value/
 *
 * --------------------------------------------------------------
 *! TECHNIQUE:
 *! Sliding Window (Two Pointers)
 *
 *? PATTERN:
 *? Variable-size sliding window
 *? Expand until subArray ≥ target → shrink from left to minimize window
 *
 *! ALGO NAME:
 *! Two Pointers + Sliding Window (Optimal)
 *
 *? TIME COMPLEXITY: O(n)
 *? SPACE COMPLEXITY: O(1)
 *
 *! ASKED IN:
 *! Amazon, Google, Microsoft, Meta, Apple, Oracle,
 *! Walmart Labs, Bloomberg, Adobe
 *
 *? IMPORTANCE (out of 5):
 *? ⭐⭐⭐⭐⭐ (5/5) — Very important variable-size window question
 *
 * --------------------------------------------------------------
 *! EXAMPLE:
 *
 ** Input: target = 7, nums = [2,3,1,2,4,3]
 ** Output: 2
 ** Explanation: Subarray [4,3] has the smallest length = 2
 *
 ** Input: target = 4, nums = [1,4,4]
 ** Output: 1
 ** Explanation: [4] alone is enough
 *
 ** Input: target = 11, nums = [1,1,1,1,1,1,1]
 ** Output: 0
 ** Explanation: No subarray meets the target
 *
 *? --------------------------------------------------------------
 */

function minSubArrayLen(target, nums) {
  const n = nums.length;
  let min = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (target <= sum) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return min === Infinity ? 0 : min;
}

//? TEST RUN

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2  -> [4,3]
// console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1  -> [4]
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1])); // Output: 0  -> No valid subarray

/**
 *! 3 | Maximum Subarray Sum of Size K
 ** LeetCode: https://leetcode.com/problems/maximum-average-subarray-i/
 ** GFG: https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/
 *
 * --------------------------------------------------------------
 *! TECHNIQUE:
 *! Sliding Window (Fixed Size)
 *
 *? PATTERN:
 *? Fixed-size sliding window
 *? Add next element → remove left element → track max sum
 *
 *! ALGO NAME:
 *! Fixed Window Sliding Technique
 *
 *? TIME COMPLEXITY: O(n)
 *? SPACE COMPLEXITY: O(1)
 *
 *! ASKED IN:
 *! Amazon, Google, Microsoft, Meta, Apple,
 *! Adobe, Goldman Sachs, Walmart Labs
 *
 *? IMPORTANCE (out of 5):
 *? ⭐⭐⭐⭐⭐ (5/5) — Foundation of Sliding Window
 *
 * --------------------------------------------------------------
 *! EXAMPLE:
 *
 ** Input: nums = [2,1,5,1,3,2], k = 3
 ** Output: 9
 ** Explanation: Subarray [5,1,3] has maximum sum = 9
 *
 ** Input: nums = [2,3,4,1,5], k = 2
 ** Output: 7
 ** Explanation: [3,4] gives maximum sum
 *
 *? --------------------------------------------------------------
 */

function maxSubArraySum(nums, k) {
  const n = nums.length;
  let max = -Infinity;
  let l = 0;
  let sum = 0;

  for (let r = 0; r < n ; r++) {
    sum += nums[r];
    if (r - l + 1 === k) {
      max = Math.max(sum, max);
      sum -= nums[l];
      l++;
    }
  }
  
  return max;
}

//? TEST RUN

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9

console.log(maxSubArraySum([2, 3, 4, 1, 5], 2)); // Output: 7
