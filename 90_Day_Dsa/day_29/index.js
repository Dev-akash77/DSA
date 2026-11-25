/**
 * @param {number} n
 * @return {boolean}
 */


function sqsum(n) {
    const nums = String(n).split("").map(Number);
    let sum = 0;

    for (const key of nums) {
        sum += key ** 2
    }
    return sum;

};

var isHappy = function (n) {
    const set = new Set();
    let ss = sqsum(n);

    while (ss !== 1 && !set.has(ss)) {
        set.add(ss);
        ss = sqsum(ss);
    }

    return ss===1;


};


console.log(isHappy(19));
console.log(isHappy(2));


