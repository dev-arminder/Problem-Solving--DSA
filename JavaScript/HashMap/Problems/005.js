/**
 * @problem - {Divide Array Into Equal Pairs}
 * @SolvedAt - {https://leetcode.com/problems/divide-array-into-equal-pairs/}
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let store = Array.from({length: 501}, () => 0)
    let flag = true;

    for(let i = 0; i < nums.length; i++){
        store[nums[i]] += 1;
    }

    for(let i = 1; i < 501; i++){
      let count = store[i];
      if(count % 2 !== 0) flag = false;
    }

    return flag;


};

divideArray([3,2,3,2,2,2])