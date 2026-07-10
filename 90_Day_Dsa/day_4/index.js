//! 167. Two Sum II - Input Array Is Sorted
//? https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

//* Given a 1-indexed array of integers numbers that is already sorted
//* in non-decreasing order.

//? Find two numbers such that they add up to a specific target number.

//* Return the indices of the two numbers (1-indexed).

//! Example 1:
//? Input: numbers = [2,7,11,15], target = 9
//? Output: [1,2]
//* Explanation:
//* numbers[0] + numbers[1] = 2 + 7 = 9
//* Return [1,2].

//! Example 2:
//? Input: numbers = [2,3,4], target = 6
//? Output: [1,3]
//* Explanation:
//* numbers[0] + numbers[2] = 2 + 4 = 6

//! Example 3:
//? Input: numbers = [-1,0], target = -1
//? Output: [1,2]

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    return [];
};

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9));      //! [1,2]
console.log(twoSum([2, 3, 4], 6));           //! [1,3]
console.log(twoSum([-1, 0], -1));            //! [1,2]