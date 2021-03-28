// Three in One
/* Describe how you could use a single array to implement three stacks */

class MultiStackFixed {
  constructor(numberOfStacks, capacityOfEachStack) {
    this.numberOfStacks = numberOfStacks;
    this.capacityOfEachStack = capacityOfEachStack;
    this.data = new Array(numberOfStacks * capacityOfEachStack);
    this.stackSizes = new Array(numberOfStacks).fill(0);
  }

  stackSize(stackNum) {
    return this.stackSizes[stackNum - 1];
  }

  offset(stackNum) {
    return (stackNum - 1) * this.capacityOfEachStack;
  }

  indexOfTop(stackNum) {
    if (this.isStackEmpty(stackNum)) return this.errorOnStackEmpty();

    const offset = this.offset(stackNum);
    const stackSize = this.stackSize(stackNum);
    return offset + stackSize - 1;
  }

  top(stackNum) {
    return this.data[this.indexOfTop(stackNum)];
  }

  stack(stackNum) {
    const offset = this.offset(stackNum);
    const stackSize = this.stackSize(stackNum);
    return this.data.slice(offset, offset + stackSize);
  }

  isStackFull(stackNum) {
    return this.stackSizes[stackNum - 1] === this.capacityOfEachStack;
  }

  errorOnStackFull() {
    return "The selected stack is full.";
  }

  isStackEmpty(stackNum) {
    return this.stackSizes[stackNum - 1] === 0;
  }

  errorOnStackEmpty() {
    return "The selected stack is empty.";
  }

  peek(stackNum) {
    return this.top(stackNum);
  }

  push(stackNum, val) {
    if (this.isStackFull(stackNum)) return this.errorOnStackFull();

    if (this.stackSize(stackNum) === 0) this.data[this.offset(stackNum)] = val;
    else this.data[this.indexOfTop(stackNum) + 1] = val;
    this.stackSizes[stackNum - 1]++;

    return this.data.slice(0, this.stackSizes[stackNum - 1]);
  }

  pop(stackNum) {
    if (this.isStackEmpty(stackNum)) return this.errorOnStackEmpty();

    const prevTop = this.top(stackNum);
    this.data[this.indexOfTop(stackNum)] = null;
    this.stackSizes[stackNum - 1]--;

    return prevTop;
  }
}


// EXAMPLE
const myMultiStack = new MultiStackFixed(3, 10);
myMultiStack.push(1, 3);
myMultiStack.push(1, 5);
myMultiStack.push(1, 7);
console.log(myMultiStack.stack(1));
console.log(myMultiStack.top(1));
console.log(myMultiStack.indexOfTop(1));
myMultiStack.push(2, 2);
myMultiStack.push(2, 4);
myMultiStack.push(2, 8);
console.log(myMultiStack.stack(2));
console.log(myMultiStack.top(2));
console.log(myMultiStack.indexOfTop(2));
myMultiStack.push(3, 11);
myMultiStack.push(3, 15);
myMultiStack.push(3, 19);
console.log(myMultiStack.stack(3));
console.log(myMultiStack.top(3));
console.log(myMultiStack.indexOfTop(3));

myMultiStack.pop(1);
console.log(myMultiStack.stack(1));
console.log(myMultiStack.top(1));
console.log(myMultiStack.indexOfTop(1));

myMultiStack.pop(2);
console.log(myMultiStack.stack(2));
console.log(myMultiStack.top(2));
console.log(myMultiStack.indexOfTop(2));

myMultiStack.pop(3);
console.log(myMultiStack.stack(3));
console.log(myMultiStack.top(3));
console.log(myMultiStack.indexOfTop(3));
console.log(myMultiStack.peek(3));

myMultiStack.pop(3);
console.log(myMultiStack.stack(3));
console.log(myMultiStack.top(3));
console.log(myMultiStack.indexOfTop(3));
console.log(myMultiStack.peek(3));

myMultiStack.pop(3);
console.log(myMultiStack.stack(3));
console.log(myMultiStack.top(3));
console.log(myMultiStack.indexOfTop(3));
console.log(myMultiStack.peek(3));

myMultiStack.push(3, 55);
myMultiStack.push(3, 66);
myMultiStack.push(3, 77);
console.log(myMultiStack.stack(3));
console.log(myMultiStack.top(3));
console.log(myMultiStack.indexOfTop(3));
console.log(myMultiStack.peek(3));