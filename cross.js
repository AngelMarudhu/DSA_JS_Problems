// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }
//   /// insert new node
//   push(node) {
//     this.heap.push(node);
//     this.heapifyUp(this.heap.length - 1);
//   }
//   // perculate up bottom to up vara pogum which is check the parent node if parent small swap till root
//   /// this doesn't fit for build a heap already heap maintain aaagi iruntha idhu just upadate pannum
//   /// avloadhan onnnum illa top ah nokki pogum appuram heap kulla value push panna use pannalam
//   /// heap maintain aagudhu but aana proper ah maintain aagala
//   heapifyUp(index) {
//     if (index <= 0) {
//       return;
//     }

//     let findParentIndex = Math.floor((index - 1) / 2); //// for replacing max heap we need keep track root always greater of current node

//     if (this.heap[findParentIndex][0] < this.heap[index][0]) {
//       let temp = this.heap[findParentIndex];
//       this.heap[findParentIndex] = this.heap[index];
//       this.heap[index] = temp;
//       /// just recursion if you don't how this is works just add the 4 nodes inserting then check you will understand
//       this.heapifyUp(findParentIndex);
//     }
//   }
//   /// extract max
//   pop() {
//     if (this.heap.length === 0) return null;
//     let maxnode = this.heap[0];
//     let rearrangingnode = this.heap.pop();

//     // this if onnum ills heap oda length 0 kku mela iruntha mattum dhan namma re arrange
//     /// panna mudium adhan vera onnumilla
//     if (this.heap.length > 0) {
//       this.heap[0] = rearrangingnode;
//       this.heapifyDown(this.heap, 0, this.heap.length);
//     }
//     return maxnode;
//   }
//   /// perculate down top to down varum example for extract root check children update root till leaf
//   /// don't sent each iteration array need entire random array doesn't matter order he will taking care
//   heapifyDown(list, index, length) {
//     /// here no need to base when the recursion reached the leaf node there no comparisons.... because
//     /// no one leaf node doesn't have children all the if condition will failed so that our recursion is
//     /// we placed one of the if conditions....
//     //// first find the who is child of indexes
//     let lChild = Math.floor(2 * index + 1);
//     let rChild = Math.floor(2 * index + 2);
//     let currentMaxNodeForReplace = index;
//     if (
//       lChild < length &&
//       list[lChild][0] > list[currentMaxNodeForReplace][0]
//     ) {
//       currentMaxNodeForReplace = lChild;
//     }

//     if (
//       rChild < length &&
//       list[rChild][0] > list[currentMaxNodeForReplace][0]
//     ) {
//       currentMaxNodeForReplace = rChild;
//     }

//     /// finally your maxnode vandhu unnoda index oda  value ah irukka koodathu why because rendume
//     /// orey place la dhan irukkum which adhudhan unnoda parent no need to do anything

//     if (currentMaxNodeForReplace !== index) {
//       let temp = list[currentMaxNodeForReplace];
//       list[currentMaxNodeForReplace] = list[index];
//       list[index] = temp;
//       this.heapifyDown(list, currentMaxNodeForReplace, length);
//     }
//   }

//   upadeInsert(index, node) {
//     let heapList = this.heap;

//     if (node < heapList[index]) {
//       return console.error("please enter higher of that node");
//     }

//     heapList[index] = node;

//     this.heapifyUp(index);
//   }

//   upadateDecreasing(index, node) {
//     let heapList = this.heap;

//     if (node > heapList[index]) {
//       return console.error("please enter lesser value");
//     }
//     heapList[index] = node;
//     this.heapifyDown(heapList, index, heapList.length);
//   }

//   heapSort(array) {
//     for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
//       this.heapifyDown(array, i, array.length);
//     }

//     let heapSize = array.length;

//     for (let i = array.length - 1; i >= 0; i--) {
//       let max = array[0];
//       array[0] = array[i];
//       array[i] = max;
//       heapSize--;
//       this.heapifyDown(array, 0, heapSize);
//     }

//     return array;
//   }

//   remove(value) {
//     let index = -1;

//     for (let i = 0; i < this.heap.length; i++) {
//       if (this.heap[i] === value) {
//         index = i;
//         break;
//       }
//     }

//     if (index !== -1) {
//       this.heap[index] = this.heap[this.heap.length - 1];
//       // once we ararranged we need to pop last value
//       this.heap.pop();
//       this.heapifyDown(this.heap, index, this.heap.length);
//     }
//   }

//   isEmpty() {
//     if (this.heap.length === 0) return;
//   }
// }

