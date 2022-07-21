/**
 * @problem - Design Browser History
 * @SolveAt - https://leetcode.com/problems/design-browser-history/
 */
/**
 * @param {string} homepage
 */
function ListNode(val) {
  this.val = val;
  this.previous = null;
  this.next = null;
}

var BrowserHistory = function (homepage) {
  let newNode = new ListNode(homepage);
  this.head = newNode;
  this.tail = newNode;
  this.current = newNode;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  let newNode = new ListNode(url);
  let current = this.current;
  current.next = newNode;
  newNode.previous = current;
  this.tail = newNode;
  this.current = newNode;
  return this.current;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let current = this.current;
  while (steps-- && current) {
    current = current.previous;
  }

  if (current) {
    this.current = current;
    return current.val;
  } else {
    this.current = this.head;
    return this.head.val;
  }
};

/**
 * @param {number} steps
 * @return {string}.
 */
BrowserHistory.prototype.forward = function (steps) {
  let current = this.current;
  while (steps-- && current) {
    current = current.next;
  }

  if (current) {
    this.current = current;
    return current.val;
  } else {
    this.current = this.tail;
    return this.tail.val;
  }
};
