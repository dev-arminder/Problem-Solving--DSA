const defaultHashTableSize = 32;

class HashTable {
  constructor(tableSize = defaultHashTableSize) {
    this.tableSize = tableSize;
    this.bucket = [];
  }
  /*
   * Calculate hash value - module by 32
   */
  hash(key) {
    return key % this.tableSize;
  }
}
