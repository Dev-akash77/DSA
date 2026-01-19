// ! LONGEST SUBSTRING WITHOUT REPEATING ANY CHARACTER

const lengthOfLongestSubstring=(s)=>{
    const n = s.length;
    let res = 0;
    let l =0;
    const map = new Map();

    for (let r = 0; r < n; r++) {

      while(map.has(s[r])){
        map.delete(s[l]);
        l++;
      }

    map.set(s[r],true)
    res = Math.max(r-l+1,res)
        
    }
    return res
}


console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
console.log(lengthOfLongestSubstring("aab"));      // 2
console.log(lengthOfLongestSubstring("dvdf"));    //  3