const defaultHashTableSize = 32;
const { LinkedList } = require("../LinkedList/singlyLinkedList/LinkedList");

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
    if (typeof key === "number") {
      return key % this.tableSize;
    }
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    // Reduce hash number so it would fit hash table size.
    return hash % this.tableSize;
  }

  /**
   * @param - {any} 
   * @return - {any}
   */
  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.findByValue(value);
    if (!node.node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  /** 
   * @param - {any}
   * @return - {any}
   */
  get(key){
    // let hashKey = this.hash(key);
    // let bucketLinkedList = this.buckets[hashKey];
    // return bucketLinkedList.findByValue()
  }
}

const map = new HashTable(7);
console.log('============')