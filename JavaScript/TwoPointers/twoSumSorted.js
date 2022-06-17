/**
 * @problem - {Two Sum II - Input Array Is Sorted}
 * @solveAt - {https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/}
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let leftPointer = 1;
  let rightPointer = numbers.length;

  while (leftPointer < rightPointer) {
    let sum = numbers[leftPointer - 1] + numbers[rightPointer - 1];
    if (sum === target) return [leftPointer, rightPointer];
    if (sum < target) leftPointer += 1;
    else rightPointer -= 1;
  }
};

twoSum([2, 3, 4], 6);
twoSum([-1, 0], -1);