var maxSlidingWindow = function (nums, k) {
  const n = nums.length;
  const maxHeap = new MaxHeap();
  const result = [];

  for (let i = 0; i < n; i++) {
    while (maxHeap.heap.length !== 0 && maxHeap.heap[0][1] <= i - k) {
      maxHeap.pop();
    }
    maxHeap.push([nums[i], i]);
    if (i >= k - 1) {
      result.push(maxHeap.heap[0][0]);
    }
  }

  return result;
};

// console.log(maxSlidingWindow([4, 3, -1, -3, 5, 3, 6, 7], 3));
//////////////////////////////0  1   2   3  4  5  6  7 indexes don't worrry for clarity

// class MinHeap {
//   constructor() {
//     this.minHeap = [];
//   }

//   push(value) {
//     this.minHeap.push(value);

//     this.heapifyUp(this.minHeap.length - 1);
//   }

//   heapifyUp(index) {
//     if (index <= 0) return;

//     let parent = Math.floor((index - 1) / 2);

//     if (this.minHeap[parent][0] > this.minHeap[index][0]) {
//       let temp = this.minHeap[parent];
//       this.minHeap[parent] = this.minHeap[index];
//       this.minHeap[index] = temp;
//       this.heapifyUp(parent);
//     }
//   }
//   /// adding new node not update
//   insert(node) {
//     this.minHeap.push(node);
//     this.heapifyUp(this.minHeap.length - 1);
//   }

//   updateNode(index, node) {
//     this.minHeap[index] = node;

//     this.heapifyDown(this.minHeap, index, this.minHeap.length);
//   }

//   pop() {
//     let heaplist = this.minHeap;

//     if (heaplist.length === 0) return;

//     let minValue = heaplist[0];

//     heaplist[0] = heaplist.pop();

//     this.heapifyDown(heaplist, 0, heaplist.length);
//     return minValue;
//   }

//   heapifyDown(list, index, length) {
//     let lChild = Math.floor(2 * index + 1);
//     let rChild = Math.floor(2 * index + 2);
//     let smallest = index;

//     if (lChild < length && list[lChild][0] < list[smallest][0]) {
//       smallest = lChild;
//     }
//     if (rChild < length && list[rChild][0] < list[smallest][0]) {
//       smallest = rChild;
//     }

//     if (smallest !== index) {
//       let temp = list[smallest];
//       list[smallest] = list[index];
//       list[index] = temp;
//       this.heapifyDown(list, smallest, length);
//     }
//   }

//   heapSort(array) {
//     // Build the initial min-heap
//     for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
//       this.heapifyDown(array, i, array.length);
//     }

//     // Extract the minimum element from the heap and swap it to the end of the array
//     for (let i = array.length - 1; i > 0; i--) {
//       // Swap the root (minimum element) with the last element
//       let temp = array[0];
//       array[0] = array[i];
//       array[i] = temp;

//       // Reduce the heap size and heapify down to restore the min-heap property
//       this.heapifyDown(array, 0, i);
//     }

//     return array;
//   }
// }

var kClosest = function (points, k) {
  let min = new MinHeap();
  for (let [x, y] of points) {
    let first = x;
    let second = y;
    /// why do we square marudhu because this one only gives positive integer other then
    /// addition subraction divide like chance to give negative integes so squere will help you
    /// to find the distance
    /// you can math.pow as well done done....
    let currentDistance = first * first + second * second;

    min.push([currentDistance, first, second]);
  }
  // you can write also like this your choice

  // for (let i = 0; i < points.length; i++) {
  //   min.push([square[i], points[i][0], points[i][1]]);
  // }

  let result = [];

  while (k > 0) {
    [dist, x, y] = min.pop();
    result.push([x, y]);
    k = k - 1;
  }
  return result;
};

// let arr = [
//   [3, 3],
//   [5, -1],
//   [-2, 4],
// ];
// let k = 2;

//console.log(kClosest(arr, k));

///// -----------------------------------------------------------------------

// class MinHeap {
//   constructor() {
//     this.minHeap = [];
//   }

//   push(value) {
//     // console.log(value);
//     this.minHeap.push(value);

//     this.heapifyUp(this.minHeap.length - 1);
//   }

//   heapifyUp(index) {
//     if (index <= 0) return;

//     let parent = Math.floor((index - 1) / 2);

//     if (
//       this.minHeap[parent][1] > this.minHeap[index][1] ||
//       (this.minHeap[parent][1] === this.minHeap[index][1] &&
//         this.minHeap[parent][2] > this.minHeap[index][2])
//     ) {
//       let temp = this.minHeap[parent];
//       this.minHeap[parent] = this.minHeap[index];
//       this.minHeap[index] = temp;
//       this.heapifyUp(parent);
//     }
//   }
//   /// adding new node not update
//   pop() {
//     if (this.minHeap.length === 0) return;

