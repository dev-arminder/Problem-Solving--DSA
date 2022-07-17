/**
 * @problem - Convert Binary Number in a Linked List to Integer
 * @SolveAt - https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 */

var getDecimalValue = function (head) {
  let number = "";
  while (head) {
    number += head.val;
    head = head.next;
  }

  let integerNumber = 0;
  let index = 0;

  while (number.length) {
    let lastDigit = parseInt(number[number.length - 1]);
    number = number.slice(0, number.length - 1);
    integerNumber += lastDigit * (1 << index++);
  }

  return integerNumber;
};
