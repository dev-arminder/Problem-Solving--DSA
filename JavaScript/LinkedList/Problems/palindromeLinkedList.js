/**
 * @problem - Palindrome Linked List
 * @SolveAt - https://leetcode.com/problems/palindrome-linked-list/
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let temp = head;
  let size = 0;
  while (temp) {
    size++;
    temp = temp.next;
  }
  if (size === 1) {
    return true;
  }
  if (size === 2) {
    return head.val === head.next.val;
  }

  let midPoint = Math.floor(size / 2);
  let leftPointer = head;

  let prevPointer = null;
  let nextPointer = leftPointer.next;
  while (midPoint--) {
    leftPointer.next = prevPointer;
    prevPointer = leftPointer;
    leftPointer = nextPointer;
    nextPointer = nextPointer.next;
  }

  if (size % 2) leftPointer = leftPointer.next;
  console.log(prevPointer.val);
  console.log(leftPointer.val);
  while (prevPointer && leftPointer) {
    if (prevPointer.val !== leftPointer.val) return false;
    leftPointer = leftPointer.next;
    prevPointer = prevPointer.next;
  }

  return true;
};
