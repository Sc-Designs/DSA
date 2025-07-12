class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtFirst(val) {
    this.size++;
    const newNode = new Node(val);
    if (this.head === null) return (this.head = newNode);
    newNode.next = this.head;
    this.head = newNode;
  }
  reversLL() {
    let cur = this.head,
      prev = null;
    while (cur !== null) {
      let temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
    }
    this.head = prev;
  }
  isPalindromeLinkedList() {
    if (!this.head || !this.head.next) return true;
    let slow = this.head,
      fast = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let prev = null,
      curr = slow.next;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    let first = this.head,
      second = prev;
    let isPalindrome = true;
    while (second) {
      if (first.value !== second.value) {
        isPalindrome = false;
        break;
      }
      first = first.next;
      second = second.next;
    }

    curr = prev;
    prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    slow.next = prev;
    console.log(isPalindrome);
  }
  printTheLL() {
    if (this.head === null) return console.log("Empty List...");
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.value + " => ");
      temp = temp.next;
    }
    console.log("null");
  }
}

const obj = new LinkedList();
obj.insertAtFirst(9);
obj.insertAtFirst(1);
obj.insertAtFirst(3);
obj.insertAtFirst(6);
obj.insertAtFirst(2);
obj.printTheLL()
const removeNthFromEnd = (obj,n) => {
  let dummy = new Node(0);
  dummy.next = obj;

  let first = dummy, slow = dummy;

  for(let i = 0; i<= n; i++){
    first = first.next; 
  }

  while(first != null){
    first = first.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  let temp = dummy.next;
  while (temp != null) {
    process.stdout.write(temp.value + " => ");
    temp = temp.next;
  }
  console.log("null");
}
removeNthFromEnd(obj.head,3);