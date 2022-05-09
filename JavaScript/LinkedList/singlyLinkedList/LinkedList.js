import LinkedListNode from "./LinkedListNode";

class LinkedList {
  /**
   * @params {LinkedListNode as Node}
   */
  constructor(Node = LinkedListNode) {
    /** @var LinkedListNode */
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.ListNode = Node;
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(node) {
    let newNode = new this.ListNode(node);
    if (head === null) {
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
    let newNode = this.ListNode(node);

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
   *
   */
}

export default LinkedList;
