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
    // ! Add on specific index
    insertAt(index, data) {
        if (index < 0)
            return;
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
        if (!current)
            return;
        newNode.next = current.next;
        current.next = newNode;
    }
    // ! delete first node
    deleteFirstNode() {
        if (!this.head)
            return;
        this.head = this.head.next;
    }
    // ! delete last node
    removeLastNode() {
        if (!this.head)
            return;
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
    removeSpecificNode(id) {
        if (!this.head || id < 0)
            return;
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
        if (!current.next)
            return;
        current.next = current.next?.next;
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
    // ! Revrse a linkedlist
    reverse() {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    // ! check palindrome
    palindrome() {
        let current = this.head;
        let nums = [];
        while (current !== null) {
            nums.push(current?.data);
            current = current.next;
        }
        let r = nums.length - 1;
        let l = 0;
        while (l < r) {
            if (nums[l] === nums[r]) {
                r--;
                l++;
            }
            else {
                return false;
            }
        }
        return true;
    }
}
const list = new LinkedList();
list.endPush(0);
list.endPush(2);
list.endPush(2);
list.endPush(0);
// list.frontPush(1);
// list.insertAt(3,4);
// list.deleteFirstNode();
// list.removeLastNode();
// list.removeSpecificNode(1);
// list.print();
// list.reverse();
list.print();
console.log(list.palindrome());
//# sourceMappingURL=learning.js.map