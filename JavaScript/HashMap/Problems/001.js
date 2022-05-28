/**
 * @problem - How Many Numbers Are Smaller Than the Current Number
 * @SolveAt - https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * @param {number[]} nums
 * @return {number[]}
*/

var smallerNumbersThanCurrent = function(nums) {
   let countArr = Array.from({length: 100}, () => 0);
   let resultArr = [];
   
   for(let i = 0; i < nums.length; i++){
     countArr[nums[i]] += 1;
   }

   for(let i = 1; i < countArr.length; i++){
      countArr[i] += countArr[i-1]
    }
  
    for(let i = 0; i < nums.length; i++){
      if(nums[i] === 0){
        resultArr[i] = 0;
      } else {
        resultArr[i] = countArr[nums[i] - 1];
      }
    }

    return resultArr

};

smallerNumbersThanCurrent([8,1,2,2,3])