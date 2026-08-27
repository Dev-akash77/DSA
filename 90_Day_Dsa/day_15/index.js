function twoSum(nums, target){
    let l = 0;
    let r = nums.length -1;

    while(l<r){
        let sum = nums[l] + nums[r];

        if(sum===target){
            return [l+1,r+1]
        }

        if(sum>target){
            r--;
        }else{
            l++;
        }

    }

    return [-1,-1];
};

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([2,3,4],6));
