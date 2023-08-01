// // Write a JavaScript program to display the current day and time in the following format?...
// // Today is : Tuesday.
// // Current time is : 10 PM : 30 : 38

// let toDay = new Date();
// var day = toDay.getDay();
// var month = toDay.getMonth() + 1; // why +1 means because value starting 0 to 12 so if you add +1 month starting 1 to 12
// var hour = toDay.getHours();
// var minute = toDay.getMinutes();
// var seconds = toDay.getSeconds();

// console.log(month);
// var dayList = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// if (dayList[day] === "Saturday" || dayList[day] === "Sunday") {
//   console.log(`Today is ${dayList[day]} Enjoyyy`);
// } else {
//   console.log(`Today is ${dayList[day]} Boring`);
// }
// let prepend = hour >= 12 ? "PM" : "AM";

// //hour 12 kku mela pochina thiruma 0 la irunthu start agum i mean 12hrs format
// hour = hour >= 12 ? hour - 12 : hour;
// // console.log(hour + ":" + minute);

// if (hour === 0 && prepend === "PM") {
//   if (minute === 0 && seconds === 0) {
//     hour = 12;
//     prepend = "NOON";
//   } else {
//     hour = 12;
//     prepend = "PM";
//   }
// }

// if (hour === 0 && prepend === "AM") {
//   if (minute === 0 && seconds === 0) {
//     hour = 12;
//     prepend = "MIDNIGHT";
//   } else {
//     hour = 12;
//     prepend = "AM";
//   }
// }

// console.log(`Right Now ${hour}${prepend}:${minute}:${seconds}`);

// --------------------> ------------------------------>

// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// first fine semi perimeter value formula is s = your all values plus panni 2 aala divide pannanum s means semi perimeter
// sqrt(s(s-a)(s-b)(s-c))

// let one = 5;
// let two = 6;
// let three = 7;

// let semiPerimeter = (one + two + three) / 2;

// let area = Math.sqrt(
//   semiPerimeter *
//     ((semiPerimeter - one) * (semiPerimeter - two) * (semiPerimeter - three))
// );

// console.log(area);

// ----------------->  ----------------------->

// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. ?

// with HTML
// when you uncommand go html enable onloads to onload
//function animated(id) {
//   const element = document.getElementById(id);
//   //   console.log(element);
//   const textNode = element.childNodes[0];
//   //   console.log(textNode);
//   let text = textNode.data;
//   //   console.log(text);

//   setInterval(() => {
// first get the last value in your string,
// and then removed last value and remain string the value of substring finally concatinate the removed + remain value......
// this whole function run every 1 sec that's why i'm using setintervel method...........
// substring doesn't affect original string give new string
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }

// without HTML
// function animatedd(name) {
//   let text = name;

//   setInterval(() => {
//text[text.length - 1] remove your last value after + coding means
//     datasss = text[text.length - 1] + text.substring(0, text.length - 1);
//  "n"          +      "Marudhupandiya"
// finally concatinate the two values....
//     text = datasss;
//     console.log(text);
//   }, 1000);
// }

// animatedd("Marudhupandiyan");

// CHECKING IF YOU HAVE ANY DOUBT
// MUST CHECK IT OUT WHEN YOU OPEN THE FILE and READ THIS LINE
// let data = "Marudhu";
// let haha = data[data.length - 1];
// console.log(haha);
// let mama = data.substring(0, data.length - 1);
// console.log(mama);

//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// function leap(year) {
// first check it out your value eg. 2016 check in first if condition is met logging LEAP or NOT
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("leap");
//   } else {
//     console.log("not");
//   }
// }

// console.log(leap(2016));
// console.log(leap(2011));
// console.log(leap(2010));
// console.log(leap(2012));

// ---------------------------> -------------------------------->

// Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050?

// for (let year = 2014; year <= 2024; year++) {
//   //  year = 2014 0 means month 1 means first day of month
//   let date = new Date(year, 0, 1);
//   console.log(date);
//   // 0 represents sunday 1 represents monday
//   if (date.getDay() === 0) {
//     console.log(`first january is being sunday ${year}`);
//   }
// }

// ----------------> --------------------------> -------------->

// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"?.....

// function guessNumber(value) {
// PLEASE READ THE ALL COMMANDS WHILE WATCHING THE CODE
// MATH.CEIL method is if user given 1.1 this method automatically changed 2
//   const computerNumber = Math.ceil(Math.random() * 20);
//   console.log(computerNumber);
//   if (value <= 20) {
//     computerNumber === value
//       ? console.log("Matched")
//       : console.log("Not Matched" + " " + value);
//   } else {
//     alert("please enter 1 to 20");
//   }
// }

// console.log(guessNumber(prompt("plese enter number 1 to 20")));

// const names = "Marudhupandiyan Starting Your Bright Future";
// console.log(names);

// ------------------------> --------------------->
//Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

// FORMULA C = (5/9) * (F + 32)

// THESE FUNCTION ALL ABOUT FORMULA formula FORMULA
// THIS FUNCTION USING CONVERT INTO CELCIUS TO FOHRENHEIT
// function celsius(cel) {
//   let temperature = cel;
//   let celtofor = (temperature * 9) / 5 + 32;
//   let message = `Now temperature is ${temperature} and fahrenheit is ${celtofor}`;
//   console.log(message);
// }

// //THIS FUNCTION USING CONVERT INTO FOHRENHEIT TO CELCIUS
// function fohren(foren) {
//   let fohrenhe = foren;
//   let fortocel = ((fohrenhe - 32) * 5) / 9;
//   let message = `Now Fohrenheit is ${fohrenhe} and temperature is ${fortocel}`;
//   console.log(message);
// }

// celsius(60);
// fohren(140);

// -----------------------> ----------------------->

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum...

// function tripleSum(numOne, numTwo) {
// METHOD ONE LIKE THIS..
// if (numOne == numTwo) {
// return 3 * (numOne + numTwo);
// } else {
// return numOne + numTwo;
// }
// }
// METHOD TWO LIKE THIS..
//   numOne == numTwo
//     ? console.log(3 * (numOne + numTwo))
//     : console.log(numOne + numTwo);
//}
//console.log(tripleSum(10, 20));

// ----------------------------> ------------------------->

// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string...

//function checkingWord(str) {
// METHOD ONE LIKE THIS.....
// using SUBSTRING method to first get two length values in your string through this mehthod and if mathced in in your queries and logging return string, or return orginal string......
// tips! and alternatively you can use for loop also this situation for loop first run maximum of first two length is the matches of your queris you have to logging in the console....

