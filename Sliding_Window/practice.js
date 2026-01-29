// ! LONGEST SUBSTRING WITHOUT REPEATING ANY CHARACTER

const lengthOfLongestSubstring = (s) => {
  const n = s.length;
  let res = 0;
  let l = 0;
  const map = new Map();

  for (let r = 0; r < n; r++) {
    while (map.has(s[r])) {
      map.delete(s[l]);
      l++;
    }

    map.set(s[r], true);
    res = Math.max(r - l + 1, res);
  }
  return res;
};

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb"));    // 1
// console.log(lengthOfLongestSubstring("pwwkew"));   // 3
// console.log(lengthOfLongestSubstring("aab"));      // 2
// console.log(lengthOfLongestSubstring("dvdf"));    //  3

const maxSubArraySum = (nums, k) => {
  const n = nums.length;
  let max = -Infinity;
  let j = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (i - j + 1 === k) {
      max = Math.max(sum, max);
      sum = sum - nums[j];
      j++;
    }
  }

  return max;
};

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSubArraySum([2, 3, 4, 1, 5], 2)); // Output: 7
