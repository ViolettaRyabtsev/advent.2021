// Breadth-first Search
//Depth-first Search

// const { traverseTwoPhase } = require("react-dom/test-utils");

class BinaryTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  breadthFirstSearch() {
    var data = [];
    var queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreorder = () => {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  };
}

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = BinaryTree;
