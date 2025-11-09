//! Q1. Left Rotate an Array
//? Example:
//* Input: [1, 2, 3, 4, 5]
//* Output: [2,3,4,5,1]

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length - 1;
// let fe = arr[0];

// for (i = 0; i < n; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[n - 1] = fe;

// console.log(arr);

//! Q2. Right Rotate an Array
//? Example:
//* Input: [1, 2, 3, 4, 5]
//* Output: [5, 1, 2, 3, 4]

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length-1;
// let end =arr[n];

// for (let i = n; i >= 0; i--) {
//     arr[i] = arr[i-1];
// }
// arr[0] = end;

// console.log(arr);

//! Q3. Left Rotate an Array by k positions
//? Example:
//* Input: [1, 2, 3, 4, 5], k = 2
//* Output: [3, 4, 5, 1, 2]

// let arr = [1, 2, 3, 4, 5];
// let n = arr.length - 1;
// let k = 6 % arr.length;

// for (let i = 0; i < k; i++) {

//   let st = arr[0];
//   for (let j = 0; j < n; j++) {
//     arr[j] = arr[j + 1];
//   }
//   arr[n] = st;
// }

// console.log(arr);

//! Q4. Best Time to Buy and Sell Stock
//? https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
//* Input: [7,1,5,3,6,4]
//* Output: 5
//* Explanation: Buy at 1 and sell at 6 (profit = 5)

// function maxProfit(nums){
//     let maxProfit = 0;
//     let minPrice = nums[0];

//     for (let i = 0; i < nums.length-1; i++) {
//         minPrice = Math.min(minPrice,nums[i]);

//         if (nums[i]>maxProfit) {
//             maxProfit = Math.max(maxProfit, nums[i] - minPrice);
//         }

//     }
//     return maxProfit
// }

// console.log(maxProfit([7,1,5,3,6,4]));

//! Q5. Maximum Subarray Sum
//? https://leetcode.com/problems/maximum-subarray/
//* Input: [-2,1,-3,4,-1,2,1,-5,4]
//* Output: 6
//* Explanation: Subarray [4,-1,2,1] has the largest sum = 6
//! Algorithm: Kadane's Algorithm
//! Time Complexity: O(n)
//! Space Complexity: O(1)
//! Asked In: Amazon, Microsoft, Google, Apple, Facebook

// function maxSubArray(nums) {
//   let n = nums.length-1;
//   let maxSum = -Infinity;
//   let currentSum = nums[0];
//   for (let i = 0; i < n; i++) {
//     currentSum = Math.max(nums[i],currentSum+nums[i]);

//     if(currentSum <0) currentSum =0;
//     maxSum = Math.max(maxSum,currentSum);

//   }
//   return maxSum;

// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//! Q6. Two Sum
//? https://leetcode.com/problems/two-sum/
//* Input: nums = [2,7,11,15], target = 9
//* Output: [0,1]
//* Explanation: Because nums[0] + nums[1] = 2 + 7 = 9
//! Algorithm: Hash Map (store seen numbers and check complement)
//! Time Complexity: O(n)
//! Space Complexity: O(n)
//! Asked In: Amazon, Microsoft, Google, Apple, Facebook

// function twoSum(nums, t) {
//   let map = new Map();
//   let n = nums.length;

//   for (let i = 0; i < n; i++) {
//     let target = t - nums[i];

//     if (map.has(target)) {
//       return [map.get(target),i]
//     }
//     map.set(nums[i],i);
//   }

//   return [];

// }

// console.log(twoSum([2,7,11,15], 9));

//! Q7. Majority Element
//? https://leetcode.com/problems/majority-element/
//* Input: nums = [3,2,3]
//* Output: 3
//* Explanation: 3 appears more than ⌊n / 2⌋ times.
//! Algorithm: Boyer-Moore Voting Algorithm
//! Time Complexity: O(n)
//! Space Complexity: O(1)
//! Asked In: Amazon, Microsoft, Google, Apple, Facebook

// const majorityElement = function (nums) {
//   let max = 0;
//   let el = null;

//   for (let i = 0; i < nums.length; i++) {
//     if (max === 0) {
//       el = nums[i];
//       max = 1;
//     }else if (el === nums[i]) {
//       max++;
//     } else {
//       max--;
//     }
//   }

//   console.log(el);

// };
// majorityElement([6, 5, 5]);

//! Q8. Rearrange Array Elements by Sign
//? https://leetcode.com/problems/rearrange-array-elements-by-sign/

//* Problem:
//* You are given a 0-indexed integer array nums of even length
//* consisting of an equal number of positive and negative integers.
//* You should rearrange the elements of nums such that the modified
//* array follows the following conditions:
//*   • Every consecutive pair of integers have opposite signs.
//*   • For all integers with the same sign, the order in which they were
//*     present in nums is preserved.
//* The rearranged array should be returned.

//* Example 1:
//* Input: nums = [3,1,-2,-5,2,-4]
//* Output: [3,-2,1,-5,2,-4]

//* Example 2:
//* Input: nums = [-1,1]
//* Output: [1,-1]

//! Algorithm: Two-Pointer Placement Algorithm

//! Time Complexity: O(n)
//! Space Complexity: O(n) (extra result array)

//! Asked In: Amazon, Microsoft, Google, Goldman Sachs, Bloomberg

// const rearrangeArray = function(nums) {
//   let res = new Array(nums.length);
//   let pos = 0;
//   let neg = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       res[pos] = nums[i];
//       pos += 2;
//     } else {
//       res[neg] = nums[i];
//       neg += 2;
//     }
//   }

//   return res;
// };

// //* Test Cases
// console.log(rearrangeArray([3,1,-2,-5,2,-4])); // Output: [3,-2,1,-5,2,-4]
// console.log(rearrangeArray([-1,1]));           // Output: [1,-1]

//! Q9. Leaders in an Array
//? https://www.geeksforgeeks.org/leaders-in-an-array/

//* Problem:
//* An element of an array is called a "leader" if it is greater than or equal
//* to all the elements to its right side.
//* The rightmost element is always a leader.
//*
//* You need to find all the leaders in the given array.

//* Example 1:
//* Input: arr = [16, 17, 4, 3, 5, 2]
//* Output: [17, 5, 2]
//* Explanation:
//* 17 > (4,3,5,2)
//* 5 > (2)
//* 2 is last element → leader

//* Example 2:
//* Input: arr = [1, 2, 3, 4, 0]
//* Output: [4, 0]

//! Algorithm: Right-to-Left Scan
//* - Start scanning array from rightmost element
//* - Keep track of the maximum seen so far (initially last element)
//* - If current element >= maxSoFar → it’s a leader, update maxSoFar
//* - Store leaders, then reverse at the end (to maintain left-to-right order)

//! Time Complexity: O(n)
//! Space Complexity: O(n) (for storing leaders)

//! Asked In: Amazon, Microsoft, Adobe, Goldman Sachs, Infosys

const leaders = function (arr) {
  let n = arr.length-1;
  let maxi =  -Infinity;
  let leaders = [];

  for(let i = n; i>=0; i--){
    if (arr[i] >= maxi) {
        leaders.push(arr[i]);
    }
    maxi =  Math.max(arr[i],maxi);
  }
  return leaders.reverse()
};

//* Test Cases
console.log(leaders([16, 17, 4, 3, 5, 2])); // Output: [17, 5, 2]
console.log(leaders([1, 2, 3, 4, 0]));      // Output: [4, 0]
console.log(leaders([7, 10, 4, 10, 6, 5, 2])); // Output: [10, 10, 6, 5, 2]
