
/**
 *! 1 | Longest Substring Without Repeating Characters
 ** LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 ** GFG: https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
 *
 * --------------------------------------------------------------
 *! TECHNIQUE:
 *! Sliding Window + HashMap (Set)
 *
 *? PATTERN:
 *? Variable-size sliding window
 *? Expand window until duplicate appears → shrink from left
 *
 *! ALGO NAME:
 *! Two Pointers + HashSet Sliding Window
 *
 *? TIME COMPLEXITY: O(n)
 *? SPACE COMPLEXITY: O(min(n, alphabet))
 *
 *! ASKED IN:
 *! Google, Amazon, Meta, Microsoft, Uber, Bloomberg,
 *! Adobe, Oracle, Walmart Labs, Atlassian (MOST ASKED)
 *
 *? IMPORTANCE (out of 5):
 *?⭐⭐⭐⭐⭐ (5/5) — Must-do sliding window question
 *
 *? --------------------------------------------------------------
 *! EXAMPLE:
 *
 ** Input:  s = "abcabcbb"
 ** Output: 3
 ** Explanation: "abc" is the longest substring without repeating chars.
 *
 ** Input:  s = "bbbbb"
 ** Output: 1
 *
 ** Input:  s = "pwwkew"
 ** Output: 3  -> "wke"
 *
 *? --------------------------------------------------------------
 */
import java.util.ArrayList;

public class TwoPointerAlgo {

    public static int longestSubstring(String s) {
        int res = 0;
        int n = s.length();
        int j = 0;
        ArrayList<Character> set = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            char ch = s.charAt(i);

            while (set.contains(ch)) {
                set.remove(Character.valueOf(s.charAt(j)));
                j++;
            }
            set.add((ch));
            res = Math.max(res, i - j + 1);
        }

        return res;

    }
    public static void main(String[] args) {
        System.out.println(longestSubstring("abcabcbb")); // 3 
        System.out.println(longestSubstring("bbbbbbbb")); // 1 
    }

}
