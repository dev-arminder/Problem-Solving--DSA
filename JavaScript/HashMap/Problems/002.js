/**
 * @problem - { Design an Ordered Stream }
 * @solveAt - { https://leetcode.com/problems/design-an-ordered-stream/ }
 * 
 */

/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.pointer = 0;
    this.store = []
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let chunk = [];
    this.store[idKey -1] = value;
    while(this.store[this.pointer]){
      chunk.push(this.store[this.pointer]);
      this.pointer += 1;
    }

    return chunk;
};

let os  = new OrderedStream(5);
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].