//     const minValue = this.minHeap[0];
//     const lastValue = this.minHeap.pop();

//     if (this.minHeap.length > 0) {
//       this.minHeap[0] = lastValue;
//       this.heapifyDown(this.minHeap, 0, this.minHeap.length);
//     }

//     return minValue;
//   }

//   heapifyDown(list, index, length) {
//     let lChild = 2 * index + 1;
//     let rChild = 2 * index + 2;
//     let smallest = index;

//     // Compare primary priority
//     if (lChild < length && list[lChild][1] < list[smallest][1]) {
//       smallest = lChild;
//     }
//     if (rChild < length && list[rChild][1] < list[smallest][1]) {
//       smallest = rChild;
//     }

//     // If primary priorities are equal, compare secondary priorities
//     if (lChild < length && list[lChild][1] === list[smallest][1]) {
//       if (list[lChild][2] < list[smallest][2]) {
//         smallest = lChild;
//       }
//     }
//     if (rChild < length && list[rChild][1] === list[smallest][1]) {
//       if (list[rChild][2] < list[smallest][2]) {
//         smallest = rChild;
//       }
//     }

//     // Swap if necessary and continue heapifying down
//     if (smallest !== index) {
//       let temp = list[smallest];
//       list[smallest] = list[index];
//       list[index] = temp;
//       this.heapifyDown(list, smallest, length);
//     }
//   }
//   size() {
//     return this.minHeap.length !== 0;
//   }
// }

var getOrder = function (tasks) {
  // let mini = new MinHeap();
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].push(i);
  }

  tasks.sort((a, b) => a[0] - b[0]);
  let PQ = new MinHeap();

  let screen = [];
  let time = tasks[0][0];
  let index = 0;

  while (PQ.size() || index < tasks.length) {
    while (index < tasks.length && time >= tasks[index][0]) {
      PQ.push(tasks[index]);
      index++;
    }

    if (PQ.size()) {
      let curr = PQ.pop();
      screen.push(curr[2]);
      time = time + curr[1];
    } else {
      time = tasks[index][0];
    }
  }
  return screen;
};

// let array = [
//   [1, 2],
//   [2, 4],
//   [3, 2],
//   [4, 1],
// ];

// console.log(getOrder(array));

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }
//   /// insert new node
//   push(node) {
//     this.heap.push(node);
//     this.heapifyUp(this.heap.length - 1);
//   }
//   // perculate up bottom to up vara pogum which is check the parent node if parent small swap till root
//   /// this doesn't fit for build a heap already heap maintain aaagi iruntha idhu just upadate pannum
//   /// avloadhan onnnum illa top ah nokki pogum appuram heap kulla value push panna use pannalam
//   /// heap maintain aagudhu but aana proper ah maintain aagala
//   heapifyUp(index) {
//     if (index <= 0) {
//       return;
//     }
//     let findParentIndex = Math.floor((index - 1) / 2); //// for replacing max heap we need keep track root always greater of current node
//     if (this.heap[findParentIndex] < this.heap[index]) {
//       let temp = this.heap[findParentIndex];
//       this.heap[findParentIndex] = this.heap[index];
//       this.heap[index] = temp;
//       /// just recursion if you don't how this is works just add the 4 nodes inserting then check you will understand
//       this.heapifyUp(findParentIndex);
//     }
//   }
//   /// extract max
//   pop() {
//     if (this.heap.length === 0) return;
//     let heapList = this.heap;

//     /// always our first node is maxheap so extract
//     let currentMaxHeap = heapList[0];

//     /// we extacted we need to swap the who is last left node element which this left to right
//     let lastNode = heapList.pop();

//     if (this.heap.length > 0) {
//       this.heap[0] = lastNode;
//       this.heapifyDown(this.heap, 0, this.heap.length);
//     }
//     return currentMaxHeap;
//   }
//   /// perculate down top to down varum example for extract root check children update root till leaf
//   /// don't sent each iteration array need entire random array doesn't matter order he will taking care
//   heapifyDown(list, index, length) {
//     /// here no need to base when the recursion reached the leaf node there no comparisons.... because
//     /// no one leaf node doesn't have children all the if condition will failed so that our recursion is
//     /// we placed one of the if conditions....
//     //// first find the who is child of indexes
//     let lChild = Math.floor(2 * index + 1);
//     let rChild = Math.floor(2 * index + 2);
//     let currentMaxNodeForReplace = index;
//     if (lChild < length && list[lChild] > list[currentMaxNodeForReplace]) {
//       currentMaxNodeForReplace = lChild;
//     }

//     if (rChild < length && list[rChild] > list[currentMaxNodeForReplace]) {
//       currentMaxNodeForReplace = rChild;
//     }

