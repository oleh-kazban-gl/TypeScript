function* select() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

console.log(select());

const iterator = select();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// ---
for (let value of select()) {
  console.log('value: ', value);
}

function* gen(values: number) {
  for (let i = 0; i < values; i++) {
    yield i;
  }
}

const generetedIterator = gen(10);

for (let value of generetedIterator) {
  console.log(value);
}
