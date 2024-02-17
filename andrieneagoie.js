// // Google interview question in andrei neagoie... this is o(n^2) not preferred
// const arrOne = ["a", "b", "c", "d", "e"];
// const arrTwo = ["f", "g", "h", "i"];
// // Comparing two array if any matches return true not matches return false
// const compare = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return console.log("Success" + arr1[i], arr2[j]);
//       }
//     }
//   }
//   return console.log("Everything is failure so sorrryyyy!!!!!");
// };Gl

// compare(arrOne, arrTwo);

// SECOND METHOD OF THE COMPATE TWO ARRAYS.... o(n + 2) according to big o rules we wanna to remove constants so o(n)
// const arrOne = ["a", "b", "c", "d", "e"];
// const arrTwo = ["f", "g", "h", "b"];

// const compare = (arr1, arr2) => {
//   let map = {}; // empty here
//   for (let i = 0; i < arr1.length; i++) {
//     if (!map[arrOne[i]]) { // !means illai endral....
//       // first la map la edhum irukkadhu so edhum illa endral below code execute
//       const item = arrOne[i];
//       map[item] = true;
//     }
//   }
//   console.log(map, "array 1 total items");

//   for (let j = 0; j < arr2.length; j++) {
//     if (map[arr2[j]]) {
//       return console.log("success");
//       // if any matches in first array return success
//     } else {
//       const item = arrTwo[j];
//       map[item] = true;
//       // if doesn't match exist array of value add the value in the map array....
//     }
//   }
//   console.log(map);
//   return console.log("failure");
// };

// compare(arrOne, arrTwo);

// SOME CLASSES OF ANDRIE.......

// const obj1 = { value: 10 }; // this one is individual block and one more thing this is reference of obj2
// const obj2 = obj1; // so both are same block in the memory that's why value is true
// const obj3 = { value: 10 }; // but this is one another block of memory

// class Marudhu {
//   constructor(name, position, passion) {
//     //these parameter all of might be put on the nayanthara constructor it's must you did'nt put it through get not defined error be consious every time run this class the constructor also run....
//     this.name = name;
//     this.position = position;
//     this.passion = passion;
//   }
//   welcome() {
//     console.log(`hi there ${this.name}, i am a ${this.position} `);
//   }
// }

// class Nayanthara extends Marudhu {
//   constructor(name, position, living, passion) {
//     super(name, position, passion); // if you want to call extended class we might should use in SUPER keyword...
//     this.living = living;
//   }
//   madonna() { // ungalukku vendum endral intha method prototype ah crate pannikittu neenga entha class kku venalum use pannalam.... i've mention in last of this page i mean 900 something...
//     console.log(`i am living in ${this.living} passion in ${this.passion},`);
//   }
// }

// const data = new Nayanthara("Galgadot", "FullStack", "London", "Singing");

// data.welcome();
// data.madonna();

// CREATING IN ARRAY IT'S OWN DATA STRUCTURE...

// class myArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index) {
//     return this.data[index];
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     console.log(data, "Whole list ");
//     return this.length;
//   }
//   pop() {
//     const lastitem = this.data[this.length - 1]; // this.length-1 means last value of the array...
//     console.log(lastitem, "dafasdf");
//     delete this.data[this.length - 1]; // delete is a built in keyword JS
//     this.length--;
//     console.log(data, "deleted list");
//     return this.data;
//   }
//   delete(index) {
//     const whichindex = this.data[index];
//     this.slicing(index);
//     return this.data;
//   }
//   slicing(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       console.log((this.data[i] = this.data[i + 1]), "loooping"); // this loop is called shifting at the same time assigning the index oda next value, TIPS your index met adhoda value adutha value ah assign aagum aduthu kadaisila last two value same ah irukkum adha delete pannadhan delete la -1 use pannirukkanga so -1 means your array oda kadaisi value so don't be confuse buddies.....
//     }
//     delete this.data[this.length - 1]; // that shifting value be stored on last index of the data values that's why we are deleting the last values don't be confuse
//     this.length--;
//     console.log(data, "return");
//   }
// }

