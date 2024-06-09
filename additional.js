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

var isValid = function (s) {
  let stack = [];
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    switch (s[i]) {
      case ")":
        temp = stack.pop();
        if (temp === "{" || temp === "[") {
          return false;
        }
        break;

      case "}":
        temp = stack.pop();
        if (temp === "[" || temp === "(") {
          return false;
        }
        break;

      case "]":
        temp = stack.pop();
        if (temp === "{" || temp === "(") {
          return false;
        }
        break;
    }
  }

  return stack.length === 0;
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

// let ops = ["5", "2", "C", "D", "+"];

// console.log(calPoints(ops));

////-------------------------------------------------------------------------------------

var evalRPN = function (tokens) {
  let stack = [];

  for (let operators of tokens) {
    switch (operators) {
      case "+":
        stack.push(parseInt(stack.pop()) + parseInt(stack.pop()));
        break;

      case "-":
        let first = parseInt(stack.pop());
        let second = parseInt(stack.pop());
        stack.push(second - first);
        break;
      case "*":
        stack.push(parseInt(stack.pop()) * parseInt(stack.pop()));
        break;

      case "/":
        let dive = parseInt(stack.pop());
        let dives = parseInt(stack.pop());
        stack.push(Math.trunc(dives / dive));
        break;

      default:
        stack.push(parseInt(operators));
    }
  }

  return stack[0];
};

// let tokens = ["2", "1", "+", "3", "*"];

// console.log(evalRPN(tokens));

////-------------------------------------------------------------------------------------

var removeStars = function (s) {
  if (s.length === 0) return " ";

  let stack = [];

  for (let char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

// let s = "leet**cod*e";

// console.log(removeStars(s));

////-------------------------------------------------------------------------------------

var validateStackSequences = function (pushed, popped) {
  let stack = [];
  let i = 0;

  for (let pushing of pushed) {
    stack.push(pushing);

    while (
      i < popped.length &&
      stack.length > 0 &&
      //// till popped value like popped having first 4 we need to push till 4 match with stack
      //// when stack having 4 we need to pop the value from stack the popped having 5
      //// then pushing stack check is 5 is or not if 5 is the last one stack just popping 5
      //// next having 3 popped array we've already removed 4 and 5 from stack obiviously stack next
      //// value is 3 just pop next stack 2 popped array also having 2 just pop and finally 1 pop
      popped[i] === stack[stack.length - 1]
    ) {
      stack.pop();
      i = i + 1;
    }
  }
  //// after all the process if stack having something our sequences is wrong return false
  //// if end of the process our stack became empty we return true we got good sequences......
  return stack.length === 0;
};

// let pushed = [1, 2, 3, 4, 5];
// let popped = [4, 5, 3, 2, 1];

// console.log(validateStackSequences(pushed, popped));

////-------------------------------------------------------------------------------------

var generateParenthesis = function (n) {
  const result = [];

  const recusiveParan = function (str, open, close) {
    if (open === n && close === n) {
      result.push(str);
      return;
    }

    if (open < n) {
      recusiveParan(str + "(", open + 1, close);
    }
    // console.log(str);
    if (close < open) {
      recusiveParan(str + ")", open, close + 1);
    }

    if (open === n && close < n) {
      return;
    }
  };

  recusiveParan("", 0, 0);

  return result;
};

// console.log(generateParenthesis(3));

////-------------------------------------------------------------------------------------

var asteroidCollision = function (asteroids) {
  let stack = [];
  //// before pushing negative asteroids....
  for (let ast of asteroids) {
    if (ast > 0) {
      stack.push(ast);
    } else {
      let collision = false;
      //// when collison happens we need break the loop because we need to move next asteroid
      //// the for loop moving to next if not break the loop we might lock at single asteroid
      //// simply say we can't move next asteroid simple....
      while (stack.length !== 0 && stack[stack.length - 1] > 0) {
        let rDirection = stack[stack.length - 1];

        if (rDirection < Math.abs(ast)) {
          //// right moving asteroid will destroyed
          stack.pop();
        } else if (rDirection === Math.abs(ast)) {
          //// both asteroid will destroyed
          stack.pop();
          collision = true;
        } else {
          //// left moving asteroid will destroyed that's why we didn't pop here because
          //// we've never push negative value into stack don't pop here if pop right asteroid will destroyed
          collision = true;
        }
      }
      //// if any collision didn't happen just push the value into stack this might be left moving asteroid....
      //// why i'm saying we've startingly pushed all the positive asteroid into stack this one for negative..
      //// which means for example [-1,2,3,-3] here don't worry i'll explain in diagram...
      if (!collision) {
        stack.push(ast);
      }
    }
  }
  return stack;
};

// let asteroids = [5, 10, -5];

// console.log(asteroidCollision(asteroids));

////-------------------------------------------------------------------------------------
//// monotonic stack decreasing order....
//// simple finding next greater temperature and fill with how many days taking for next high temp
//// popping the temperature from the stack when get next high temperature....
var dailyTemperatures = function (temperatures) {
  let screen = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length !== 0 && temperatures[i] > stack[stack.length - 1][0]) {
      let [lastTemp, lastIndex] = stack.pop();
      screen[lastIndex] = i - lastIndex;
    }
    stack.push([temperatures[i], i]);
  }
  return screen;
};

