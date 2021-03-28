// Partition
/* write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. 
If x is contained within the list, the values of x only need to be after the elements less than x. 
The partition element x can appear anywhere in the "right partition"; 
it does not need to appear between the left and right partitions. */



// assume singly linked list.

/* ec: 
[3, 5, 8, 5, 10, 2, 1]
partition = 5 --> [3, 1, 2, 10, 5, 5, 8] */

import {SLinkedList} from "../ds/linkedlist-singly.js";

function partition(ll, x) {
  let currentNode = ll.head;

  // traverse through linked list. 
  while (currentNode.next !== null) {
    /* If node value < partition value, delete the node 
    and create a new node of that value and prepend as the new head. */
    if (currentNode.next.value < x) {
      let val = currentNode.next.value;
      let newHead = new Node(val);
      currentNode.next = currentNode.next.next;
      newHead.next = ll.head;
      ll.head = newHead;
    }
    else {
      currentNode = currentNode.next;
    }
  }

  return ll;
}

class Node {
  constructor(val) {
    this.value = val,
    this.next = null
  }
}
// T: O(n)
// S: O(1)


// TEST
// [3, 5, 8, 5, 10, 2, 1]
const ll = new SLinkedList(3);
ll.append(5);
ll.append(8);
ll.append(5);
ll.append(10);
ll.append(2);
ll.append(1);
console.log(ll.showArray());
partition(ll, 5); // [1, 2, 3, 5, 8, 5, 10]
console.log(ll.showArray());