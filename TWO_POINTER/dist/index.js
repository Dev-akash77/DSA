"use strict";
//! Q1. Remove Duplicates from Sorted Array
//? https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Object.defineProperty(exports, "__esModule", { value: true });
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
const removeDuplicates = (nums) => {
    let ans = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[ans]) {
            ans++;
            nums[ans] = nums[i];
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
const maxArea = (nums) => {
    let maxWater = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const minHeight = Math.min(nums[left], nums[right]);
        const width = Math.round(right - left);
        const area = Math.round(minHeight * width);
        maxWater = Math.max(area, maxWater);
        if (nums[left] < nums[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxWater;
};
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
//! Q3: Valid Palindrome
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
const isPalindrome = (s) => {
    // ! pointer
    let left = 0;
    let right = s.length - 1;
    const isAlpha = (letter) => {
        return /[a-zA-Z0-9]/.test(letter);
    };
    while (left < right) {
        while (left < right && !isAlpha(s[left])) {
            left++;
        }
        while (left < right && !isAlpha(s[right])) {
            right--;
        }
        if (s[left]?.toLowerCase() !== s[right]?.toLowerCase())
            return false;
        left++;
        right--;
    }
    return true;
};
// console.log(isPalindrome("race a car")); // false
//! Q4. Sort Colors (0, 1, 2)
//? https://leetcode.com/problems/sort-colors/
//* Input:  nums = [2,0,2,1,1,0]
//* Output: [0,0,1,1,2,2]
//* Meaning: Sort array containing only 0, 1, 2 (in-place, one pass).
//! Intuition:
//! We use the Dutch National Flag algorithm.
//! Maintain three regions using 3 pointers:
//!   - low  → where next 0 should go
//!   - mid  → current index scanning
//!   - high → where next 2 should go
//! If nums[mid] == 0 → swap with low → expand 0s region
//! If nums[mid] == 1 → mid++ (1 stays in middle)
//! If nums[mid] == 2 → swap with high → shrink 2s region
//! Algorithm (Three-Pointer):
//! 1. Initialize: low = 0, mid = 0, high = n-1
//! 2. While mid <= high:
//!       - If nums[mid] == 0:
//!             swap(nums[low], nums[mid])
//!             low++, mid++
//!       - Else If nums[mid] == 1:
//!             mid++
//!       - Else (nums[mid] == 2):
//!             swap(nums[mid], nums[high])
//!             high--
//! 3. Array will be sorted in-place.
//! Time Complexity: O(n)
//! Space Complexity: O(1)
//! Asked In: Google, Amazon, Microsoft, Facebook
const sortColors = (nums) => {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            mid++;
            low++;
        }
        else if (nums[mid] === 1) {
            mid++;
        }
        else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
};
// console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
//! Q5. Move All Zeroes to the End
//? https://leetcode.com/problems/move-zeroes/
//* Input:  nums = [0,1,0,3,12]
//* Output: [1,3,12,0,0]
//* Meaning: Move all zeros to the end, maintain the order of non-zero elements.
//! Intuition:
//! Use the Two-Pointer technique (slow & fast).
//! - fast pointer → scans the array
//! - slow pointer → position to place next non-zero
//! When nums[fast] != 0 → copy value to nums[slow], then slow++
//! After placing all non-zero elements in front, fill remaining positions with 0.
//!
//! This ensures:
//! - all non-zero elements stay in original order
//! - zeros go to the end
//! - done in-place, O(1) extra space
//! Algorithm (Most Optimal):
//! 1. Initialize slow = 0
//! 2. Loop fast from 0 to n-1:
//!       - If nums[fast] != 0:
//!             nums[slow] = nums[fast]
//!             slow++
//! 3. After loop, fill nums[slow…end] = 0
//! Time Complexity: O(n)
//! Space Complexity: O(1)
//! Pattern: Two Pointers (Slow–Fast), Stable Compaction
//! Asked In: Google, Amazon, Microsoft, Adobe, Walmart, Infosys, TCS Digital
const moveZeroes = (nums) => {
    const n = nums.length;
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            nums[j++] = nums[i];
        }
    }
    while (j < n)
        nums[j++] = 0;
    return nums;
};
// console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
//! Q6. Trapping Rain Water
//? https://leetcode.com/problems/trapping-rain-water/
//* Input:  [4,2,0,3,2,5]
//* Output: 9
//! Intuition:
//! Two pointers + running leftMax/rightMax.
//! Water depends on the smaller side.
//! Add (maxSide - height) whenever height is smaller.
//! Algorithm:
//! 1. left=0, right=n-1, leftMax=0, rightMax=0, ans=0
//! 2. While left < right:
//!       - If height[left] < height[right]:
//!             leftMax = max(leftMax, height[left])
//!             ans += leftMax - height[left]
//!             left++
//!         Else:
//!             rightMax = max(rightMax, height[right])
//!             ans += rightMax - height[right]
//!             right--
//! 3. Return ans
//! TC: O(n)
//! SC: O(1)
const trap = (height) => {
    let ans = 0;
    const n = height.length;
    //! prefix
    const left = Array(n);
    //! suffix
    const right = Array(n);
    // ! check all left max
    left[0] = height[0];
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    // ! check all right max
    right[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }
    for (let i = 0; i < n; i++) {
        let minh = Math.min(left[i], right[i]);
        ans += minh - height[i];
    }
    return ans;
};
// console.log(trap([4,2,0,3,2,5])); // 9
// trap([4, 2, 0, 3, 2, 5]); // 9
//! Q7. Maximum Subarray Sum Without Repeating Elements
//? https://leetcode.com/problems/maximum-erasure-value/
//* Input: nums = [4,2,4,5,6]
//* Output: 17  → subarray [2,4,5,6]
//! Intuition:
//! Use sliding window.
//! Window must contain UNIQUE elements.
//! left/right pointers + Set + running sum.
//! Algorithm:
//! 1. left = 0, sum = 0, maxSum = 0, set = new Set()
//! 2. For right from 0 → n-1:
//!       - While duplicate found:
//!             remove nums[left] from set
//!             sum -= nums[left]
//!             left++
//!       - Add nums[right] to set & sum
//!       - maxSum = max(maxSum, sum)
//! 3. Return maxSum
//! Time: O(n)
//! Space: O(n)
function maximumUniqueSubarray(nums) {
    let maxSum = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        const set = new Set();
        for (let j = i; j < n; j++) {
            if (set.has(nums[j]))
                break;
            set.add(nums[j]);
            sum += nums[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
const nums = [4, 2, 4, 5, 6];
// console.log(maximumUniqueSubarray(nums));
// maximumUniqueSubarray(nums);
// Output: 17
// Unique subarray: [2, 4, 5, 6]
//# sourceMappingURL=index.js.map