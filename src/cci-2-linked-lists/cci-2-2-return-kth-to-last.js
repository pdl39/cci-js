// Return Kth to last

// singly linked list

// ec:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// return 4th to last --> 7

import { SLinkedList } from "../ds/linkedlist-singly.js";

// 1. two pass - first pass to calculate the total number of nodes. second pass to traverse to (total + 1 - k)th element.
function kthToLastTwoPass(k, ll) {
  let currentNode = ll.head;

  // find the total number of nodes in the linked list.
  let nodeCount = 0;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    nodeCount++;
  }

  // reset currentNode to be the first node.
  currentNode = ll.head;
  // traverse ((number of nodes - k)+1)th node. this is the kth to last node.
  if (nodeCount < k) return undefined;
  let iterateTo = nodeCount - k;
  for (let i = 0; i < iterateTo; i++) {
    currentNode = currentNode.next;
  }
  return currentNode.value;
}
// T: O(n)
// S: O(1)


// TEST
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ll = new SLinkedList(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);
ll.append(8);
ll.append(9);
ll.append(10);
console.log(ll.showArray());
console.log(kthToLastTwoPass(4, ll)); // 7
console.log(kthToLastTwoPass(1, ll)); // 10
console.log(kthToLastTwoPass(8, ll)); // 3
console.log(kthToLastTwoPass(10, ll)); // 1


//---------------------------------------------------------------------------------


// 2. two pointers - use two pointers k distance apart to traverse in parallel.
function kthToLastTwoPointers(k, ll) {
  let pointerAtHead = ll.head;
  let pointerAtK = ll.head;

  // position pointerAtKthToLast to kth position from head.
  for (let i = 0; i < k; i++) {
    pointerAtK = pointerAtK.next;
  }

  // traverse pointerAtHead and pointerAtK in parallel until pointerAtK becomes null.
  // at this point, pointerAtHead will be at the kth to last position.
  while(pointerAtK !== null) {
    pointerAtHead = pointerAtHead.next;
    pointerAtK = pointerAtK.next;
  }
  return pointerAtHead.value;
}
// T: O(n)
// S: O(1)


// TEST
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ll2 = new SLinkedList(1);
ll2.append(2);
ll2.append(3);
ll2.append(4);
ll2.append(5);
ll2.append(6);
ll2.append(7);
ll2.append(8);
ll2.append(9);
ll2.append(10);
console.log(ll2.showArray());
console.log(kthToLastTwoPointers(4, ll2)); // 7
console.log(kthToLastTwoPointers(1, ll2)); // 10
console.log(kthToLastTwoPointers(8, ll2)); // 3
console.log(kthToLastTwoPointers(10, ll2)); // 1