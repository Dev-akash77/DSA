//! 2824. Count Pairs Whose Sum is Less than Target
//? https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

//* Given a 0-indexed integer array nums and an integer target.

//? Return the number of pairs (i, j) such that:
//* 0 <= i < j < nums.length
//* nums[i] + nums[j] < target

//! Example 1:
//? Input: nums = [-1,1,2,3,1], target = 2
//? Output: 3
//* Explanation:
//* The valid pairs are:
//* (-1,1)
//* (-1,1)
//* (-1,2)

//! Example 2:
//? Input: nums = [-6,2,5,-2,-7,-1,3], target = -2
//? Output: 10
//* Explanation:
//* There are 10 valid pairs whose sum is less than -2.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  let count = 0;

  let i = 0;
  let j = n - 1;

  while (i < j) {
    if (nums[i] + nums[j] < target) {
      count += (j - i);
      i++;
    } else {
      j--;
    }
  }

  return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2)); //! 3
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2)); //! 10
