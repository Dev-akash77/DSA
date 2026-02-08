"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    data;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    head;
    constructor() {
        this.head = null;
    }
    newHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
}
//# sourceMappingURL=learning.js.map