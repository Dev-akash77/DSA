function squareofsum(n) {
  let sum = 0;

  while (n > 0) {
    let dig = n % 10;
    sum += dig * dig;
    n = Math.floor(n / 10);
  }
  return sum;
}

var isHappy = function (n) {
  let fast = n;
  let slow = n;

  while (fast != 1) {
    slow = squareofsum(slow);
    fast = squareofsum(squareofsum(fast));
    if (fast === 1) {
      return true;
    }
    if (slow === fast) {
      return false;
    }
  }

  return true;
};

console.log(isHappy(19));
