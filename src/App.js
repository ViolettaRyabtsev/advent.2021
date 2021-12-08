const LinkedList = require("./LinkedList");

const ll = LinkedList.fromValues(10, 20);

ll.insertAtIndex(2, 60);
ll.insertAtIndex(1, 80);
ll.print();

console.log(ll.getByIndex(0).value);
console.log(ll);
