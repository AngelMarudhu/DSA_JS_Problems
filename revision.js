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

//   let lenghtOftheSubArray = 0;
//   for (let i = 0; i < n; i++) {
//     let summation = 0;
//     for (let j = i; j < n; j++) {
//       summation += arr[j];
//       if (summation === k) {
//         // simple j-i + 1 if answer want 0 based you just j - i more enough
//         // but all the platform expect 1 based indext j - i + 1 that's the meaning of 1 okay
//         // example assume i = 1; j = 4 okay 4 - 1 + 1 -----> 3 + 1 = 4 so total suarray length is 4..
//         lenghtOftheSubArray = Math.max(lenghtOftheSubArray, j - i + 1);
//       }
//     }
//   }
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

// let out = majorityElement([8, 8, 7, 7, 7]); // the output is because n / 2 = 3 here so > 3 element is 2
// console.log(out, "your majority element");

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