//   if (str === null || str === undefined || str.substring(0, 2) === "Py") {
//     return str;
//   } else {
//     return "Py" + str;
//   }
// METHOD TWO LIKE THIS......
//   str === null || str === undefined || str.substring(0, 2) === "Py"
//     ? console.log(str)
//     : console.log("Py" + str);
//}

//checkingWord("thon");

// ----------------------> -------------------------------->

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7....

// YOUR GIVEN VALUE IS CHECKING THE LOGIC INSIDE OF THE FUNCTION FIRST CHECK THE LOGIC IS MODULUS OF 3 THE REMAINING VALUE IS 0 AND MODULUS OF 7 THE REMAINING VALUE OF 0 THE OUTPUT IS TRUE OR FALSE...
// function dividing(value) {
//   value % 3 === 0 || value % 7 === 0
//     ? console.log('True')
//     : console.log('False');
// }

// dividing(28);
// dividing(8);
// dividing(9);

// -----------------------> ------------------------------------>

// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one....

// CUSTOMIZATION.. CUSTOMIZATION.. CUSTOMIZATION.. CUSTOMIZATION..

// function stringChecking(value) {
//   if (value.length < 6) {
//     return value;
//   }
//   let tempString = value;

// CHECK THE STRING FROM LAST 3 LENGTH OF THE VALUE THROUGH SUBSTRING METHOD LIKE BELOW THE IF CONDITION STATEMENT AND IF MATCHES YOU LAST THREE LENGTH OF VALUE YES YOUR NAME IS HERE IN THE TABLE, OR YOUR NAME IS NOT IN HERE SO CHEERFULLLLLLLLLLLLLLL... YOU CAN USE SLICE METHOS SLICE(-3) RATHER THAN SUBSTRING
//   if (value.substring(value.length - 3, value.length) == "yan") {
//     tempString = value.substring(0, value.length);
//     console.log(`your name is ${tempString}`);
//   } else {
//     let data = `ooops! your value ain't here ${value}`;
//     console.log(data);
//     return data;
//   }

//   return tempString;
// }

// stringChecking("Marudhupandiyan");

// ------------------------> ------------------------------>

// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character....

// function stringVerify(value, checker) {
//   let data = 0;
//   for (let i = 0; i <= value.length; i++) {
//     // console.log(value.charAt([i]));
//     if (value.charAt([i]) == checker && i >= 1 && i <= 3) {
//       data = 1;
//       break;
//     }
//   }
//   if (data === 1) {
//     return true;
//   } else {
//     false;
//   }
// }

// console.log(stringVerify('Marudhu', 'a'));

// --------------------------> ------------------------------>

//Write a JavaScript program to reverse a given string.

// function reverseString(value) {
// METHOD ONE LIKE THIS SOME TIME BETTER SOME TIME NOT BETTER........
//   return value.split("").reverse().join(" ");

// METHOD TWO LIKE THIS ALWAYS BETTER...... FINALLY CHOICE IS YOURS....
//   if (value.length < 2 || !value) {
//     return value;
//   }
//   const reverse = [];
//   const totalString = value.length - 1; // here it is 7
//   for (let i = totalString; i >= 0; i--) {
//     reverse.push(value[i]);
//   }
//   console.log(reverse);
//   return reverse.join(" ");
// }
// console.log(reverseString("Marudhu"));

// ---------------------- > ---------------------------->

// Write a JavaScript program to extract the first half of a string of even length.??

// function stringHalfSeperation(value) {
//   if (value.length % 2 == 0) {
//     return value.slice(0, value.length / 2);
//   }
//   return value;
// }

// console.log(stringHalfSeperation("Marudhup"));
// console.log(stringHalfSeperation("Marudhupandiyan"));

// ------------------------> ------------------------->

// Write a JavaScript to find the longest string from a given array of strings.

// function longestString(value) {
//   var maxValue = value[0].length;
//   value.map((v) => (maxValue = Math.max(maxValue, v.length)));
//   result = value.filter((filValues) => filValues.length == maxValue);
//   return result;
// }

// console.log(longestString(["a", "aa", "aaa", "aaaaa", "aaaa"]));

// function longestString(value) {
//   var maxValue = value[0].length; // initially
//   // map create new array
//   value.map((v) => {
//     maxValue = Math.max(maxValue, v.length);
//     // max value find this case is 5 this is tha max value
//   });

//   result = value.filter((v) => {
//     // and finally filter the longest string using maxvalue
//     return v.length === maxValue;
//   });
//   return result;
// }

// console.log(longestString(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));

// -----------------------------> ------------------------------->

// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

// function numberChanging(num, oldValue, newValue) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === oldValue) {
//       num[i] = newValue;
//     }
//   }
//   return num;
// }

// var data = [1, 2, 3, 2, 2, 8, 1, 8];

// console.log(numberChanging(data, 2, 9));

// BOTH ARE SAME NOTHING CHANGE HERE IM HANDLING ERROR THROUGH THE TRY CATCH

// function numberChanging(num, oldValue, newValue) {
//   for (let i = 0; i <= num.length; i++) {
//     try {
//       if (num[i] === oldValue) {
//         num[i] = newValue;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return num;
// }

// const data = [1, 2, 3, 4, 56, 3, 4, 4, 4, 46];

// console.log(numberChanging(data, 4, 9));

// -----------------------------> ------------------------------->
// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.

// function digitToOne(num) {
//   const digitSum = (num) => {
//     let digitSumTo = 0;
//     while (num) {
//       // 4 num = 123 according your argument
//       // 5 then 123 modulo of 10 so value is 3 that value will be stored on the digitsumto variable..... modulo edhkkuna appodhan
//       digitSumTo = digitSumTo + (num % 10);
//       console.log(digitSumTo, 'Aaa');
//       // 6 then your num value divide by half....
//       num = Math.floor(num / 10);
//       console.log(num, 'Num');
//     }
//     return digitSumTo;
//   };
//   let result = 0;
//   while (num >= 10) {
//     // 1 number checking greater 10 or not
//     // 2 irunthuchina result +1
//     result = result + 1;

//     // 3 antha number ah top of the function argument ah pass pannanum
//     num = digitSum(num);
//   }
//   console.log(result);

//   return result;
// }

// console.log(digitToOne(123));

// -------------------> ---------------------------------->

// Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.

