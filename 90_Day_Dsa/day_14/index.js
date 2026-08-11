/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {void}
 */

function mergeArrays(a, b) {
  const result = [...a, ...b].sort((a, b) => a - b);
  const aLen = a.length;

  a = [];
  b = [];

  for (let i = 0; i < aLen; i++) {
    a.push(result[i]);
  }

  for (let i = aLen; i < result.length; i++) {
    b.push(result[i]);
  }
  return [...a,...b];
}

const a = [1, 3, 5, 7];
const b = [0, 2, 6, 8, 9];

console.log(mergeArrays(a, b)); //! [0,1,2,3] [5,6,7,8,9]
