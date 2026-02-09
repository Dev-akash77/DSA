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
}

const list = new LinkedList<Number>();

list.endPush(10);
list.endPush(20);
list.endPush(30);
list.frontPush(5);

list.print();
