/**
 * @problem - {Count Number of Pairs With Absolute Difference K} 
 * @solvedAt - {https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/}
 */ 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var countKDifference = function(nums, k) {
  let store = Array.from({length: 101}, () => 0);
  let count = 0;
  
  for(let i = 0; i < nums.length; i++){
    store[nums[i]] += 1;
  }

  for(let i = 1; i <= 100; i++){
    if (store[i] === 0) continue;
    let nextValue = i + k;
    if(store[nextValue]){
      count += store[i] * store[nextValue];
    }
  }

  return count;

};

console.log(countKDifference([1,3], 3))