//     /// finally your maxnode vandhu unnoda index oda  value ah irukka koodathu why because rendume
//     /// orey place la dhan irukkum which adhudhan unnoda parent no need to do anything

//     if (currentMaxNodeForReplace !== index) {
//       let temp = list[currentMaxNodeForReplace];
//       list[currentMaxNodeForReplace] = list[index];
//       list[index] = temp;
//       this.heapifyDown(list, currentMaxNodeForReplace, length);
//     }
//   }
// }

var kthLargestNumber = function (nums, k) {
  //let max = new MaxHeap();
  let n = nums.length;

  // why bigInt parseInt----->  it may suffer from loss of precision if the integer represented by
  // the string is outside the safe range
  // bigInt -----> BigInt() function supports parsing integers of arbitrary length accurately

  for (let i = 0; i < n; i++) {
    max.push(BigInt(nums[i]));
  }

  let screen = -1;

  while (k > 0) {
    screen = max.pop();
    k--;
  }
  // Convert BigInt to string
  return screen.toString();
};

let nums = [
  "683339452288515879",
  "7846081062003424420",
  "4805719838",
  "4840666580043",
  "83598933472122816064",
  "522940572025909479",
  "615832818268861533",
  "65439878015",
  "499305616484085",
  "97704358112880133",
  "23861207501102",
  "919346676",
  "60618091901581",
  "5914766072",
  "426842450882100996",
  "914353682223943129",
  "97",
  "241413975523149135",
  "8594929955620533",
  "55257775478129",
  "528",
  "5110809",
  "7930848872563942788",
  "758",
  "4",
  "38272299275037314530",
  "9567700",
  "28449892665",
  "2846386557790827231",
  "53222591365177739",
  "703029",
  "3280920242869904137",
  "87236929298425799136",
  "3103886291279",
];
// let k = 3;

// console.log(kthLargestNumber(nums, k));
///"38272299275037314530"
///"38272299275037310000"

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  /// insert new node
  push(node) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }
  // perculate up bottom to up vara pogum which is check the parent node if parent small swap till root
  /// this doesn't fit for build a heap already heap maintain aaagi iruntha idhu just upadate pannum
  /// avloadhan onnnum illa top ah nokki pogum appuram heap kulla value push panna use pannalam
  /// heap maintain aagudhu but aana proper ah maintain aagala
  heapifyUp(index) {
    if (index <= 0) {
      return;
    }
    let findParentIndex = Math.floor((index - 1) / 2); //// for replacing max heap we need keep track root always greater of current node
    // console.log(this.heap[findParentIndex][1]);
    if (this.heap[findParentIndex][1] < this.heap[index][1]) {
      let temp = this.heap[findParentIndex];
      this.heap[findParentIndex] = this.heap[index];
      this.heap[index] = temp;
      /// just recursion if you don't how this is works just add the 4 nodes inserting then check you will understand
      this.heapifyUp(findParentIndex);
    }
  }
  /// extract max
  pop() {
    if (this.heap.length === 0) return;
    let heapList = this.heap;

    /// always our first node is maxheap so extract
    let currentMaxHeap = heapList[0];

    /// we extacted we need to swap the who is last left node element which this left to right
    let lastNode = heapList.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.heapifyDown(this.heap, 0, this.heap.length);
    }
    return currentMaxHeap;
  }
  /// perculate down top to down varum example for extract root check children update root till leaf
  /// don't sent each iteration array need entire random array doesn't matter order he will taking care
  heapifyDown(list, index, length) {
    /// here no need to base when the recursion reached the leaf node there no comparisons.... because
    /// no one leaf node doesn't have children all the if condition will failed so that our recursion is
    /// we placed one of the if conditions....
    //// first find the who is child of indexes
    let lChild = Math.floor(2 * index + 1);
    let rChild = Math.floor(2 * index + 2);
    let currentMaxNodeForReplace = index;
    if (
      lChild < length &&
      list[lChild][1] > list[currentMaxNodeForReplace][1]
    ) {
      currentMaxNodeForReplace = lChild;
    }

    if (
      rChild < length &&
      list[rChild][1] > list[currentMaxNodeForReplace][1]
    ) {
      currentMaxNodeForReplace = rChild;
    }

    /// finally your maxnode vandhu unnoda index oda  value ah irukka koodathu why because rendume
    /// orey place la dhan irukkum which adhudhan unnoda parent no need to do anything

    if (currentMaxNodeForReplace !== index) {
      let temp = list[currentMaxNodeForReplace];
      list[currentMaxNodeForReplace] = list[index];
      list[index] = temp;
      this.heapifyDown(list, currentMaxNodeForReplace, length);
    }
  }
}
/// if you havent get correct output check the heap might changes or go and checkout leetcode
var reorganizeString = function (s) {
  let heaping = new MaxHeap();
  let hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], 1);
    } else {
      let count = hashMap.get(s[i]);
      hashMap.set(s[i], count + 1);
    }
  }

  console.log(hashMap);
  /// we need pair because namma heap la irunthu pop pannumpodhu count mattum vachi eppudi namma adhoda letter
  /// ah edukka mudium store pannumpodhey pair ah store pannuna namma pop pannumpodhu adhoda pair letter um
  /// store pannikkalam screen la simple likd [a,3] a vandhu 2time question la irukkunu meaning...
  for (let [char, count] of hashMap) {
    heaping.push([count, char]);
  }

  let prevLetter = null;
  let screen = "";
  /// heap empty aagum vara appudi illana previous la dhan namma remaining count ah store panni vaippom for
  /// thirumpa namma remain count ah vandhu heap kku anuppanumla appodhan aduthadhu print panna mudium but adha
  /// udaney panna koodathu soldran keezha irukku ellam
  while (heaping.heap.length !== 0 || prevLetter !== null) {
    /// this if condition vandhu a remain 2 b edhum illa okay last ah a print pannittom thirumpa a la 1 count reduce aagiduchi a thirumpa count 1 oda varudhu but heap la edhum vera letter illa so that time thirumpa a dhan print pannura maari varum aana question padi namm
    /// thirumpa a print panna koodathu adhukkudan previous la edhavadhu irundhu heap empty ah iruntha return
    /// empty string we can't make sequence...
    if (prevLetter !== null && heaping.heap.length === 0) {
      return "";
    }

    /// count reduce pannanum eppudina a = 3 namma screen la add pannittom appo 3 irukka koodathu 2 dhan irukkanum
    /// adhan idhu
    [count, char] = heaping.pop();
    screen += char;
    count = count - 1;
    //// remains ah thirumpa namma heap kku push pannanum munnadi sollirunthanlla adheydhaan don't forget to
    /// prevletter null en appudina adhutha letter ah store pannanum konja nerathukku en appudina question la
    /// contiguios print panna koodathunu sollirukkanga adhukkudhan
    if (prevLetter !== null) {
      heaping.push(prevLetter);
      prevLetter = null;
    }
    //// idhu simple count vandhu 0 aagadha varadhan anga letter irukku once 0 aagidhuchina antha letter ah namma
    //// previious la add pannakoodadhu adhu inimel namakku thevaipadadhu for example freq 3 irukku appo 3 a anga
    /// irukkunu meaning once 0 aagiduchina no A there so waste....that's it....
    if (count !== 0) {
      prevLetter = [count, char];
    }
  }
  return screen;
};