// const data = new myArray();
// data.push("Marudhu"), data.push("madonna"), data.push("galgadot");
// data.push("kadavul"),
//   // console.log(data.get(0));
//   // console.log(data.pop());
//   console.log(data.delete(1));

// THIS IS STRING REVERSE METHOD OF THE PROBLEM SOVING METHOD AND POPULAR OF INTERVIEW QUESTION...
// const stringReverse = (str) => {
//   if (!str || str.length < 2) {
//     return "Your entered wrong string data";
//   }

//   const reversing = [];
//   const totalLenth = str.length - 1; // this.length -1 identify total array of the string of length
//   console.log(totalLenth);
//   for (let i = totalLenth; i >= 0; i--) {
//     reversing.push(str[i]);
//   }
//   console.log(reversing);
//   return reversing.join(" "); // join is does'nt require of this line...
// };
// stringReverse("Marudhu");

// // simple solution and these are build in function this make it easier to read and write program.....
// const stringre = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(stringre("maru"));

// MERGE AND SORTED ARRAY OF THE ANDRIE....
// const mergeAndSorting = (arr1, arr2) => {
//   const finalArray = []; // const means we can't reassigned array that's why i am using const keyword in here....
//   let arrayOne = arr1[0];
//   let arrayTwo = arr2[0];
//   let i = 1;
//   let j = 1;

//   while (arrayOne || arrayTwo) { // WHILE MEANS IRUKKUMVARAI...
//     console.log(arrayOne, arrayTwo);
//     if (!arrayTwo || arrayOne < arrayTwo) {
//       // if !arrayTwo illai endralum || means 1 < 2 arrayOne push in the finalarray
//       finalArray.push(arrayOne);
//       // and aduthu next value kku move aaganum so arrayOne = arr1[i] and i++ pannirukkan first 0 and second 1 and third 2 that's why i am using i++ i am directly declered top of the i = 1
//       arrayOne = arr1[i];
//       i++;
//     } else {
//       finalArray.push(arrayTwo);
//       arrayTwo = arr2[j];
//       j++;
//     }
//   }
//   console.log(finalArray);
//   return finalArray;
// };

// mergeAndSorting([4, 5, 9, 23, 53, 66, 79], [2, 6, 7, 40, 44]);

// BINARY SERARCH TREE IT'S ONE OF THE MOST POPULAR DATASTRUCTURE IN THE SOFTWARE TECHNOLOGY AND ALSO USING GOOGLE SEARCH ENGINE... AND YOU'VE SEEN LOT'S OF PLACE IN THIS METHOD.... BE CONSIOUS TO WATCH AND READ AND LEARN...

// class Node { // this is also called template...
//   constructor(value) {
//     (this.right = null), (this.left = null), (this.value = value);
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value); // Node instantiating...
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       // holding your current Node value because comparing the new Node value that's why we holding your current Node value in the situatino
//       let currentNode = this.root; // holding the current value...

//       while (true) { // WHILE MEANS IRUKKUMVARAI..KEEP CONSIOUS
//         if (value < currentNode.value) {
//           if (!currentNode.left) {
//             // illaiendral assign the value currentnode.left
//             currentNode.left = newNode;
//             console.log(currentNode); // just for checking
//             return this; // return mean break the loop once met condition
//           }
//           currentNode = currentNode.left; // changing on the currentNode value...
//         } else {
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             console.log(currentNode); // just for checking
//             return this; // return mean break the loop once met condition
//           }
//           currentNode = currentNode.right; // changing on the currentNode
//         }
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root; // first holding the root value means first value
//     while (currentNode) {
//       // current node *irukkum varai* loop will be running on it..
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return false;
//   }
//   breathFirst(value) {
//     let currentNode = this.root;
//     let list = [];
//     let queue = []; // follow the current node
//     queue.push(currentNode);

//     while (queue.length > 0) {// queue oda length 0 kku mela irukkum varai...
//       currentNode = queue.shift();
//       //   console.log(currentNode.value);
//       list.push(currentNode.value);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     console.log(list);
//     return list;
//   }
// }

