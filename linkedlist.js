// // // // // SINGLY LINKED LIST

// // problems solved
// add numbers 2 at leetcode
// Rearrange a linked list odd and even merged make new list at gfg
////// Given a linked list of 0s, 1s and 2s, sort it. solved at gfg
//// liked list palindrome solved on gfg
//// Add 1 to a number represented as linked list solved at gfg straight forward
//// Intersection of Two Linked Lists solved at leetcode two pointer and hash table
// //find the middle node solved at gfg two pointer
////Remove duplicates from a sorted doubly linked list gfg using pointer change nothing
// Merge Two Sorted Lists solved at leetcode
/// rotate linked list solved at leetcde
/// reverse k group of nodes linked list hard solved at leetcode
//// Flattening a Linked List solved gfg using merge sort technique with recursion

// class LinkedList {
//   constructor(value) {
//     this.head = {s
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//   }

//   convertArraytoLL(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let temp = {
//         value: arr[i],
//         next: null,
//       };
//       this.tail.next = temp;
//       this.tail = temp;
//     }
//   }

//   traversal() {
//     let data = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       data.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(data);
//   }

//   length() {
//     let count = 0;
//     let currentnode = this.head;
//     while (currentnode !== null) {
//       currentnode = currentnode.next;
//       count++;
//     }
//     return count;
//   }

//   searchElement(val) {
//     let currentnode = this.head;
//     while (currentnode) {
//       if (currentnode.value === val) {
//         return true;
//       }
//       currentnode = currentnode.next;
//     }
//     return false;
//   }

//   deletionHead() {
//     if (this.head.value === null) return this.head;
//     this.head = this.head.next;
//     return this.head;
//   }

//   deletionTail() {
//     if (this.head.value === null || this.head.next === null) return this.head;
//     let temp = this.head;

//     while (temp.next.next !== null) {
//       temp = temp.next;
//     }
//     temp.next = null;
//     console.log(temp);
//     return this.head;
//   }

//   deleteMiddle(value) {
//     if (this.head.value === null || this.head.next === null) return this.head;
//     if (value === 1) {
//       return this.deletionHead();
//     }
//     let count = 0;
//     let prev = null;
//     let temp = this.head;
//     while (temp !== null) {
//       count++;

//       if (count === value) {
//         prev.next = prev.next.next;
//       }
//       prev = temp;
//       temp = temp.next;
//     }
//     console.log(data, "tem");
//     return this.head;
//   }
// }

// let data = [1, 2, 3, 4, 5];
// let out = new LinkedList(data[0]);
// out.convertArraytoLL(data);
// out.traversal();
// let length = out.length();
// console.log(length);
// let search = out.searchElement(4);
// console.log(search);
// // let head = out.deletionHead();
// // console.log(head, "head");
// // let tail = out.deletionTail();
// // console.log(tail);
// let middle = out.deleteMiddle(2);
// console.log(middle, "middle");

///// ----------------------------------------------------------------------------------
// // // // // DOUBLY LINKED LIST

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
  }

  convertArrayToDoublyLinkedList(arr) {
    for (let i = 1; i < arr.length; i++) {
      let temp = {
        value: arr[i],
        next: null,
        prev: null,
      };
      temp.prev = this.tail;
      this.tail.next = temp;
      this.tail = temp;
    }
    return this;
  }

  headDelete() {
    if (this.head.value === null) return this.head;
    let current = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    current.next = null;
  }

  tailDelete() {
    let current = this.tail;
    this.tail = current.prev;
    current.prev.next = null;
    current.next = null;
  }

  // append(newNode) {
  //   let temp = {
  //     value: newNode,
  //     next: null,
  //     prev: null,
  //   };
  //   temp.prev = this.tail;
  //   this.tail.next = temp;
  //   this.tail = temp;

  //   return this;
  // }

  removeNthElement(num) {
    if (this.head === null) return null;
    let count = 0;
    let temp = this.head;

    while (temp !== null) {
      count++;
      if (count === num) break;
      temp = temp.next;
    }

    let prevs = temp.prev;
    let nexts = temp.next;

    if (prevs === null && nexts === null) {
      return temp;
    } else if (prevs === null) {
      let current = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      current.next = null;
    } else if (nexts === null) {
      let current = this.tail;
      this.tail = current.prev;
      current.prev.next = null;
      current.next = null;
    }

    prevs.next = nexts;
    nexts.prev = prevs;

    return this.head;
  }

  printList() {
    let current = this.head;
    let list = [];
    while (current !== null) {
      list.push(current.value);
      current = current.next;
    }

    // return list;

    let temp = this.head;

    while (temp !== null) {
      temp.value = list.pop();
      temp = temp.next;
    }
  }

  reverse() {
    let current = this.tail;
    let list = [];
    while (current !== null) {
      list.push(current.value);
      current = current.prev;
    }
    return list;
  }
}

let arr = [1, 3, 5, 6, 7, 9];
// // // reverse 9,7,6,5,3,1

let data = new DoublyLinkedList(arr[0]);
let out = data.convertArrayToDoublyLinkedList(arr);
// data.headDelete();
// data.tailDelete();
// console.log(data);
// data.removeNthElement(2);

// console.log(data);
// let dons = data.printList();
// console.log(dons);

// // let done = data.reverse();
// console.log(out);
