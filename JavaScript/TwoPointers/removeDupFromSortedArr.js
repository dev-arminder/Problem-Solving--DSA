/**
 * @problem - {Remove Duplicates from Sorted array}
 * @solveAt - {https://leetcode.com/problems/remove-duplicates-from-sorted-array/}
 */
/*
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 1) return 1;

  let slowPointer = 0;
  let fastPointer = 1;

  while (fastPointer < nums.length) {
    if (
      nums[fastPointer] !== nums[slowPointer]
    ) {
         slowPointer += 1;
      nums[slowPointer] = nums[fastPointer];
     
    }
    fastPointer += 1;
  }
  return slowPointer + 1;
};