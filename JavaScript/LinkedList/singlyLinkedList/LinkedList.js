const LinkedListNode = require("./LinkedListNode");
class LinkedList {
  /**
   * @params {LinkedListNode as Node For LinkedList}
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
      this.size += 1;
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
    this.size -= 1;
    return tailNode;
  }
  /**
   * @param {any} value - The value to search for.
   * @returns {{node: any, index: number}}
   */

  findByValue(value) {
    //  LinkedList is Empty
    let index = 0;
    let currentNode = this.head;
    if (!this.head) {
      return { node: null, index: null };
    }
    // Single Element is Present
    if (this.head === this.tail) {
      return this.head.node === value
        ? { node: this.head.node, index: index }
        : { node: null, index: null };
    }
    while (currentNode) {
      if (currentNode.node === value)
        return { node: currentNode.node, index: index };
      currentNode = currentNode.next;
      index += 1;
    }

    return { node: null, index: null };
  }

  /**
   * @param {index} - Any Number
   * @return {object} - {node: value, index: index, message: Message Depending upon context}
   */
  findByIndex(index) {
    // index < 0
    let idx = 0;
    let message = null;
    let currentNode = this.head;

    if (index < 0) {
      message = "Negative Index Not Supported Yet.";
      return { node: null, index: null, message: message };
    }
    // index = 0

    // index > linkedList size
    if (index >= this.size) {
      message = "Index Greater than size of Linked List.";
      return { node: null, index: null, message: message };
    }

    while (currentNode) {
      message = `Successfully Find ${currentNode.node} at index ${idx}`;
      if (idx === index) {
        return { node: currentNode.node, index: index, message: message };
      }
      idx += 1;
      currentNode = currentNode.next;
    }

    message = "Unable to Find Any Node at Given Index";
    return { node: null, index: null, message: message };
  }

  /**
   * @param {any} - value
   * @return {obj} - deleted Node
   */
  delete(value) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      if (this.head.node === value) {
        this.head = null;
        this.tail = null;
        this.size -= 1;
        return currentNode;
      } else {
        return null;
      }
    }

    if (this.head.node === value) {
      let node = this.head;
      this.head = this.head.next;
      this.size -= 1;
      return node;
    }

    while (currentNode.next) {
      if (currentNode.next.node === value) {
        let node = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.size -= 1;
        return node;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
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

module.exports = {
  LinkedList,
};
