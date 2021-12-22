//first in last out

class Stack {
  constructor() {
    this.start = null;
    this.last = null;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.start) {
      this.start = newNode;
      this.last = newNode;
    } else {
      let temp = this.start;
      this.start = newNode;
      this.start.next = temp;
    }
    return this.start++;
  }

  pop() {
    if (!this.start) {
      return null;
    }
    let temp = this.start;
    if (this.start === this.last) {
      this.last = null;
    }
    this.start = this.start.next;
    return temp.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
