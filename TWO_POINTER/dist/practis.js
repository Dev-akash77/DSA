"use strict";
// PRACTISE TWO SUM
Object.defineProperty(exports, "__esModule", { value: true });
const twosum = (nums, target) => {
    const n = nums.length;
    const map = new Map();
    for (let i = 0; i < n; i++) {
        const t = target - nums[i];
        if (map.has(t))
            return [map.get(t), i];
        else
            map.set(nums[i], 0);
    }
    return [];
};
// console.log(twosum([2,7,11,15], 9));
function isAlpha(text) {
    return /[a-zA-Z0-9]/.test(text);
}
function isPalindrome(nums) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (!isAlpha(nums[j])) {
            j--;
            continue;
        }
        if (!isAlpha(nums[i])) {
            i++;
            continue;
        }
        if (nums[j]?.toLocaleLowerCase() != nums[i]?.toLocaleLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
// console.log(isPalindrome("race a ecar")); // false
// ! reverse a sring
const reverseString = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    return nums;
};
// console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
// ! SORT COLOURS
function sortColour(nums) {
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
}
//? ----------------------------------TEST CASE---------------------------------------------------
// sortColour([2,0,2,1,1,0]);
console.log(sortColour([2, 0, 2, 1, 1, 0])); //[0,0,1,1,2,2]
console.log(sortColour([2, 0, 1])); //[0,1,2]
//# sourceMappingURL=practis.js.map