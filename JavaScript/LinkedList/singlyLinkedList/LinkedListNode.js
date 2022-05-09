class LinkedListNode {
  /**
   * @param {node}
   */
  constructor(node) {
    this.node = node;
    this.next = null;
  }

  /**
   * @param {Function}
   * @return {String}
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default LinkedListNode;
