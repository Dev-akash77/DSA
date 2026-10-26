
function reverseWord(s:string):string{ 
    let res = s.split(" ").reverse().join(" ").trim();
    

    return res;
}

console.log(reverseWord("the sky is blue")); //! blue is sky the
console.log(reverseWord("  hello world  ")); //! blue is sky the