// function findDifference(arr, n) {
//   let maxValue = 1;
//   for (let i = 0; i <= arr.length; i++) {
//     for (j = i + 1; j <= arr.length; j++) {
//       let temp = Math.abs(arr[i] - arr[j]);
//       // console.log(temp);
//       if (temp <= n) {
//         maxValue = Math.max(maxValue, temp);
//        // console.log(maxValue);
//       }
//     }
//   }
//   return maxValue;
// }

//  console.log(findDifference([10, 20, 44, 35, 64], 10));
//  console.log(findDifference([10, 20, 44, 35, 64], 40));

// ----------------------------> ------------------------->

// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.....?

// function findPrimeNumber(value) {
//   let primeOne = [];
//   let primeTwo = [];
//   for (let i = 0; i <= value; i++) {
//     primeTwo.push(true); // step 1
//   }

//   for (let i = 2; i <= value; i++) {
//     // step 2 for loop
//     // carefull watch if else statement when i value change that time only if else statement change.....
//     if (primeTwo[i]) {
//       // finally check which are true that value push into primeOne array
//       primeOne.push(i);
//     }
//     for (let j = 1; i * j <= value; j++) {
//       console.log(i, j, 'ij value');
//       // step 3
//       primeTwo[i * j] = false;
//     }
//   }

//   console.log(primeOne, 'p1');
//   return primeOne;
// }

// console.log(findPrimeNumber(10));

// ---------------------------> ----------------------------->

// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer....?

// function intSum(value) {
//   let sum = 0;
//   while (value > 0) {
//     console.log(sum);
//     sum = sum + value;
//     value = Math.floor(value / 2);
//   }
//   return sum;
// }

// console.log(intSum(8));

// ----------------------------> ---------------------------->

// Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence..?

// function monotonous(value) {
//   if (value.length === 1) {
//     return true;
//   }
//   let numDirection = value[1] - value[0];
//   for (let i = 0; i <= value.length - 1; i++) {
//     if (numDirection * (value[i + 1] - value[i]) <= 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(monotonous([1, 2, 3]));

// ---------------------------> ----------------------------------->

// JavaScript: Round a number to a specified amount of digits

// function roundSpecify(value, decimal = 0) {
//   return Number(`${Math.round(`${value}e${decimal}`)}e-${decimal}`);
// }
// console.log(roundSpecify(1.005, 2));
// console.log(roundSpecify(1.05, 2));

// -----------------------------> ------------------------------->

// Write a JavaScript program to create an object composed of the properties the given function returns falsey for. The function is invoked with two arguments: (value, key).......?

// function omitFalsy(obj, fn) {
//   // fn is a callback function don't be confuse okay....
//   let dataOne = Object.keys(obj);
//   // first filter the key and check the value numbet is or not, neenga koduthurukkura object value number ah illaiendral adha mattum filter pannum, adhukku appuram reduce use panni adha thirumpa innoru object la store pannudhu
//   // WE SEND THE CALLBACK FUNCTION ALONG WITH OBJECT VALUES... THAT FUNCTION RETURN WHICH VALUE IS NOT A NUMBER TYPE.... THAT'S CALL BACK FUNCTION AFTER RECEIVING THAT VALUE FILTETED AND THEN THAT NEW VALUE ASSIGN NEW OBJECT SIMPLE......
//   let haha = dataOne.filter((k) => !fn(obj[k]));
//   // this is the reduce function key la ungaloda object key irukkum
//   let damn = haha.reduce((acc, key) => {
//     // let datas = ((acc[key] = obj[key]), acc);
//     // acc[key] is empty initially we assign the value in acc[key]
//     return (acc[key] = obj[key]), acc;
//   }, {});
//   console.log(damn);
// }

// console.log(omitFalsy({ a: 1, b: '2', c: 4 }, (x) => typeof x === 'number'));

// ------------------------> ---------------------------------->

// Write a JavaScript program that takes a predicate and array, like Array.filter(), but only keeps x if pred(x) returns false.

// Filters an array's values based on a predicate function, returning only values for which the predicate function returns false.

// Use Array.prototype.filter() in combination with the predicate function, pred, to return only the values for which it returns false ....? DON'T BE CONFUSE PREDICATE VALUE MEANS MUNKOOTTIYEY THERIUM ENTHA VALUE OUTPUT VARA POGUDHUNU AVLOADHAN THAT'S ALL

// const success = (x) => x.length > 5 || x < 5;

// function rejectFilter(prediction, array) {
//   let data = array.filter((...args) => {
//     return !prediction(...args);
//   });
//   return data;
// }

// console.log(rejectFilter(success, [1, 2, 3, 4, 5, 6, 7]));
// console.log(rejectFilter(success, ['marudhu', 'Nayan', 'madonna', 'rakul']));

// -----------------------------> --------------------------------->

// Write a JavaScript program to apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values...... ?

// function applyFunction(accumulator, array, func) {
//   return array.reduce(
//     (acc, cur) => {
//       // array slice means get last value along with array of accumulator array value....[0] means that value get in array
//       // ...acc don't need to confuse that simply return arr acc values...
//       return [...acc, func(acc.slice(-1)[0], cur)];
//     },
//     [accumulator]
//   );
// }

// // Example usage
// let array = [1, 2, 3, 4, 5];
// let result = applyFunction(0, array, (acc, cur) => acc + cur);
// console.log(result); // [0, 1, 3, 6, 10, 15]

// -------------------> ------------------------------->

// Write a JavaScript program to create a function that invokes the provided function with its arguments arranged according to the specified indexes.?

// function reArrangeSpecify(fn, indexes) {
//   return (args) => fn(...indexes.map((i) => args[i]));
// }

// var rearrange = reArrangeSpecify(
//   function (a, b, c) {
//     return [a, b, c];
//   },
//   [0, 2, 1]
// );

// console.log(rearrange(['a', 'c', 'b']));

// --------------------------> ----------------------------------->

// Write a JavaScript program that will return the singular or plural form of the word based on the input number.....?

// recursion method....
// function pluralize(val, word, plural = word + "s") {
//   const _pluralize = (num, word, plural = word + "s") => {
//     let data = [1, -1, 0].includes(Number(num)) ? word : plural;
//     if (typeof word === "object") {
//       return (num, word) => {
//         _pluralize(num, word, val[word]);
//       };
//     }
//     return data;
//   };
//   return _pluralize(val, word, plural);
// }

// // console.log(pluralize(1, "Marudhu"));

// const plurals = {
//   names: "Nayan",
//   letter: "Nayan",
// };

// console.log(pluralize(3, plurals["names"]));

// ----------------------------> ------------------------->

// Write a JavaScript program to perform left-to-right function composition.?

