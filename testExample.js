function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.valueOf = function () {
    return currentSum;
  };

  return f;
}

console.log(sum(0)(1)(2)(3)(4)(5).valueOf()); // 15
