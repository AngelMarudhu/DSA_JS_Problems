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
//     // instead of find you can use get method in c++ find but in js has get method to find your data......
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

// function preOrder(node, pre = []) {
//   //console.log(node, "inside preorder");

//   if (node === null) {
//     return pre;
//   }

//   pre.push(node.value);
//   preOrder(node.left, pre);
//   preOrder(node.right, pre);

//   return pre;
// }

// function inOrder(node, ino = []) {
//   //console.log(node, "inside preorder");

//   if (node === null) {
//     return ino;
//   }

//   inOrder(node.left, ino);
//   ino.push(node.value);
//   inOrder(node.right, ino);

//   return ino;
// }

// function postOrder(node, post = []) {
//   //console.log(node, "inside preorder");

//   if (node === null) {
//     return post;
//   }
//   postOrder(node.left, post);
//   postOrder(node.right, post);
//   post.push(node.value);

//   return post;
// }

//// in pre post at single loop traversal

// function traversal(root) {
//   let stack = [];
//   stack.push({ node: root, num: 1 });
//   let result = { pre: [], ino: [], post: [] };

//   if (root === null) return;

//   while (stack.length > 0) {
//     let { node, num } = stack.pop();

//     if (num === 1) {
//       result.pre.push(node.value);
//       num++;
//       stack.push({ node, num });

//       if (node.left !== null) {
//         stack.push({ node: node.left, num: 1 });
//       }
//     } else if (num === 2) {
//       result.ino.push(node.value);
//       num++;
//       stack.push({ node, num });

//       if (node.right !== null) {
//         stack.push({ node: node.right, num: 1 });
//       }
//     } else {
//       result.post.push(node.value);
//     }
//   }

//   return result;
// }

//// ------------------------------------------------------

// var maxDepth = function (root) {
//   if (root === null) return 0;

//   let lef = maxDepth(root.left);
//   let rig = maxDepth(root.right);
//   if (lef === -1 || rig === -1) return -1; // Return -1 to indicate unbalanced
//   if (Math.abs(lef - rig) > 1) return -1; // Return -1 to indicate unbalanced
//   return Math.max(lef, rig) + 1; // Return the depth of the current node
// };
// var isBalanced = function (root) {
//   return maxDepth(root) !== -1;
// };

////// +1 means current node which means namakku therium left illana right than max ah irukkapodhu appudina
/// namma antha node oda parent kku left illana right mattum anuppuna podhadhu current node um consider
/// pannanum illaya appodhan adhoda parent node kku idhuvum sendhu value add aaagum adhan concept

//// ------------------------------------------------------

// var diameterOfBinaryTree = function (root) {
//   let dia = 0;
//   function depth(node) {
//     if (!node) return 0;
//     let left = depth(node.left);
//     let right = depth(node.right);
//// why this left + right means our dia path can be passed via root some times it can't via root
//     dia = Math.max(dia, left + right);
//     return Math.max(left, right) + 1;
//   }

//   depth(root);
//   return dia;
// };

//// ------------------------------------------------------
// var maxPathSum = function (root) {
//   let maxSum = -Infinity; // first and most intialize the too small value

//   //      10
//   //    /   \
//   //  -2     3
//   //  / \   / \
//   // 8  -4 5   6 this time 8 and -4 leaf node there no more path with the leaf node that time
//   // we want to return that current node that time 8 is okay you can return to the top but
//   // -4 you don't share with the top of the node that's the negative sum are not included so instead
//   // instead of you should return 0 that's the line max(0, pathSum.right or left what ever subtree node)

//   function pathSum(node) {
//     if (!node) return 0;
//     let leftHand = Math.max(0, pathSum(node.left)); // negative sums are not included
//     let rightHand = Math.max(0, pathSum(node.right)); // negative sums are not included
//     maxSum = Math.max(maxSum, leftHand + rightHand + node.value); // Update maxSum if needed
//     return Math.max(leftHand, rightHand) + node.value; // Return the maximum path sum starting from the current node
//   }

