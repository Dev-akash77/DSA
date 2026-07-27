//! 246. Strobogrammatic Number
//? https://leetcode.com/problems/strobogrammatic-number/

//* Given a string num which represents an integer,
//* return true if num is a strobogrammatic number.

//? A strobogrammatic number looks the same
//? when rotated 180 degrees.

//! Example 1:
//? Input: num = "69"
//? Output: true

//! Example 2:
//? Input: num = "88"
//? Output: true

//! Example 3:
//? Input: num = "962"
//? Output: false

/**
 * @param {string} num
 * @return {boolean}
 */

var isStrobogrammatic = function (num) {
    const map = new Map([
        ["0", "0"],
        ["1", "1"],
        ["6", "9"],
        ["8", "8"],
        ["9", "6"],
    ]);

    let i = 0;
    let j = num.length - 1;

    while (i <= j) {
        if (!map.has(num[i])) {
            return false;
        }

        if (map.get(num[i]) !== num[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

//* Test Cases
console.log(isStrobogrammatic("69"));    //! true
console.log(isStrobogrammatic("962"));   //! false
console.log(isStrobogrammatic("818"));   //! true
console.log(isStrobogrammatic("1001"));  //! true
console.log(isStrobogrammatic("609"));   //! true
console.log(isStrobogrammatic("123"));   //! false
console.log(isStrobogrammatic("88"));    //! true
console.log(isStrobogrammatic("6"));     //! false