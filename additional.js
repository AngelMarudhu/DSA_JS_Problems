/// solved at leeetcode
var removeOuterParentheses = function (s) {
  let screen = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (count > 0) {
        screen += "(";
      }
      count += 1;
    }

    if (s[i] === ")") {
      count -= 1;

      if (count > 0) {
        screen += ")";
      }
    }
  }
  return screen;
};
// let s = "(()())(())";
// console.log(removeOuterParentheses(s));

//// -------------------------------------------------------------------------------------
/// solved at leetcode
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 !== 0) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};

// let num = "35427";
// console.log(largestOddNumber(num));

////-------------------------------------------------------------------------------------
//// solved at leetcode string matching technique...
/// my own code for string matching .......
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  //// if there is no common just return empty string that's we assigned empty string.....
  let screen = "";
  ///// length is common for all the strings but no one consider this but i got it because striver.....
  strs.sort((a, b) => a.length - b.length);

  for (let i = 0; i < strs[0].length; i++) {
    /// first taking first character
    let current = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      /// secon matching with all other first characters
      //// if not matching whatever before added with screen or return empty string......
      if (strs[j][i] !== current) {
        return screen;
      }
    }
    screen += current;
  }
  return screen;
};

// let strs = ["flower", "flow", "flight"];

// console.log(longestCommonPrefix(strs));

////-------------------------------------------------------------------------------------

var isIsomorphic = function (s, t) {
  let n = s.length;
  let mapST = new Map();
  let mapTS = new Map();

  for (let i = 0; i < n; i++) {
    let S = s[i];
    let T = t[i];

    if (
      (mapST.has(S) && mapST.get(S) !== T) ||
      (mapTS.has(T) && mapTS.get(T) !== S)
    ) {
      return false;
    }

    mapST.set(S, T);
    mapTS.set(T, S);
  }

  return true;
};

// let s = "egg";
// let t = "add";

// console.log(isIsomorphic(s, t));

////-------------------------------------------------------------------------------------
//// solved at leetcode....
var rotate = function (s, k) {
  //// removing + adding.... done....
  //// removing the k much string if use single parameter,
  //// adding 0 to k much string rightmost to string....
  let removed = s.substring(k);

  let out = removed + s.substring(0, k);

  return out;
  // let n = s.length;
  // let rotation = new Array(n);
  // for (let i = 0; i < n; i++) {
  //   //// finding the index to place the string each times it will rotate entire string
  //   rotation[(i + k) % n] = s[i];
  // }
  // return rotation.join("");
};

var isRotationEqual = function (rotate, goal) {
  for (let i = 0; i < rotate.length; i++) {
    if (rotate[i] !== goal[i]) {
      return false;
    }
  }
  return true;
};

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  let n = s.length;

  for (let i = 0; i < n; i++) {
    let rotation = rotate(s, i);

    if (isRotationEqual(rotation, goal)) {
      return true;
    }
  }
  return false;
};

// let s = "abcde";
// let goal = "abced";

// console.log(rotateString(s, goal));

////-------------------------------------------------------------------------------------