// let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

// console.log(dailyTemperatures(temperatures));

////-------------------------------------------------------------------------------------

/// 901. Online Stock Span problem solved on leetcode

////-------------------------------------------------------------------------------------

var fleeting = function (coOrdinates, stack = []) {
  for (let [pos, time] of coOrdinates) {
    while (stack.length !== 0 && stack[stack.length - 1] <= time) {
      stack.pop();
    }
    stack.push(time);
  }
  return stack.length;
};

var carFleet = function (target, position, speed) {
  let hashMap = new Map();

  for (let i = 0; i < position.length; i++) {
    let findingTime = (target - position[i]) / speed[i];

    hashMap.set(position[i], findingTime);
  }
  let data = Array.from(hashMap.entries());

  let sorting = data.sort((a, b) => a[0] - b[0]);

  let datas = fleeting(sorting);
  return datas;
};

// let target = 10;
// let position = [6, 8];
// let speed = [3, 2];

// console.log(carFleet(target, position, speed));

////-------------------------------------------------------------------------------------

var simplifyPath = function (path) {
  let stack = [];
  let result = "/";
  //// this boolean removes falsy value here like ""(empty string), 0, NAN and undefined blah blah... here
  //// we might encounter lot of empty string that's why we've used boolean simple
  let spliting = path.split("/").filter(Boolean);
  //// first phase running a loop iterate the splitted string...
  for (let extract of spliting) {
    /// if extract === ".." we need to go backward onstep before isn't so we neeed another condition inside of if condi
    /// must > 0 because sometimes we can getting ".." initally that time we can't pop anything isn't
    if (extract === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
      //// this condition is very simple if our extract string "." if it is we can't add this one to our result isn't that's
      //// why we eliminate this.....
    } else if (extract && extract !== ".") {
      stack.push(extract);
    }
  }
  //// final phase simple if our stack having something we need merge all the strings to result don't forget to "/"
  //// if very importang if you forgot to mention all the string seperated by comma , like /...,b,d like that so don't forgot
  if (stack.length > 0) {
    result += stack.join("/");
  }
  //// return result
  return result;
};
// let path = "/.../a/../b/c/../d/./"; /////  Output: "/.../b/d"

// console.log(simplifyPath(path));

////-------------------------------------------------------------------------------------
/// explanation at leetcode let's watch out
var decodeString = function (s) {
  let stack = [];

  for (let ext of s) {
    if (ext !== "]") {
      stack.push(ext);
    } else {
      let makeString = "";
      while (stack.length !== 0 && stack[stack.length - 1] !== "[") {
        let adding = stack.pop();
        makeString = adding + makeString;
      }
      stack.pop(); /// this is for popping open bracket
      /// this time our stack oda last la vandhu k digits irukkum namma adha repeat pannanum

      let repeating = "";
      let regex = /\d+/;
      while (stack.length !== 0 && regex.test(stack[stack.length - 1])) {
        repeating = stack.pop() + repeating;
      }
      stack.push(makeString.repeat(parseInt(repeating)));
    }
  }
  return stack.join("");
};

// let s = "3[a]2[bc]";

// console.log(decodeString(s));

//  this regex helps us to find is digit or not meaning... ^ start, $ end of the string, \d+ one or more digit characters........ / this means delimit of patter regex simple ellai  /
/// console.log(/^\d+$/.test("33"));

