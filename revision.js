// first and most we are going to start with ARRAY"S let's explore what we learned so far

// console.log(
//   "Finally we came into Revision thanks for your effort Marudhu you deserve it"
// );

// straight forward technique just simple find gcd extract the string the match the string if equal return divisor string or return empty string
// var gcdOfStrings = function (str1, str2) {
//   function findGCD(a, b) {
//     // Base case: GCD(a, 0) is a
//     if (a === 0) {
//       return b;
//     }

//     // Recursive case: GCD(a, b) is the same as GCD(b, a % b)
//     return findGCD(a % b, b);
//   }

//   let gcd = findGCD(str1.length, str2.length);
//   /// first and most find first common GCD with eclidea algorithm this one classical way to find GCD
//   /// for an example gcd = findGCD(6, 3) = 3
//   /// divisor = str1.substring(0, 3) = "ABC"
//   let divisor = str1.substring(0, gcd);
//   // now divisor has "ABC" this is an example find if any repeated string has str1 and str2

//   let repeatStr1 = "";
//   let repeatStr2 = "";
//   // repeated initially 0 and str1 intially n somethig untilly reapeatedstr1 reached the
//   ///// str1 length if reached out of the while
//   while (repeatStr1.length < str1.length) {
//     repeatStr1 += divisor;
//   }
//   // as it is as what we did before while looop
//   while (repeatStr2.length < str2.length) {
//     repeatStr2 += divisor;
//   }
//   // then finally both are equeal simply return the divisor string or return empty string
//   return repeatStr1 === str1 && repeatStr2 === str2 ? divisor : "";
// };

// console.log(gcdOfStrings("ABCABC", "ABC"));

//// ----------------------------------------------------------------------

// var kidsWithCandies = function (candies, extraCandies) {
//   let n = candies.length;

//   let maxCandi = Math.max(...candies);
//   let screen = [];

//   for (let i = 0; i < n; i++) {
//     screen.push(candies[i] + extraCandies >= maxCandi);
//   }
//   return screen;
// };

// let candies = [2, 3, 5, 1, 3];
// let extraCandies = 3;

// console.log(kidsWithCandies(candies, extraCandies));

// -----------------------------------------------------------------

// function arraySortedOrNot(arr, n) {
//   for (let i = 1; i < n; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return 0; // Not sorted
//     }
//   }
//   return 1; // Sorted
// }

// ------------------------------------------------------------

// var removeDuplicates = function (nums) {
//   let sets = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     sets.add(nums[i]);
//   }
//   let data = [];
//   for (let out of sets) {
//     data.push(out);
//   }
//   return data.length;
// };

// console.log(removeDuplicates([1, 1, 2]));

// ---------------------------------------------- reverse array

// var reverseArray = function (arr) {
//   let n = arr.length;
//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[n - 1 - i];
//     arr[n - 1 - i] = temp;
//   }
//   return arr;
// };

// console.log(reverseArray([1, 2, 3, 4, 5, 7]));

//------------------------------------------------------

// function union(arr1, arr2) {
//   let n = arr1.length;
//   let m = arr2.length;

//   let i = 0;
//   let j = 0;
//   let screen = [];

//   while (i < n && j < m) {
//     if (arr1[i] < arr2[j]) {
//       i++;
//     } else if (arr2[j] < arr1[i]) {
//       j++;
//     } else {
//       screen.push(arr1[i]);
//       i++;
//       j++;
//     }
//   }
//   return screen;
// }

// let arrOne = [1, 2, 3, 4, 5];
// let arrTwo = [1, 2, 3];

// console.log(union(arrOne, arrTwo));

//   let n = arr1.length;
//   let m = arr2.length;

//   let hash = new Set();

//   for (let i = 0; i < n; i++) {
//     hash.add(arr1[i]);
//   }

//   for (let j = 0; j < m; j++) {
//     hash.add(arr2[j]);
//   }
//   let screen = [];
//   for (let out of hash) {
//     screen.push(out);
//   }
//   return screen.sort((a, b) => a - b);

//   let n = arr1.length;
//   let m = arr2.length;
//   let inter = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (arr1[i] === arr2[j]) {
//         inter.push(arr2[j]);
//       }
//     }
//   }
//   return inter;
//   console.log(inter);

// ---------------------------------------------------
// // find longest subarray with k sum positive

