const Node = require("./DlinkedListNode");

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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return newNode;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
  }

  addLast(value) {
    let newNode = new this.Node(value);
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
      let index = 1;
      while (index !== position - 1) {
        currentNode = currentNode.next;
        index++;
      }
      let newNode = new this.Node(value);
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
      position <= index && currentNode;
      position++, currentNode = currentNode.next
    ) {
      if (position === index || currentNode.value === value) {
        return { node: currentNode.value, index: position };
      }
    }

    return null;
  }

  print() {
    let currentNode = this.head;
    let str = ``;
    while (currentNode) {
      str += `${currentNode.value} ⇔ `;
      currentNode = currentNode.next;
    }

    str += "null";
    console.log(str);
  }
  removeFirst() {
    if (this.head) {
      let node = this.head;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let nextNode = this.head.next;
        nextNode.previous = null;
        this.head.next = null;
        this.head = nextNode;
      }
      this.size -= 1;
      return node;
    }
    return null;
  }
  removeLast() {
    if (!this.tail) return null;
    let node = this.tail;
    if (!node.previous) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.previous;
      this.tail.next = null;
      node.previous = null;
    }
    this.size -= 1;
    return node;
  }

  removeByPosition(position = 0) {
    if (position <= 0) {
      return this.removeFirst();
    } else if (position >= this.size - 1) {
      return this.removeLast();
    } else {
      let pos = 0;
      let current = this.head;
      while (pos !== position) {
        current = current.next;
        pos++;
      }
      current.previous.next = current.next;
      // if (current.next) {
      current.next.previous = current.previous;
      current.next = null;
      // }
      current.previous = null;
      this.size -= 1;
      return current;
    }
    return null;
  }

  removeByNode(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      return this.removeFirst();
    } else if (this.tail.value === value) {
      return this.removeLast();
    } else {
      let current = this.head;
      while (current && current.value !== value) {
        current = current.next;
      }
      if (!current) return null;
      current.next.previous = current.previous;
      current.previous.next = current.next;
      current.previous = null;
      current.next = null;
      this.size -= 1;
      return current;
    }

    return null;
  }
}
