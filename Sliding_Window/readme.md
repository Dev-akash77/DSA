# 🚀 Sliding Window DSA – Top 20 Interview Questions

**Goal:** Master Sliding Window Pattern for FAANG & Product Companies  
**Difficulty Coverage:** Easy → Medium → Hard  
**Language:** JavaScript / TypeScript Friendly

---

# 🟢 EASY PROBLEMS

---

### Q1) Maximum Subarray Sum of Size K  
*(Important for Amazon, Microsoft)*

**Pattern:** Fixed Size Sliding Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/maximum-average-subarray-i/  
- GFG: https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/

**Status:** ✅

---

### Q2) First Negative Number in Every Window of Size K  
*(Important for Amazon)*

**Pattern:** Fixed Window + Queue  

**Link:**  
- GFG: https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/

**Status:** ✅

---

### Q3) Count Occurrences of Anagrams  
*(Classic Sliding Window)*

**Pattern:** Fixed Window + Frequency Map  

**Link:**  
- GFG: https://www.geeksforgeeks.org/count-occurrences-of-anagrams/

**Status:** ✅

---

### Q4) Average of Subarray of Size K  

**Pattern:** Fixed Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/maximum-average-subarray-i/

**Status:** ❌

---

### Q5) Maximum Number of Vowels in a Substring of Given Length  

**Pattern:** Fixed Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

**Status:** ❌

---

# 🟡 MEDIUM PROBLEMS

---

### Q6) Longest Substring Without Repeating Characters  
*(Most asked in FAANG)*

**Pattern:** Variable Sliding Window + HashMap  

**Link:**  
- LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/  
- GFG: https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/

**Status:** ✅

---

### Q7) Minimum Size Subarray Sum  

**Pattern:** Variable Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/minimum-size-subarray-sum/

**Status:** ✅

---

### Q8) Longest Repeating Character Replacement  

**Pattern:** Variable Window + Frequency Map  

**Link:**  
- LeetCode: https://leetcode.com/problems/longest-repeating-character-replacement/

**Status:** ❌

---

### Q9) Find All Anagrams in a String  

**Pattern:** Fixed Window + Frequency Map  

**Link:**  
- LeetCode: https://leetcode.com/problems/find-all-anagrams-in-a-string/

**Status:** ✅

---

### Q10) Longest Subarray with Sum K  

**Pattern:** Variable Window  

**Link:**  
- GFG: https://www.geeksforgeeks.org/longest-sub-array-sum-k/

**Status:** ❌

---

### Q11) Binary Subarray With Sum  

**Pattern:** Prefix Sum + Sliding Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/binary-subarrays-with-sum/

**Status:** ❌

---

### Q12) Max Consecutive Ones III  

**Pattern:** Variable Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/max-consecutive-ones-iii/

**Status:** ✅

---

### Q13) Fruit Into Baskets  

**Pattern:** At Most K Distinct Characters  

**Link:**  
- LeetCode: https://leetcode.com/problems/fruit-into-baskets/

**Status:** ❌

---

### Q14) Longest Substring with At Most K Distinct Characters  

**Pattern:** Variable Window + HashMap  

**Link:**  
- LeetCode: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

**Status:** ❌

---

### Q15) Longest Substring with Exactly K Distinct Characters  

**Pattern:** Variable Window  

**Link:**  
- GFG: https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/

**Status:** ❌

---

# 🔴 HARD PROBLEMS

---

### Q16) Minimum Window Substring  
*(FAANG Classic)*

**Pattern:** Variable Window + Frequency Map  

**Link:**  
- LeetCode: https://leetcode.com/problems/minimum-window-substring/

**Status:** ❌

---

### Q17) Sliding Window Maximum  
*(Most Important)*

**Pattern:** Deque + Sliding Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/sliding-window-maximum/

**Status:** ❌

---

### Q18) Subarrays with K Different Integers  

**Pattern:** At Most K – Sliding Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/subarrays-with-k-different-integers/

**Status:** ❌

---

### Q19) Count Number of Nice Subarrays  

**Pattern:** Sliding Window + Prefix Sum  

**Link:**  
- LeetCode: https://leetcode.com/problems/count-number-of-nice-subarrays/

**Status:** ❌

---

### Q20) Longest Substring with At Least K Repeating Characters  

**Pattern:** Divide & Conquer + Sliding Window  

**Link:**  
- LeetCode: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

**Status:** ❌

---

# 🧠 Sliding Window Pattern Cheat Sheet

### Fixed Window
```
for (right = 0 → n)
    add element
    if window size == k
        process window
        remove left element
        left++
```

### Variable Window
```
for (right = 0 → n)
    add element
    while condition invalid
        shrink window
    update answer
```

---

# 🎯 Interview Tip

**Sliding Window solves 80% of substring problems**

Look for keywords:

- `substring`
- `subarray`
- `longest`
- `smallest`
- `k size window`
- `at most k`
- `exactly k`

---

# 📊 Progress Tracker

| Level | Completed |
|------|-----------|
| Easy | 2 / 5 |
| Medium | 3 / 10 |
| Hard | 0 / 5 |

---

# 💡 Author

**Akash – Fullstack Developer**  
DSA + System Design + AI Engineering