// function subarray(arr, k) {
//   let n = arr.length;
//   let count = 0;
//   let lenghtOftheSubArray = 0;
//   for (let i = 0; i < n; i++) {
//     let summation = 0;
//     for (let j = i; j < n; j++) {
//       summation += arr[j];
//       if (summation === k) {
//         // simple j-i + 1 if answer want 0 based you just j - i more enough
//         // but all the platform expect 1 based indext j - i + 1 that's the meaning of 1 okay
//         // example assume i = 1; j = 4 okay 4 - 1 + 1 -----> 3 + 1 = 4 so total suarray length is 4..
//         count++;
//         lenghtOftheSubArray = Math.max(lenghtOftheSubArray, j - i + 1);
//       }
//     }
//   }
//   console.log(count);
//   return lenghtOftheSubArray;
// }

// let out = subarray([10, 5, 2, 7, 1, 9], 15);
// console.log("Marudhu this is your longest subarray", out);

// // // optimal approach and easy to understand two pointer

// function subarray(arr, k) {
//   let xminus = 0; // representing the sheeet school red sheet graph x axis something different hahaha
//   let xplus = 0;
//   let n = arr.length;
//   let summation = arr[0];
//   let lenghtOftheSubArray = 0;

//   while (xplus < n) {
//     while (summation > k) {
//       summation = summation - arr[xminus];
//       xminus++;
//     }
//     if (summation === k) {
//       lenghtOftheSubArray = Math.max(lenghtOftheSubArray, xplus - xminus + 1);
//     }
//     xplus++;
//     summation = summation + arr[xplus];
//   }
//   return lenghtOftheSubArray;
// }

// let out = subarray([10, 5, 2, 7, 1, 9], 15);
// console.log(out);

// ------------------------------------>
///// two sum problem hashtable

// var twoSum = function (nums, target) {
//   let out = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;
//       if (nums[i] + nums[j] === target) {
//         out.push(i, j);
//         return out;
//       }
//     }
//   }
// };

// let out = twoSum([2, 7, 11, 15], 9);
// console.log(out);

/////// better and optimal approach

// var twoSum = function (nums, target) {
//   let hash = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let current = nums[i];
//     let findOutMore = target - current;
//// instead of find you can use get method in c++ find but in js has get method to find your data......
//     let extract = hash.get(findOutMore);
//     if (extract !== undefined) {
//       return [extract, i];
//     }
//     hash.set(current, i);
//   }
// };

// let out = twoSum([2, 7, 11, 15], 9);
// console.log(out);

//  -------------------------------------------------------
// // find majority element in the array
// var majorityElement = function (nums) {
//   let n = nums.length;
//   let hash = new Map();
//   for (let i = 0; i < n; i++) {
//     if (hash.has(nums[i])) {
//       hash.set(nums[i], hash.get(nums[i]) + 1);
//     } else {
//       hash.set(nums[i], 1);
//     }
//   }
//   for (let extract of hash) {
//     if (extract[1] > Math.floor(n / 2)) {
//       return extract[0];
//     }
//   }
// };

// let out = majorityElement([2, 2, 1, 1, 1, 2, 2]); // the output is because n / 2 = 3 here so > 3 element is 2
// console.log(out, "your majority element");

// var majorityElement = function (nums) {
//   let screen = [];
//   let hash = new Map();
//   let minimum = Math.floor(nums.length / 3) + 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (hash.has(nums[i])) {
//       hash.set(nums[i], hash.get(nums[i]) + 1);
//     } else {
//       hash.set(nums[i], 1);
//     }

//     if (hash.get(nums[i]) === minimum) {
//       screen.push(nums[i]);
//     }
//// they never specifically mentioned how many elements we want so 2 is more enough for limiting
//     if (screen.length === 2) break;
//   }

//   return screen;
// };

// let out = majorityElement([11, 33, 33, 11, 33, 11]);
// console.log(out);

// --------------------------------------------------

// Rearrange Array Elements by Sign // solved on leetcode
// var reArrange = function (arr) {
//   let items = new Array(arr.length).fill(0);
//   let pos = 0;
//   let neg = 1;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       items[pos] = arr[i];
//       pos += 2;
//     } else {
//       items[neg] = arr[i];
//       neg += 2;
//     }
//   }
//   return items;
// };

// let out = reArrange([3, 1, -2, -5, 2, -4]); // 3 -2 1 -5 2 -4 alll time the array even numbers
// console.log(out);

// --------------------------------------------------
//// next petmutations what it is?

// var reverseArray = function (arr) {
//   let n = arr.length;
//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     let temp = arr[i];
//     arr[i] = arr[n - 1 - i];
//     arr[n - 1 - i] = temp;
//   }
//   return arr;
// };

// var nextPermutation = function (nums) {
//   let index = -1;
//   let n = nums.length;

