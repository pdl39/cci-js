// implementing linked list

class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DLinkedList {
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
      detailedArray.push(new Map([
        [currentNode.value,
        {
          "next": currentNode.next ? currentNode.next.value : currentNode.next, 
          "prev": currentNode.prev ? currentNode.prev.value : currentNode.prev, 
          "head?": currentNode === this.head, 
          "tail?": currentNode === this.tail
        }]
      ]));
      currentNode = currentNode.next;
    }
    return detailedArray;
  }

  append(val) {
    let prevTail = this.tail;
    let newTail = new Node(val);
    prevTail.next = newTail;
    newTail.prev = prevTail;
    this.tail = prevTail.next;
    this.length++;
    return this;
  }

  prepend(val) {
    let prevHead = this.head;
    let newHead = new Node(val);
    newHead.next = prevHead;
    prevHead.prev = newHead;
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
    
    if (currentNode === this.tail && currentNode.value !== targetVal) return undefined;
    if (currentNode === this.tail && currentNode.value === targetVal) return this.append(val);
    
    newNode.next = currentNode.next;
    newNode.next.prev = newNode;
    currentNode.next = newNode;
    newNode.prev = currentNode;
    this.length++;

    return this;
  }

  deleteFirst() {
    let prevHead = this.head;
    this.head = prevHead.next;
    this.head.prev = null;
    this.length--;
    return prevHead;
  }

  deleteLast() {
    let prevTail = this.tail;
    this.tail = prevTail.prev;
    this.tail.next = null;
    this.length--;
    return prevTail;
  }

  delete(val) {
    let currentNode = this.head;

    if (currentNode.value === val) return this.deleteFirst();

    while (currentNode.next.next !== null) {
      if (currentNode.next.value === val) break;
      currentNode = currentNode.next;
    }

    if (currentNode.next === this.tail && currentNode.next.value !== val) return undefined;
    if (currentNode.next === this.tail && currentNode.next.value === val) return this.deleteLast();
  
    let confirmDeleteVal = currentNode.next.value === val;
    let nodeToDelete = confirmDeleteVal ? currentNode.next : undefined;
    currentNode.next = currentNode.next.next;
    currentNode.next.prev = currentNode;
    this.length--;
    
    return nodeToDelete;
  }
}

// Example
const dll = new DLinkedList(5);
console.log(dll);

dll.append(10);
console.log(dll);
console.log(dll.showArray());


dll.append(15);
console.log(dll);
console.log(dll.showArray());


dll.prepend(55);
console.log(dll);
console.log(dll.showArray());


dll.append(8);
console.log(dll);
console.log(dll.showArray());


dll.append(11);
console.log(dll);
console.log(dll.showArray());


dll.deleteFirst();
console.log(dll);
console.log(dll.showArray());


dll.deleteLast();
console.log(dll);
console.log(dll.showArray());

dll.insertValAfter(22, 10);
console.log(dll);
console.log(dll.showArray());

dll.deleteLast();
console.log(dll);
console.log(dll.showArray());

dll.delete(15);
console.log(dll);
console.log(dll.showArray());

dll.insertValAfter(55, 22);
console.log(dll);
console.log(dll.showArray());

dll.insertValAfter(50, 20);
console.log(dll);
console.log(dll.showArray());

dll.insertValAfter(66, 5);
console.log(dll);
console.log(dll.showArray());

dll.delete(5);
console.log(dll);
console.log(dll.showArray());

dll.insertValAfter(88, 66);
console.log(dll);
console.log(dll.showArray());


console.log("current status: ", dll.showArray());
console.log("current length: ", dll.length);

console.log(dll.showDetailedArray());