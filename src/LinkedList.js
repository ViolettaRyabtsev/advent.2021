class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(data) {
    let NewNode = new ListNode(data, this.head);
    this.head = NewNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;

    for (var i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertHead(value);
    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;
    prev.next = new ListNode(value, prev.next);
    this.length++;
  }

  removeElement() {
    this.head = this.head.next;
    this.length--;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value}-->`;
      current = current.next;
    }
    console.log(`${output}`);
  }

  reverseList(head) {
    let prev = null;
    let next = null;

    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
}

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length; i >= 0; i--) {
    ll.insertHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
