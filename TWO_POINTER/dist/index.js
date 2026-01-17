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
    const map = new Map();
    let l = 0;
    let sum = 0;
    for (let r = 0; r < n; r++) {
        const x = nums[r];
        if (map.has(x) && map.get(x) >= l) {
            let newL = map.get(x) + 1;
            for (let i = l; i < newL; i++) {
                sum -= nums[i];
            }
            l = newL;
        }
        sum += x;
        map.set(x, r);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}
// const nums = [4, 2, 4, 5, 6];
// console.log(maximumUniqueSubarray(nums));
// maximumUniqueSubarray(nums);
// Output: 17
// Unique subarray: [2, 4, 5, 6]
//! Q8. Two Sum II - Input Array Is Sorted
//? https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
//* Input:  numbers = [2,7,11,15], target = 9
//* Output: [1,2]
//* Explanation: numbers[0] + numbers[1] = 2 + 7 = 9 (1-based index)
//! Intuition:
//! Array already sorted hai.
//! Two pointers use karo (left & right).
//! Agar sum chota hai → left++
//! Agar sum bada hai → right--
//! Exact target mila → answer mil gaya.
//! Algorithm:
//! 1. left = 0, right = n-1
//! 2. While left < right:
//!       - sum = numbers[left] + numbers[right]
//!       - If sum == target → return [left+1, right+1]
//!       - If sum < target → left++
//!       - Else → right--
//! 3. Guaranteed solution exists (as per problem)
//! TC: O(n)
//! SC: O(1)
const twoSum = (numbers, target) => {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target)
            return [i + 1, j + 1];
        if (sum < target)
            i++;
        if (sum > target)
            j--;
    }
    return [];
};
// console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
// console.log(twoSum([2, 3, 4], 6)); // [1,3]
// console.log(twoSum([5, 25, 75], 100)); // [2,3]
//! Q9. Count Pairs Whose Sum is Less than Target
//? https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
//* Input:  nums = [-1,1,2,3,1], target = 2
//* Output: 3
//* Explanation:
//* Pairs are:
//* (-1,1) -> 0
//* (-1,1) -> 0
//* (-1,2) -> 1
//! Intuition:
//! Array ko pehle sort karna padega.
//! Two pointers use karenge (left & right).
//! TC: O(n log n)  // sorting
//! SC: O(1)
const countPairs = (nums, target) => {
    nums.sort((a, b) => a - b);
    let count = 0;
    let j = nums.length - 1;
    let i = 0;
    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum < target) {
            count += j - i;
            i++;
        }
        else {
            j--;
        }
    }
    return count;
};
// ?------test case------------------------------------------
// console.log(countPairs([-1,1,2,3,1], 2)); // 3
//  countPairs([-1,1,2,3,1], 2); // 3
// console.log(countPairs([0,-1,2,-3,1], -2)); // 2
//! Q10. 3Sum
//? https://leetcode.com/problems/3sum/
//* Input:  nums = [-1,0,1,2,-1,-4]
//* Output: [[-1,-1,2],[-1,0,1]]
//! Intuition:
//! Pehle array sort karenge.
//! Ek number fix karenge (i).
//! Baaki ke liye Two Sum (left & right pointers).
//! Duplicate triplets avoid karna hoga.
//! TC: O(n^2)
//! SC: O(1) (excluding output)
const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1])
                    left++;
                while (left < right && nums[right] === nums[right + 1])
                    right--;
            }
            else if (sum > 0) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    return res;
};
// ?------test case------------------------------------------
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
//! Q11. Remove Duplicates from Sorted Array II
//? https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
//* Input:  nums = [1,1,1,2,2,3]
//* Output: 5
//* Modified nums = [1,1,2,2,3]
//! Intuition:
//! Array already sorted hai.
//! Har number max 2 times allowed hai.
//! Ek pointer (res) rakhenge jahan next valid element likhna hai.
//! Ek count rakhenge jo current number ka frequency track kare.
//! Approach:
//! 1. Agar size <= 2 ho, directly return n.
//! 2. First element ko rakh ke start karenge.
//! 3. Same number mila → count++
//! 4. Naya number mila → count reset = 1
//! 5. Jab tak count <= 2, element ko nums[res] par place karte rahenge.
//! TC: O(n)
//! SC: O(1)
const removeDuplicate = (nums) => {
    const n = nums.length;
    if (n <= 2)
        return n;
    let count = 1; // current element count
    let res = 1; // position to place next valid element
    for (let i = 1; i < n; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        }
        else {
            count = 1;
        }
        if (count <= 2) {
            nums[res] = nums[i];
            res++;
        }
    }
    return res;
};
// ?------test case------------------------------------------
// const input = [1, 1, 1, 2, 2, 3];
// const k = removeDuplicate(input);
// console.log(k); // 5
// console.log(input.slice(0, k)); // [1,1,2,2,3]
//! Q13. Append Characters to String to Make Subsequence
//? https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/
//* Input:
//* s = "coaching", t = "coding"
//* Output: 4
//*
//* Explanation:
//* We want to make `t` a subsequence of `s` by appending characters at the end of `s`.
//* Find how many characters of `t` are NOT matched in order with `s`.
//! Meaning:
//! - We try to match `t` inside `s` from left to right
//! - Characters of `t` that are not matched must be appended
//! - Return number of characters to append
//! Intuition:
//! Use Two Pointers technique
//! - Pointer `i` → traverse string `s`
//! - Pointer `j` → traverse string `t`
//!
//! If s[i] == t[j]:
//!     → character matched
//!     → move `j` forward
//! Always move `i` forward
//!
//! After traversal:
//! - `j` tells how many characters of `t` are already matched
//! - Remaining characters = t.length - j
//! - These must be appended
//! Algorithm (Optimal):
//! 1. Initialize i = 0, j = 0
//! 2. While i < s.length and j < t.length:
//!       - If s[i] === t[j]:
//!             j++
//!       - i++
//! 3. Return (t.length - j)
//! Time Complexity: O(n)
//! Space Complexity: O(1)
//! Pattern: Two Pointers (Subsequence Matching)
//! Asked In: Amazon, Google, Microsoft (String + Two Pointer round)
function appendCharacters(s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            j++;
        }
        i++;
    }
    return t.length - j;
}
//* Test Cases
console.log(appendCharacters("coaching", "coding")); // 4
console.log(appendCharacters("abcde", "a")); // 0
console.log(appendCharacters("a", "a")); // 0
//# sourceMappingURL=index.js.map