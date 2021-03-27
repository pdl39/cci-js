// Remove Duplicates

// ec:
// [1, 0, 3, 2, 1, 5, 1, 2, 6, 6] --> [1, 0, 3, 2, 5, 6]

// assume singly linked list.

import { SLinkedList } from "../ds/linkedlist-singly.js";

// 1. Using hash table
function removeDup(sll) {
  let seenVal = new Map();
  seenVal.set(sll.head.value, true);

  let currentNode = sll.head;
  while (currentNode.next !== null) {
    if (!seenVal.has(currentNode.next.value)) {
      seenVal.set(currentNode.next.value, true);
      currentNode = currentNode.next;
    } 
    else {
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


//---------------------------------------------------------------------

// 2. Without extra space
function removeDupBF(sll) {
  let currentPointer = sll.head;
  let runnerPointer = currentPointer;

  while (currentPointer.next !== null) {
    while (runnerPointer.next !== null) {
      if (currentPointer.value !== runnerPointer.next.value) {
        runnerPointer = runnerPointer.next === null ? runnerPointer : runnerPointer.next;
      }
      else {
        runnerPointer.next = runnerPointer.next.next;
      }
      if (runnerPointer.next === null) {
        currentPointer = currentPointer.next;
        runnerPointer = currentPointer;
        if (runnerPointer === null) break;
      }
    }
    if (currentPointer === null) break;
  }

  return sll;
}
// T: O(n^2)
// S: O(1)


// TEST
// [1, 0, 3, 2, 1, 5, 1, 2, 6, 6]
const ll3 = new SLinkedList(1);
ll3.append(0);
ll3.append(3);
ll3.append(2);
ll3.append(1);
ll3.append(5);
ll3.append(1);
ll3.append(2);
ll3.append(6);
ll3.append(6);
console.log("input: ", ll3.showArray(), "solution: ", removeDupBF(ll3).showArray()); // [1, 0, 3, 2, 5, 6]

// [0, 0, 0, 5, 3, 2, 1, 4, 3, 2, 2, 6, 3, 6]
const ll4 = new SLinkedList(0);
ll4.append(0);
ll4.append(0);
ll4.append(5);
ll4.append(3);
ll4.append(2);
ll4.append(1);
ll4.append(4);
ll4.append(3);
ll4.append(2);
ll4.append(2);
ll4.append(6);
ll4.append(3);
ll4.append(6);
console.log("input: ", ll4.showArray(), "solution: ", removeDupBF(ll4).showArray()); // [0, 5, 3, 2, 1, 4, 6]
