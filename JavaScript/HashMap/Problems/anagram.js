/**
 * @problem - {Minimum Number of Steps to Make Two Strings Anagram}
 * @solveAt - {https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/}
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let sHashMap = new Map();
  let tHashMap = new Map();
  let charToChanges = 0;
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (sHashMap.has(sChar)) {
      let occurence = sHashMap.get(sChar);
      sHashMap.set(sChar, occurence + 1);
    } else {
      sHashMap.set(sChar, 1);
    }

    if (tHashMap.has(tChar)) {
      let occurence = tHashMap.get(tChar);
      tHashMap.set(tChar, occurence + 1);
    } else {
      tHashMap.set(tChar, 1);
    }
  }
  for (let key of sHashMap.keys()) {
    let sOccurence = sHashMap.get(key);
    let tOccurence = tHashMap.get(key) || 0;
    if (sOccurence > tOccurence) charToChanges += sOccurence - tOccurence;
  }

  return charToChanges;
};

minSteps("bab", "aba");
minSteps("leetcode", "practice");
minSteps("anagram", "mangaar");
