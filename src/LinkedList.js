class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  pop() {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      current = current.next;
      newTail = current;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }

  shift() {
    //remove from beginning
    if (!this.head) return null;
    let curr = this.head;
    this.head = this.head.next;
    return curr;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
