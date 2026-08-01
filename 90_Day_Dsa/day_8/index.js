//! 15. 3Sum
//? https://leetcode.com/problems/3sum/

//* Given an integer array nums,
//* return all the triplets [nums[i], nums[j], nums[k]]
//* such that i != j, i != k, and j != k,
//* and nums[i] + nums[j] + nums[k] == 0.

//? The solution set must not contain duplicate triplets.

//! Example 1:
//? Input: nums = [-1,0,1,2,-1,-4]
//? Output: [[-1,-1,2],[-1,0,1]]

//! Example 2:
//? Input: nums = [0,1,1]
//? Output: []

//! Example 3:
//? Input: nums = [0,0,0]
//? Output: [[0,0,0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const res = [];

    for (let i = 0; i < n - 2; i++) {

        // Skip duplicate first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]]);

                j++;
                k--;

                // Skip duplicate second element
                while (j < k && nums[j] === nums[j - 1]) j++;

                // Skip duplicate third element
                while (j < k && nums[k] === nums[k + 1]) k--;

            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return res;
};

//* Test Cases
console.log(threeSum([-1, 0, 1, 2, -1, -4]));   //! [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));               //! []
console.log(threeSum([0, 0, 0]));               //! [[0,0,0]]
console.log(threeSum([-2, 0, 1, 1, 2]));        //! [[-2,0,2],[-2,1,1]]
console.log(threeSum([-1, -1, -1, 2, 2]));      //! [[-1,-1,2]]
console.log(threeSum([3, -2, 1, 0]));           //! []