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

  newHead(data: T) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}
