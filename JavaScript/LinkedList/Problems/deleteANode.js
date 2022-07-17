/**
 * @problem - Delete Node in a Linked List
 * @SolveAt - https://leetcode.com/problems/delete-node-in-a-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  while (node) {
    if (node.next) {
      node.val = node.next.val;
    } else {
      node.val = null;
    }

    if (!node.next.next) {
      node.next = null;
      return;
    }

    node = node.next;
  }
};