//   for (let i = n - 2; i >= 0; i--) {
//     if (nums[i] < nums[i + 1]) {
//       index = i;
//       break;
//     }
//   }
//   if (index === -1) {
//     reverseArray(nums);
//   }

//   for (let i = n - 1; i > index; i--) {
//     if (nums[i] > nums[index]) {
//       let temp = nums[index];
//       nums[index] = nums[i];
//       nums[i] = temp;
//       break;
//     }
//   }

//   let left = index + 1;
//   let right = n - 1;
//   while (left < right) {
//     let temp = nums[left];
//     nums[left] = nums[right];
//     nums[right] = temp;
//     left++;
//     right--;
//   }
//   return nums;
// };

// let out = nextPermutation([1, 2, 3]);
// console.log("your next permutation---> ", out); // output is 1 3 2

//// -------------------------------------------------------------
//// set matrix zeroes

// var zeroRow = function (matrix, i, n, m) {
//   for (let j = 0; j < m; j++) {
//     if (matrix[i][j] !== 0) {
//       matrix[i][j] = -1;
//     }
//   }
//   return matrix;
// };

// var zeroCol = function (matrix, j, n, m) {
//   for (i = 0; i < n; i++) {
//     if (matrix[i][j] !== 0) {
//       matrix[i][j] = -1;
//     }
//   }

//   return matrix;
// };

// var setZeroes = function (matrix) {
//   // first find who has the zero here
//   let n = matrix.length;
//   let m = matrix[0].length;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === 0) {
//         // mark it out entire row and column with help of this function
//         zeroRow(matrix, i, n, m);
//         zeroCol(matrix, j, n, m);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === -1) {
//         matrix[i][j] = 0;
//       }
//     }
//   }

//   return matrix;
// };

// var setZeroes = function (matrix) {
//   let n = matrix.length;
//   let m = matrix[0].length;

