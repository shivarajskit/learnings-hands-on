//1. Array Data Type - get first elemrnt of an array
// type Input = (number | string)[];

// function getFirstInput(array: Input): (number | string) {
//   return array[0];
// }

// let firstElem = getFirstInput([1, 2, 3]);
// let firstElemStr = getFirstInput(['one', 'two', 'three']);

// console.log(firstElem);
// console.log(firstElemStr);

// there is a problem if we do like below
// firstElemStr.toLowerCase(); // Property 'toLowerCase' does not exist on type 'string | number'.

// To fix the problem, we can use generic type like below

type User = {
  name: string,
  age: number
}

function getFirstInput<T>(array: T[]): T {
  return array[0];
}

let firstElem = getFirstInput<number>([1, 2, 3]);
let firstElemStr = getFirstInput<string>(['ONE', 'TWO', 'THREE']);
let firstElemObj = getFirstInput<User>([{
  name: "Raj",
  age: 30
},
{
  name: "Shivaraj",
  age: 34
}]);

console.log(firstElem);
console.log(firstElemStr);
console.log(firstElemObj);
console.log(firstElemStr.toLowerCase());
// OUTPUT: 
// 1
// ONE
// { name: 'Raj', age: 30 }
// one