// class Nodes {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class singlyLists {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     var newNode = new Nodes(val);
//     console.log(newNode);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this; // if you want to return whole list just put the THIS and whole value will be returned
//   }
//   pop() {
//     if (!this.head) return undefined;
//     var current = this.head;
//     var newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   shift() {
//     if (!this.head) return undefined; // single line that's why i didn't put the curly braces
//     var currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     if (this.head === 0) {
//       this.tail = null;
//     }
//     return currentHead;
//   }
//   unshift(val) {
//     var newNode = new Nodes(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     var counter = 0; // mean this value taking index...
//     var current = this.head;
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     console.log(current, "dafsfa");
//     return current;
//   }
//   insert(index, val) {
//     if (index < 0 || index > this.length) return null;
//     if (index === this.length) return this.push(val);
//     if (index === 0) return this.unshift(val);
//     var newNode = new Nodes(val);
//     var prev = this.get(index - 1); // index -1 mean your index value -1 example you give 5 means take value in 4
//     var temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === 0) return this.shift(); // put the 0 value
//     if (index === this.length - 1) return this.pop(); // you put the last value
//     var previous = this.get(index - 1);
//     var removed = previous.next;
//     previous.next = removed.next;
//     this.length--;
//     return removed;
//   }
// }
// var data = new singlyLists();
// data.push('Hello');
// data.push('Nayanthara');
// data.push('Madonna');
// data.push('Galgadot');
// console.log(data.remove(3), 'safadsf');
// console.log(data);
