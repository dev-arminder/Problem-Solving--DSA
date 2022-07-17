/**
 * @problem - Reverse Linked List
 * @SolveAt - https://leetcode.com/problems/reverse-linked-list/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let currentNode = head;
  if (!currentNode) {
    return currentNode;
  }

  let prevNode = null;
  let nextNode = currentNode.next;

  while (currentNode) {
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    if (nextNode) {
      nextNode = nextNode.next;
    } else {
      nextNode = null;
    }
  }

  return prevNode;
};