// const pipeLine = (...fns) => {
//   // fns the whole function pass an arguments i means multiply and add5
//   return fns.reduce((f, g) => {
//     return (...args) => {
//       // don't be confusion first f function i means multiply function and then that answer is g function oda argument i means add5 function ....
//       return g(f(...args));
//     };
//   });
// };

// const add5 = (x) => x + 5;
// const multiply = (x, y) => x * y;
// const multiplyAndAdd = pipeLine(multiply, add5);

// console.log(multiplyAndAdd(5, 2));

// ------------------------------> -------------------------->

// Write a JavaScript program to calculate how many numbers in the given array are less or equal to the given value using the percentile formula...?

// const percentile = (arr, num) => {
//   return (
//     (arr.filter((item) => {
//       return item <= num;
//       // don't be confusion it's chaining method.....
//     }).length /
//       // percentile formula is (5/10) * 100 in this case [length = 5 / arr.length = 10] * 100
//       arr.length) *
//     100
//   );
// };
// console.log(percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// --------------------------------> ------------------------------->

// Write a JavaScript program to create a function that invokes fn with partials prepended to the arguments it receives.....?

// function partial(func, ...datas) {
//   // ...args is anonymous function par function argument is ...args
//   return (...args) => {
//     // if you have any doubt please check it out uncommand console...!
//     // console.log(args);
//     return func(...datas, ...args);
//   };
// }
// const greet = (greeting, name) => {
//   return console.log(greeting, name);
// };

// const par = partial(greet, 'hello');
// console.log(par('john'));

// ---------------------------> ------------------------------>

// function maping(value) {
//   return value.map((i) => {
//     return i * i;
//   });
// }

// console.log(maping([3, 4, 5, 6, 7]));

// --------------------------> -------------------------------->

// Write a JavaScript program to get the nth element of a given array..?

// function nthElementFetching(val, n = 0) {
//   if (n > 0) {
//     return val.slice(n, n + 1);
//   } else {
//     return val.slice(n, n + 1);
//   }
// }
// console.log(nthElementFetching([2, 3, 4, 5, 1], 4));

// -------------------------> ----------------------------------->

// Write a JavaScript program to create a new object from the combination of two or more objects...?

// function merge(...multiObjs) {
//   return [...multiObjs].reduce((acc, obj) => {
//     console.log(obj, 'dfdfd');
//     return Object.keys(obj).reduce((a, k) => {
//       console.log(k, 'kkkkk');
//       // k =============== your all keys passed one by one first object a,b and second object a,b,c
//       // why because we using [...multiObjs] so that two objects assign 0,1 index...... so first pass 0^th index with key after than 1^st index key
//       // false false true true false; first checking acc object la k value irukkanu appudi pannum podhu ippudidhan answer varm
//       // then true value ellam acc[k] kku append pannum ellla properties value um
//       // false value um append pannum so don't be confustion EASYyyyyyyyy
//       // the acc has object now ..... so we are checking that keys already exist or not in hasownproperty method....
//       acc[k] = acc.hasOwnProperty(k)
//         ? [].concat(acc[k]).concat(obj[k])
//         : obj[k];
//       return acc;
//     }, {});
//   }, {});
// }

// const objectOne = {
//   a: [{ x: 1 }, { y: 2 }],
//   b: [{ d: 'df' }],
// };

// const objectTwo = {
//   a: 6,
//   b: [2, 3],
//   c: 'marudhu',
// };

// console.log(merge(objectOne, objectTwo));

// -------------------------> ----------------------------------->

// Write a JavaScript program that will return 1 if the array is sorted in ascending order, -1 if it is sorted in descending order or 0 if it is not sorted.....?

// function isSorted(arr) {
//   let direction = -(arr[0] - arr[1]); // this case first falue -6 -5 = -1
//   console.log(direction);
//   //ARRAY ENTRIES RETURN KEY VALUE PAIRS IN THIS CASE I MEANS INDEX VAL MEANS YOUR VALUES...
//   for (let [i, val] of arr.entries()) {
//     // false, 0, -0, 0n, "", null, undefined, and NaN. falsy values.....
//     direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
//     // console.log(i === arr.length - 1, 'drfae');
//     if (i === arr.length - 1) {
//       return !direction ? 0 : direction;
//     } else if ((val - arr[i + 1]) * direction > 0) {
//       return 0;
//     }
//   }
// }

// console.log(isSorted([1, 2, 3, 4, 5, 6]));

// ----------------------------> --------------------------------->

// Check if the provided argument is not null and that its Symbol.iterator property is a function.....?

// function isArrayLike(val) {
//   try {
//     console.log([...val]);
//     return [...val], true;
//   } catch (error) {
//     return false;
//   }
// }

// console.log(isArrayLike('marudhu'));

// -------------------------> -------------------------------->

// Write a JavaScript program that will return true if the given string is an absolute URL, false otherwise...?

// function isAbsoluteUrl(value) {
//   return /^[a-z][a-z0-9+.-]*:/.test(value);
// }

// console.log(isAbsoluteUrl("nayan-thara"));
// console.log(isAbsoluteUrl("https://google.com"));

// ------------------------------> ------------------------------>

// Write a JavaScript program to get a list of elements that exist in both arrays, using a provided comparator function.....?

// const findingMatching = (a, b, comp) => {
//   return a.filter((m) => {
//     // look lika nested for loop
//     // -1 means not satisfied the value,,,,, if value is satisfied return index of the value
//     // CLEARLY UNDERSTAND THE MEANING.... TAKE LITTLE BIT TIME.....
//     // compre false ----- !== true ----
//     // The condition is checked by a nested findIndex() method that loops through each element in array b. The comp() function is called to compare each element in a with each element in b. If the comparison returns true, findIndex() returns the index of the element in array b, and the !== -1 check returns true, which means the element in array a satisfies the condition. If the comparison returns false, findIndex() returns -1, and the !== -1 check returns false, which means the element in array a does not satisfy the condition.
//     const success =
//       b.findIndex((n) => {
//         return comp(m, n);
//       }) !== -1;
//     console.log(success);
//     return success;
//   });
// };

// console.log(
//   findingMatching(
//     [1, 2, 4, 3, 0],
//     [9, 3, 0, 0],
//     // first receving the a,b value is 1,9---- 1,3 ----- 1,0 ---- 1,0
//     (a, b) => Math.round(a) === Math.round(b)
//   )
// );

