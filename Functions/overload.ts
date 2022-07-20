function concat(x: string, y: string): string;
function concat(x: number, y: number): number;

function concat(x: any, y: any): any {
  if (typeof x == "string" && typeof y == "string") {
    return `${x} + ${y}`;
  } else if (typeof x == "number" && typeof y == "number") {
    return x + y;
  } else {
    throw new Error('Incorrect arguments provided!');
  }
}

console.log(concat('Hello', 'World!'));
console.log(concat(2, 3));
