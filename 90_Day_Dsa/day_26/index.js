function countPairs(nums, target) {
    let count = 0;
    let i = 0;
    let j = nums.length - 1;
    nums.sort((a, b) => a - b);

    while (i < j) {
        if (nums[i] + nums[j] < target) {
            count += (j - i);
            i++;
        } else {
            j--
        }
    }

    return count;
};

console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6,2,5,-2,-7,-1,3], -2));