// #Source https://bit.ly/2neWfJ2
// const intersectionWith = (a, b, comp) =>
//   a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);
// console.log(
//   intersectionWith(
//     [1, 1.2, 1.5, 3, 0],
//     [1.9, 3, 0, 3.9],
//     (a, b) => Math.round(a) === Math.round(b)
//   )
// );

// -------------------------------> ------------------------------>

// Write a JavaScript program to get the difference between two given arrays

// We call the filter method on the b array. For each element x in b, we check if it is in the checking set.

// For x = 1, checking.has(x) returns true. Therefore, !checking.has(x) is false, and 1 is not included in the new find array.

// For x = 2, checking.has(x) returns true. Therefore, !checking.has(x) is false, and 2 is not included in the new find array.

// For x = 5, checking.has(x) returns false. Therefore, !checking.has(x) is true, and 5 is included in the new find array.

// For x = 6, checking.has(x) returns false. Therefore, !checking.has(x) is true, and 6 is included in the new find array.

// The filter method returns the new find array: [5, 6].

// function difference(a, b) {
//   let checking = new Set(a);
//   console.log('🚀 ~ file: problem.js:854 ~ difference ~ checking:', checking);

//   console.log(checking);
//   const find = b.filter((x) => !checking.has(x));
//   console.log('🚀 ~ file: problem.js:858 ~ difference ~ find:', find);

//   return find;
// }

// console.log(difference([1, 2, 3, 4], [1, 2, 5, 6]));

// -------------------------------> ------------------------------->

// Write a JavaScript program to deep flatten an array.

// function deepFlatten(val) {
//   let data = [].concat(
//     ...val.map((v) => (Array.isArray(v) ? deepFlatten(v) : v))
//   );
//   return data;
// }

// console.log(deepFlatten([1, [2], [[3, [9]], 4], 5]));

// -------------------------------> -------------------------------->

//                       FUNCTION PROBLEMS......!

// Reverse Number.....

// function reverse(val) {
//   let haha = val.toString();
//   let data = haha.split("").reverse().join("");
//   return data;
// }
// console.log(reverse(950080));

// --------------------------> ------------------------------------->

// for (let i = 0; i <= 100; i++) {
//   console.log(
//     i % 15 === 0 ? "FizzBuzz" : i % 5 === 0 ? "Buzz" : i % 3 === 0 ? "Fizz" : i
//   );
// }

// function fizzBuzz(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(
//       i % 15 === 0
//         ? "FizzBuzz"
//         : i % 5 === 0
//         ? "Buzz"
//         : i % 3 === 0
//         ? "Fizz"
//         : i
//     );
//   }
// }
// console.log(fizzBuzz(15));

// function findMax(nums) {
//   let maxValue = Number.NEGATIVE_INFINITY;
//   for (let num of nums) {
//     if (num > maxValue) {
//       maxValue = num;
//     }
//   }
//   console.log(maxValue);
//   return maxValue;
// }

// findMax([3, 3434, 5343, 3532233, 353232]);

// var climbStairs = function (n, memo = {}) {
//   console.log(memo);
//   if (n in memo) return memo[n];
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   let result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   console.log(result, 'result');
//   memo[n] = result;
//   return result;
// };

// console.log(climbStairs(4));

// --------------------------------> ----------------------------------

// Min Cost Climbing Stairs
// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

// var minCostClimbingStairs = function (cost) {
//   let totalLength = cost.length;
//   let dynamicCost = new Array(totalLength);
//   dynamicCost[0] = cost[0];
//   dynamicCost[1] = cost[1];

//   for (let i = 2; i < totalLength; i++) {
//     dynamicCost[i] = cost[i] + Math.min(dynamicCost[i - 1], dynamicCost[i - 2]);
//   }
//   console.log(dynamicCost);
//   return Math.min(dynamicCost[totalLength - 1], dynamicCost[totalLength - 2]);
// };

// console.log(minCostClimbingStairs([10, 15, 20]));

// -------------------------------------> -------------------------------------->

// var rob = function (nums) {
//   // first we wanna fo from the start......
//   let totalLength = nums.length;
//   let dynamicHouse = new Array(totalLength);
//   dynamicHouse[0] = nums[0];
//   dynamicHouse[1] = Math.max(nums[0], nums[1]);

//   for (let i = 2; i < totalLength; i++) {
//     console.log(dynamicHouse);
//     dynamicHouse[i] = Math.max(
//       dynamicHouse[i - 1],
//       dynamicHouse[i - 2] + nums[i]
//     );
//   }
//   return dynamicHouse[totalLength - 1];
// };

// rob([1, 112, 3, 1]);

// ---------------------------------------> ---------------------------------->

// var deleteAndEarn = function (nums) {
//   const freq = new Array(10001).fill(0);
//   // If the same number appears again in the array, the frequency count for that number will be incremented.
//   for (let num of nums) {
//     freq[num]++;
//   }
//   // console.log(freq);
//   let dynamicEarn = new Array(freq.length).fill(0);

//   dynamicEarn[1] = freq[1]; // freq[i] = 0
//   dynamicEarn[2] = Math.max(dynamicEarn[1], freq[2] * 2); // freq[2] = 1 in this case.......; so 1 * 2 = 2 that is the dynamicEarn[2] oda value....

//   for (let i = 3; i < freq.length; i++) {
//     dynamicEarn[i] = Math.max(
//       dynamicEarn[i - 1],
//       dynamicEarn[i - 2] + freq[i] * i
//     );
//   }
//   // console.log(dynamicEarn);
//   return dynamicEarn[freq.length - 1];
// };

// console.log(deleteAndEarn([3, 4, 2]));

// ---------------------------------------> ---------------------------------->

// var canJump = function (nums) {
//   let totalLength = nums.length;
//   let dynamicJump = new Array(totalLength).fill(Infinity);
//   dynamicJump[0] = 0;
//   for (let i = 1; i < totalLength; i++) {
//     for (let j = 0; j < i; j++) {
//       if (j + nums[j] >= i) {
//         dynamicJump[i] = Math.min(dynamicJump[i], dynamicJump[j] + 1);
//       }
//     }
//   }
//   return dynamicJump[totalLength - 1];
// };

// canJump([2, 3, 1, 1, 4]);

// ------------------------ ---------------> ---------------------------------->
// var interpret = function (command) {
//   let result = '';
//   for (let i = 0; i < command.length; i++) {
//     if (command[i] === 'G') {
//       result += 'G';
//     } else if (command[i] === '(' && command[i + 1] === ')') {
//       result += 'o';
//     } else if (command[i] === '(' && command[i + 1] === 'a') {
//       result += 'al';
//     }
//   }
//   console.log(result);
//   return result;
// };

