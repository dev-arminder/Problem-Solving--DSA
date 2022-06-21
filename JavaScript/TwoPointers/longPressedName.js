/**
 * @problem - {Long Pressed Name}
 * @solveAt - {https://leetcode.com/problems/long-pressed-name/}
 */

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let leftPointer = 0;
  let rightPointer = 0;

  for (rightPointer = 0; rightPointer < typed.length; rightPointer++) {
    let leftChar = name[leftPointer];
    let rightChar = typed[rightPointer];

    if (leftChar !== rightChar) {
      return false;
    }

    if (
      rightPointer < typed.length - 1 &&
      typed[rightPointer + 1] !== leftChar
    ) {
      leftPointer++;
    }

    if (leftPointer >= name.length) return false;
  }

  return true;
};

// isLongPressedName("alex", "aaleex");
// isLongPressedName("alex", "aaleexa");
// isLongPressedName("saeed", "ssaaedd");
// isLongPressedName("a", "a");
// isLongPressedName("a", "b");
isLongPressedName("leelee", "lleeelee");
