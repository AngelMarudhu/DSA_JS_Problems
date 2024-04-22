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
let s = "(()())(())";
console.log(removeOuterParentheses(s));
