/**
 * @problem - {Sort Array By Parity II}
 * @solveAt - {https://leetcode.com/problems/sort-array-by-parity-ii/}
 */

/*
 * @param {number}
 * return {even || odd}
 */
function typeOfNumber(number) {
  if (number % 2 === 0) return "even";
  else return "odd";
}

/**
 * @param {number}
 * @param {number} index
 * @return {boolean}
 */
function isOnRightIndex(number, index) {
  if (typeOfNumber(number) === typeOfNumber(index)) return true;
  else return false;
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let leftPointer;

  for (leftPointer = 0; leftPointer < nums.length; leftPointer++) {
    let leftNumber = nums[leftPointer];
    if (!isOnRightIndex(leftNumber, leftPointer)) {
      let rightPointer = leftPointer + 1;
      while (rightPointer < nums.length) {
        let rightNumber = nums[rightPointer];
        if (!isOnRightIndex(rightNumber, rightPointer)) {
          if (typeOfNumber(leftPointer) === typeOfNumber(rightNumber)) {
            let temp = leftNumber;
            nums[leftPointer] = rightNumber;
            nums[rightPointer] = temp;
            break;
          }
        }
        rightPointer += 1;
      }
    }
  }

  return nums;
};

sortArrayByParityII([2, 3]);