// let s = "aab";

//console.log(reorganizeString(s));
//////////////////////////////////////////////

var longestDiverseString = function (a, b, c) {
  let maxi = new MaxHeap();
  const counts = [
    ["a", a],
    ["b", b],
    ["c", c],
  ];

  for (let i = 0; i < counts.length; i++) {
    if (counts[i][1] !== 0) {
      maxi.push(counts[i]);
    }
  }

  let screen = "";

  while (maxi.heap.length !== 0) {
    let [char, count] = maxi.pop();
    /// this condition screen oda last two string ah check pannuradhukkku
    if (
      screen.length > 1 &&
      screen[screen.length - 1] === char &&
      screen[screen.length - 2] === char
    ) {
      //// idhu vandhu cc irukku 3rd ah c add pannakoodathu so vera edhavadhu letters ulla irukkanu
      /// check pannuradhukku apppudi edhum illana break the looooop
      if (maxi.heap.length === 0) {
        break;
      }
      /// if edhavadhu other letter ulla iruntha adha pop panni add pannuradhu
      let [secChar, secCount] = maxi.pop();
      screen += secChar;
      secCount--;
      /// antha letter oda count > 0 ah iruntha remains irukkunu meaning appudi illana if fail oruvelai
      /// iruntha adha push pannaum
      if (secCount > 0) {
        maxi.push([secChar, secCount]);
      }
      //// if fail aagiduchina namma most node a thirumpa push pannanum every looop starting layum
      /// namma most ahyum sethu pop pannidurom so if fail aagiduchina namma adha thirumpa push pannanum
      maxi.push([char, count]);
    } else {
      screen += char;
      count--;
      if (count > 0) {
        maxi.push([char, count]);
      }
    }
  }
  return screen;
};

// console.log(longestDiverseString(2, 7, 10));

class MinHeap {
  constructor() {
    this.minHeap = [];
  }

  push(value) {
    // console.log(value);
    this.minHeap.push(value);

    this.heapifyUp(this.minHeap.length - 1);
  }

