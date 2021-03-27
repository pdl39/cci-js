// remove duplicates

// ec:
// [1, 0, 3, 2, 1, 5, 1, 2, 6, 6] --> [1, 0, 3, 2, 5, 6]

// assume singly linked list.

function removeDup(ll) {
  let seenVal = new Map();

  let currentNode = ll.head;
  while (currentNode.next !== null) {
    if (!seenVal.has(currentNode.next.value))
      seenVal.set(currentNode.next.value, true);
    else {
    }
  }
}
