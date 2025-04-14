let x = 3;

function recursion(val) {
  console.log(val);
  if (val > 5) {
    return val;
  }
  recursion(++val);
}
recursion(x);
