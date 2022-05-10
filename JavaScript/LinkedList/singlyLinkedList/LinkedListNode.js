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
    return callback ? callback(this.node) : `${this.node}`;
  }
}

module.exports = {
  LinkedListNode
};
