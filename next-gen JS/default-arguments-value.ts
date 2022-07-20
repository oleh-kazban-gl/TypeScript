function concatStrings(x: string, y?: string): string {
  return x + (y ? y : '');
}

function concatStringsByDelimiter(x: string, y: string, delimiter: string = ' '): string {
  return `${x}${delimiter}${y}`
};
