// function curry(f) { // curry(f) выполняет каррирование
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         };
//     };
// }
//
// // использование

//advanced
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3

//examples
//logger

function logFn(type, date, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`);
}

const curriedLog = curry(logFn);
const logDebug = curriedLog("DEBUG");
const logInfo = curriedLog("INFO");
logDebug(new Date(), "debuugeed");
logInfo(new Date(), "info");

//httpRequest

//discounter

const discounter = (discount, price) => {
  return discount * price;
};
const curried = curry(discounter);
const discount10 = curried(0.1);
discount10(100);
