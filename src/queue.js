//first out  last in

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.start) {
      this.start = newNode;
      this.last = newNode;
    } else {
      this.last = newNode;
      this.last.next = newNode;
    }
    return this.length++;
  }

  dequeue() {
    if (!this.start) return null;

    let temp = this.start;
    if (this.start === this.last) {
      this.last = null;
    }
    this.start = this.start.next;
    this.length--;
    return temp.val;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
