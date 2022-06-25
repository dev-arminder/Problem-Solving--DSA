/**
 * @problem - {3Sum Closet}
 * @solveAt - {https://leetcode.com/problems/3sum-closest/}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closetSum = 0;
  let closeBy = Infinity;
  let arr = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length - 2; i++) {
    let leftPointer = i + 1;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
      let tempSum = arr[i] + arr[leftPointer] + arr[rightPointer];
      if (Math.abs(target - tempSum) < closeBy) {
        closetSum = tempSum;
        closeBy = Math.abs(target - tempSum);
      }

      if (tempSum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }
  // for (let i = 0; i < nums.length - 2; i++) {
  //   for (let j = i + 1; j <= nums.length - 2; j++) {
  //     for (let k = j + 1; k < nums.length; k++) {
  //       let temp = nums[i] + nums[j] + nums[k];

  //       if (Math.abs(target - temp) < closeBy) {
  //         closetSum = temp;
  //         closeBy = Math.abs(target - temp);
  //       }
  //     }
  //   }
  // }
  return closetSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0, 0], 1));
