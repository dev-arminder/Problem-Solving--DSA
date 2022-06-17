/**
 * @problem - {Sort Array By Parity }
 * @solveAt - {https://leetcode.com/problems/sort-array-by-parity/}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let slowPointer = 0;
  let fastPointer = 0;

  while (fastPointer < nums.length) {
    let slowNumber = nums[slowPointer];
    let fastNumber = nums[fastPointer];

    if (slowNumber % 2 != 0 && fastNumber % 2 == 0) {
      let temp = fastNumber;
      nums[fastPointer] = slowNumber;
      nums[slowPointer] = temp;
    }

    if (slowNumber % 2 == 0 && fastNumber % 2 == 0) {
      slowPointer++;
      fastPointer++;
    } else {
      if (slowNumber % 2 == 0) {
        slowPointer++;
      }

      if (fastNumber % 2 !== 0) {
        fastPointer++;
      }
    }
  }

  return nums;
};

sortArrayByParity([3, 1, 2, 4]);
sortArrayByParity([4, 2, 3, 1]);
sortArrayByParity([4, 2, 3, 6]);
sortArrayByParity([1, 3, 5]);
sortArrayByParity([2, 4, 6]);
sortArrayByParity([0]);