//   pathSum(root); // Start calculating the path sum from the root node
//   return maxSum;
// };
//// ------------------------------------------------------
// /// identical treee problem.....
// var isSameTree = function (p, q) {
//   if (p === null && q === null) return true;
//   if (p === null || q === null) return false;

//   if (p.val !== q.val) return false;
//   // pre order traversal......
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

//// ------------------------------------------------------

// var verticalTraversal = function (root) {
//   let keyMap = new Map();

//   function dfs(node, dist, level) {
//     // first and most write a base case for if there's no node just return
//     if (!node) return;

//     // first check there is distance in the map
//     if (!keyMap.has(dist)) {
//       keyMap.set(dist, new Map());
//     }
//     // now check in the dist has particular level is already entered of not if it is not entered create an array
//     if (!keyMap.get(dist).has(level)) {
//       keyMap.get(dist).set(level, []);
//     }
//     // asssign the node that particular level of the node
//     keyMap.get(dist).get(level).push(node.value);

//     dfs(node.left, dist - 1, level + 1);

//     dfs(node.right, dist + 1, level + 1);
//   }

//   dfs(root, 0, 0);
//   // then preorder traverse we got always root node in the top of the list so sorting the key first
//   let sortedKeys = [...keyMap.keys()].sort((a, b) => a - b);

//   let list = [];

//   // Loop through the sorted keys to extract the data
//   for (let dist of sortedKeys) {
//     let levels = keyMap.get(dist);
//     let temp = [];

//     // Extract data for each level and flatten the array
//     for (let [level, nodes] of levels) {
//       temp.push(...nodes);
//     }

//     list.push(temp);
//   }

//   return list;
// };

///// -------------------------------------------------------
// top view of the binary tree

// var topView = function (root) {
//   let keyMap = new Map();

//   let dfs = (node, dis) => {
//     if (!node) return;

//     if (!keyMap.has(dis)) {
//       keyMap.set(dis, node.value);
//     }

//     dfs(node.left, dis - 1);
//     dfs(node.right, dis + 1);
//   };

//   dfs(root, 0);
//   let sortedKeys = [...keyMap.keys()].sort((a, b) => a - b);

//   let list = [];

//   for (let data of sortedKeys) {
//     list.push(keyMap.get(data));
//   }

//   return list;
// };

////------------------- bottom view of the binary tree

// var bottomView = function (root) {
//   let keyMap = new Map();

//   let dfs = (node, dist) => {
//     if (!node) return;

//     // Always update the value in the map for the current horizontal distance
//     keyMap.set(dist, node.value);

//     // Traverse left child
//     dfs(node.left, dist - 1);

//     // Traverse right child
//     dfs(node.right, dist + 1);
//   };
//   dfs(root, 0);

//   let sorting = [...keyMap.keys()].sort((a, b) => a - b);

//   let list = [];

//   for (let data of sorting) {
//     list.push(keyMap.get(data));
//   }
//   return list;
// };

////------------------- right view of the binary tree

// var rightView = function (root) {
//   let list = [];

//   let preOrder = (node, level) => {
//     if (node === null) return;

//     if (list.length === level) {
//       list.push(node.value);
//     }

//     preOrder(node.right, level + 1);
//     preOrder(node.left, level + 1);
//   };

///// as it is left side view just interchange the preorder recurion simple left 1st and right 2nd done

//   preOrder(root, 0);

//   return list;
// };

/// ----------------------------------------------------
////// symmetric binary tree problem solved on leetcode

// var isSymmetric = function (root) {
//   let dfs = (left, right) => {
//     if (left === null && right === null) return true;
//     if (left === null || right === null) return false;

//     if (left.val !== right.val) return false;

//     return dfs(left.left, right.right) && dfs(left.right, right.left);
//   };

//   return dfs(root.left, root.right);
// };

///// --------------------------------------------
//// root to node path the node can be anything doesn't matter we need to find the path

// var rootToNode = function (root, target) {
//   let paths = [];

//   let inorder = (node, target) => {
//     if (!node) return false;

