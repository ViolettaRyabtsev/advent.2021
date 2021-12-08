const LinkedList = require("./LinkedList");

describe("#insertHead", () => {
  test("add the element of the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertHead(10);
    const oldHead = ll.head;
    ll.insertHead(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less then 0", () => {
    test("it returns null", () => {
      const ll = new LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBe(null);
    });
  });

  describe("with index 0", () => {
    test("it returns head", () => {
      const ll = new LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });
});
