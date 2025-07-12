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

  insertAtLast(val) {
    this.size++;
    let newNode = new Node(val);
    if (this.head === null) return (this.head = newNode);
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  deleteAtFirst() {
    if (this.head === null) return console.log("Empty List...");
    this.size--;
    this.head = this.head.next;
  }

  deleteAtLast() {
    if (this.head === null) return console.log("Empty List...");
    this.size--;
    if (this.head.next === null) return (this.head = null);
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  insertAtIndex(index, val) {
    if (index < 0 || index > this.size)
      return console.log("Index are not Allowed!");
    this.size++;
    const newNode = new Node(val);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let temp = this.head;
    let i = 1;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }

  deleteAtIndex(index) {
    if (index < 0 || index > this.size)
      return console.log("Index are not Allowed!");
    this.size--;
    if (index === 0) return (this.head = this.head.next);
    let temp = this.head;
    let i = 1;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    temp.next = temp.next.next;
  }

  findElementByIndex(index) {
    if (index < 0 || index > this.size)
      return console.log("Index are not Allowed!");
    if (index === 0) return console.log(this.head.value);
    let temp = this.head;
    let i = 1;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    console.log(temp.next.value);
  }

  printTheLL() {
    if (this.head === null) return console.log("Empty List...");
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.value + " ");
      temp = temp.next;
    }
    console.log("")
  }

  findMiddileOfLL() {
    let first = this.head;
    let last = this.head;
    while (first !== null && first.next !== null) {
      first = first.next.next;
      last = last.next;
    }
    let arr = [];
    while (last != null) {
      arr.push(last.value);
      last = last.next;
    }
    console.log(arr);
  }
  removeDuplecateNode() {
    let temp = this.head;
    while (temp != null && temp.next != null) {
      if (temp.value === temp.next.value) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
  }
  removeDuplecateNodewithOriginal() {
    let dummy = new Node(-1);
    dummy.next = this.head;
    let prev = dummy;
    let current = this.head;
    while (current !== null) {
      let duplicate = false;
      while (current.next !== null && current.value === current.next.value) {
        duplicate = true;
        current = current.next;
      }
      if (duplicate) {
        prev.next = current.next;
      } else {
        prev = prev.next;
      }
      current = current.next;
    }
    this.head = dummy.next;
  }
  reverseLLwithKTimes(head = this.head, k) {
    if (head === null || k === 1 || k === null || head.next === null)
      return head;
    let start = head,
      end = head;
    for (let i = 0; i < k; i++) {
      if (end === null) {
        return head;
      }
      end = end.next;
    }
    let newNode = reverseLL(start, end);
    start.next = this.reverseLLwithKTimes(end, k);
    return newNode;
  }
  deleteByValue(val){
    while (this.head !== null && this.head.value === val) {
      this.head = this.head.next;
      this.size--;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.value === val) {
        current.next = current.next.next;
        this.size--;
      } else {
        current = current.next;
      }
    }
  }
}


function reverseLL(st, ed) {
  let cur = st, prev = null;
  while(cur != ed){
      let temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
  }
  return prev;
}

const obj = new LinkedList();
obj.insertAtLast(1)
obj.insertAtLast(2)
obj.insertAtLast(3)
obj.insertAtLast(4)
obj.insertAtLast(5)
obj.insertAtLast(6)
obj.deleteByValue(6)
obj.printTheLL()
// const obj2 = new LinkedList();
// obj2.insertAtLast(9)
// obj2.insertAtLast(9)
// obj2.insertAtLast(9)
// obj2.insertAtLast(9)

// let AddTwoNumbers = (l1,l2) => {
//   if(l1 === null || l2 === null) return console.log("not Possible!");
//   let dummyNode = new Node(-1) , temp = dummyNode, carry = 0;
//   while(l1 != null || l2 != null || carry !== 0){
//     let val1 = l1 !== null ? l1.value : 0;
//     let val2 = l2 !== null ? l2.value : 0;
//     let sum = val1 + val2 + carry;
//     carry = Math.floor(sum / 10);
//     temp.next = new Node(sum%10);
//     temp = temp.next;
//     if(l1 !== null)  l1 = l1.next;
//     if (l2 !== null) l2 = l2.next;
//   }
  
//   return dummyNode.next;
// }
// let ans = AddTwoNumbers(obj.head, obj2.head);

// let PrintLL = (list)=> {
//   if (list === null) return console.log("Empty List...");
//   let temp = list;
//   while (temp != null) {
//     process.stdout.write(temp.value + " ");
//     temp = temp.next;
//   }
// }
// obj.printTheLL();
// obj2.printTheLL();
// PrintLL(ans)


// [1,2,3,3,4,4,5] Input.
// [1,2,5] Output.