/**
 * @problem - {Remove Element}
 * @solveAt - {https://leetcode.com/problems/remove-element/}
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (arr, key) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) result++;
  }

  while (leftPointer < rightPointer) {
    let leftNumber = arr[leftPointer];
    let rightNumber = arr[rightPointer];

    if (leftNumber === key && rightNumber !== key) {
      let temp = rightNumber;
      arr[rightPointer] = leftNumber;
      arr[leftPointer] = temp;
    }

    if (leftNumber !== key) {
      leftPointer++;
    }
    if (rightNumber === key) {
      rightPointer--;
    }
  }
  return arr.length - result;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
removeElement([2, 2, 2, 2, 2, 2, 2, 2], 2);
removeElement([0, 1, 9, 8, 3, 0, 4, 7], 2);
