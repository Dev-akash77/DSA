//! 19. Remove Nth Node From End of List
//? https://leetcode.com/problems/remove-nth-node-from-end-of-list/

//* Given the head of a linked list,
//* remove the nth node from the end of the list
//* and return its head.

//! Example 1:
//? Input: head = [1,2,3,4,5], n = 2
//? Output: [1,2,3,5]

//! Example 2:
//? Input: head = [1], n = 1
//? Output: []

//! Example 3:
//? Input: head = [1,2], n = 1
//? Output: [1]

//! Example 4:
//? Input: head = [1,2], n = 2
//? Output: [2]

/**
 * Definition for singly-linked list.
 */

class ListNode {
  val;
  next;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Create Linked List
function createLinkedList(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Print Linked List
function printLinkedList(head) {
  const result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
  let fast = head;
  let slow = head;

  // Move fast pointer n steps
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // If head needs to be removed
  if (fast === null) {
    return head.next;
  }

  // Move both pointers
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove nth node
  slow.next = slow.next.next;

  return head;
};

//! -------------------- Test Case 1 --------------------

const head1 = createLinkedList([1, 2, 3, 4, 5]);

const newHead1 = removeNthFromEnd(head1, 2);

printLinkedList(newHead1); // [1,2,3,5]

//! -------------------- Test Case 2 --------------------

const head2 = createLinkedList([1]);

const newHead2 = removeNthFromEnd(head2, 1);

printLinkedList(newHead2); // []

//! -------------------- Test Case 3 --------------------

const head3 = createLinkedList([1, 2]);

const newHead3 = removeNthFromEnd(head3, 1);

printLinkedList(newHead3); // [1]

//! -------------------- Test Case 4 --------------------

const head4 = createLinkedList([1, 2]);

const newHead4 = removeNthFromEnd(head4, 2);

printLinkedList(newHead4); // [2]