/**
 * @problem - {Duplicate Zeros}
 * @solveAt - {https://leetcode.com/problems/duplicate-zeros/}
 */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
  let pointer = 0;
  if (arr.length !== 1) {
    while (pointer < arr.length) {
      if (arr[pointer] === 0) {
        let rightPointer = arr.length - 2 >= 0 ? arr.length - 2 : 0;

        while (rightPointer > pointer) {
          arr[rightPointer + 1] = arr[rightPointer];
          rightPointer--;
        }

        arr[rightPointer + 1] = 0;
        pointer += 2;
      } else {
        pointer += 1;
      }
    }
  }
};

duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]);
duplicateZeros([1, 2, 2, 3, 7, 4, 5, 6]);
duplicateZeros([0, 1]);
duplicateZeros([0]);
