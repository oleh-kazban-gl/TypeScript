function concatStrings(x: string, y?: string): string {
  return x + (y ? y : '');
}

function concatStringsByDelimiter(x: string, y: string, delimiter: string = ' '): string {
  return `${x}${delimiter}${y}`;
}

const str1 = concatStrings('part_1');
const str2 = concatStrings('part_1', 'part_2');

const strWithDelimiter1 = concatStringsByDelimiter('x', 'y');
const strWithDelimiter2 = concatStringsByDelimiter('x', 'y', '_');
