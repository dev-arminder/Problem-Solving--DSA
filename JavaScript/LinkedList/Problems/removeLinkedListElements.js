/**
 * @problem - Remove Linked List Elements
 * @SolveAt - https://leetcode.com/problems/remove-linked-list-elements/
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let prevNode = null;
  let currentNode = head;
  let resultingHead = head;

  if (!head) return null;
  while (currentNode) {
    if (currentNode.val === val) {
      if (prevNode) {
        prevNode.next = currentNode.next;
      } else {
        resultingHead = currentNode.next;
      }

      currentNode = currentNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return resultingHead;
};
