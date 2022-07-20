/* * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;

  if (list1 === null || list2 === null) return list1 || list2;

  let currentList = list1;
  let secondList = list2;
  let head = list1;
  let previousNode = null;

  while (secondList !== null) {
    if (currentList && secondList.val < currentList.val) {
      if (previousNode) {
        previousNode.next = secondList;
      } else {
        head = secondList;
      }
      let temp = secondList;
      secondList = secondList.next;
      temp.next = currentList;
      previousNode = temp;
    } else {
      while (currentList && currentList.val <= secondList.val) {
        previousNode = currentList;
        currentList = currentList.next;
      }

      let temp = secondList;
      secondList = secondList.next;
      previousNode.next = temp;
      temp.next = currentList;
      previousNode = previousNode.next;
    }
  }

  return head;
};