// interpret('G()()()()(al)');

// ------------------------ ---------------> ---------------------------------->

// var maxSubArray = function (nums) {
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   let maxValue = nums[0];
//   let currentSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxValue = Math.max(maxValue, currentSum);
//   }

//   return Number(maxValue);
// };

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// -------------------------------> ------------------------------------>

// var maxSubarraySumCircular = function (nums) {
//   let totalSum = 0;
//   let maxvalue = -Infinity;
//   let minValue = Infinity;
//   let currentMaxValue = 0;
//   let currentMinValue = 0;

//   for (let i = 0; i < nums.length; i++) {
//     currentMaxValue = Math.max(nums[i], currentMaxValue + nums[i]);
//     // console.log(currentMaxValue);
//     currentMinValue = Math.min(nums[i], currentMinValue + nums[i]);
//     //console.log(currentMinValue);
//     minValue = Math.min(minValue, currentMinValue);
//     maxvalue = Math.max(maxvalue, currentMaxValue);
//     totalSum += nums[i];
//   }

//   if (maxvalue < 0) {
//     return maxvalue;
//   }
//   // circular sum = 7 - minvalue is -3  so 7 + 3 = 10
//   let circularSum = totalSum - minValue;
//   return Math.max(circularSum, maxvalue);
// };
// console.log(maxSubarraySumCircular([5, -3, 5]));

// ---------------------------------> ------------------------------->

// var getMaxLen = function (nums) {
//   let maxLength = 0;
//   let leftSide = 0;
//   let negativeValue = 0;
//   let zeroes = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       negativeValue++;
//     } else if (nums[i] === 0) {
//       zeroes++;
//       negativeValue = 0;
//       leftSide = i + 1;
//     } else {
//       negativeValue = negativeValue % 2 === 0 ? 0 : negativeValue + 1;
//     }
//     // console.log(negativeValue, 'negative value..');
//     if (negativeValue % 2 === 0) {
//       maxLength = Math.max(maxLength, i - leftSide + 1);
//     }
//   }
//   return maxLength;
// };

// console.log(getMaxLen([0, 1, -2, -3, -4]));
// console.log(getMaxLen([-1, 2])); // this only gets error otherwise everything is correct

// ---------------------------------> ------------------------------->

// DATA STRUCTURE PROBLEMS IN LEETCODE.............

// ---------------------------------> ------------------------------->

// var containsDuplicate = function (nums) {
//   console.log(nums);
//   let map = {};

//   for (let num of nums) {
//     if (map[num]) {
//       return true;
//     } else {
//       map[num] = true;
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]));

// var containsDuplicate = function (nums) {
//   let data = new Set();

//   for (let num of nums) {
//     if (data.has(num)) {
//       return true;
//     } else {
//       data.add(num);
//     }
//   }
//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]));

// ---------------------------------> ------------------------------->

// var twoSum = function (nums, target) {
//   let hashTable = {};

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];
//     console.log(hashTable, 'dddddd');
//     if (hashTable[complement] !== undefined) {
//       console.log(hashTable, 'dafadsf');
//       return [hashTable[complement], i];
//     }
//     hashTable[nums[i]] = i;
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 9));

// ---------------------------------> ------------------------------->

// var merge = function (nums1, m, nums2, n) {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;
//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     k--;
//     j--;
//   }
//   return nums1;
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// ------------------------------> --------------------------------->

// const lastStoneWeight = (stones) => {
//   console.log(stones);
//   while (stones.length > 1) {
//     console.log(stones);
//     stones.sort((a, b) => a - b);
//     const y = stones.pop();
//     const x = stones.pop();
//     if (x !== y) {
//       stones.push(y - x);
//     }
//   }
//   return stones.length === 1 ? stones[0] : 0;
// };

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

// ------------------------------> --------------------------------->

// var createCounter = function (n) {
//   let count = 0;
//   return function () {
//     count++;
//   };
// };

// const counter = createCounter(10);
// counter(10);
// counter(11);
// counter(12);

// ----------------------------> ------------------------------------>

// async function sleep(millis) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, millis);
//   });
// }

// console.log(sleep(100));

// ------------------------------> ---------------------------------->

// var checkIfInstanceOf = function (obj, classFunction) {
//     if (
//       obj === null ||
//       obj === undefined ||
//       typeof classFunction === 'function'
//     ) {
//       return false;
//     }
//     return Object(obj) instanceof classFunction;
// };
// console.log(checkIfInstanceOf(new Date(), Date));

// ------------------------------> ---------------------------------->

// REDUCE METHOD WORKING FUNCTIONALITY...................
// var reduce = function (nums, fn, init) {
//   let result = init;
//   for (const num of nums) {
//     result = fn(result, num);
//   }
//   return result;
// };

// reduce(
//   [1, 2, 3, 4],
//   function sum(accum, curr) {
//     return accum + curr;
//   },
//   0
// );

// ------------------------------> ---------------------------------->

// var isPalindrome = function (x) {
//   let checking = x.toString();
//   let finalOut = checking === checking.split('').reverse().join('');
//   return finalOut;
// };

// -------------------------------> --------------------------------->
// function memoize(fn) {
//   let cachedMemoized = new Map();
//   return function (...args) {
//     let keys = JSON.stringify(args);
//     if (cachedMemoized.has(keys)) {
//       return cachedMemoized.get(keys);
//     }
//     let result = fn(...args);
//     cachedMemoized.set(keys, result);
//     return result;
//   };
// }
// METHOD............................... TWO ..................................
// function memoize(fn) {
//   let cachedMemoized = {};
//   return function (...args) {
//     let keys = JSON.stringify(args);

//     if (keys in cachedMemoized) {
//       return cachedMemoized[keys];
//     } else {
//       let result = fn.call(this, ...args);
//       cachedMemoized[keys] = result;
//       return result;
//     }
//   };
// }

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });

// console.log(memoizedFn(2, 3));

// -------------------------------> --------------------------------->

// function partial(func, ...datas) {
//   // ...args is anonymous function par function argument is ...args
//   return (...args) => {
//     // if you have any doubt please check it out uncommand console...!
//     // console.log(args);
//     return func(...datas, ...args);
//   };
// }
// const greet = (greeting, name) => {
//   return console.log(greeting, name);
// };

// const par = partial(greet, 'hello');
// console.log(par('john'));

