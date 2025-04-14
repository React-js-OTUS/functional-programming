const memoizedFunction = (fn) => {
  let cache = {};

  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value];
    } else {
      console.log("executing and fetching results");
      let result = fn(value);
      cache[value] = result;
      return result;
    }
  };
};

const add = memoizedFunction((n) => n + 10);
console.log(add(9));
console.log(add(9));
