const defaultHashTableSize = 32;
const LinkedList = require("../LinkedList/singlyLinkedList/LinkedList");

class HashTable {
  /**
   * @param {number}
   */
  constructor(tableSize = defaultHashTableSize) {
    this.tableSize = tableSize;
    this.buckets = Array(tableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  /**
   * @use - Ti calculate hash value based upon keys
   * @param - {any}
   * @return - {number}
   */
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.tableSize;
  }

  /**
   * @param - {string key} - any
   * @param - {Any value}
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.findByValue();
  }
}
