
 //! 219. Contains Duplicate II
 //? https://leetcode.com/problems/contains-duplicate-ii/

 //* Given an integer array nums and an integer k,
 //* return true if there are two distinct indices i and j
 //* such that nums[i] === nums[j] and Math.abs(i - j) <= k.
 //* Otherwise, return false.
 
 //! Example 1:
 //? Input: nums = [1,2,3,1], k = 3
 //? Output: true
 //? Explanation: nums[0] === nums[3] and abs(0 - 3) = 3.

 //! Example 2:
 //? Input: nums = [1,0,1,1], k = 1
 //? Output: true
 //? Explanation: nums[2] === nums[3] and abs(2 - 3) = 1.

 //! Example 3:
 //? Input: nums = [1,2,3,1,2,3], k = 2
 //? Output: false
 //? Explanation: No duplicate values exist within distance k.

 /**
  * @param {number[]} nums
  * @param {number} k
  * @return {boolean}
  */

 var containsNearbyDuplicate = function (nums, k) {
     const window = new Set();

     for (let right = 0; right < nums.length; right++) {

         // Check if the current element already exists
         if (window.has(nums[right])) {
             return true;
         }

         // Add the current element to the Set
         window.add(nums[right]);

         // Remove the element outside the allowed window
         if (window.size > k) {
             window.delete(nums[right - k]);
         }
     }

     // No nearby duplicate found
     return false;
 };

 //! Time Complexity: O(n)
 //! Space Complexity: O(min(n, k))

 //* Test Cases
 console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));       //! true
 console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));       //! true
 console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); //! false
 console.log(containsNearbyDuplicate([1, 2, 3, 4], 2));        //! false
 console.log(containsNearbyDuplicate([1, 1], 0));              //! false
 console.log(containsNearbyDuplicate([1, 2, 1], 2));           //! true
