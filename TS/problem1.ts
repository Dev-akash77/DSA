function lengthOfLongestSubstring(s: string): number {
    let ans = 0;
    let j = 0;

    const set = new Set<string>();


    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i]!)) {
            set.delete(s[j]!);
            j++;
        }
        
        set.add(s[i]!);
        ans = Math.max(ans,i-j+1);
    }


    return ans;
}

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("bbbbbbb")); //1