// var debounce = function (fn, t) {
//   let timingInital;
//   return function (...args) {
//     if (timingInital) {
//       clearTimeout(timingInital);
//     }
//     timingInital = setTimeout(() => {
//       // fn(...args) means console.log(...args) that't the line here....
//       // this function is not a original function it's takes a new function every time render with same parameters, but original function called after amount of timing completed,
//       fn(...args);
//       timingInital = null;
//     }, t);
//   };
// };
// // n your specific example, log('Hello') is called three times in a row without 100ms passing between each call. As a result, the first two calls are cancelled by the clearTimeout function, and only the last call results in console.log('Hello') being executed after 100ms have passed since the last call.
// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('Hello'); // cancelled
// log('Hello'); // Logged at t=100ms

// --------------------------------------> ---------------------------------------->

// Year (four digits).. Month (0-11).. Day of the month (1-31).. Hour (0-23).. Minute (0-59).. Second (0-59)

// const getWeeksOfMonth = (year, month, day) => {
//   let weeks = [];
//   let date = new Date(year, month - 1, 1); // may month starting date if you have any doubt check in your diary.........
//   let lastDate = new Date(year, month, 0).getDate(); // may month last date
//   console.log(date.toString());
//   console.log(lastDate);
//   let week = [];
//   for (let i = 1; i <= lastDate; i++) {
//     // 1 to 31 looping over the date......
//     // we know already 0 means sunday 1 means monday...like....
//     // 123456 again 0123456 same untill 31 reaches the end of the looop but starting always 1 to 31
//     let currentDate = new Date(year, month - 1, i);
//     console.log(currentDate.getDay());

//     if (currentDate.getDay() === day) {
//       week.push(currentDate.toString());
//     }

//     if (currentDate.getDay() === 0 || i === lastDate) {
//       weeks.push(week);
//       week = [];
//     }
//   }
//   // without tostring() the output unix epoch method... so we convert into toString() the output become local time zone..... that's all
//   //  console.log(week.toString());
//   console.log(weeks);
//   return weeks;
// };

// let weeks = getWeeksOfMonth(2023, 5, 0);

// ------------------------------------> ------------------------------------.

// var compose = function (functions) {
//   return function (x) {
//     let result = x;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       result = functions[i](result);
//     }
//     return result;
//   };
// };

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4));

// --------------------------------------> ------------------------------------------>

// var flat = function (arr, n) {
//   if (n === 0) {
//     return arr;
//   }
//   let result = [];
//   for (let index in arr) {
//     if (Array.isArray(arr[index])) {
//       // console.log(arr[index], 'array index values.....');
//       result.push(...flat(arr[index], n - 1));
//     } else {
//       result.push(arr[index]);
//     }
//   }
//   return result;
// };

// console.log(
//   flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
// );

// -------------------------------------> ----------------------------------->

// var fibGenerator = function* () {
//   let current = 0;
//   let next = 1;
//   while (true) {
//     // console.log(current, 'current');
//     // console.log(next, 'next');
//     yield current;
// // here change the current value set to next and next value set to current + next value..... that's alll
//     [current, next] = [next, current + next];
//   }
// };

// let gen = fibGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// -------------------------------------> ----------------------------------->
// var findDifference = function (nums1, nums2) {
//   let setOne = new Set(nums1);
//   let setTwo = new Set(nums2);
//   let diff = [...setOne].filter((data) => {
//     return !setTwo.has(data);
//   });
//   let diffTwo = [...setTwo].filter((datas) => {
//     return !setOne.has(datas);
//   });

//   return [diff, diffTwo];
// };

// console.log(findDifference([1, 2, 3], [2, 4, 6]));

// ------------------------------> ------------------------------------->

// var predictPartyVictory = function (senate) {
//   let totalLength = senate.length;
//   let radientParties = [];
//   let direParties = [];

//   for (let i = 0; i < totalLength; i++) {
//     let candidate = senate[i];

//     if (candidate === 'R') {
//       radientParties.push(i);
//     } else {
//       direParties.push(i);
//     }
//   }

//   while (radientParties.length > 0 && direParties.length > 0) {
//     if (radientParties[0] < direParties[0]) {
//       radientParties.push(radientParties[0] + totalLength);
//     } else {
//       direParties.push(direParties[0] + totalLength);
//     }
//     radientParties.shift();
//     direParties.shift();
//   }
//   console.log(radientParties);
//   console.log(direParties);
//   console.log(totalLength);
//   return radientParties.length > 0 ? 'Radient' : 'Dire';
// };
// console.log(predictPartyVictory('RD'));

// ------------------------------> ------------------------------------->

// var inorderTraversal = function* (arr) {
//   console.log(arr);
//   if (Array.isArray(arr)) {
//     for (let i = 0; i < arr.length; i++) {
//       yield* inorderTraversal(arr[i]);
//     }
//   } else {
//     yield arr;
//   }
// };

// const gen = inorderTraversal([[[6]], [1, 3], []]);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// ------------------------------> ------------------------------------->

// var createCounter = function (init) {
//   var data = init;

//   return {
//     increment: function () {
//       data++;
//       return data;
//     },
//     reset: function () {
//       data = init;
//     },
//     decrement: function () {
//       data--;
//       return data;
//     },
//   };
// };

// let counter = createCounter(5);
// console.log(counter.increment());

// -----------------------------------> ---------------------------------------->

// var maxVowels = function (s, k) {
//   let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//   let maxCount = 0;
//   let count = 0;
//   for (let i = 0; i < k; i++) {
//     console.log('second');
//     if (vowels.has(s[i])) {
//       count++;
//     }
//   }
//   console.log(count, 'first for loop');

//   maxCount = count;

//   // but we need from the k value to get substring vowels so....
//   for (let i = k; i < s.length; i++) {
//     if (vowels.has(s[i])) {
//       count++;
//     }
//     if (vowels.has(s[i - k])) {
//       count--;
//     }
//     maxCount = Math.max(maxCount, count);
//   }
//   console.log(count, 'second for loop');
//   return maxCount;
// };

// console.log(maxVowels('abciiidef', 3));

// -----------------------------------> ---------------------------------------->
// var once = function (fn) {
//   let calledOrNot = false;
//   return function (...args) {
//     if (!calledOrNot) {
//       calledOrNot = true;
//       return fn(...args);
//     }
//   };
// };

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);
// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

// -----------------------------------> ----------------------------------------->

// function maxSubArray(nums) {
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let currentData = 0;
//     for (let j = i; j < nums.length; j++) {
//       // j 0 to 8
//       currentData = currentData + nums[j];
//       if (currentData > maxSum) {
//         maxSum = currentData;
//       }
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// -------------------------------------> --------------------------------------------

