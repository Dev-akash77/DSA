class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null = null;

  // Push at the end
  endPush(data: T): void {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Push at the front
  frontPush(data: T): void {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert at specific index
  insertAt(index: number, data: T): void {
    if (index < 0) return;

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index - 1) {
      current = current.next;
      count++;
    }

    if (!current) return;

    newNode.next = current.next;
    current.next = newNode;
  }

  // Delete first node
  deleteFirstNode(): void {
    if (!this.head) return;

    this.head = this.head.next;
  }

  // Delete last node
  removeLastNode(): void {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;

    while (current.next && current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  // Remove specific index
  removeSpecificNode(index: number): void {
    if (!this.head || index < 0) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current.next && count < index - 1) {
      current = current.next;
      count++;
    }

    if (!current.next) return;

    current.next = current.next.next;
  }

  // Remove Nth node from end
  removeNthFromEnd(n: number): void {
    if (!this.head || n <= 0) return;

    let slow: Node<T> | null = this.head;
    let fast: Node<T> | null = this.head;

    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
      if (!fast) return;
      fast = fast.next;
    }

    // Remove first node
    if (!fast) {
      this.head = this.head.next;
      return;
    }

    // Move both pointers
    while (fast.next !== null) {
      slow = slow!.next;
      fast = fast.next;
    }

    // Remove target node
    slow!.next = slow!.next!.next;
  }

  // Print linked list
  print(): void {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `[ ${current.data} | ${current.next ? "→" : "null"} ] `;
      current = current.next;
    }

    console.log(result || "Empty List");
  }

  // Reverse linked list
  reverse(): void {
    let prev: Node<T> | null = null;
    let current = this.head;

    while (current !== null) {
      const next = current.next;

      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Check palindrome
  palindrome(): boolean {
    let current = this.head;
    const nums: T[] = [];

    while (current !== null) {
      nums.push(current.data);
      current = current.next;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      if (nums[left] !== nums[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  }

  // ! middle of the linked lis
  middleNode(): Node<T> | null {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow?.next!;
      fast = fast.next.next!;
    }

    console.log(slow);
    return slow;
  }
}

// Testing
const list = new LinkedList<number>();

list.endPush(10);
list.endPush(20);
list.endPush(30);
list.endPush(40);
list.endPush(50);

list.print();
list.middleNode();
