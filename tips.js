// It Contains some language tips I had learned.

/* 
 1. Don't Separately need to increment variables by One, use POST INCREMENT OPERATION.
*/

while (i <= j && windowProduct >= k) {
  windowProduct /= nums[i];
  i += 1;
}

while (i <= j && windowProduct >= k) {
  windowProduct /= nums[i++];
}
/* 
  2. Using multiple Variable and Conditions inside for loop
*/

function findBy({ index = Infinity, value }) {
  for (
    let current = this.first, position = 0;
    current && position <= index;
    position += 1, current = current.next
  ) {
    if (position === index || value === current.value) {
      return { node: current, index: position };
    }
  }
}

/* Untill a Number Don't Turned out to be zero */
while (midPoint--) {}