// const bst = new BinarySearchTree();
// bst.insert(9);
// bst.insert(5);
// bst.insert(33);
// bst.insert(30);
// bst.insert(84);
// bst.insert(3);
// bst.breathFirst();

//        9
//     5    33
//  3    30    84

// RECURSION METHOD IN ANDREI NEAGOIE...
// var counter = 0;
// function marudhu() {
//   console.log(counter);
//   if (counter > 4) {
//     const data = console.log("i am done!");
//     return data;
//   }
//   counter++;
//   marudhu();
// }

// marudhu();

// RECURSION FACTORIAL NUMBER....

// const recusionFactorial = (num) => {
//   if (num === 2) {
//     return num;
//   }
//   return num * recusionFactorial(num - 1);
//   // recursive running until base case 2 so 4 * 3 * 2
// };
// console.log(recusionFactorial(10));

// const loopFactorial = (num) => {
//   let answer = 1;
//   if (num === 2) {
//     return (answer = num);
//   }
//   for (let i = 2; i <= num; i++) {
//     console.log(`anwer ${answer} ivalue ${i}`);
//     console.log((answer = answer * i));
//   }
//   console.log(answer);
// };
// loopFactorial(4);

// FIBANOCCI ANDRIE NEAGOIE...

// const fibanocci = (num) => {
//   if (num < 2) {
//     return num;
//   }
//   return fibanocci(num - 1) + fibanocci(num - 2);
// };
// console.log(fibanocci(8));

// const fibanocciLoop = (num) => {
//   let arr = [0, 1];

//   for (let i = 2; i <= num; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   console.log(arr);
//   return arr[num];
// };

// console.log(fibanocciLoop(8)); // check in you notebook indepth details.

// SORTING ANDRIE NEAGOIE...
// JAVASCRIPT INBUILT METHOD IN SORT AND SORT METHOD USING UNICODE TABLE...
// let arrss = [4, 1, 5, 44, 6, 32, 7];
// In this example, the sort() method takes a sorting function as an argument that compares two values, a and b, and returns a negative value if a should come before b in the sorted array, a positive value if b should come before a, or zero if a and b are equal
// console.log(
//   arrss.sort((a, b) => {
//     console.log(`A value ${a} B value ${b}`);
//     return a - b;
//   })
// );

// BUBBLE SORT IN ANDRIE NEAGOIE....O(n^2) BIG 0 and GOOD SPACE COMPLEXITY
// const bubbles = [1, 4, 2, 89, 45, 3, 6, 23, 54, 34, 66, 7, 9, 0];

// const bubbling = (arr) => {
//   const arrLength = arr.length;
//   for (let i = 0; i < arrLength; i++) {
//     for (let j = 0; j < arrLength; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap numbers
//         let temp = arr[j]; // storing temp varible in big number and changing the j + 1 in lastly..
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
// };

// bubbling(bubbles);
// console.log(bubbles);

// SELECTION SORT ANDRIE NEAGOIE...
// const selection = [1, 4, 2, 89, 45, 3, 6, 23, 54, 34, 66, 7, 9, 0];

// const selectionSort = (arr) => {
//   const arrLength = arr.length;
//   for (let i = 0; i < arrLength; i++) {
//     let min = i; // set current index is minimum this case 0th index
//     console.log(arr[min]);
//     let temp = arr[i];
//     for (let j = i + 1; j < arrLength; j++) {
//       if (arr[j] < arr[min]) {
//         // if true minimum value is changed so we wanna to update min value
//         // ***looping all data find and update the minimum value....
//         min = j; // update min value
//       }
//     }
//     arr[i] = arr[min];
//     arr[min] = temp;
//   }
//   return arr;
// };

// selectionSort(selection);

// MERGE SORT IT'S ONE OF THE SPEED SORTING WAY... ANDRIE NEAGOIE... THIS IS ALSO MY FAVOURITE IN SORTING ALGORITHM.... IN THE REAL WORLD...

