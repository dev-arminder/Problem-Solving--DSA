const Node = require("./CircularNode");

class circularLinkedList {
  constructor(linkedListNode = Node) {
    this.tail = null;
    this.size = 0;
    this.Node = linkedListNode;
  }

  addFirst(value) {
    let node = new this.Node(value);
    if (!this.tail) {
      this.tail = node;
      this.size += 1;
      this.tail.next = this.tail;
      return node;
    }

    node.next = this.tail.next;
    this.tail.next = node;
    this.size += 1;
    return node;
  }

  addLast() {}

  findBy() {}

  addAt(position, Node) {}

  removeFirst() {}

  removeLast() {}

  removeByPosition(position) {}

  removeByNode() {}

  print() {}
}

const cirList = new circularLinkedList();