//     paths.push(node.value);

//     if (node.value === target) {
//       return true;
//     }
//// simultanious movement left tree and right tree
//     if (inorder(node.left, target) || inorder(node.right, target)) {
//       return true;
//     }

//     paths.pop();
//     return false;
//   };

//   if (inorder(root, target)) {
//     return paths;
//   } else {
//     return "Not Found Path";
//   }
// };

///// --------------------------------------------
// 236. Lowest Common Ancestor of a Binary Tree solved on leetcode

// var lowestCommonAncestor = function (root, p, q) {
//   // base case
//   if (!root || root.value === p || root.value === q) {
//     return root;
//   }

//   // Recursive calls
//   let left = lowestCommonAncestor(root.left, p, q);
//   let right = lowestCommonAncestor(root.right, p, q);

//   // Handle results
//   if (left !== null && right !== null) {
//     // Nodes p and q found in different subtrees, so root is LCA
//     return root.value;
//   } else if (left !== null) {
//     // Node p or q found in left subtree
//     return left;
//   } else if (right !== null) {
//     // Node p or q found in right subtree
//     return right;
//   } else {
//     // Neither p nor q found in this subtree
//     return null;
//   }
// };

///// --------------------------------------------
//// children sum property

// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

// var checkTree = function (root) {
//   let dfs = (node) => {
//     if (!node) return null;

//     let left = dfs(node.left);
//     let right = dfs(node.right);

//     if (left === null && right === null) {
//       return node.value;
//     }

//     if (left != null && right != null) {
//       return node.value === left + right;
//     }
//     return false;
//   };

//   return dfs(root);
// };

/// lever order traversal BFS simple queue data structure

// var leverOrder = function (root) {
//   let screen = [];
//   let queue = [];
//   if (!root) return screen;

//   queue.push(root);

//   while (queue.length !== 0) {
//     let size = queue.length;
//     // every time create new empty array once the loop will end so don't cofuse
//     let individualLevel = [];

//     for (let i = 0; i < size; i++) {
//       let node = queue.shift();
//       if (node.left !== null) queue.push(node.left);
//       if (node.right !== null) queue.push(node.right);

//       individualLevel.push(node.value);
//     }

//     screen.push(individualLevel);
//   }
//   return screen;
// };

////------------------------------------------------------
////All Nodes Distance K in Binary Tree level order bfs
// var parentMap = new Map();
// var preOrder = function (node, pare) {
//   // initially root node parent always null i hope you know
//   if (!node) return;

//   parentMap.set(node, pare);

//   preOrder(node.left, node);
//   preOrder(node.right, node);
// };

// var distanceK = function (root, target, k) {
//   preOrder(root, null);
//   let visited = new Set();
//   let queue = [];

//   console.log(parentMap);

//   let targetNode = null;
//   /// why this loop marudhu very simple buddy because the target is just simple value not a one of the node so
//   /// first find the node of instance then traverse equally which means radially out...
//   for (let node of parentMap.keys()) {
//     if (node.value === target) {
//       targetNode = node;
//       break;
//     }
//   }

//   queue.push(targetNode);
//   visited.add(targetNode);
//   let level = 0;

//   while (queue.length !== 0) {
//     let size = queue.length;

//     if (level++ === k) break;

//     for (let i = 0; i < size; i++) {
//       let node = queue.shift();
//       if (node.left && !visited.has(node.left)) {
//         queue.push(node.left);
//         visited.add(node.left);
//       }
//       if (node.right && !visited.has(node.right)) {
//         queue.push(node.right);
//         visited.add(node.right);
//       }
//       let parent = parentMap.get(node);
//       if (parent && !visited.has(parent)) {
//         queue.push(parent);
//         visited.add(parent);
//       }
//     }
//   }
//   let results = [];
//   while (queue.length !== 0) {
//     let node = queue.shift();
//     results.push(node.value);
//   }
//   return results;
// };

////// --------------------------------Amount of Time for Binary Tree to Be Infected

