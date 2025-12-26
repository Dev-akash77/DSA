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

console.log(twosum([2,7,11,15], 9));
