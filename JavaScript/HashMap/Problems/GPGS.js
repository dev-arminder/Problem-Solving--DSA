/**
 * @problem - {Group the People Given the Group Size They Belong To}
 * @solveAt - {https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/}
 */

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let groupMap = new Map();
  let groupPeopleArr = [];

  for (let i = 0; i < groupSizes.length; i++) {
    let groupSize = groupSizes[i];
    if (groupMap.has(groupSize)) {
      let groupSet = groupMap.get(groupSize);
      groupSet.push(i);
      groupMap.set(groupSize, groupSet);
    } else {
      let groupSet = [];
      groupSet.push(i);
      groupMap.set(groupSize, groupSet);
    }
  }

  for (let key of groupMap.keys()) {
    let length = 0;
    let tempArr = [];
    let groupSet = groupMap.get(key);
    let isPushed = false;
    let index = 1;

    while (true) {
      if (index > groupSet.length) break;
      if (tempArr.length >= key) {
        groupPeopleArr.push(tempArr);
        isPushed = true;

        tempArr = [];
      } else {
        tempArr.push(groupSet[index - 1]);
        isPushed = false;
        index += 1;
      }
    }

    if (!isPushed) {
      groupPeopleArr.push(tempArr);
      tempArr = [];
      length = 0;
    }
  }

  return groupPeopleArr;
};

groupThePeople([3, 3, 3, 3, 3, 1, 3]);
