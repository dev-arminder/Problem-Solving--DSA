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
