"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseWord(s) {
    let res = s.split(" ").reverse().join(" ").trim();
    return res;
}
console.log(reverseWord("the sky is blue")); //! blue is sky the
console.log(reverseWord("  hello world  ")); //! blue is sky the
//# sourceMappingURL=problem2.js.map