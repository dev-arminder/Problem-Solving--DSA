/**
 * @problem - Merge Nodes in Between Zeros
 * @SolveAt - https://leetcode.com/problems/merge-nodes-in-between-zeros/
 */

var mergeNodes = function (head) {
  let prev = head;
  let current = head.next;
  let sum = 0;

  while (current) {
    if (current.val === 0) {
      current.val = sum;
      sum = 0;
      prev = current;
      current = current.next;
    } else {
      sum += current.val;
      prev.next = current.next;
      current.next = null;
      current = prev.next;
    }
  }

  return head.next;
};
