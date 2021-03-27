// Delete Middle Node
// given access to only the node to delete (no head information)

// assume singly linked list.

// ec: 
// [1, 2, 3, 4, 5, 6, 7]
// delete 3. --> [1, 2, 4, 5, 6, 7]

import {SLinkedList} from "../ds/linkedlist-singly.js";

function deleteMiddle(node, ll) {
  if (node === null || node.next === null) return undefined;

  // copy the next node's value into the node's value.
  node.value = node.next.value;
  // delete the next node.
  node.next = node.next.next;
}


// TEST
// [1, 2, 3, 4, 5, 6, 7]
const ll = new SLinkedList(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
ll.append(7);
console.log(ll.showArray());
deleteMiddle(ll.traverseTo(3), ll); // [1, 2, 4, 5, 6, 7]
console.log(ll.showArray());