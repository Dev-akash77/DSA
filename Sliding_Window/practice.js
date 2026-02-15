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

// const maxSubArraySum = (nums, k) => {
//   const n = nums.length;
//   let max = -Infinity;
//   let j = 0;
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum += nums[i];

//     if (i - j + 1 === k) {
//       max = Math.max(sum, max);
//       sum = sum - nums[j];
//       j++;
//     }
//   }

//   return max;
// };

const maxSubArraySum = (nums, k) => {
  const n = nums.length;
  let max = -Infinity;
  let j = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (i - j + 1 === k) {
      max = Math.max(sum,max);
      sum -= nums[j];
      j++;
    }
  }
  return max;
};

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSubArraySum([2, 3, 4, 1, 5], 2)); // Output: 7

// ! --------------------- Minimum Sum--------------------------------------------------------------

const minSubArrayLen = (target, nums) => {
  const n = nums.length;
  let res = Infinity;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum >= target) {
        res = Math.min(res, j - i + 1);
        break;
      }
    }
  }
  return res === Infinity ? 0 : res;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2  -> [4,3]
// console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1  -> [4]
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1])); // Output: 0  -> No valid subarray
