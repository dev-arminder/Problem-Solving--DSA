function cycleLength(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  let current = slow.next;
  let length = 1;

  while (current !== slow) {
    current = current.next;
    length++;
  }

  return length;
}
