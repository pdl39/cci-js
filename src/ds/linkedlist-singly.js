// implementing linked list

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export class SLinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  length() {
    return this.length;
  }

  showArray() {
    let currentNode = this.head;
    let array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  showDetailedArray() {
    let currentNode = this.head;
    let detailedArray = [];
    while (currentNode !== null) {
      detailedArray.push(
        new Map([
          [
            currentNode.value,
            {
              next: currentNode.next
                ? currentNode.next.value
                : currentNode.next,
              "head?": currentNode === this.head,
              "tail?": currentNode === this.tail,
            },
          ],
        ]),
      );
      currentNode = currentNode.next;
    }
    return detailedArray;
  }

  traverseTo(val) {
    let currentNode = this.head;

    while (currentNode.value !== val) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  append(val) {
    let prevTail = this.tail;
    prevTail.next = new Node(val);
    this.tail = prevTail.next;
    this.length++;

    return this;
  }

  prepend(val) {
    let prevHead = this.head;
    let newHead = new Node(val);
    newHead.next = prevHead;
    this.head = newHead;
    this.length++;

    return this;
  }

  insertValAfter(val, targetVal) {
    let newNode = new Node(val);
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === targetVal) break;
      currentNode = currentNode.next;
    }

    if (
      currentNode === this.tail &&
      currentNode.value !== targetVal
    )
      return undefined;
    if (
      currentNode === this.tail &&
      currentNode.value === targetVal
    )
      return this.append(val);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;

    return this;
  }

  deleteFirst() {
    let prevHead = this.head;
    this.head = prevHead.next;
    this.length--;
    return prevHead;
  }

  deleteLast() {
    let currentNode = this.head;
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    let prevTail = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;

    return prevTail;
  }

  delete(val) {
    let currentNode = this.head;

    if (currentNode.value === val)
      return this.deleteFirst();

    while (currentNode.next.next !== null) {
      if (currentNode.next.value === val) break;
      currentNode = currentNode.next;
    }

    if (
      currentNode.next === this.tail &&
      currentNode.next.value !== val
    )
      return undefined;
    if (
      currentNode.next === this.tail &&
      currentNode.next.value === val
    )
      return this.deleteLast();

    let confirmDeleteVal = currentNode.next.value === val;
    let nodeToDelete = confirmDeleteVal
      ? currentNode.next
      : undefined;
    currentNode.next = currentNode.next.next;
    this.length--;

    return nodeToDelete;
  }
}

// Example
// const sll = new SLinkedList(5);
// console.log(sll);

// sll.append(10);
// console.log(sll);
// console.log(sll.showArray());

// sll.append(15);
// console.log(sll);
// console.log(sll.showArray());

// sll.prepend(55);
// console.log(sll);
// console.log(sll.showArray());

// sll.append(8);
// console.log(sll);
// console.log(sll.showArray());

// sll.append(11);
// console.log(sll);
// console.log(sll.showArray());

// sll.deleteFirst();
// console.log(sll);
// console.log(sll.showArray());

// sll.deleteLast();
// console.log(sll);
// console.log(sll.showArray());

// sll.insertValAfter(6, 10);
// console.log(sll);
// console.log(sll.showArray());

// console.log(sll.insertValAfter(6, 11));
// console.log(sll);
// console.log(sll.showArray());

// sll.delete(15);
// console.log(sll);
// console.log(sll.showArray());

// sll.insertValAfter(122, 5);
// console.log(sll);
// console.log(sll.showArray());

// sll.delete(8);
// console.log(sll);
// console.log(sll.showArray());

// sll.insertValAfter(23, 122);
// console.log(sll);
// console.log(sll.showArray());

// sll.insertValAfter(61, 6);
// console.log(sll);
// console.log(sll.showArray());

// sll.delete(5);
// console.log(sll);
// console.log(sll.showArray());

// sll.insertValAfter(77, 122);
// console.log(sll);
// console.log(sll.showArray());

// console.log(sll.traverseTo(23));
// console.log(sll.traverseTo(122));
// console.log(sll.traverseTo(6));
// console.log(sll.traverseTo(61));

// console.log("current status: "
// , sll.showArray());
// console.log("current length: "
// , sll.length);

// console.log(sll.showDetailedArray());