//   let newRow = new Array(n).fill(0);
//   let newCol = new Array(m).fill(0);

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === 0) {
//         newRow[i] = 1;
//         newCol[j] = 1;
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (newRow[i] === 1 || newCol[j] === 1) {
//         matrix[i][j] = 0;
//       }
//     }
//   }

//   return matrix;
// };

// let out = setZeroes([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]);
// console.log(`your zerosed matrix here ${out}`);

////------------------------------------------------------------------

// var spiral = function (matrix) {
//   let n = matrix.length;
//   let m = matrix[0].length;
//   let top = 0;
//   let right = m - 1;
//   let bottom = n - 1;
//   let left = 0;
//   let screen = [];

//   while (top <= bottom && left <= right) {
//     for (let i = left; i <= right; i++) {
//       screen.push(matrix[top][i]);
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//       screen.push(matrix[i][right]);
//     }
//     right--;

//     if (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         screen.push(matrix[bottom][i]);
//       }
//       bottom--;
//     }
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         screen.push(matrix[i][left]);
//       }
//       left++;
//     }
//   }
//   return screen;
// };

// let out = spiral([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// console.log(out);

////------------------------------------------------------------------

// var sorting = function (arr) {
//   arr.sort((a, b) => {
//     if (a[0] !== b[0]) {
//       return a[0] - b[0];
//     } else {
//       return a[1] - b[1];
//     }
//   });
// };

// var merge = function (intervals) {
// optimal and better o(n)
//   let n = intervals.length;
//   sorting(intervals);
//   let screen = [];
//   for (let i = 0; i < n; i++) {
//     if (screen.length === 0 || intervals[i][0] > screen[screen.length - 1][1]) {
//       screen.push(intervals[i]);
//     } else {
//       screen[screen.length - 1][1] = Math.max(
//         screen[screen.length - 1][1],
//         intervals[i][1]
//       );
//     }
//   }
//   return screen;
/////---------------------------------------
//// brute force approach
//   let n = intervals.length;
//   sorting(intervals);
//   let screen = [];

//   for (let i = 0; i < n; i++) {
//     let start = intervals[i][0];
//     let end = intervals[i][1];
//     //// skip unwanted comparison do the dry run you will understood what's happening
//     if (screen.length !== 0) {
//       if (end <= screen[screen.length - 1][1]) {
//         continue;
//       }
//     }

//     for (let j = i + 1; j < n; j++) {
//       if (intervals[j][0] <= end) {
//         end = Math.max(intervals[j][1], end);
//       } else {
//         break;
//       }
//     }
//     screen.push([start, end]);
//   }
//   return screen;
// };

// let out = merge([
//   [1, 3],
//   [2, 6],
//   [8, 9],
//   [9, 11],
//   [8, 10],
//   [2, 4],
//   [15, 18],
// ]);

// console.log(out, "merged");

//////--------------------------------------------------------

/////  Find Missing And Repeating solved gfg

// let findTwoElements = (arr, n) => {
//   let hashArray = new Array(n + 1).fill(0);
//   for (let i = 0; i < n; i++) {
//     hashArray[arr[i]]++;
//   }
//   /// initially the reapeting and mission has -
//   let repe = -1;
//   let miss = -1;

//   for (let i = 1; i <= n; i++) {
//     if (hashArray[i] === 2) {
//       repe = i;
//     } else if (hashArray[i] === 0) {
//       miss = i;
//     }

//     if (repe !== -1 && miss !== -1) {
//       break;
//     }
//   }
//   return [repe, miss];
// };

// let arr = [4, 3, 6, 2, 1, 1];
// let n = arr.length;

// let out = findTwoElements(arr, n);

// console.log(out);

//////--------------------------------------------------------
////Count Inversions
//// brute force approach got TLE let's apply optimized approach
// let count = 0;

// const mergeCallback = (arr, low, mid, high) => {
//   let screen = [];
//   let left = low;
//   let right = mid + 1;

//   while (left <= mid && right <= high) {
//     if (arr[left] <= arr[right]) {
//       screen.push(arr[left]);
//       left++;
//     } else {
//       screen.push(arr[right]);
//       right++;
//       count = count + mid - left + 1;
//     }
//   }

//   while (left <= mid) {
//     screen.push(arr[left]);
//     left++;
//   }
//   while (right <= high) {
//     screen.push(arr[right]);
//     right++;
//   }

//   for (let i = low; i <= high; i++) {
//     arr[i] = screen[i - low];
//   }
// };

// const mergeSort = (arr) => {
//   if (low >= high) return;

//   let mid = Math.floor((low + high) / 2);
//   mergeSort(arr, low, mid);
//   mergeSort(arr, mid + 1, high);
//   mergeCallback(arr, low, mid, high);
//   return count;
// };

// const merging = [2, 4, 1, 3, 5];
// let low = 0;
// let high = merging.length - 1;

// console.log(mergeSort(merging, low, high));

//// ---------------------------------------------------
//// kadane's algorithm
// var maxProduct = function (nums) {
//   let maxValue = nums[0];
//   let minValue = nums[0];
//   let maxProductValue = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     //  we need to keep track of both the maximum and minimum product because multiplying two negative numbers gives a positive result.
//     let temp = Math.max(nums[i], maxValue * nums[i], minValue * nums[i]);
//     minValue = Math.min(nums[i], maxValue * nums[i], minValue * nums[i]);
//     maxValue = temp;
//     maxProductValue = Math.max(maxProductValue, maxValue);
//   }
//   return maxProductValue;
// };

// let out = maxProduct([2, 3, -2, 4]);
// console.log(out);

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//// BINARY SEARCH TREE PROBLEMS AND TECHNIQUES EVERYTHING
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

class Node {
  // this is also called template...// prototype just focus where do we instantiante the node based
  // this one executed
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Binary {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      /// we assigned the template into the root node so this time what happened
      /// our template value and left and right which is value = your value; left : null, right : null
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this; // Return the Binary tree after inserting the new node
          }
          currentNode = currentNode.left;
        } else {
          // value >= currentNode.value
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this; // Return the Binary tree after inserting the new node
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

function preOrder(node, pre = []) {
  //console.log(node, "inside preorder");

  if (node === null) {
    return pre;
  }

  pre.push(node.value);
  preOrder(node.left, pre);
  preOrder(node.right, pre);

  return pre;
}

function inOrder(node, pre = []) {
  //console.log(node, "inside preorder");

  if (node === null) {
    return pre;
  }

  preOrder(node.left, pre);
  pre.push(node.value);
  preOrder(node.right, pre);

  return pre;
}

function postOrder(node, pre = []) {
  //console.log(node, "inside preorder");

  if (node === null) {
    return pre;
  }
  preOrder(node.left, pre);
  preOrder(node.right, pre);

  pre.push(node.value);

  return pre;
}

//           50
//        /     \
//      30       70
//     /  \     /   \
//    20  40   60   80

let adding = new Binary();
adding.insert(50);
adding.insert(30);
adding.insert(20);
adding.insert(40);
adding.insert(70);
adding.insert(60);
adding.insert(80);

console.log(preOrder(adding.root));
console.log(inOrder(adding.root));
console.log(postOrder(adding.root));
