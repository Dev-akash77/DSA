const findMissingAndRepeatedValues = (nums) => {
  const n = nums.length;
  const set = new Set();
  let repeating = -1;

  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) {
      repeating = nums[i];
    } else {
      set.add(nums[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!set.has(nums)) {
      return [repeating, nums[i]];
    }
  }
};

findMissingAndRepeatedValues([4, 3, 6, 2, 1, 1]);
