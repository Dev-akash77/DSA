//! 125. Valid Palindrome
// ? https://leetcode.com/problems/valid-palindrome/description/

//* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

//? Given a string s, return true if it is a palindrome, or false otherwise.

//! Example 1:
//* Input: s = "A man, a plan, a canal: Panama"
//* Output: true
//* Explanation: "amanaplanacanalpanama" is a palindrome.

//! Example 2:
//* Input: s = "race a car"
//* Output: false
//* Explanation: "raceacar" is not a palindrome.

const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;

  while (j > i) {
    
    while (j > i && !/[a-z0-9]/i.test(s[i])) {
      i++;
    }
    while (j > i && !/[a-z0-9]/i.test(s[j])) {
      j--;
    }

    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
