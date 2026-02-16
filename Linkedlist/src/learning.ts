class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  // ! push data at the end
  endPush(data: T) {
    const newNode = new Node(data);

    if (this.head === null) {
      return (this.head = newNode);
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // ! push data at the front
  frontPush(data: T) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }

  // ! Add on specific index
  insertAt(index: number, data: T) {
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

  // ! delete first node
  deleteFirstNode() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  // ! delete last node
  removeLastNode() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;

    while (current.next && current.next?.next) {
      current = current.next;
    }
    current.next = null;
  }

  // ! Remove Specefic Node
  removeSpecificNode(id: number): void {
    if (!this.head || id < 0) return;

    if (id === 0) {
      this.head = this.head.next;
      return;
    }

    let count = 0;
    let current = this.head;

    while (current.next && count < id - 1) {
      current = current.next;
      count++;
    }

    if (!current.next) return;

    current.next = current.next?.next;
  }

  // ! print all linkedlist data
  print(): void {
    let current = this.head;
    let result = "";

    while (current != null) {
      result += `[ ${current.data} | ${current.next ? "→" : "null"} ] `;
      current = current.next;
    }
    console.log(result);
  }

  reverse(): void {
    let prev: Node<T> | null = null;
    let current: Node<T> | null = this.head;

    while (current !== null) {
      const next: Node<T> | null = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const list = new LinkedList<Number>();

list.endPush(1);
list.endPush(2);
list.endPush(3);
list.endPush(4);
list.endPush(5);
list.endPush(6);
list.endPush(7);
// list.frontPush(1);
// list.insertAt(3,4);
// list.deleteFirstNode();
// list.removeLastNode();
// list.removeSpecificNode(1);
list.print();
list.reverse();
list.print();
