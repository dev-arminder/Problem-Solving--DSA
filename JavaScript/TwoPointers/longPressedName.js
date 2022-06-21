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
  let leftPointer = 1;
  let rightPointer = 1;

  if (
    name[0] !== typed[0] ||
    name[name.length - 1] !== typed[typed.length - 1]
  ) {
    return false;
  }

  while (rightPointer < typed.length) {
    let leftChar = name[leftPointer];
    let rightChar = typed[rightPointer];

    if (leftChar === rightChar) {
      if (leftPointer !== name.length - 1) {
        leftPointer++;
      }
      rightPointer++;
    } else if (
      rightChar === name[leftPointer - 1] &&
      typed[rightPointer - 1] !== leftChar
    ) {
      rightPointer++;
    } else {
      return false;
    }
  }

  if (leftPointer === name.length - 1) {
    return true;
  } else {
    return false;
  }
};

// console.log(isLongPressedName("alex", "aaleex"));
// console.log(isLongPressedName("alex", "aaleexa"));
// console.log(isLongPressedName("saeed", "ssaaedd"));
// console.log(isLongPressedName("a", "a"));
// console.log(isLongPressedName("a", "b"));
// console.log(isLongPressedName("leelee", "lleeelee"));
// console.log(isLongPressedName("alex", "aaleexeex"));
