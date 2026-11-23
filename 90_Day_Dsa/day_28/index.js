/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let r = 0;
    let tLen = t.length;

    for (let l = 0; l < s.length; l++) {
        if(s[l]===t[r]) {
            r++;
        }        
    }

    return tLen - r;
    
};




let s = "coaching", t = "coding";
console.log(appendCharacters(s,t));
