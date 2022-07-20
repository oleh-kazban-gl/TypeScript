const iterableArray = ['a', 'b', 'c', 'd', 'e'];

console.log('iterableArray: ', iterableArray);
console.log('iterableArray iterator: ', iterableArray[Symbol.iterator]);

iterableArray[Symbol.iterator] = function () {
  let nextValue = '';

  return {
    next() {
      nextValue = `${nextValue} changed`

      return {
        done: nextValue.length > 10 ? true : false,
        value: nextValue,
      };
    },
  } as IterableIterator<string>;
};

const iterator = iterableArray[Symbol.iterator]();

console.log('iterator: ', iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (let value of iterableArray) {
  console.log('value: ', value);
}

for (let value in iterableArray) {
  console.log('key: ', value);
}