// var amountOfTime = function (root, start) {
//   let childParent = new Map();
//   var preOrder = function (node, pare) {
//     if (!node) return;

//     childParent.set(node, pare);

//     preOrder(node.left, node);
//     preOrder(node.right, node);
//   };

//   preOrder(root, null);

//   let targetNode = null;

//   for (let node of childParent.keys()) {
//     if (node.value === start) {
//       targetNode = node;
//       break;
//     }
//   }

//   let queue = [];
//   let visited = new Set();
//   let burning = 0;
//   queue.push(targetNode);
//   visited.add(targetNode);

//   while (queue.length !== 0) {
//     let size = queue.length;
//     // just following if any new node added in the bag if that is case only burning++ or assume we end of the loop
//     let flag = false;
//     for (let i = 0; i < size; i++) {
//       let node = queue.shift();

//       if (node.left && !visited.has(node.left)) {
//         // you can placed flag anywhere in the if conditions first or mid or last wherever
//         flag = true;
//         queue.push(node.left);
//         visited.add(node.left);
//       }

//       if (node.right && !visited.has(node.right)) {
//         flag = true;
//         queue.push(node.right);
//         visited.add(node.right);
//       }

//       let parent = childParent.get(node);

//       if (parent !== null && !visited.has(parent)) {
//         flag = true;
//         queue.push(parent);
//         visited.add(parent);
//       }
//     }
//     if (flag) burning++;
//   }
//   return burning;
// };

/////--------------------------------- Count complete nodes in binary treee
// let leftHeight = (node) => {
//   let left = 0;
//   while (node) {
//     left++;
//     node = node.left;
//   }
//   return left;
// };

// let rightHeight = (node) => {
//   let right = 0;
//   while (node) {
//     right++;
//     node = node.right;
//   }

//   return right;
// };

// var countNodes = function (root) {
//   if (!root) return 0;

//   let lh = leftHeight(root);
//   let rh = rightHeight(root);

//   if (lh === rh) {
//     return Math.pow(2, lh) - 1;
//   } else {
//     return countNodes(root.left) + countNodes(root.right) + 1;
//   }
// };

///// ----------------------------- num of trees create unique tree catalon reference and GFG

// var numTrees = function (n) {
//   let memo = new Array(n + 1).fill(0);
//   memo[0] = 1;
//   memo[1] = 1;
//   /// top down approach which means looop
//   for (let i = 2; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       memo[i] += memo[j - 1] * memo[i - j];
//     }
//   }
//   return memo[n];
// };

/////------------------------------------------------
///// morris traversal inorder o(1) space complexity....

// var morris = function (root) {
//   let list = [];
//   let current = root;

//   while (current !== null) {
//     if (current.left === null) {
//       list.push(current.value);
//       current = current.right;
//     } else {
//       let findRighMostNode = current.left;
//       while (
//         findRighMostNode.right !== null &&
//         findRighMostNode.right !== current
//       ) {
//         findRighMostNode = findRighMostNode.right;
//       }

//       if (findRighMostNode.right === null) {
//         findRighMostNode.right = current;
//         current = current.left;
//       } else {
//         findRighMostNode.right = null;
//         list.push(current.value);
//         current = current.right;
//       }
//     }
//   }
//   return list;
// };
/////-------------------------------------------------------------------------------------

///// flatten binary tree to linked list

// var flatten = function (root) {
//   let previous = null;
//   var flat = function (root) {
//     if (root === null) return;

//     /////reversed post order right left root method..don't worry i made a drawing for all those trees
//     flat(root.right);
//     flat(root.left);

//     root.right = previous;
//     root.left = null;
//     previous = root;
//   };
//   flat(root);
//   return root;
// };

/////-------------------------------------------------------------------------------------

///// binary search tree problem above problem are binary tree......

//// ceil of the binary treee problem first

// var ceil = function (root, key) {
//   let ceiling = Infinity;

//   var findCeil = function (root, key) {
//     while (root) {
//       if (root.value === key) {
//         ceiling = root.value;
//         return ceiling;
//       }

