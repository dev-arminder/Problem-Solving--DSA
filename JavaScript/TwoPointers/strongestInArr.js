/**
 * @problem - {The k Strongest Values in an Array}
 * @solveAt - {https://leetcode.com/problems/the-k-strongest-values-in-an-array/}
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  let temp = arr.sort(function (a, b) {
    return a - b;
  });

  let medium = temp[Math.floor((arr.length - 1) / 2)];
  let strongest = [];

  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let leftValue = temp[leftPointer];
    let rightValue = temp[rightPointer];

    if (Math.abs(rightValue - medium) > Math.abs(leftValue - medium)) {
      strongest.push(rightValue);
      rightPointer--;
    } else if (Math.abs(rightValue - medium) === Math.abs(leftValue - medium)) {
      if (rightValue > leftValue) {
        strongest.push(rightValue);
        rightPointer--;
      } else {
        strongest.push(leftValue);
        leftPointer++;
      }
    } else {
      strongest.push(leftValue);
      leftPointer++;
    }
  }

  let index = strongest.length - 1;
  while (index >= k) {
    strongest.pop();
    index--;
  }

  return strongest;
};

getStrongest([1, 2, 3, 4, 5], 2);
getStrongest([1, 1, 3, 5, 5], 2);
getStrongest([6, 7, 11, 7, 6, 8], 5);
