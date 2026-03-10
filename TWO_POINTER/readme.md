# 🚀 Two Pointer Pattern – Top 20 DSA Questions

**Goal:** Master the Two Pointer technique for Product Company Interviews  
**Difficulty:** Easy → Medium → Hard  
**Language:** JavaScript / TypeScript Friendly

---

# 🧠 What is Two Pointer?

Two pointer technique uses **two indices moving through the array/string** to reduce time complexity.

Common uses:

- Sorted arrays
- Subarray problems
- Pair sum problems
- Palindrome checking
- Sliding window

**Time Optimization**

```
Brute Force → O(n²)
Two Pointer → O(n)
```

---

# 🟢 EASY PROBLEMS

---

### Q1) Remove Duplicates from Sorted Array  
*(Classic Two Pointer)*

**Pattern:** Slow & Fast Pointer

**Link**
- LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

**Status:** ✅

---

### Q2) Valid Palindrome  

**Pattern:** Left & Right Pointer

**Link**
- LeetCode: https://leetcode.com/problems/valid-palindrome/

**Status:** ✅

---

### Q3) Move Zeroes  

**Pattern:** Slow Fast Pointer (Stable Compaction)

**Link**
- LeetCode: https://leetcode.com/problems/move-zeroes/

**Status:** ✅

---

### Q4) Two Sum II – Input Array Is Sorted  

**Pattern:** Left Right Pointer

**Link**
- LeetCode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

**Status:** ✅

---

### Q5) Reverse String  

**Pattern:** Two Pointer Swap

**Link**
- LeetCode: https://leetcode.com/problems/reverse-string/

**Status:** ❌

---

### Q6) Squares of a Sorted Array  

**Pattern:** Two Pointer from both ends

**Link**
- LeetCode: https://leetcode.com/problems/squares-of-a-sorted-array/

**Status:** ❌

---

# 🟡 MEDIUM PROBLEMS

---

### Q7) Container With Most Water  
*(Very Famous Interview Question)*

**Pattern:** Two Pointer Optimization

**Link**
- LeetCode: https://leetcode.com/problems/container-with-most-water/

**Status:** ✅

---

### Q8) Sort Colors (Dutch National Flag)

**Pattern:** Three Pointer

**Link**
- LeetCode: https://leetcode.com/problems/sort-colors/

**Status:** ✅

---

### Q9) Count Pairs Whose Sum is Less than Target  

**Pattern:** Sorting + Two Pointer

**Link**
- LeetCode: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

**Status:** ✅

---

### Q10) 3Sum  
*(Most Asked FAANG Problem)*

**Pattern:** Sorting + Two Pointer

**Link**
- LeetCode: https://leetcode.com/problems/3sum/

**Status:** ✅

---

### Q11) Remove Duplicates from Sorted Array II  

**Pattern:** Slow Fast Pointer + Frequency Control

**Link**
- LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

**Status:** ✅

---

### Q12) Maximum Erasure Value  

**Pattern:** Sliding Window + Two Pointer

**Link**
- LeetCode: https://leetcode.com/problems/maximum-erasure-value/

**Status:** ✅

---

### Q13) Append Characters to String to Make Subsequence  

**Pattern:** Subsequence Matching (Two Pointer)

**Link**
- LeetCode: https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/

**Status:** ✅

---

### Q14) Merge Sorted Array  

**Pattern:** Two Pointer from end

**Link**
- LeetCode: https://leetcode.com/problems/merge-sorted-array/

**Status:** ❌

---

### Q15) Backspace String Compare  

**Pattern:** Reverse Two Pointer

**Link**
- LeetCode: https://leetcode.com/problems/backspace-string-compare/

**Status:** ❌

---

# 🔴 HARD PROBLEMS

---

### Q16) Trapping Rain Water  
*(Classic Hard Interview Question)*

**Pattern:** Two Pointer + Prefix/Suffix

**Link**
- LeetCode: https://leetcode.com/problems/trapping-rain-water/

**Status:** ✅

---

### Q17) 4Sum  

**Pattern:** Sorting + Two Pointer + Nested Loop

**Link**
- LeetCode: https://leetcode.com/problems/4sum/

**Status:** ❌

---

### Q18) Minimum Window Substring  

**Pattern:** Sliding Window

**Link**
- LeetCode: https://leetcode.com/problems/minimum-window-substring/

**Status:** ❌

---

### Q19) Shortest Unsorted Continuous Subarray  

**Pattern:** Two Pointer / Stack

**Link**
- LeetCode: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

**Status:** ❌

---

### Q20) Partition Labels  

**Pattern:** Greedy + Two Pointer

**Link**
- LeetCode: https://leetcode.com/problems/partition-labels/

**Status:** ❌

---

# 📊 Progress Tracker

| Level | Completed |
|------|-----------|
| Easy | 4 / 6 |
| Medium | 7 / 9 |
| Hard | 1 / 5 |

---

# 🧩 Common Two Pointer Patterns

### 1️⃣ Opposite Direction

```
left = 0
right = n-1

while(left < right){
    // logic
}
```

Example:
- Container With Most Water
- Two Sum Sorted
- Valid Palindrome

---

### 2️⃣ Slow Fast Pointer

```
slow = 0

for fast in range(n):
    if condition:
        nums[slow] = nums[fast]
        slow++
```

Example:
- Move Zeroes
- Remove Duplicates

---

### 3️⃣ Sliding Window

```
left = 0

for right in range(n):
    expand window
    
    while(condition invalid):
        shrink window
```

Example:
- Maximum Unique Subarray
- Longest Substring Without Repeating Characters

---

# 🏆 Interview Tip

If the problem contains:

- **Sorted array**
- **Pair sum**
- **Palindrome**
- **Subsequence**
- **Window**

👉 **Think Two Pointer First**

---

# 👨‍💻 Author

**Akash — Fullstack Developer**

```
DSA | System Design | AI | Backend Engineering
```