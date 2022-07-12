/**
 * @problem - { Subarray Product Less Than K}
 * @solveAt - {https://leetcode.com/problems/subarray-product-less-than-k/}
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k == 0) return 0;

  let totalSubArrs = 0;
  let windowProduct = 1;

  for (let i = 0, j = 0; j < nums.length; j++) {
    windowProduct *= nums[j];
    while (i <= j && windowProduct >= k) {
      windowProduct /= nums[i++];
    }

    totalSubArrs += j - i + 1;
  }

  return totalSubArrs;
};
