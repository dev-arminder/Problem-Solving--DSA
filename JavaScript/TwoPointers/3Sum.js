/**
 * @problem - {3 Sum}
 * @solveAt - {https://leetcode.com/problems/3sum/}
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var twoSumPair = function (nums, leftPointer, rightPointer, target) {
  let arr = [];
  while (leftPointer < rightPointer) {
    let sum = nums[leftPointer] + nums[rightPointer];
    if (sum === target) {
      return [nums[leftPointer], nums[rightPointer]];
    } else if (sum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return arr;
};

var threeSum = function (nums) {
  let result = [];
  let temp = nums.sort(function (a, b) {
    return a - b;
  });

  if (temp.length < 3) {
    return result;
  }

  if (temp.length === 3) {
    if (temp[0] + temp[1] + temp[2] === 0) {
      return [temp];
    }
    return result;
  }

  for (let i = 0; i <= nums.length - 3; i++) {
    let leftPointer = i + 1;
    let rightChar = nums.length - 1;
    let currentValue = nums[i];
    if (i && nums[i] === nums[i - 1]) {
      continue;
    }
    let sumPair = twoSumPair(nums, leftPointer, rightChar, currentValue * -1);
    if (sumPair.length) {
      sumPair.push(currentValue);
      result.push(sumPair);
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([]));
// console.log(threeSum([1, 2, 3]));
// console.log(threeSum([1, 2, -3]));
console.log(threeSum([0, 0, 0, 0]));
