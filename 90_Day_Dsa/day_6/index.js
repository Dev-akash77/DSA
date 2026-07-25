//! 75. Sort Colors
//? https://leetcode.com/problems/sort-colors/

//* Given an array nums with n objects colored red, white, or blue,
//* sort them in-place so that objects of the same color are adjacent,
//* with the colors in the order red (0), white (1), and blue (2).

//? You must solve this problem without using the library's sort function.

//! Example 1:
//? Input: nums = [2,0,2,1,1,0]
//? Output: [0,0,1,1,2,2]

//! Example 2:
//? Input: nums = [2,0,1]
//? Output: [0,1,2]

//! Example 3:
//? Input: nums = [0]
//? Output: [0]

//! Example 4:
//? Input: nums = [1]
//? Output: [1]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = (nums) => {
    let i = 0;
    let k = 0;
    let j = nums.length - 1;

    while (k <= j) {
        if (nums[k] === 0) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            i++;
            k++;
        } else if (nums[k] === 2) {
            [nums[k], nums[j]] = [nums[j], nums[k]];
            j--;
        } else {
            k++;
        }
    }

    return nums; //* LeetCode me return optional hai
};

//* Test Cases
console.log(sortColors([2, 0, 2, 1, 1, 0])); //! [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1]));          //! [0,1,2]
console.log(sortColors([0]));                //! [0]
console.log(sortColors([1]));                //! [1]