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
