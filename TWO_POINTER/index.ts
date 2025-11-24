//! Q1. Remove Duplicates from Sorted Array
//? https://leetcode.com/problems/remove-duplicates-from-sorted-array/

//* Input: nums = [1,1,2]
//* Output: 2, nums = [1,2,_]
//* Meaning: Return length of array after removing duplicates (in-place).

//! Intuition:
//! Array is sorted → duplicates will be adjacent.
//! Use two pointers:
//!   - slow  → points to place where next unique element should go
//!   - fast  → scans the array
//! When nums[fast] != nums[slow], move slow ahead and copy nums[fast].

//! Algorithm (Two-Pointer):
//! 1. If array is empty → return 0.
//! 2. Initialize slow = 0.
//! 3. Loop fast from 1 to n-1:
//!       - If nums[fast] != nums[slow]:
//!             slow++
//!             nums[slow] = nums[fast]
//! 4. Return slow + 1 (length of unique elements).

//! Time Complexity: O(n)
//! Space Complexity: O(1)
//! Asked In: Amazon, Google, Facebook, Bloomberg

const removeDuplicates = (nums: number[]): number => {
  let ans: number = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[ans]) {
      ans++;
      nums[ans]! = nums[i]!;
    }
  }
  return ans + 1;
};

// console.log(removeDuplicates([ 0,0,1,1,1,2,2,3,3,4 ]));

//! Q2: Container With Most Water
//? https://leetcode.com/problems/container-with-most-water/

//* Input: height = [1,8,6,2,5,4,8,3,7]
//* Output: 49

//! Intuition:
//! 2-pointer approach.
//! Left = 0, Right = last index.
//! Calculate area = min(height[left], height[right]) * (right - left)
//! Move pointer of the smaller height to maximize future area.

//! Algo:
//! 1. Initialize left = 0, right = n-1, maxWater = 0
//! 2. Loop while left < right:
//!       - Calculate area
//!       - Update maxWater
//!       - Move smaller height pointer
//! 3. Return maxWater

const maxArea = (nums: number[]): number => {
  let maxWater: number = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const minHeight = Math.min(nums[left]!, nums[right]!);

    const width: number = Math.round(right - left);

    const area = Math.round(minHeight * width);

    maxWater = Math.max(area, maxWater);

    if (nums[left]! < nums[right]!) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

//! Q: Valid Palindrome
//? https://leetcode.com/problems/valid-palindrome/

//* Input: "A man, a plan, a canal: Panama"
//* Output: true

//! Intuition:
//! Use two pointers: left at start, right at end.
//! Skip all non-alphanumeric characters.
//! Compare lowercase characters.
//! Move pointers inward until they meet.

//! Why 2-pointer is optimal?
//! - Single pass O(n)
//! - No extra string creation (memory efficient)
//! - Great for strings with filtering requirements

//! Algo:
//! 1. Initialize left = 0, right = s.length - 1
//! 2. While left < right:
//!     - Move left until alphanumeric
//!     - Move right until alphanumeric
//!     - If lowercase chars mismatch → return false
//!     - Move both pointers inward
//! 3. Return true

const isPalindrome = (s: string): boolean => {
  // ! pointer
  let left=0;
  let right = s.length-1;

  const isAlpha=(letter:string):boolean=>{
    return /[a-zA-Z0-9]/.test(letter);
  }

  while(left<right){
    while(left<right && !isAlpha(s[left]!)){
      left++;
    }
    while(left<right && !isAlpha(s[right]!)){
      right--;
    }

    if(s[left]?.toLowerCase() !== s[right]?.toLowerCase()) return false;

    left++;
    right--;


  }

  return true;
};

// console.log(isPalindrome("race a car")); // false
