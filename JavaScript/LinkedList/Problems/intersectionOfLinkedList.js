/**
 * @problem -  Intersection of Linked List
 * @SolveAt - https://leetcode.com/problems/intersection-of-two-linked-lists/
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {
  let firstCurrent = headA;
  let secondCurrent = headB;

  if (firstCurrent === null || secondCurrent === null) return null;

  while (firstCurrent !== secondCurrent) {
    firstCurrent = firstCurrent == null ? headB : firstCurrent.next;
    secondCurrent = secondCurrent == null ? headA : secondCurrent.next;
  }

  return firstCurrent;
};
