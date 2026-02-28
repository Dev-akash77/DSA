"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}
/**
 *! 1 | Linked List Cycle
 ** LeetCode: https://leetcode.com/problems/linked-list-cycle/
 ** GFG: https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
 *
 * --------------------------------------------------------------
 *! TECHNIQUE:
 *! Fast & Slow Pointer (Floyd’s Cycle Detection Algorithm)
 *
 *? PATTERN:
 *? Two Pointers
 *? One pointer moves 1 step, other moves 2 steps
 *? If they meet → cycle exists
 *
 *! ALGO NAME:
 *! Floyd’s Tortoise and Hare Algorithm
 *
 *? TIME COMPLEXITY: O(n)
 *? SPACE COMPLEXITY: O(1)
 *
 *! ASKED IN:
 *! Google, Amazon, Meta, Microsoft, Uber, Bloomberg,
 *! Adobe, Oracle, Walmart Labs, Atlassian
 *
 *? IMPORTANCE (out of 5):
 *?⭐⭐⭐⭐⭐ (5/5) — Must-do Linked List concept
 *
 *? --------------------------------------------------------------
 *! EXAMPLE:
 *
 ** Input: head = [3,2,0,-4], pos = 1
 ** Output: true
 ** Explanation: Tail connects to node at index 1
 *
 ** Input: head = [1,2], pos = 0
 ** Output: true
 *
 ** Input: head = [1], pos = -1
 ** Output: false
 *
 *? --------------------------------------------------------------
 */
function hasCycle(head) {
    if (!head)
        return false;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}
// ! Test Case
// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
//?  Create cycle
// node4.next = node2;
// console.log(hasCycle(node1)); //? true
/**
 *! 2 | Linked List Cycle II
 ** LeetCode: https://leetcode.com/problems/linked-list-cycle-ii/
 ** GFG: https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/
 *
 * --------------------------------------------------------------
 *! TECHNIQUE:
 *! Fast & Slow Pointer + Mathematical Proof
 *
 *? PATTERN:
 *? Detect cycle first
 *? After meeting, move one pointer to head
 *? Move both 1 step at a time
 *? Where they meet again → start of cycle
 *
 *! ALGO NAME:
 *! Floyd’s Tortoise and Hare Algorithm (Extended)
 *
 *? TIME COMPLEXITY: O(n)
 *? SPACE COMPLEXITY: O(1)
 *
 *! ASKED IN:
 *! Google, Amazon, Meta, Microsoft, Bloomberg,
 *! Uber, Adobe, Atlassian
 *
 *? IMPORTANCE (out of 5):
 *? ⭐⭐⭐⭐⭐ (5/5) — Very Important Follow-up Question
 *
 *? --------------------------------------------------------------
 *! EXAMPLE:
 *
 ** Input: head = [3,2,0,-4], pos = 1
 ** Output: node with value 2
 ** Explanation: Tail connects to node at index 1
 *
 *? --------------------------------------------------------------
 */
function detectCycle(head) {
    if (!head)
        return null;
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            let entry = head;
            while (entry != slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }
    return null;
}
//! Create nodes
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);
//! Connect normally
node1.next = node2;
node2.next = node3;
node3.next = node4;
//! Create cycle (pos = 1)
node4.next = node2;
// Test
const result = detectCycle(node1);
console.log(result?.val); //? Expected Output: 2
//# sourceMappingURL=question.js.map