// var promisePool = async function (functions, n) {
//   const next = async () => {
//     // when function length goes to empty that time only excute the return promise resolve
//     if (!functions.length) {
//       return Promise.resolve();
//     }
//     await functions.shift()();
//     await next();
//   };
//   await Promise.all(new Array(n).fill(0).map(next));
// };
// const sleep = (t) => new Promise((res) => setTimeout(res, t));
// promisePool([() => sleep(500), () => sleep(400)], 1).then(
//   console.log('dfaads')
// ); // After 900m

// ------------------------------> ------------------------------------
// var timeLimit = function (fn, t) {
//   return async function (...args) {
//     let result = new Promise((resolve, reject) => {
//       setTimeout(() => reject('Time Limit Exceeded'), t);
//       fn(...args).then(resolve, reject);
//     });
//     return result;
//   };
// };

// const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
// limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

// ----------------------------------> ---------------------------------------->

// var areDeeplyEqual = function (o1, o2) {
//   if (o1 === o2) {
//     return true;
//   }

//   if (
//     typeof o1 !== 'object' ||
//     o1 === null ||
//     typeof o2 !== 'object' ||
//     o2 === null
//   ) {
//     return false;
//   }

//   // and grab all the key in the object...

//   const keysOne = Object.keys(o1);
//   const keysTwo = Object.keys(o2);

//   if (keysOne.length !== keysTwo.length) {
//     return false;
//   }

//   for (let key of keysOne) {
//     if (!keysTwo.includes(key) || !areDeeplyEqual(o1[key], o2[key])) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(areDeeplyEqual({ x: 1, y: 2 }, { x: 1, y: 2 }));

// ----------------------------------> ---------------------------------------->

// Array.prototype.snail = function (rowsCount, colsCount) {
//   if (this.length !== rowsCount * colsCount) return [];
//   let result = Array(rowsCount)
//     .fill([])
//     .map(() => []);
//   console.log(result);
//   for (let j = 0; j < this.length; j++) {
//     const i = Math.floor(j / rowsCount);
//     if (i % 2 === 0) {
//       result[j % rowsCount][i] = this[j];
//     } else {
//       result[rowsCount - (j % rowsCount) - 1][i] = this[j];
//     }
//   }

//   return result;
// };

// let arrays = [
//   19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
// ];
// console.log(arrays.snail(5, 4));

// ----------------------------------> ----------------------------------------->
// const spiralOrder = function (matrix) {
//   const result = [];
//   let top = 0,
//     bottom = matrix.length - 1,
//     left = 0,
//     right = matrix[0].length - 1;

//   while (top <= bottom && left <= right) {
//     // Traverse top row from left to right
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i]);
//     }
//     top++;

//     // Traverse right column from top to bottom
//     for (let i = top; i <= bottom; i++) {
//       result.push(matrix[i][right]);
//     }
//     right--;

//     // Traverse bottom row from right to left
//     if (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[bottom][i]);
//       }
//       bottom--;
//     }

//     // Traverse left column from bottom to top
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         result.push(matrix[i][left]);
//       }
//       left++;
//     }
//   }

//   return result;
// };

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(spiralOrder(matrix));

// ----------------------------------> ----------------------------------------->
// var maxUncrossedLines = function (nums1, nums2) {
//   let firstArray = nums1.length;
//   let matchingArray = nums2.length;
//   // 5 rows and 5 columns 2D arrays....
//   let dynamicTwoDArray = new Array(firstArray + 1)
//     .fill(0)
//     .map(() => new Array(matchingArray + 1).fill(0));

//   for (let i = 1; i <= firstArray; i++) {
//     for (let j = 1; j <= matchingArray; j++) {
//       if (nums1[i - 1] === nums2[j - 1]) {
//         dynamicTwoDArray[i][j] = dynamicTwoDArray[i - 1][j - 1] + 1;
//       } else {
//         dynamicTwoDArray[i][j] = Math.max(
//           dynamicTwoDArray[i - 1][j],
//           dynamicTwoDArray[i][j - 1]
//         );
//       }
//     }
//   }
//   return dynamicTwoDArray[firstArray][matchingArray];
// };

// console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]));

// --------------------------------------> ---------------------------------.

// var chunk = function (arr, size) {
//   let outputChunk = [];
//   let indexMaintain = 0;

//   while (indexMaintain < arr.length) {
//     outputChunk.push(arr.slice(indexMaintain, indexMaintain + size));
//     indexMaintain = indexMaintain + size;
//   }
//   return outputChunk;
// };

// console.log(chunk([1, 2, 3, 4, 5], 1));

// --------------------------------------->----------------------------------------->

// var mostPoints = function (questions) {
//   const n = questions.length;
//   const dp = new Array(n).fill(0);
//   console.log(dp, 'asdfas');
//   let max = 0;

//   for (let i = n - 1; i >= 0; i--) {
//     const [point, brainpower] = questions[i];
//     console.log(dp);
//     dp[i] = Math.max(max, point + (dp[i + brainpower + 1] || 0));
//     max = Math.max(max, dp[i]);
//   }

//   return max;
// };

// console.log(
//   mostPoints([
//     [3, 2],
//     [4, 3],
//     [4, 4],
//     [2, 5],
//   ])
// );

// --------------------------------------->----------------------------------------->

// var getMaximumGenerated = function (n) {
//   if (n === 0) {
//     return 0;
//   }

//   let arr = new Array(n + 1).fill(0);
//   arr[1] = 1;
//   let max = 1;

//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[Math.floor(i / 2)];

//     if (i % 2 === 1) {
//       arr[i] += arr[Math.floor(i / 2) + 1];
//     }

//     max = Math.max(max, arr[i]);
//   }
//   // checkinf after execution above lines of codes.....
//   //   for (let i = 0; i < arr.length; i++) {
//   //     console.log(arr[i], 'after arr value');
//   //   }

//   return max;
// };

// console.log(getMaximumGenerated(7));

// ------------------------------->----------------------------------->
var generateParenthesis = function (n) {
  const result = [];

  const recusiveParan = function (str, open, close) {
    if (open === n && close === n) {
      result.push(str);
      return;
    }

    if (open < n) {
      recusiveParan(str + '(', open + 1, close);
    }
    console.log(str);
    if (close < open) {
      recusiveParan(str + ')', open, close + 1);
    }
  };

  recusiveParan('', 0, 0);

  return result;
};

console.log(generateParenthesis(3));
