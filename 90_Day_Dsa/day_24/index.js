/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
    let i = 0;
    let k = 0;
    let j = nums.length -1;

    while (k <= j) {
        if (nums[k] === 2) {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            j--;
        } else if (nums[k] === 0) {
            [nums[i], nums[k]] = [nums[k], nums[i]];
            i++;
            k++;
        } else { k++ } 
    }
    return nums;
};


console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]))