// const merging = [2, 4, 1, 3, 5];

// const mergeSort = (arr) => {
//   if (arr.length === 1) {
//     return arr;
//   }

//   // first we wanna to split into arrays....
//   const arrayLength = arr.length;
//   const middle = Math.floor(arrayLength / 2);
//   const leftSide = arr.slice(0, middle);
//   const rightSide = arr.slice(middle);
//   console.log(leftSide, "left");
//   console.log(rightSide, "right");
//   // this is recursion.. don't be weird...
//   let da1 = mergeSort(leftSide);
//   let da2 = mergeSort(rightSide);
//   return mergeCallback(da1, da2);
// };

// const mergeCallback = (left, right) => {
//   const result = [];
//   let leftindex = 0;
//   let rightindex = 0;
//   while (leftindex < left.length && rightindex < right.length) {
//     if (left[leftindex] < right[rightindex]) {
//       result.push(left[leftindex]);
//       leftindex++;
//     } else {
//       result.push(right[rightindex]);
//       rightindex++;
//     }
//   }

//   //   console.log(left, "left");
//   //   console.log(right, "right");
//   // this means anything balance in the index just concat the value of the result of the array .... don't be confuse okay....
//   while (leftindex < left.length) {
//     result.push(left[leftindex]);
//     leftindex++;
//   }

//   // Merge the remaining elements of right array
//   while (rightindex < right.length) {
//     result.push(right[rightindex]);
//     rightindex++;
//   }
// return result
// };

// console.log(mergeSort(merging));

// SEARCHING ALGORITHM IN ADRIE NEAGOIE... LINEAR, BINARY, BFS AND DFS...
// this is most important algorithm in the rael world why because every big companies are using the same algorithm example google youtube netflix amazon everything...

// LINEAR SEARCH.... (OR) SEQUENTIAL SEARCH... IN ANDRIE NEAGOIE...

// const linear = [1, 4, 2, 89, 45, 3, 6, 23, 54, 34, 66, 7, 9, 0];

// console.log(linear.indexOf(23));

// console.log(
//   linear.findIndex((item) => {
//     return item === 89;
//   })
// );

// console.log(
//   linear.find((item) => {
//     return item === 3;
//   })
// );

// console.log(linear.includes(54)); // true or false method.

// SINGLY LINKED LIST IN ANDRIE NEAGOIE....

// class Linkedlist {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     // console.log(this.tail); if you any doubt just enable and check it
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     // is this just print out in the array
//     const result = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       // currentnode null ah meet pannum varai loop run aagum
//       result.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     console.log(result);
//     return result;
//   }
//   insert(index, value) {
//     // check index
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     const leader = this.findoutindex(index - 1);
//     const holdigPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdigPointer;
//     this.length++;
//     return this;
//   }

//   findoutindex(index) {
//     // check index
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       // counter initially not meet the index value so that's this symbol of ! so meet pannum varai loop nadakkums
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     // check index

//     const leader = this.findoutindex(index - 1);
//     const removeNode = leader.next;
//     leader.next = removeNode.next;
//     this.length--;
//     return this;
//   }
// }

// const data = new Linkedlist(10);
// data.append(33);
// data.append(90);
// data.append(44);
// data.append(65);
// data.prepend(9);
// data.insert(3, 55);
// data.remove(3);
// data.printList();
// console.log(data);

// IS EVERYTHING IS REFERENCE BASED WORKS HERE SO NEXT POINTER TO ANOTHER POINTER VALUE OR THAT POINTING TO LOCATION
// SINGLY LIST HAVE TWO PROPERTIES ONE VALUE, ANOTHER ONE IS NEXT, SO ONE NODE HAVE TWO ITEMS, ONE VALUE, ANOTHER ONE NEXT. NEXT IS POINTER TO ANOTHER OBJECT OR MEMORY LOCATION CAREFULLY READ THE ABOVE LINE...

