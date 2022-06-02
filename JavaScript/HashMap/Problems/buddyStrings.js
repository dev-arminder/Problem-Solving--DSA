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
    sHashMap.set(i, s[i]);
    goalHashMap.set(i, goal[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (sHashMap.get(i) !== goalHashMap.get(i)) {
      alterNativeIndex += 1;
      alterNativeIndexs.push(i);
    }
  }

  if (alterNativeIndex !== 2) return false;

  if (
    sHashMap.get(alterNativeIndexs[0]) ===
      goalHashMap.get(alterNativeIndexs[1]) &&
    sHashMap.get(alterNativeIndexs[1]) === goalHashMap.get(alterNativeIndexs[0])
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(buddyStrings("abcd", "cbad"));
