/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
       nums.sort((a,b)=>a-b);
    
    const n = nums.length;
    const res = [];

    for (let i = 0; i < n-1; i++) {        
        let j = i+1;
        let k = n-1;
        
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        while(j< k){
            let sum = nums[i]+nums[j]+nums[k];
          if (sum===0) {
            res.push([nums[i],nums[j],nums[k]]);
            j++;
            k--;
             while (j < k && nums[j] === nums[j - 1]) j++;
             while (j < k && nums[k] === nums[k + 1]) k--;
          }
         else if (sum>0) {
            k--;
          }else{
            j++;
          }
        }
    }
    return res;
};


console.log(threeSum([-1,0,1,2,-1,-4])); //* [[-1,-1,2],[-1,0,1]]