  heapifyUp(index) {
    if (index <= 0) return;
    let parent = Math.floor((index - 1) / 2);

    if (this.minHeap[parent][0] > this.minHeap[index][0]) {
      let temp = this.minHeap[parent];
      this.minHeap[parent] = this.minHeap[index];
      this.minHeap[index] = temp;
      this.heapifyUp(parent);
    }
  }
  /// adding new node not update
  pop() {
    if (this.minHeap.length === 0) return;

    const minValue = this.minHeap[0];
    const lastValue = this.minHeap.pop();

    if (this.minHeap.length > 0) {
      this.minHeap[0] = lastValue;
      this.heapifyDown(this.minHeap, 0, this.minHeap.length);
    }

    return minValue;
  }

  heapifyDown(list, index, length) {
    let lChild = Math.floor(2 * index + 1);
    let rChild = Math.floor(2 * index + 2);
    let smallest = index;
    if (lChild < length && list[lChild][0] < list[smallest][0]) {
      smallest = lChild;
    }
    if (rChild < length && list[rChild][0] < list[smallest][0]) {
      smallest = rChild;
    }
    if (smallest !== index) {
      let temp = list[smallest];
      list[smallest] = list[index];
      list[index] = temp;
      this.heapifyDown(list, smallest, length);
    }
  }
  size() {
    return this.minHeap.length !== 0;
  }
}

var carPooling = function (trips, capacity) {
  let mini = new MinHeap();
  // as we starting we need to first sorting based on starting point which is 1st index why because
  // appodhan namakku therium yarulam munnadi station pick aaga poranganu illana namakku theriyadhula
  // for example 1st station 3passanger eruranga appudina sort pannalana namakku eppudi therium.
  trips.sort((a, b) => a[1] - b[1]);

  // here is the most important part ippo namma 1st station la 2 pera pick pannittom 3rd station la 3 pera
  // pick pannittom nu vachippom nammakku eppudi therium yaru yaru entha station la eranga poranganu
  // theriyadhula so adhukkagathan namma minheap la pair ah store panna porom number of passanger and
  // end station oda for example [2,5]

  let carCurrentPassanger = 0;

  for (let extract of trips) {
    [numPass, start, end] = extract;

    if (mini.minHeap.length !== 0) {
      console.log(mini.minHeap[0][0]);
    }
    //// our min heap vandhu yaroda end chinnadha irukko avuga padi than heapify panni vachirukku
    /// en appudina appodhana yaru first varangalo avungala thookka mudium so namma start vandhu 3rd station
    /// la irukkunu vachippom inga vandhu 3rd station kku munnadhu yaravaddhu irukkangala drop pannuradhukkunu
    /// check pannuradhukku appudi irunthanga avungala out pannanum our heap pair[end, numberofpassanger]
    while (mini.minHeap.length !== 0 && mini.minHeap[0][0] <= start) {
      carCurrentPassanger -= mini.minHeap[0][1];
      mini.pop();
    }

    carCurrentPassanger += numPass;

    if (carCurrentPassanger > capacity) {
      return false;
    }
    mini.push([end, numPass]);

    // console.log(mini.minHeap);
  }
  console.log(carCurrentPassanger);
  return true;
  // console.log(carCurrentPassanger);
};

let trips = [
  [3, 2, 7],
  [2, 1, 3],
  [3, 7, 9],
  [8, 3, 9],
]; /// my own test cases true.....

// console.log(carPooling(trips, 11));

/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

/// finally we've done find median data stream on leetcode done done done done....
/// two pointer and sliding window technique....
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/// expand and shrink the window patterns.....
function subarray(arr, k) {
  let xminus = 0; // representing the sheeet school red sheet graph x axis something different hahaha
  let xplus = 0;
  let n = arr.length;
  let summation = arr[0];
  let lenghtOftheSubArray = 0;

  while (xplus < n) {
    while (summation > k) {
      summation = summation - arr[xminus];
      xminus++;
    }
    if (summation === k) {
      lenghtOftheSubArray = Math.max(lenghtOftheSubArray, xplus - xminus + 1);
    }
    xplus++;
    summation = summation + arr[xplus];
  }
  return lenghtOftheSubArray;
}

// let out = subarray([10, 5, 2, 7, 1, 9], 15);
// console.log(out);

