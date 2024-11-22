//1. Array Data Type - get first elemrnt of an array
type Input = (number | string)[];

function getFirstInput(array: Input): (number | string) {
  return array[0];
}

console.log(getFirstInput([1, 2, 3]));
console.log(getFirstInput(['one', 'two', 'three']));