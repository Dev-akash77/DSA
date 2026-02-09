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
    // ! push data at the end
    endPush(data) {
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
    frontPush(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    // ! print all linkedlist data
    print() {
        let current = this.head;
        let result = "";
        while (current != null) {
            result += `[ ${current.data} | ${current.next ? "→" : "null"} ] `;
            current = current.next;
        }
        console.log(result);
    }
}
const list = new LinkedList();
list.endPush(10);
list.endPush(20);
list.endPush(30);
list.frontPush(5);
list.print();
//# sourceMappingURL=learning.js.map