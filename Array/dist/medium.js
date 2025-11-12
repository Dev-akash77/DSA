"use strict";
//! Q1. Next Permutation
//? https://leetcode.com/problems/next-permutation/
//* Input: nums = [1,2,3]
//* Output: [1,3,2]
//* Explanation: The next permutation of [1,2,3] is [1,3,2].
//! Algorithm:
//! 1. Find first decreasing element from right (pivot).
//! 2. Find element just greater than pivot from right.
//! 3. Swap pivot and that element.
//! 4. Reverse right part after pivot.
//! Time Complexity: O(n)
//! Space Complexity: O(1)
//! Asked In: Amazon, Microsoft, Google, Apple, Facebook
Object.defineProperty(exports, "__esModule", { value: true });
// const nextPermutation = function(nums) {
//     const n = nums.length;
//     let index = -1;
//     // Step 1: find first decreasing element from right
//     for (let i = n - 2; i >= 0; i--) {
//         if (nums[i] < nums[i + 1]) {
//             index = i;
//             break;
//         }
//     }
//     // Step 2: if pivot found, find element just bigger than nums[index] from right
//     if (index !== -1) {
//         for (let i = n - 1; i > index; i--) {
//             if (nums[i] > nums[index]) {
//                 [nums[i], nums[index]] = [nums[index], nums[i]]; // swap
//                 break;
//             }
//         }
//     }
//     // Step 3: reverse right half after index
//     let left = index + 1;
//     let right = n - 1;
//     while (left < right) {
//         [nums[left], nums[right]] = [nums[right], nums[left]];
//         left++;
//         right--;
//     }
//     console.log(nums);
//     return nums;
// };
// // Example Run
// nextPermutation([1, 2, 3]); // Output: [1,3,2]
//! Q2. Longest Increasing Subsequence
//? https://leetcode.com/problems/longest-increasing-subsequence/
//* Input: nums = [10,9,2,5,3,7,101,18]
//* Output: 4
//* Explanation: The LIS is [2,3,7,101], therefore length = 4.
//! Algorithm (Binary Search, O(n log n)):
//! 1. Create an empty array `sub`.
//! 2. Traverse each number in nums.
//! 3. Use binary search to find position of current num in `sub`.
//!    - If num is bigger than all elements → push at end.
//!    - Else replace the element at found position.
//! 4. Length of `sub` = LIS length.
//! Time Complexity: O(n log n)
//! Space Complexity: O(n)
//! Asked In: Amazon, Microsoft, Google, Apple, Facebook
// const lengthOfLIS = function(nums) {
//     let set = new Set(nums);
//     let ans = 0;
//     for (let num of set) {
//         if (! set.has(num-1)) {
//            let current = num;
//            let count = 1;
//            while(set.has(current+1)){
//                count++
//                current++
//            }
//            ans  = Math.max(ans,count)
//         }
//     }
//     return ans
// };
// // Example Run
// console.log(lengthOfLIS([1,2,4,7,20,21,22,23])); // Output: 4
//! Q3. Majority Element II (n/3 times)
//? https://leetcode.com/problems/majority-element-ii/
//* Input: nums = [1,1,1,3,3,2,2,2]
//* Output: [1,2]
//* Explanation: 1 appears 3 times, 2 appears 3 times → both > n/3.
//!
//! Key Observation:
//! - A number is majority if it appears more than ⌊ n/3 ⌋ times.
//! - At most **2 elements** can satisfy this condition.
//!
//! Asked In: Google, Amazon, Microsoft, Meta, Adobe
// const majorityElementBrute = function (nums) {
//   const n = nums.length;
//   let el1 = 0;
//   let count1 = 0;
//   let el2 = 0;
//   let count2 = 0;
//   for (let i = 0; i < n; i++) {
//     if (count1 === 0 && nums[i] != el2) {
//       count1 = 1;
//       el1 = nums[i];
//     } else if (count2 === 0 && nums[i] != el1) {
//       count2 = 1;
//       el2 = nums[i];
//     } else if (nums[i] === el1) {
//       count1++;
//     } else if (nums[i] === el2) {
//       count2++;
//     } else {
//       count1--;
//       count2--;
//     }
//   }
//   count1 = 0;
//   count2 = 0;
//   const ls = [];
//   for (let num of nums) {
//     if (el1 === num) count1++;
//     if (el2 === num) count2++;
//   }
//   const target = Math.floor(n / 3);
//   if (count1 > target) ls.push(el1);
//   if (count2 > target) ls.push(el2);
//   ls.sort((a, b) => a - b);
//   return ls;
// };
// // Example Run
// console.log(majorityElementBrute([1, 1, 1, 3, 3, 2, 2, 2])); // Output: [1,2]
//! Q4 3Sum
// //? https://leetcode.com/problems/3sum/
// //* Input: nums = [-1,0,1,2,-1,-4]
// //* Output: [[-1,-1,2],[-1,0,1]]
// //* Explanation: All unique triplets where sum = 0.
// //! Key Observation:
// //! - We need to find **all unique triplets** (i, j, k) such that nums[i] + nums[j] + nums[k] == 0.
// //! - Sorting helps skip duplicates and efficiently use two-pointer technique.
// //! - This problem is an extension of the 2-sum pattern, solved in O(n^2) time.
// //!
// //! Asked In: Amazon, Google, Meta, Microsoft, Adobe, Netflix
// function threeSumBrute(nums) {
//   nums = nums.sort((a,b)=>a-b);
//   const n = nums.length - 1;
//   const ans = [];
//   for (let i = 0; i < n; i++) {
//     if(i > 0 && nums[i]===nums[i-1]) continue;
//     let j = i+1;
//     let k = n;
//     let sum = nums[i] + nums[j] + nums[k];
//     while(j<k){
//       if (sum===0) {
//         ans.push([nums[i],nums[j],nums[k]]);
//         j++;
//         k--;
//         while(j<k && nums[j]===nums[j-1]) j++;
//         while(j<k && nums[k]===nums[k+1]) k--;
//       }else if(sum<0){
//         j++
//       }else{
//         k--;
//       }
//     }
//   }
//   return ans
// }
// console.log(threeSumBrute([-1, 0, 1, 2, -1, -4])); //* Output: [[-1,-1,2],[-1,0,1]]
//! Q5 4Sum
// //? https://leetcode.com/problems/4sum/
// //* Input: nums = [1,0,-1,0,-2,2], target = 0
// //* Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// //* Explanation: All unique quadruplets that sum to target.
// //! Key Observation:
// //! - Find all unique quadruplets (i, j, k, l) such that nums[i] + nums[j] + nums[k] + nums[l] == target.
// //! - Sorting + two-pointer technique makes it efficient (extension of 3Sum).
// //! - Complexity: O(n³) (optimal for this problem).
// //!
// //! Asked In: Amazon, Google, Meta, Microsoft, Adobe, Netflix
const fourSumBrute = (nums, target) => {
    // !sort the entire array
    nums = nums.sort((a, b) => a - b);
    const n = nums.length;
    const ans = [];
    for (let i = 0; i < n - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        for (let j = i + 1; j < n - 1; j++) {
            if (j > 0 && nums[j] === nums[j - 1])
                continue;
            let k = j + 1;
            let l = n - 1;
            while (nums[k] < nums[l]) {
                const sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[k], nums[l]]);
                    while (nums[k] < nums[l] && nums[k] === nums[k - 1])
                        k++;
                    while (nums[k] < nums[l] && nums[l] === nums[l + 1])
                        l--;
                    k++;
                    l--;
                }
                else if (sum > target) {
                    l--;
                }
                else {
                    k++;
                }
            }
        }
    }
    return ans;
};
console.log(fourSumBrute([1, 0, -1, 0, -2, 2], 0)); //* Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
//# sourceMappingURL=medium.js.map