///-----------------------------------------------------------------------------
//// constand sliding window size problem.....
var maxScore = function (cardPoints, k) {
  let maxSum = 0;
  let lHand = 0;
  let rHand = 0;
  let n = cardPoints.length;

  for (let i = 0; i <= k - 1; i++) {
    lHand += cardPoints[i];
  }
  //// obiviously we know always our lHand sum is maximum we don't need to compare anything here
  /// just assign the lHand sum to maxSum
  maxSum = lHand;

  //// our left side over now we need to reduce the left side increase the rightside portion

  let rightSide = n - 1;

  for (let i = k - 1; i >= 0; i--) {
    lHand -= cardPoints[i];
    rHand += cardPoints[rightSide];
    rightSide = rightSide - 1;
    maxSum = Math.max(maxSum, lHand + rHand);
  }

  return maxSum;
};

// let cardPoints = [100, 40, 17, 9, 73, 75];
// let k = 3;

// console.log(maxScore(cardPoints, k));
///-----------------------------------------------------------------------------
/// brute force distinct substring.....
var lengthOfLongestSubstring = function (s) {
  // don't forget to write base case always
  if (s.length === 0) {
    return s.length;
  }
  let n = s.length;
  let maxVal = Number.MIN_VALUE;
  for (let i = 0; i < n; i++) {
    let hash = new Map();
    for (let j = i; j < n; j++) {
      if (hash.has(s[j])) {
        break;
      }
      // the formula finding the length j - i + 1 if answer want 0 based you just j - i more enough
      // but all the platform expect 1 based indext j - i + 1 that's the meaning of 1 okay
      // example assume i = 1; j = 4 okay 4 - 1 + 1 -----> 3 + 1 = 4 so total suarray length is 4..
      maxVal = Math.max(maxVal, j - i + 1);
      hash.set(s[j]);
    }
  }
  return maxVal;
};

// let str = "abcabcbb";

// console.log(lengthOfLongestSubstring(str));

///-----------------------------------------------------------------------------
//// brute force approach
// var longestOnes = function (nums, k) {
//   let n = nums.length;
//   let max = 0;

//   for (let i = 0; i < n; i++) {
//     let zeroCount = 0;
//     for (let j = i; j < n; j++) {
//       if (nums[j] === 0) {
//         zeroCount++;
//       }
//       if (zeroCount > k) {
//         break;
//       }

//       max = Math.max(max, j - i + 1);
//     }
//   }
//   return max;
// };
/// sliding approach....
var longestOnes = function (nums, k) {
  let n = nums.length;
  let left = 0;
  let right = 0;
  let max = 0;
  let zeroCount = 0;
  while (right < n) {
    if (nums[right] === 0) zeroCount++;
    /// when zerocount greater of k we need to move our left pointer while moving
    /// if left facing any 0 we need to reduce the zero count till zerocount vandhu k kku kulla vara varai
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

// let numss = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
// let k = 2;

// console.log(longestOnes(numss, k));

var totalFruit = function (fruits) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let n = fruits.length;
  let hashMap = new Map();
  while (right < n) {
    //// when comes to samy type of fruits we need to increase the number
    if (!hashMap.has(fruits[right])) {
      hashMap.set(fruits[right], 1);
    } else {
      let count = hashMap.get(fruits[right]);
      hashMap.set(fruits[right], count + 1);
    }
    /// when reached 2 which means basket we need to reduce the left pointer with reduce the count as well
    /// when reached the count === 0 we need to delete the type of fruits no longer needed
    if (hashMap.size > 2) {
      while (hashMap.size > 2) {
        let count = hashMap.get(fruits[left]);
        hashMap.set(fruits[left], count - 1);

        let temp = hashMap.get(fruits[left]);
        if (temp === 0) {
          hashMap.delete(fruits[left]);
        }
        left++;
      }
    } else {
      /// if condition failed just classical way to update the length to max right - left + 1, 0 based index
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
};

// let fruits = [1, 2, 3, 2, 2];

// console.log(totalFruit(fruits));
/// today also solved sqrt(x) problem on leetcode binary search problem random problem....

/// brute force
// var longSubstringKdistinct = function (str, k) {
//   let hashMap = new Map();
//   let n = str.length;
//   let maxLength = 0;

//   for (let i = 0; i < n; i++) {
//     hashMap.clear();
//     for (let j = i; j < n; j++) {
//       if (!hashMap.has(str[j])) {
//         hashMap.set(str[j], 1);
//       } else {
//         let count = hashMap.get(str[j]);
//         hashMap.set(str[j], count + 1);
//       }
//       ///// if map reachd k size we need to do calculate the substring....
//       if (hashMap.size > k) {
//         break;
//       }
//       maxLength = Math.max(maxLength, j - i + 1);
//     }
//   }
//   return maxLength > 0 ? maxLength : -1;
// };

var longSubstringKdistinct = function (str, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let hashMap = new Map();

  while (right < str.length) {
    if (!hashMap.has(str[right])) {
      hashMap.set(str[right], 1);
    } else {
      let count = hashMap.get(str[right]);
      hashMap.set(str[right], count + 1);
    }

    if (hashMap.size > k) {
      while (hashMap.size > k) {
        let count = hashMap.get(str[left]);
        hashMap.set(str[left], count - 1);

        let temp = hashMap.get(str[left]);
        if (temp === 0) {
          hashMap.delete(str[left]);
        }
        left++;
      }
    } else {
      maxLength = Math.max(maxLength, right - left + 1);
    }
    right++;
  }
  return maxLength;
};

// let str = "aabacbebebe";
// let k = 3;
// console.log(longSubstringKdistinct(str, k)); // Output: -1
///// ----------------------------------------------

var numberOfSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let hashArray = new Array(3).fill(0);
    for (let j = i; j < s.length; j++) {
      hashArray[s[j].charCodeAt(0) - 97] = 1;

      if (hashArray[0] + hashArray[1] + hashArray[2] === 3) {
        count = count + 1;
      }
    }
  }
  return count;
};

// let s = "abcabc";

// console.log(numberOfSubstrings(s));

var characterReplacement = function (s, k) {
  let n = s.length;
  let max = 0;
  let left = 0;
  let right = 0;
  let hashMap = new Map();
  let maxSofar = 0;

  while (right < n) {
    if (!hashMap.has(s[right])) {
      hashMap.set(s[right], 1);
    } else {
      let count = hashMap.get(s[right]);
      hashMap.set(s[right], count + 1);
    }
    maxSofar = Math.max(maxSofar, hashMap.get(s[right]));
    //// if our changes > k which is k vida perusa irundhuchina we can't make replacement because
    //// namma k size mattumdhan replace panna mudium illana panna mudiyadhu.....
    //// totalcurrentsubstring - maxfrequencysofar > k formula......
    if (right - left + 1 - maxSofar > k) {
      let count = hashMap.get(s[left]);
      hashMap.set(s[left], count - 1);
      left += 1;
    }

    if (right - left + 1 - maxSofar <= k) {
      max = Math.max(max, right - left + 1);
    }

    right += 1;
  }
  return max;
};

// let s = "AABABBA";
// let k = 1;

// console.log(characterReplacement(s, k));

let helper = (nums, goal) => {
  if (goal < 0) return 0;

  let left = 0;
  let right = 0;
  let sum = 0;
  let count = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (left <= right && sum > goal) {
      sum -= nums[left];
      left += 1;
    }

    if (sum === goal) {
      count += right - left + 1;
    }

    right += 1;
  }
  return count;
};

