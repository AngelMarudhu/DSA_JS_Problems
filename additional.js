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
