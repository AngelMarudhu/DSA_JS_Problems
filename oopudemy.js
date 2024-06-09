// // // FACTORY FUNCTION....
// // function createFactory(radius) {
// //   return {
// //     radius,
// //     draw: function () {
// //       console.log(`draw`);
// //     },
// //   };
// // }

// // const circle = createFactory(3);
// // circle.draw();

// // // CONSTRUCTORS.....
// // function Createconstructo(radius) {
// //   console.log("this", this);
// //   this.radius = radius;
// //   this.draw = function () {
// //     console.log(`draw construction`);
// //   };
// // }

// // const construct = new Createconstructo(3);
// // console.log(construct.draw());

// // primitive data type....example
// // let x = 8;
// // let y = x; // they are stored value in individual memory...

// // x = 10;

// // console.log(x, "output is 10");
// // console.log(y, "output is 8");

// // reference data type example....
// // let x = { value: 8 };
// // let y = x;

// // x.value = 10;

// // console.log(x, "output is 10");
// // console.log(y, "output is 10");

// // ABSTRACTIN....
// function Createconstructo(radius) {
//   this.radius = radius;
//   // IF YOU ARE USING SCOPE VARIABLES EX LET CONST WHATEVER YOU VARIABLES DOES'NT ACCESSIBLE OUTSIDE THE OBJECT YOU CAN ONLY ACCESS INSIDE OF THE OBJECT THAT'S ABSTRACTION YOU HAVE TO WROTE LOT CODE BUT DOESN'T ACCESS OUTSIDE ONLY ACCESS INSIDE
//   let defaultLocation = { x: 10, y: 20 };
//   // if you are using let or const your function lo longer to be method now is a that's function that's why you are directly call the function without this keyword and also that time create closure.....
//   // let computeOptimum = function () {
//   //   console.log("data");
//   // };

//   this.draw = function () {
//     // console.log(defaultLocation);
//     // computeOptimum();
//     console.log(`draw construction`);
//   };

//   this.get = function () {
//     return defaultLocation;
//   };
//   this.set = function (value) {
//     defaultLocation.x = value;
//     defaultLocation.y = value;
//   };
// }

// const construct = new Createconstructo(3);
// console.log(construct.draw());
// console.log(construct.set(55));
// console.log(construct.get());

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//// OOP BRUSH UP ANDRIE
/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

////--------------------------------------------------------------------------------

let dragon = {
  names: "Marudhupandiyan",
  lives: true,

  loving() {
    console.log(`${this.names} loves coding and learning`);
  },
};

let nayan = {
  names: "nayanthara",
};

nayan.__proto__ = dragon;

for (let prop in nayan) {
  if (nayan.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
