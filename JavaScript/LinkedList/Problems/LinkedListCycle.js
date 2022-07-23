/**
 * @problem -  Linked List Cycle
 * @SolveAt - https://leetcode.com/problems/linked-list-cycle/
 */
var hasCycle = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
};
