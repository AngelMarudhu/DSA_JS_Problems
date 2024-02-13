// class BinaryHeap {
//   constructor() {
//     this.values = [1, 44, 55, 53, 84, 85, 93];
//   }
//   insert(element) {
//     this.values.push(element);
//     this.bubbleUp();
//   }
//   bubbleUp() {
//     let idx = this.values.length - 1;
//     const element = this.values[idx];
//     console.log(idx, element, "idx");
//     let parentidx = Math.floor((idx - 1) / 2);

//     console.log(this.values);
//   }
// }

// let heap = new BinaryHeap();
// heap.insert(6);

// const hash = (key, arrLength) => {
//   let total = 0;
//   for (let char of key) {
//     // 96 is arbitrary number most of case in using in real world
//     let value = char.charCodeAt(0) - 96;
//     // 109 97 114 117 100 104 117 every single value -96 the answer is below
//     // 13  1  18  21   4   8   21 the answer is 86
//     // 86 modulo of arr.length is 10 the answer is 6
//     total = (total + value) % arrLength;
//   }
//   console.log(total);
//   return total;
// };

// hash("marudhu", 10);

console.log("w".charCodeAt(0) - 97);
