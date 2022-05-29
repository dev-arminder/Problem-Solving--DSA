/**
 * @problem - {Count the Number of Consistent Strings}
 * @solvedAt - {https://leetcode.com/problems/count-the-number-of-consistent-strings/}
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let hashMap = new Map();
    let consistentStringsCount = 0;
    
    for(let i = 0; i < allowed.length; i++){
      if(!hashMap.has(allowed[i])){
        hashMap.set(allowed[i], 1)
      }
    }

    for(let i = 0; i < words.length; i++){
      let str = words[i];
      let isConsistent = true;
      for(let j = 0; j < str.length; j++){
        if(!hashMap.has(str[j])){
          isConsistent = false;
        }
      }

      if(isConsistent) consistentStringsCount += 1;
    }

    return consistentStringsCount;
};

countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])