var numSubarraysWithSum = function (nums, goal) {
  // Count of subarrays with sum equal to goal
  let one = helper(nums, goal);
  // Count of subarrays with sum equal to (goal - 1)
  let two = helper(nums, goal - 1);

  // Subtract the count of subarrays with sum equal to (goal - 1) from the count of subarrays with sum equal to goal
  return one - two;
};

// let numss = [0, 0, 0, 0, 0];
// let goal = 0;

// console.log(numSubarraysWithSum(numss, goal));

////-----------------------------------------------

var minWindow = function (s, t) {
  let maxLength = Infinity;
  let findStartIndex = -1; /// it's negative there is no negative index in anywhere
  let count = 0;
  let left = 0;
  let right = 0;
  let hashMap = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!hashMap.has(t[i])) {
      hashMap.set(t[i], 1);
    } else {
      let count = hashMap.get(t[i]);
      hashMap.set(t[i], (count += 1));
    }
  }

  while (right < s.length) {
    let extract = hashMap.get(s[right]);
    /// initially t values are positive so when we searching s string yarulam t string oda match aagurangalo
    /// appo count increase aagum at some point la all the t string match aanadhum count became equal to
    /// t.length appo we got a substring then we need to find minumum adhuthu check pannuradhukkaga
    /// nmma left pointer ah move pannanum adhudhan inside of second while loop done.....
    if (extract > 0) {
      count += 1;
    }

    hashMap.set(s[right], (extract -= 1));

    while (count === t.length) {
      if (right - left + 1 < maxLength) {
        maxLength = right - left + 1;
        findStartIndex = left;
      }

      // Move the left pointer to the right to shrink the window
      let leftChar = s[left];
      if (hashMap.has(leftChar)) {
        let leftCount = hashMap.get(leftChar);
        hashMap.set(leftChar, leftCount + 1);
        if (leftCount === 0) {
          count--; // Increment count only if we move out of the character that contributes to the count
        }
      }
      left += 1;
    }
    right += 1;
  }

  if (findStartIndex === -1) {
    return "";
  } else {
    return s.substring(findStartIndex, findStartIndex + maxLength);
  }
};

// let s = "ADOBECODEBANC";
// let t = "ABC";

// console.log(minWindow(s, t));
