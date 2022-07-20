const symbolTest = Symbol('test');

const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');

// Structure
console.log('symbol: ', symbolTest);

// Comparison
console.log('compare symbols: ', symbol1 === symbol2);

// Hidden properties
console.log('symbolTest: ', symbolTest.description);
