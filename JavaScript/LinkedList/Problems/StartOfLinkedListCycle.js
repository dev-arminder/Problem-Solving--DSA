/**
 * @problem - Linked List Cycle II
 * @SolveAt - https://leetcode.com/problems/linked-list-cycle-ii/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return findNode(head, slow);
    }
  }

  return null;
};

function findNode(headPointer, slowPointer) {
  while (true) {
    if (headPointer === slowPointer) return slowPointer;
    headPointer = headPointer.next;
    slowPointer = slowPointer.next;
  }
}
