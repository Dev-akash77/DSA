class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
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

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
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




// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------



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

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast!.next.next;

    if (slow === fast) {
      let entry: ListNode | null = head;

      while (entry != slow) {
        entry = entry!.next;
        slow = slow!.next;
      }
      return entry;
    }
  }

  return null;
}

// //! Create nodes
// const node1 = new ListNode(3);
// const node2 = new ListNode(2);
// const node3 = new ListNode(0);
// const node4 = new ListNode(-4);

// //! Connect normally
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// //! Create cycle (pos = 1)
// node4.next = node2;

// // Test
// const result = detectCycle(node1);
// console.log(result?.val); //? Expected Output: 2

// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------

/**
 *! 3 | Middle of the Linked List
 */

function middleNode(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

// ! Test Case

// // Create nodes: [1,2,3,4,5]
// const m1 = new ListNode(1);
// const m2 = new ListNode(2);
// const m3 = new ListNode(3);
// const m4 = new ListNode(4);
// const m5 = new ListNode(5);

// // Connect
// m1.next = m2;
// m2.next = m3;
// m3.next = m4;
// m4.next = m5;

// // Test
// const middleResult = middleNode(m1);
// console.log(middleResult?.val); // Expected Output: 3

// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------


/**
 *! 4 | Merge Two Sorted Lists
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {

  const dummy = new ListNode(-1);
  let current: ListNode | null = dummy;

  let first: ListNode | null = list1;
  let second: ListNode | null = list2;

  while (first !== null && second !== null) {
    if (first.val <= second.val) {
      current.next = first;
      first = first.next;
    } else {
      current.next = second;
      second = second.next;
    }
    current = current.next;
  }

  current.next = first !== null ? first : second;

  return dummy.next;
}

// ! Test Case

// // List1: [1,2,4]
// const a1 = new ListNode(1);
// const a2 = new ListNode(2);
// const a3 = new ListNode(4);

// a1.next = a2;
// a2.next = a3;

// // List2: [1,3,4]
// const b1 = new ListNode(1);
// const b2 = new ListNode(3);
// const b3 = new ListNode(4);

// b1.next = b2;
// b2.next = b3;

// // Merge
// const mergedHead = mergeTwoLists(a1, b1);

// // Print merged list
// let temp: ListNode | null = mergedHead;
// let output: number[] = [];

// while (temp !== null) {
//   output.push(temp.val);
//   temp = temp.next;
// }

// console.log(output); 
// // Expected Output: [1,1,2,3,4,4]



// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------
// ! ---------------------------------------------------------------------------------------------------------------------------


/**
 *! 5 | Remove Nth Node From End of List
 ** LeetCode: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 ** GFG: https://www.geeksforgeeks.org/delete-nth-node-from-the-end-of-the-given-linked-list/
 *
 * --------------------------------------------------------------
 *! TECHNIQUE:
 *! Two Pointer Technique (Fast & Slow Pointer)
 *
 *? PATTERN:
 *? Move fast pointer n steps ahead
 *? Then move both fast & slow one step
 *? When fast reaches end → slow is before target node
 *
 *! ALGO IDEA:
 *! Maintain gap of n nodes between fast and slow
 *
 *? TIME COMPLEXITY: O(n)
 *? SPACE COMPLEXITY: O(1)
 *
 *! ASKED IN:
 *! Amazon, Google, Microsoft, Meta, Adobe,
 *! Bloomberg, Uber, Atlassian
 *
 *? IMPORTANCE (out of 5):
 *? ⭐⭐⭐⭐⭐ (5/5) — Classic Two Pointer Question
 *
 *? --------------------------------------------------------------
 *! EXAMPLE:
 *
 ** Input: head = [1,2,3,4,5], n = 2
 ** Output: [1,2,3,5]
 ** Explanation: Remove 4 (2nd node from end)
 *
 ** Input: head = [1], n = 1
 ** Output: []
 *
 ** Input: head = [1,2], n = 1
 ** Output: [1]
 *
 *? --------------------------------------------------------------
 */

function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {

  if (!head) return null;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  //! Step 1: Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast!.next;
  }

  //! If fast becomes null → remove head
  if (fast === null) return head.next;

  // Step 2: Move both pointers
  while (fast.next !== null) {
    slow = slow!.next;
    fast = fast.next;
  }

  // Step 3: Remove target node
  slow!.next = slow!.next!.next;

  return head;
}


// // ! Test Case 1
// // Create: [1,2,3,4,5]

// const r1 = new ListNode(1);
// const r2 = new ListNode(2);
// const r3 = new ListNode(3);
// const r4 = new ListNode(4);
// const r5 = new ListNode(5);

// r1.next = r2;
// r2.next = r3;
// r3.next = r4;
// r4.next = r5;

// // Remove 2nd from end
// const newHead = removeNthFromEnd(r1, 2);

// // Print result
// let temp: ListNode | null = newHead;
// let output: number[] = [];

// while (temp !== null) {
//   output.push(temp.val);
//   temp = temp.next;
// }

// console.log(output);
// // Expected Output: [1,2,3,5]


// // ! Test Case 2 (Edge Case)
// // Input: [1], n = 1

// const single = new ListNode(1);
// const result2 = removeNthFromEnd(single, 1);

// console.log(result2); 
// // Expected Output: null