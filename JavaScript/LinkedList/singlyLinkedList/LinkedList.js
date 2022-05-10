const LinkedListNode = require("./LinkedListNode");
class LinkedList {
  /**
   * @params {LinkedListNode as Node}
   */
  constructor(Node = LinkedListNode) {
    /** @var LinkedListNode */
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.ListNode = Node.LinkedListNode;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(node) {
    let newNode = new this.ListNode(node);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size += 1;
    return this;
  }
  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(node) {
    let newNode = new this.ListNode(node);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
    return this;
  }

  /**
   * @param {*} value
   * @param {*} index
   * @return {LinkedList}
   */
  insertAt(rawIndex, value) {
    const index = rawIndex < 0 ? 0 : rawIndex;

    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.size) {
      this.append(value);
    } else {
      let currentNode = this.head;
      const newNode = new this.ListNode(value);
      for (let iter = 0; iter < this.size; iter++) {
        if (iter === index - 1) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }
  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    }

    if (currentNode.next) {
      this.head = currentNode.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size -= 1;
    return currentNode;
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    /* No Head Exist */
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    }
    // Only Single Element Exist
    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      return currentNode;
    }
    // More than 1 ELement exist
    while (true) {
      if (!currentNode.next.next) break;
      currentNode = currentNode.next;
    }

    this.tail = currentNode;
    let tailNode = currentNode.next;
    currentNode.next = null;
    return tailNode;

    currentNode.next;
  }

  /**
   * @param {empty}
   * @return {empty}
   */
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(
        `--> ${currentNode.node} --> ${
          currentNode.next ? currentNode.next.node : currentNode.next
        }`
      );
      currentNode = currentNode.next;
    }

    console.log(
      `Head - ${this.head} || Tail - ${this.tail} || Size -  ${this.size}`
    );
  }
}

const ll = new LinkedList();
ll.append(2);
ll.append(3);

console.log("******************");
ll.insertAt(0, 0);
ll.insertAt(10, 20);
ll.insertAt(2, 4);
ll.print();
