"use strict";
//1. Array Data Type - get first elemrnt of an array
// type Input = (number | string)[];
function getFirstInput(array) {
    return array[0];
}
let firstElem = getFirstInput([1, 2, 3]);
let firstElemStr = getFirstInput(['ONE', 'TWO', 'THREE']);
let firstElemObj = getFirstInput([{
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
// OUTPUT: 1, ONE, one
