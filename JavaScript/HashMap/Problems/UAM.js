/**
 * @problem - {Finding Users Active Minutes}
 * @solveAt - {https://leetcode.com/problems/finding-the-users-active-minutes/}
 */

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  let mapSet = new Map();
  let uamArray = Array.from({ length: k }, () => 0);
  for (let i = 0; i < logs.length; i++) {
    let id = logs[i][0];
    let time = logs[i][1];

    if (mapSet.has(id)) {
      let set = mapSet.get(id);
      set.add(time);
      mapSet.set(id, set);
    } else {
      let set = new Set();
      mapSet.set(id, set.add(time));
    }
  }

  for (let mapEntry of mapSet.keys()) {
    let uam = mapSet.get(mapEntry).size;
    uamArray[uam - 1] += 1;
  }

  return uamArray;
};

findingUsersActiveMinutes(
  [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3],
  ],
  5
);
