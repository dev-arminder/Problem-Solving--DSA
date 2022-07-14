class DoublyLinkedList {
  constructor(listNode = Node) {
    this.Node = listNode;
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFirst(value) {
    let newNode = new this.Node(value);
    this.size += 1;
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
      return newNode;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }

  addLast(value) {
    let newNode = new this.node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      return newNode;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.size += 1;
    return newNode;
  }

  addAt(value, position = 0) {
    if (position <= 0) {
      this.addFirst(value);
    } else if (position >= this.size) {
      this.addLast(value);
    } else {
      let currentNode = this.head;
      let position = 1;
      while (index !== position - 1) {
        currentNode = currentNode.next;
        index++;
      }
      let newNode = new this.node(value);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      newNode.next.previous = newNode;
      newNode.previous = currentNode;
      this.size += 1;
      return newNode;
    }
  }
  /**
   * Find by index or by value, whichever happens first.
   * Runtime: O(n)
   * @example
   *  this.findBy({ index: 10 }).node; // node at index 10.
   *  this.findBy({ value: 10 }).node; // node with value 10.
   *  this.findBy({ value: 10 }).index; // node's index with value 10.
   *
   * @param {Object} params - The search params
   * @param {number} params.index - The index/position to search for.
   * @param {any} params.value - The value to search for.
   * @returns {{node: any, index: number}}
   */

  findBy({ value, index = Infinity }) {
    for (
      let position = 0, currentNode = this.head;
      position <= index && current;
      position++, currentNode = currentNode.next
    ) {
      if (position === index || currentNode.value === value) {
        return { node: current, index: position };
      }
    }
  }
}

let list = new DoublyLinkedList();
