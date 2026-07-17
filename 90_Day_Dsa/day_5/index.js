//! 1. Two Sum
//? https://leetcode.com/problems/two-sum/

//* Given an array of integers nums and an integer target.

//? Return the indices of the two numbers such that they add up to target.

//* You may assume that each input has exactly one solution,
//* and you may not use the same element twice.

//! Example 1:
//? Input: nums = [2,7,11,15], target = 9
//? Output: [0,1]
//* Explanation:
//* nums[0] + nums[1] = 2 + 7 = 9
//* Return [0,1].

//! Example 2:
//? Input: nums = [3,2,4], target = 6
//? Output: [1,2]
//* Explanation:
//* nums[1] + nums[2] = 2 + 4 = 6

//! Example 3:
//? Input: nums = [3,3], target = 6
//? Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    const map = new Map();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [-1, -1];
};

//* Test Cases
console.log(twoSum([2, 7, 11, 15], 9));   //! [0,1]
console.log(twoSum([3, 2, 4], 6));        //! [1,2]
console.log(twoSum([3, 3], 6));           //! [0,1]