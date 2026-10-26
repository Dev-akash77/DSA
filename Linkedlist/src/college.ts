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
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // ! Append at the end
  EndPush(data: T) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let curNode = this.head;

    while (curNode.next) {
      curNode = curNode.next;
    }

    curNode.next = newNode;
    this.size++;
  }

  // !APPEND AT THE FRONT
  FrontPush(data: T) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // ! remove specific node
  removeId(id: number): void {
    if (!this.head || id < 0) return;

    if (id === 0) {
      this.head = this.head.next;
      this.size--;
    }

    let curNode = this.head;
    let count = 1;
    while (curNode?.next && count <= id - 1) {
      curNode = curNode.next;
      count++;
    }

    if (!curNode?.next) return;

    curNode.next = curNode.next.next;
  }

  // ! print list
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

const list = new LinkedList<number>();
list.EndPush(1);
list.EndPush(2);
list.EndPush(3);
list.EndPush(4);
list.EndPush(5);
list.EndPush(6);
list.EndPush(7);
list.EndPush(8);

list.removeId(5);

list.print();
