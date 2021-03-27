// Remove Duplicates

// ec:
// [1, 0, 3, 2, 1, 5, 1, 2, 6, 6] --> [1, 0, 3, 2, 5, 6]

// assume singly linked list.

import { SLinkedList } from "../ds/linkedlist-singly.js";

function removeDup(sll) {
  let seenVal = new Map();
  seenVal.set(sll.head.value, true);

  let currentNode = sll.head;
  while (currentNode.next !== null) {
    if (!seenVal.has(currentNode.next.value)) {
      seenVal.set(currentNode.next.value, true);
      currentNode = currentNode.next;
    } else {
      currentNode.next = currentNode.next.next;
      if (currentNode.next === null) sll.tail = currentNode;
    }
    if (currentNode === null) break;
  }

  return sll;
}
// T: O(n)
// S: O(n)


// TEST
// [1, 0, 3, 2, 1, 5, 1, 2, 6, 6]
const ll = new SLinkedList(1);
ll.append(0);
ll.append(3);
ll.append(2);
ll.append(1);
ll.append(5);
ll.append(1);
ll.append(2);
ll.append(6);
ll.append(6);
console.log("input: ", ll.showArray(), "solution: ", removeDup(ll).showArray()); // [1, 0, 3, 2, 5, 6]

// [0, 0, 0, 5, 3, 2, 1, 4, 3, 2, 2, 6, 3, 6]
const ll2 = new SLinkedList(0);
ll2.append(0);
ll2.append(0);
ll2.append(5);
ll2.append(3);
ll2.append(2);
ll2.append(1);
ll2.append(4);
ll2.append(3);
ll2.append(2);
ll2.append(2);
ll2.append(6);
ll2.append(3);
ll2.append(6);
console.log("input: ", ll2.showArray(), "solution: ", removeDup(ll2).showArray()); // [0, 5, 3, 2, 1, 4, 6]
