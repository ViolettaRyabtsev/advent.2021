//first out  last in

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.last;
      this.last.next = newNode;
      this.last = temp;
    }
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) this.first = null;
    this.first = this.first.next;
    return temp.value;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
