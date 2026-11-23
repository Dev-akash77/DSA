

function isStrobogrammatic(nums){
    const map = new Map();
    map.set("0","0");
    map.set("6","9"); 
    map.set("9","6"); 
    map.set("8","8");
    map.set("1","1");

    // [6,9]
    //  r l

    let left = 0;
    let right = nums.length - 1;

    while(left<=right){

        if (!map.has(nums[left])) {
            return false;
        };

        if(map.get(nums[left])!==nums[right]){
            return false;
        }

        left++;
        right--;
    }

    return true;
    
}







console.log(isStrobogrammatic("69"));    // true
console.log(isStrobogrammatic("88"));    // true
console.log(isStrobogrammatic("818"));   // true
console.log(isStrobogrammatic("96"));    // true
console.log(isStrobogrammatic("101"));   // true
console.log("================================================");

console.log(isStrobogrammatic("2"));     // false
console.log(isStrobogrammatic("123"));   // false
console.log(isStrobogrammatic("962"));   // false
console.log(isStrobogrammatic("689"));   // false
