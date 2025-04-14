// const upperCase = str => str.toUpperCase();
// const exclaim = str => `${str}!`;
// const repeat = str => `${str} `.repeat(3);
// const compose = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)
//
// const withСompose = compose(
//     upperCase,
//     exclaim,
//     repeat,
// );
//
// console.log(withСompose("I love coding")); // I LOVE CODING! I LOVE CODING! I LOVE CODING!

export const transformCustomers = (customers) => {
  let obj = {};
  customers.map((customer) => {
    obj[customer.id] = {
      name: customer.name,
      age: customer.age,
      isSubscribed: customer.isSubscribed,
    };
  });
  return obj;
};

const customers = [
  { id: 1, name: "alex", age: 24, isSubscribed: true },
  { id: 2, name: "alex2", age: 23, isSubscribed: false },
  { id: 3, name: "alex23", age: 25, isSubscribed: true },
];

console.log(transformCustomers(customers));
// const compose = (...fns) => x => {
//     console.log('fns[i]',fns.length)
//
//     let updatedX = x
//     for(let i= 0; i < fns.length; i++){
//         console.log('fns[i]222',fns[i])
//         updatedX = fns[i].call(this,updatedX)
//     }
//     console.log('fns[i] 2',fns.length)
//
//     return updatedX
// };
// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x); [2](https://frontend-stuff.com/blog/composition/)
