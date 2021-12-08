class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(data) {
    //create node
    //check if its root
    let newNode = new Node(data);
    //compare data to root node and next node
    if (this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (data > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  findValue(value) {
    let found = false;
    let current = this.root;
    if (this.root === null) return null;
    while (current && !found) {
      if (current.val > value) {
        current = current.right;
      } else if (current.val < value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    return current;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}
module.exports = BinarySearchTree;
