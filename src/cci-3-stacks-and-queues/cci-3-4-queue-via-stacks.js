// Queue via Stacks
/* Implement a MyQueue class which implements a queue using two stacks. */

import { NodeType1 } from "../ds/_nodes_.js";
import StackArr from "../ds/stack-array.js";
import Queue from "../ds/queue-linkedlist.js";


class QueueViaStacks extends Queue {
  constructor(val=null) {
    super(val);
    this.addStack = new StackArr(val);
    this.removeStack = new StackArr();
    this.first = val === null ? null : new NodeType1(val);
    this.last = this.first;
    this.size = val === null ? 0 : 1;
  }

  showArray() {
    let addStackArray = this.addStack.data;
    let removeStackArray = this.removeStack.data;
    let array = [];

    for (let i = 0; i < removeStackArray.length; i++) {
      array.push(removeStackArray[i].value);
    }

    for (let i = addStackArray.length - 1; i >= 0 ; i--) {
      array.push(addStackArray[i].value);
    }

    return array;
  }

  add(val) {
    let prevLast;
    if (this.addStack.isEmpty()) {
      if (!this.removeStack.isEmpty()) prevLast = this.removeStack.data[0];
      else prevLast = null;
    }
    else prevLast = this.addStack.data[this.addStack.data.length - 1];

    this.addStack.push(new NodeType1(val));
    const addedNode = this.addStack.data[this.addStack.data.length - 1];
    
    if (this.first === null) this.first = addedNode;
    if (prevLast) prevLast.next = addedNode;
    this.last = addedNode;

    this.size++;

    return;
  }

  remove() {
    if (this.removeStack.isEmpty()) {
      while (!this.addStack.isEmpty()) {
        this.removeStack.push(this.addStack.pop());
      }
    }

    const removedNode = this.removeStack.pop().value;
    if (this.removeStack.isEmpty() && this.addStack.isEmpty()) {
      this.first = null;
      this.last = null;
    }
    else {
      this.first = this.removeStack.data[this.removeStack.data.length - 1];
    }

    this.size--;

    return removedNode;
  }
}


// EXAMPLE
const myQueue = new QueueViaStacks();
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
console.log(myQueue.showArray());
myQueue.add(5);
console.log(myQueue.showArray());
myQueue.add(6);
console.log(myQueue.showArray());
myQueue.add(7);
console.log(myQueue.showArray());
myQueue.add(8);
console.log(myQueue.showArray());
myQueue.add(9);
console.log(myQueue.showArray());
console.log(myQueue);
console.log("removed:", myQueue.remove());
console.log(myQueue.showArray());
console.log(myQueue);
console.log("removed:", myQueue.remove());
console.log(myQueue.showArray());
console.log(myQueue);
console.log("removed:", myQueue.remove());
console.log(myQueue.showArray());
console.log(myQueue);
console.log("removed:", myQueue.remove());
console.log(myQueue.showArray());
console.log(myQueue);
console.log("removed:", myQueue.remove());
console.log(myQueue.showArray());
console.log(myQueue);