/**
 * @problem - {Buddy Strings}
 * @solveAt - {https://leetcode.com/problems/buddy-strings/}
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  let sHashMap = new Map();
  let goalHashMap = new Map();
  let alterNativeIndex = 0;
  let alterNativeIndexs = [];
  if (s.length !== goal.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    sHashMap.set(s[i], i);
    goalHashMap.set(goal[i], i);
  }

  if (s === goal && sHashMap.size < s.length) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      alterNativeIndex += 1;
      alterNativeIndexs.push(i);
    }
  }

  if (
    alterNativeIndex === 2 &&
    s[alterNativeIndexs[0]] === goal[alterNativeIndexs[1]] &&
    s[alterNativeIndexs[1]] === goal[alterNativeIndexs[0]]
  ) {
    return true;
  } else return false;
};

console.log(buddyStrings("abcd", "cbad"));
console.log(buddyStrings("aa", "aa"));
console.log(buddyStrings("aac", "aac"));
console.log(buddyStrings("aac", "aax"));
console.log(buddyStrings("abcacaba", "abbacaca"));
console.log(buddyStrings("ab", "ca"));
