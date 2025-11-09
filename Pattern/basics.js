//!  Q1. Square of Stars
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let n = 5;
// for (let i = 0; i <n; i++) {
//     let row= "";
//     for(let j =0; j<n; j++){
//         row += "*"
//     }
//     console.log(row);
// }

//! Q2. Right Angle Triangle
// *
// * *
// * * *
// * * * *
// * * * * *

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row +="*"
//   }
//   console.log(row);

// }

//! Q3. Inverted Right Angle Triangle
// * * * * *
// * * * *
// * * *
// * *
// *

// let n = 5;
// for (let i = 5; i >= 1; i--) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

//! Q4. Half Pyramid Numbers
//* 1
//* 12
//* 123
//* 1234
//* 12345

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

//! Q5. Inverted Half Pyramid Numbers
//* 12345
//* 1234
//* 123
//* 12
//* 1

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

//! Q6. Floyd’s Triangle
//* 1
//* 2 3
//* 4 5 6
//* 7 8 9 10

// let n = 4, number = 1;

// for (let i = 1; i <= n; i++) {
//     let row ="";
//     for (let j = 1; j <= i; j++) {
//         row +=" "+number;
//         number +=1;
//     }
//     console.log(row);

// }

//! Q7. Solid Rectangle (Rows ≠ Cols)
// * * * * *
// * * * * *
// * * * * *

// let col = 3,
//   rows = 5;

// for (let i = 1; i <= col; i++) {
//   let row = "";
//   for (let j = 1; j <= rows; j++) {
//     row += " *";
//   }
//   console.log(row);
// }
