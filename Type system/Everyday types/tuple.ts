let tupleExample: [string, number];

tupleExample = ["hello", 123]; // correct
tupleExample = ["hello", 123, { name: "test first name", age: 23 }, null]; // incorrect
tupleExample = [123, "hello"]; // incorrect

// >> Type 'number' is not assignable to type 'string'.
// >> Type 'string' is not assignable to type 'number'.

console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1));

// >> Property 'substring' does not exist on type 'number'.
