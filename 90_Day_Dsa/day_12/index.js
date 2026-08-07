/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates =(nums)=> {
    const n = nums.length;
    let i = 0;
    for (let j = 1; j <n; j++) {
        if (nums[j]!==nums[i]) {
            nums[i+1] = nums[j];
            i++;
        }
    }
        return i+1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //! 5