let isPalindrome = (strs) => {
  if (strs.length === 1) return true;

  let left = 0;
  let right = strs.length - 1;

  while (left <= right) {
    if (strs[left] !== strs[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
var longestPalindrome = function (s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let sub = "";
    for (let j = i; j < s.length; j++) {
      sub += s[j];
      if (isPalindrome(sub) && sub.length > longest.length) {
        longest = sub;
      }
    }
  }
  return longest;
};

// let s = "babad";

// console.log(longestPalindrome(s));

////-------------------------------------------------------------------------------------

var beautySum = function (s) {
  let screen = 0;
  for (let i = 0; i < s.length; i++) {
    let hashMap = new Map();
    for (let j = i; j < s.length; j++) {
      //// generate subsequence
      if (!hashMap.has(s[j])) {
        hashMap.set(s[j], 1);
      } else {
        let freq = hashMap.get(s[j]);
        hashMap.set(s[j], freq + 1);
      }
      //// array.from it's iterable when hashamap.values() extract values from hashmap changing iterable
      //// so array.from will taking care iterable values.....simply object to array.... each substring
      //// you can use for of loop instead of array.from
      let frequency = Array.from(hashMap.values());
      screen += Math.max(...frequency) - Math.min(...frequency);
    }
  }
  return screen;
};

// let s = "aabcb";

// console.log(beautySum(s));

////-------------------------------------------------------------------------------------
//// solved at leetcode
var romanToInt = function (s) {
  let romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let screen = 0;

  let i = 0;

  while (i < s.length) {
    if (i <= s.length && romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
      screen -= romanNumerals[s[i]];
    } else {
      screen += romanNumerals[s[i]];
    }
    i += 1;
  }
  return screen;
};

// let s = "MCMXCIV";

// console.log(romanToInt(s));

////-------------------------------------------------------------------------------------

function reverse(s, begin, end) {
  console.log(begin, end);
  while (begin < end) {
    let charArray = [...s];
    let temp = charArray[begin];
    charArray[begin] = charArray[end];
    charArray[end] = temp;
    begin++;
    end--;
    s = charArray.join("");
  }
  return s;
}

var reverseWords = function (s) {
  let i = 0;
  let starts = -1;
  while (i < s.length) {
    //// this if condition for sometimes the starting string might starts with space that time we
    //// don't consider the empty space that's prevention hahahaha
    if (starts === -1 && s[i] !== " ") {
      starts = i;
    }
    /// we need to address what's next string is space or not because we need to extract the string
    /// without space isn't if we addressed before we can easily get the string
    //// same as BST problem deleting the node like that we need to figure before what we need delete
    if (starts !== -1 && (s[i + 1] === " " || i + 1 === s.length)) {
      s = reverse(s, starts, i);
      starts = -1;
    }
    i = i + 1;
  }
  s = s.trim();

  s = reverse(s, 0, s.length - 1);
  return s;
};

// let s = "  hello world  ";

// console.log(reverseWords(s));

////-------------------------------------------------------------------------------------
//// solved at leetcode
var frequencySort = function (s) {
  let freqMap = new Map();
  //// first find frequency......
  for (let i = 0; i < s.length; i++) {
    if (!freqMap.has(s[i])) {
      freqMap.set(s[i], 1);
    } else {
      let count = freqMap.get(s[i]);
      freqMap.set(s[i], count + 1);
    }
  }
  //// second sort out based on freq... that's why b[1] - a [1]
  //// entries vandhu iterable manner ah mathum key and value pair ah like [["t", 1]] like this
  let objectToArray = Array.from(freqMap.entries());

  objectToArray.sort((a, b) => b[1] - a[1]);

  let strs = "";
  ///// finally just append using repeat method in java they are using string builders
  for (let entrie of objectToArray) {
    let char = entrie[0];
    let freq = entrie[1];

    strs += char.repeat(freq);
  }
  return strs;
};

// let s = "tree";

// console.log(frequencySort(s));

////-------------------------------------------------------------------------------------

var maxDepth = function (s) {
  let maxCount = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      current++;
      maxCount = Math.max(maxCount, current);
    } else if (s[i] === ")") {
      current--;
    }
  }
  return maxCount;
};

// let s = "(1+(2*3)+((8)/4))+1";

// console.log(maxDepth(s));

////-------------------------------------------------------------------------------------

//// implementation ATOI solved at leetcode....

var myAtoi = function (s) {
  let screen = 0;
  let i = 0;
  let sign = 1;

  if (s[i] === "-") {
    sign = -1;
    i++;
  }

  while (i < s.length) {
    if (!(s[i] >= "0" && s[i] <= "9")) {
      return 0;
    }

    screen = screen * 10 + (s[i].charCodeAt(0) - 48);
    i++;

    if (screen * sign < -2147483648) return -2147483648;
    if (screen * sign > 2147483647) return 2147483647;
  }
  return screen * sign;
};

// s = "-91283472332";

// console.log(myAtoi(s));

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//// stack problems all the problems at leetcode...
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

let checkStack = (stacks, s) => {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    let closing = char in pairs;

    if (closing) {
      stacks.push(char);
    } else {
      if (stacks.length === 0 || stacks.pop() === pairs[char]) {
        return false;
      }
    }
  }

  return stacks.length === 0;
};

var isValid = function (s) {
  let stack = [];

  return checkStack(stack, s);
};

// let s = "()[]{}()";

// console.log(isValid(s));

////-------------------------------------------------------------------------------------

var calPoints = function (ops) {
  let stack = [];
  let sum = 0;
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "+") {
      const val = stack[stack.length - 1] + stack[stack.length - 2];
      stack.push(val);
      sum += val;
      continue;
    } else if (ops[i] === "D") {
      let val = parseInt(stack[stack.length - 1] * 2);
      stack.push(val);
      sum += val;
    } else if (ops[i] === "C") {
      sum -= parseInt(stack[stack.length - 1]);
      stack.pop();
    } else {
      stack.push(parseInt(ops[i]));
      sum += parseInt(ops[i]);
    }
  }

  return sum;
};

let ops = ["5", "2", "C", "D", "+"];

console.log(calPoints(ops));
