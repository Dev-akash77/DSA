//! Q1. Full Pyramid
//     *
//    ***
//   *****
//  *******
// *********

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let k = 1; k <= n - i; k++) {
    row += " ";
  }

  for (let j = 1; j <= 2*i - 1; j++) {
    row += "*";
  }
  console.log(row);
}
