//! Q2. Remove Duplicates from Sorted Array
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


const removeDuplicates=(nums: number[]):number=>{
    let ans:number = 0;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] != nums[ans]) {
            ans++;
          nums[ans]! = nums[i]!;
        }

        
    }
    return ans+1;
}

console.log(removeDuplicates([ 0,0,1,1,1,2,2,3,3,4 ]));