//       if (key > root.value) {
//         root = root.right;
//       } else {
//         ceiling = root.value;
//         root = root.left;
//       }
//     }
//   };
//   findCeil(root, key);
//   return ceiling;
// };

//// floor of the binary treee problem first

// var findfloor = function (root, key) {
//   let flooring = -1;

//   var floor = function (root, key) {
//     while (root) {
//       if (root.value === key) {
//         flooring = root.value;
//         return flooring;
//       }

//       if (root.value < key) {
//         root = root.right;
//       } else {
//         root = root.left;
//         flooring = root.value;
//       }
//     }
//   };

//   floor(root, key);
//   return flooring;
// };

///////////---------------------------------------------------
///// delete the node BST

var findRighMostNode = function (node) {
  /// node oda left tree oda right most node kku poittu then andha rightchild ah preserve panni vachirukkomla adha assign pannanum

  if (node.right === null) {
    return node;
  }

  return findRighMostNode(node.right);
};

/// once the fucntion you see in the code you got the right node of your travrsal that means our node is there
var checking = function (node) {
  /// ungaloda key node left vandhu null ah iruntha you don't need to do anything just return the right
  if (node.left === null) {
    return node.right;
  } else if (node.right === null) {
    return node.left;
  }

  /// first preserving the right child of that node
  let rightChildOfNode = node.right;
  ///// node oda left tree oda right most node
  let leftTreeLastRightNode = findRighMostNode(node.left);

  leftTreeLastRightNode.right = rightChildOfNode;
  return node.left;
};

var deleteNode = function (root, key) {
  /// first base case
  if (!root) return null;

  if (root.value === key) {
    return checking(root);
  }
  //// if our root is the key we need to do some changes that time the destroynode will help
  let destroyNode = root;
  //// searching the node first as we did before
  while (root) {
    if (root.value > key) {
      if (root.left !== null && root.left.value === key) {
        //// here we got the node so we need to do something here to change the edges between nodes
        root.left = checking(root.left);
        break;
      } else {
        root = root.left;
      }
    } else {
      if (root.right !== null && root.right.value === key) {
        root.right = checking(root.right);
        break;
      } else {
        root = root.right;
      }
    }
  }

  return destroyNode;
};

// TREE REPLICATION IN VISUALLY 5
//           50
//        /     \
//      30       70
//     /  \     /   \
//    20  40   60   80

let adding = new Binary();
// let construct = (arr) => {
//   for (let node of arr) {
//     adding.insert(node);
//   }
// };

// construct([8, 5, 1, 7, 10, 12]);

adding.insert(50);
adding.insert(30);
adding.insert(20);
adding.insert(40);
adding.insert(70);
adding.insert(60);
adding.insert(80);

// console.log(adding.root);
// // console.log(preOrder(adding.root));
// // console.log(inOrder(adding.root));
// // console.log(postOrder(adding.root));
// console.log(traversal(adding.root), "final");
// console.log(isBalanced(adding.root));
// console.log(diameterOfBinaryTree(adding.root));
// console.log(maxPathSum(adding.root));
// console.log(verticalTraversal(adding.root));
// console.log(topView(adding.root));
// console.log(bottomView(adding.root));
// console.log(rightView(adding.root));
// console.log(isSymmetric(adding.root));
// console.log(rootToNode(adding.root, 40));
// console.log(lowestCommonAncestor(adding.root, 40, 70));
// console.log(checkTree(adding.root));
// console.log(changeTree(adding.root));
// console.log(leverOrder(adding.root));
// console.log(distanceK(adding.root, 30, 2));
// console.log(amountOfTime(adding.root, 40));
// console.log(countNodes(adding.root));
// console.log(numTrees(3));
// console.log(morris(adding.root));
// console.log(flatten(adding.root, "dafdfa"));
///---------------------------------------------------------------
// console.log(ceil(adding.root, 37)); // output is 40
// console.log(findfloor(adding.root, 61));
console.log(deleteNode(adding.root, 30), "consoling");
//////// random binary trees creation like don't consider the rule of the binary treeees
