let arr1: Array<number> = [1, 2, 3, 4, 5];
let arr2: Array<number> = [6, 7, 8, 9, 10];
let arr3: Array<number> = [...arr1, ...arr2];

console.log(arr1 === arr2);
console.log(arr3);

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { c: 1, d: 2, e: 3 };
let obj3 = { ...obj1, ...obj2 };

console.log(obj1 === obj3);
console.log(obj3);
