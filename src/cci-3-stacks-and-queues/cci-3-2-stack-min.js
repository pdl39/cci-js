// Stack Min
/* How would you design a stack which, in addition to push and pop, 
has a function "min" which returns the minimum element?
Push, pop, and min should all operate in O(1) time.  */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.subMin = null;
  }
}

class StackWithMin {
  constructor(val=null) {
    this.top = val === null ? null : new Node(val);
    this.size = val === null ? 0 : 1;
    this.minimum = val;
  }

  showArray() {
    let currentNode = this.top;
    let array = [];

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  isEmpty() {
    return this.top === null;
  }

  peek() {
    return this.isEmpty() ? undefined : this.top.value;
  }

  // Adding to the top of the stack (the head of the linked list).
  // --> linkedlist.prepend()
  push(val) {
    const node = new Node(val);

    if (this.top === null) this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;

    node.subMin = this.minimum;
    if (node.value < this.minimum || this.minimum === null) this.minimum = node.value;

    return this;
  }

  // Removing from the top of the stack (the head of the linked list).
    // --> linkedlist.deleteFirst()
  pop() {
    if (this.top === null) return undefined;

    let prevTop = this.top;
    this.top = prevTop.next;
    this.size--;

    if (prevTop.value === this.minimum) this.minimum = prevTop.subMin;

    return prevTop.value;
  }

  min() {
    return this.minimum;
  }
}


// EXAMPLE
const myStack = new StackWithMin();
console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.showArray());
myStack.push(7);
console.log(myStack.showArray());
console.log("min:", myStack.min());
myStack.push(3);
console.log(myStack.showArray());
console.log("min:", myStack.min());
myStack.push(5);
console.log(myStack.showArray());
console.log("min:", myStack.min());
myStack.push(2);
console.log(myStack.showArray());
console.log("min:", myStack.min());
myStack.push(1);
console.log(myStack.showArray());
console.log("min:", myStack.min());
console.log(myStack);
console.log("popped:", myStack.pop());
console.log(myStack.showArray());
console.log("min:", myStack.min());
console.log("popped:", myStack.pop());
console.log(myStack.showArray());
console.log("min:", myStack.min());
console.log("popped:", myStack.pop());
console.log(myStack.showArray());
console.log("min:", myStack.min());
console.log("popped:", myStack.pop());
console.log(myStack.showArray());
console.log("min:", myStack.min());
console.log("popped:", myStack.pop());
console.log(myStack.showArray());
console.log("min:", myStack.min());
console.log(myStack);