////-------------------------------------------------------------------------------------
// why monotonic increase marudhu can you explain it simple concept marud
// * for example 1 7 2 3 9 k = 1 for example what would you answer like remove largest one isn't like 1 7 2 3 your output however
// * my thought is removing 7 like 1 2 3 9 which one is smaller buddys obivously my one isn't so we need to remove lower greater
// * monotonic intution is keep on pushing the node when our last node vandhu current node oda perusa irukko we got our lower greater node
// * just pop up from the stack the last node till kth length varai simple done done
var removeKdigits = function (num, k) {
  let stack = [];

  for (let ext of num) {
    while (stack.length !== 0 && k > 0 && stack[stack.length - 1] > ext) {
      k -= 1;
      stack.pop();
    }
    stack.push(ext);
  }

  //// removing zeros from the starting so first finding the how many zero contains startingly
  //// then slice the stack and join finally return that
  let findZeros = 0;

  while (findZeros < stack.length && stack[findZeros] === "0") {
    findZeros++;
  }
  //// what does it mean stack.length -k mathatdhu lam venama marudhu why length - k vara mattum
  //// slice pannanum oru simple example for this one
  /// when our input like 1 2 3 4 5 k = 2 means above code never exectute isn't that time namma eppudi
  /// find pannuradhu small digits ah ascending la varum podhu last value dhan perusa irukkum
  /// idhu ellladhukkum therinchadhudhaan illay so just throw last two digits our out like 1 2 3 only
  /// we don't need anymore 4 5 because that's greater one we can easily make small digits that's why
  stack = stack.slice(findZeros, stack.length - k);

  let screen = stack.join("");

  return screen ? screen : "0";
};

// let num = "10200";
// let k = 1;

// console.log(removeKdigits(num, k));

////-------------------------------------------------------------------------------------

var removeDuplicates = function (s, k) {
  let stack = [];

  for (let ext of s) {
    if (stack.length !== 0 && stack[stack.length - 1][0] === ext) {
      stack[stack.length - 1][1]++;
    } else {
      stack.push([ext, 1]);
    }
    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }
  let screen = "";

  for (let [strs, count] of stack) {
    screen += strs.repeat(count);
  }
  return screen;
};

// let s = "deeedbbcccbdaa";
// let k = 3;

// console.log(removeDuplicates(s, k));

////-------------------------------------------------------------------------------------

var find132pattern = function (nums) {
  let stack = []; //// monotonic decreasing order....
  let min = nums[0];

  for (let ext of nums.slice(1)) {
    //// this one vandhu curre node vandhu stack oda las element oda perusa irundha pop pannanum
    /// which is previous node.
    while (stack.length !== 0 && ext >= stack[stack.length - 1][0]) {
      stack.pop();
    }
    if (stack.length !== 0 && ext > stack[stack.length - 1][1]) {
      return true;
    }

    stack.push([ext, min]);
    min = Math.min(min, ext);
  }
  return false;
};

// let nums = [3, 1, 4, 2];

// console.log(find132pattern(nums));

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//// Blind 75 problems some problems we've already solved so no confusion
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

var isAnagram = function (s, t) {
  /// basecase if length is different

  if (s.length !== t.length) {
    return false;
  }

  let countS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!countS.has(s[i])) {
      countS.set(s[i], 1);
    } else {
      let count = countS.get(s[i]);
      countS.set(s[i], count + 1);
    }
  }

  for (let char of t) {
    if (!countS.has(char)) {
      continue;
    }
    let count = countS.get(char);
    countS.set(char, count - 1);
  }

  for (let [chars, counts] of countS) {
    let checkAllAreClear = counts === 0;

    if (!checkAllAreClear) {
      return false;
    }
  }

  return true;
};

// let s = "anagram";
// let t = "nagaram";
// //// output is true or false
// console.log(isAnagram(s, t));

/////////////////////////////////////////////////////////////////////////////////

var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five = five + 1;
    } else if (bills[i] === 10) {
      if (five) {
        five = five - 1;
        ten = ten + 1;
      } else {
        return false;
      }
    } else {
      if (five && ten) {
        five = five - 1;
        ten = ten - 1;
      } else if (five > 3) {
        five = five - 3;
      } else {
        return false;
      }
    }
  }

  console.log(`Five denomination is ${five} Ten denomination is ${ten}`);
  return true;
};

let bills = [5, 5, 10, 10, 20];

console.log(lemonadeChange(bills));