// class Lindedlist {
//   // have three main properties one is head and tail and length
//   constructor(value) {
//     this.head = {
//       value: value,
//       // initially next is null and next time next will be pointing another node why because next oda work idhuthan so value venam maaralam but next oda work pointing mattum dhaan carefull
//       next: null,
//       prev: null,
//     };z
//     // initially no value in the list so tail value also head value
//     // important tail reference to the head value...
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     // add the value last of the list...
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     // add the value before the head
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     // this is optional so just list out in the array so easily find out how many value inside of the list... that's why using printlist method...
//     const result = [];
//     let current = this.head;
//     while (current !== null) {
//       // currentnode null ah meet pannum varai loop run aagum
//       result.push(current.value);
//       current = current.next;
//     }
//     console.log(result);
//     return result;
//   }
// }

// const myList = new Lindedlist(19);
// myList.append(33);
// myList.append(44);
// myList.append(70);
// myList.append(456);
// // myList.printList();
// console.log(myList);

// BINARY SEARCH TREE PART TWO....

// class Node {
//   // this class is skeleton of the whole treee
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Binary {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       // comparing newNode value so holding root value in some variables...
//       let hangOn = this.root;
//       while (true) {
//         // this loop true aaga irukkum varai run aagum that's why im using true...
//         if (value < hangOn.value) {
//           if (!hangOn.left) {
//             hangOn.left = newNode;
//             return this;
//           }
//           hangOn = hangOn.left;
//         } else {
//           if (!hangOn.right) {
//             hangOn.right = newNode;
//             return this;
//           }
//           hangOn = hangOn.right;
//         }
//       }
//     }
//   }
//   lookup(value) {
//     if (!this.root) {
//       return false;
//     }
//     let hangOn = this.root; // HOLDING THE ROOT VALUE WHY BECAUSE COMPARE TO THE NEW VALUE
//     while (true) {
//       if (value < hangOn.value) {
//         hangOn = hangOn.left;
//       } else if (value > hangOn.value) {
//         hangOn = hangOn.right;
//       } else if (hangOn.value === value) {
//         return hangOn;
//       }
//       return false;
//     }
//   }
// }

// const Bst = new Binary();
// Bst.insert(9);
// Bst.insert(12);
// Bst.insert(4);
// Bst.insert(55);
// Bst.insert(66);
// Bst.insert(11);
// Bst.insert(44);
// Bst.insert(5);
// console.log(Bst.lookup(666));
// console.log(Bst);

//   breathFirst(value) {
//     let currentNode = this.root;
//     let list = [];
//     let queue = []; // follow the current node
//     queue.push(currentNode);

//     while (queue.length > 0) {
//       currentNode = queue.shift();
//       //   console.log(currentNode.value);
//       list.push(currentNode.value);
//       if (currentNode.left) {
//         queue.push(currentNode.left);
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//       }
//     }
//     console.log(list);
//     return list;
//   }
// }

// FACTORIAL NUMBER FIND USING RECURSION AND ITERATIVE LOOP METHOD BOTH ARE SAME BUT RECURSION SHORT CODE AND EASY TO UNDERSTAND...
// 5! = 5*4*3*2*1 BOTH TIME COMPLEXITY IS O(N) ALTHOUGH RECURSION IS SLOW COMPARE TO ITERATIVE METHOD SO ALWAYS PREFER TO ITERATIVE METHOD BUT LITTLE BIT TOUGHT COMPARE TO RECURSION ALTHOUGH BEST IS ITERATIVE METHOD........SS

// const factorial = (number) => {
//   if (number === 2 || number === 1) {
//     return number;
//   }
//   // stack LIFO method...
//   // 1 * 1 return 1
//   // 1 * 2 return 2
//   // 2 * 3 return 6
//   // 6 * 4 return 24
//   // 24 * 5 return 120
//   let finalize = number * factorial(number - 1);
//   return finalize;
// };
// console.log(factorial(5));

// const factorialLoop = (num) => {
//   let answer = 1;
//   if (num === 2 || num === 1) {
//     return num;
//   }

//   for (let i = 2; i <= num; i++) {
//     // 1 * 2 = 2
//     // 2 * 3 = 6
//     // 6 * 4 = 24
//     // 24 * 5 = 120
//     answer = answer * i;
//   }
//   return answer;
// };

// console.log(factorialLoop(5));

// FIBANOCCI METHOD USING RECURSION AND ITERATIVE METHOD.....
// 0,1,1,2,3,5,8,12,20,22

// const person = {
//   name: "marudhu",
//   age: 24,
//   jobs: "developer",
//   common: function (num, num2) {
//     console.log(
//       `i am ${this.name} i'm ${this.age} and i'm working as a ${this.jobs}`
//     );
//     const summ = num + num2;
//     console.log(summ);
//   },
// };

// const lover = {
//   name: "Nayanthara",
//   age: 22,
//   jobs: "Actress",
// };

// person.common.call(lover, 12, 11);

// PROTOTYPAL INHERITANCE AND PROTOTYPAL....
// every object have a prototype property so with out prototype illayendral neenga ovvoru time instance pannum podhum antha method um senthu antha instance kooda varum so anga memory wastage adhigam aagum antha maari time prototypa use panni antha method write pannittu entha instance kku venumo antha instance kku neenga dial pannikalam rompa easy

// let Construct = function (name, age, jobs) {
//   this.name = name;
//   this.age = age;
//   this.jobs = jobs;
// };

// Construct.prototype.common = function () {
//   let age = new Date().getFullYear() - this.age;
//   console.log(age);
// };
// // Construct.prototype.city = "Edayakurichy";

// const personOne = new Construct("marudhu", 1998, "developer");
// console.log(personOne);
// const personTwo = new Construct("Nayanthara", 1997, "Actress");
// console.log(personTwo);
// const personThree = new Construct("Madonna", 1999, "Actress");
// console.log(personThree);

// function closurs() {
//   const myNames = "Marudhupandiyan";
//   function second() {
//     console.log(myNames);
//   }
//   second();
// }
// closurs();

// const slow = (name) => console.log(`Access Denied ${name}`);

// function auth(roleAdm) {
//   let arr = [];
//   for (let i = 0; i < roleAdm; i++) {
//     arr.push(i);
//   }
//   console.log(arr);
//   return arr;
// }

// function checkPerson(person, auth) {
//   switch (person.level) {
//     case 'Developer':
//       return auth(2);
//       break;
//     case 'Actress':
//       return auth(3);
//       break;
//     default:
//       console.log(person.name);
//   }
//   return slow(person.name);
// }

// checkPerson({ name: 'Marudhu', level: 'Actress' }, auth);

// function first(check) {
//   const big = new Array(20).fill('🌟');
//   console.log('created');
//   return big[check];
// }
// first(15);
// first(11);
// first(44); // this method create 3 time this method is not professional and more memory wastage....

// function second() {
//   const big = new Array(40).fill('🌟');
//   console.log('created again');
//   return function (checking) {
//     return big[checking];
//   };
// }

// const ding = second(4);
// ding(3);
// ding(4);
// ding(5); // this method how many time call this function crete one time only this method is professional and save the memory....

// HIGER ORDER FUNCTION WITH YEAR CALCULATION....

// const personBirth = [1997, 1998, 1999, 2000]; // constant data

// function higher(arr, calcAge) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let value = calcAge(arr[i]);
//     result.push(value);
//   }
//   console.log(result);
//   return result;
// }

// function calcAge(birth) {
//   return new Date().getFullYear() - birth;
// }

// higher(personBirth, calcAge);

// HIGHER ORDER FUNCTION 1ST TYPE
// function interviewHigher(data) {
//   if (data === "teacher") {
//     let question = "How many years experience";
//     return function (name) {
//       console.log(`hi ${name} ${question}`);
//     };
//   }
// }

// interviewHigher("teacher")("marudhu");
// HIGHER ORDER FUNCTION WITHOUT RETURN TYPE BOTH ARE SAME
// function interviewHigher(data, calling) {
//   if (data === "teacher") {
//     let question = "How many years experience";
//     summa(question, calling);
//   }
// }
// function summa(name, ques) {
//   console.log(`hi ${ques} ${name}`);
// }

// interviewHigher("teacher", "marudhu");

// class person {
//   #fName;
//   #lName;
//   constructor(fName, lName) {
//     this.#fName = fName;
//     this.#lName = lName;
//   }
//   // IF YOU WWANT TO USE YOUR PRIVATE PROPERTIES (#PROPERTIES) YOU HAVE TO USE GETTER SETTER METHOD OF INSIDE OF THE CLASS WHY BECAUSE PRIVATE PROPERTIES ARE ONLY ACCESSBILE INSIDE OF THE CLASS ONLY THAT'S WHY SO DON'T BE OVERWHALMING.... THIS IS CALLED PRIVATE FIELD PROPERTIES YOU CAN'T ACCESS OUT SIDE OF THE CLASS WITHOUT GETTER SETTER METHOD....
//   get fName() {
//     return this.#fName;
//   }
//   set fName(fName) {
//     this.fName = fName;
//   }
//   get lName() {
//     return this.#lName;
//   }
//   set lName(lName) {
//     this.#lName = lName;
//   }
// }

// person.prototype.greet = function () {
//   return `hi i'm ${this.fName} my last name is ${this.lName}`;
// };

// const developer = new person("Marudhu", "Nayanthara");
// const list = new person("Kadavul", "manidhan");
// console.log(list.greet());

// CALL BACK FUNCTION
// function findGrade(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("you got " + grade + "guyzzz");
//       break;
//     case grade == "B":
//       console.log("you got " + grade + "guyzzz");
//       break;
//     case grade == "C":
//       console.log("you got " + grade + "guyzzz");
//       break;
//     default:
//       grade = "D";
//   }
// }

// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score > 90:
//       grade = "A";
//       break;
//     case score > 80:
//       grade = "B";
//       break;
//     case score > 70:
//       grade = "C";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }
// // WHEN CALLING THE FUNCTION AS A ARGUMENT, WE DO NOT INCLUDE PARANTHESIS.. WHY BECAUSE FINDGRADE FUNCTION STORED IN CALLBACK I MEANS CALLBACK(FINDGRADE(GRADE))
// getGrade(99, findGrade);

// let arr = [
//   'shanmugavel',
//   'suvitha',
//   'malathi',
//   'sangeetha',
//   'suseela',
//   'varuni',
//   'Karthi',
//   'gokul',
// ];
// console.log(arr);
// for (let i = arr.length; i > 0; i--) {
//   console.log((arr[i] = arr[i - 1]), 'original');
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   console.log((arr[i] = arr[i + 1]), 'original');
// }

// console.log(arr, 'something');

// var findTheDifference = function (s, t) {
//   const freqs = new Array(26).fill(0);
//   const freqt = new Array(26).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     freqs[s.charCodeAt(i) - 97]++;
//     freqt[t.charCodeAt(i) - 97]++;
//   }

//   freqt[t.charCodeAt(t.length - 1) - 97];

//   for (let i = 0; i < 26; i++) {
//     if (freqs[i] - freqt[i] !== 0) {
//       // in this case when i = 4 goes that time if condition is true so 4 + 97 = 101 as per the ascii table 101 = e....
//       return String(fromCharCode(i + 97));
//     }
//   }
//   return '';
// };

// findTheDifference('abcd', 'abcde');
// charCodeAt s = 97 98 99 100 t = 97 98 99 100 e values didn't execute....

// -----------------------------------> ---------------------------------->

// var toLowerCase = function (s) {
//   let strings = '';
//   for (let i = 0; i < s.length; i++) {
//     const character = s.charCodeAt(i);
//     if (character >= 65 && character <= 90) {
//       strings = strings + String.fromCharCode(character + 32);
//     } else {
//       strings = strings + s[i];
//     }
//   }
//   return strings;
// };
// console.log(toLowerCase('Hello'));

// -----------------------------------> ---------------------------------->

// var freqAlphabets = function (s) {
//   const hashTable = {
//     1: 'a',
//     2: 'b',
//     3: 'c',
//     4: 'd',
//     5: 'e',
//     6: 'f',
//     7: 'g',
//     8: 'h',
//     9: 'i',
//     '10#': 'j',
//     '11#': 'k',
//     '12#': 'l',
//     '13#': 'm',
//     '14#': 'n',
//     '15#': 'o',
//     '16#': 'p',
//     '17#': 'q',
//     '18#': 'r',
//     '19#': 's',
//     '20#': 't',
//     '21#': 'u',
//     '22#': 'v',
//     '23#': 'w',
//     '24#': 'x',
//     '25#': 'y',
//     '26#': 'z',
//   };
//   let result = '';
//   // second we want to traverse as long as s.length so we wanna using while loop here....
//   let i = 0;
//   // here what i mean length as long as reduce 0 untill the loop will continue.....
//   while (i < s.length) {
//     if (i + 2 < s.length && s[i + 2] === '#') {
//       // hashTable[10#] = s.substring(i, i + 3) here what happens is cut the value from 0 to 3 so output is 10# that value come in hastTable array
//       result += hashTable[s.substring(i, i + 3)];
//       // and the i value increase 0 to 3
//       i += 3;
//     } else {
//       result += hashTable[s[i]];
//       i++;
//     }
//   }
//   return result;
// };

// console.log(freqAlphabets('10#11#12'));

// -----------------------------------> ---------------------------------->

// var isAlienSorted = function (words, order) {
//   let mapOrder = new Map();
//   // first mappiing the all order value in map object using for loop.... the new Map() instance give set of empty objects that objects has set property... and
//   for (let i = 0; i < order.length; i++) {
//     mapOrder.set(order[i], i);
//   }
//   console.log(mapOrder);
//   for (let i = 0; i < words.length - 1; i++) {
//     const wordsOne = words[i];
//     const wordsTwo = words[i + 1];
//     let j = 0;
//     // first condition met j = 1
//     // second time condition met j = 2
//     // third time condition met j = 3
//     while (
//       j < wordsOne.length &&
//       j < wordsTwo.length &&
//       wordsOne[j] === wordsTwo[j]
//     ) {
//       j++;
//     }
//     // DON'T FORGET CONSOLE THE MAPORDER VALUE.... YOU MAY CONFUSE WITHOUT CONSOLE.....
//     // in the end of j value in this case 3.......
//     // in this case word, world ---- j output is 3..... next d and l compare in if else condition.....
//     // the j output point by wordsOne oda d value and wordsTwo oda l value....
//     if (
//       j < wordsOne.length &&
//       j < wordsTwo.length &&
//       // in this case 4 > 3 ....... here what i mean l < d
//       mapOrder.get(wordsOne[j]) > mapOrder.get(wordsTwo[j])
//     ) {
//       return false;
//     } else if (j === wordsTwo.length && j < wordsOne.length) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(
//   isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
// );

// ---------------------------------> ------------------------------------------>
// HIGHER ORDER FUNCTION MODELS......

// var curry = function (fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// };

// function sum(a, b) {
//   return a + b;
// }
// const csum = curry(sum);
// csum(1)(2); // 3

// -------------------------------------> ------------------------------------->

// var numSubseq = function (nums, target) {
//   // You are given an array of integers nums and an integer target.
//   // Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 10 ** 9 + 7.

//   // first we want to sort the array by the sort method....
//   nums.sort((a, b) => a - b);
//   const modulo = 10 ** 9 + 7; // Modulo value for calculating the result
//   let count = 0;

//   let leftP = 0;
//   let rightP = nums.length - 1; // here 4 values 0,1,2,3 so rightP = 3
//   // here right value when comes to 0 untill the while  loop running
//   while (leftP <= rightP) {
//     if (nums[leftP] + nums[rightP] > target) {
//       rightP--;
//     } else {
//       let combinations = 2 ** (rightP - leftP) % modulo;
//       count = count + combinations;
//       leftP++;
//     }
//   }
//   return count;
// };

// console.log(numSubseq([3, 5, 6, 7], 9), 'function consoling');
