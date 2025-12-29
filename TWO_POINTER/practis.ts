// PRACTISE TWO SUM

const twosum = (nums: number[], target: number) => {
  const n = nums.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const t = target - nums[i]!;

    if (map.has(t)) return [map.get(t), i];
    else map.set(nums[i], 0);
  }

  return [];
};

// console.log(twosum([2,7,11,15], 9));

function isAlpha(text: string): boolean {
  return /[a-zA-Z0-9]/.test(text);
}

function isPalindrome(nums: string) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (!isAlpha(nums[j]!)) {
      j--;
      continue;
    }
    if (!isAlpha(nums[i]!)) {
      i++;
      continue;
    }
    if (nums[j]?.toLocaleLowerCase() != nums[i]?.toLocaleLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// console.log(isPalindrome("race a ecar")); // false

// ! reverse a sring
const reverseString = (nums: string[]) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const temp = nums[i]!;

    nums[i]! = nums[j]!;
    nums[j]! = temp;
    i++;
    j--;
  }
  return nums;
};

// console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
