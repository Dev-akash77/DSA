//! 217. Contains Duplicate
//? https://leetcode.com/problems/contains-duplicate/

//* Given an integer array nums, return true if any value appears at least twice in the array,
//* and return false if every element is distinct.

//! Example 1:
//? Input: nums = [1,2,3,1]
//? Output: true

//! Example 2:
//? Input: nums = [1,2,3,4]
//? Output: false

//! Example 3:
//? Input: nums = [1,1,1,3,3,4,3,2,4,2]
//? Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Approach: Hash Set (Optimal)
// Time Complexity: O(n) | Space Complexity: O(n)
var containsDuplicate = function (nums) {
    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        // If the Set already has the number, it's a duplicate
        if (seen.has(nums[i])) {
            return true;
        }
        
        // Otherwise, add it to the Set
        seen.add(nums[i]);
    }

    return false;
};

//* Test Cases
console.log(containsDuplicate([1, 2, 3, 1]));                   //! true
console.log(containsDuplicate([1, 2, 3, 4]));                   //! false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //! true
console.log(containsDuplicate([5, 2, 3, 2]));                   //! true