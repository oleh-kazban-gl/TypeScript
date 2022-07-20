let input = [1, 2];
let [first, second] = input;

console.log(first); // outputs 1
console.log(second); // outputs 2

/*
first = input[0];
second = input[1];
*/

function _f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}

_f([1, 2]);

// ---
let [first, ...rest] = [1, 2, 3, 4];

console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let tuple: [number, string, boolean] = [7, "hello", true];
let [a, b, c] = tuple; // a: number, b: string, c: boolean

let obj1 = {
  a: "foo",
  b: 12,
  c: "bar",
};

let { a, b } = obj1;

let c = "foo";
let d = 12;

let obj2 = { c, d };
