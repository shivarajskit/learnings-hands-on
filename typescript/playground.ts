//Steps to run 
/*
1. npm install -g typescript
2. create a folder called typescript and run - tsc --init (will create a tsconfig.json file)
3. create a .ts file and write typescript code
4. run with - tsc xxx.ts (will create xxx.js file)
5. lastly run with - node xxx.js
*/
//1. Array Data Type - get first elemrnt of an array
type Input = (number | string)[];

function getFirstInput(array: Input): number | string {
  return array[0];
}

console.log(getFirstInput([1, 2, 3]));
console.log(getFirstInput(['one', 'two', 'three']));