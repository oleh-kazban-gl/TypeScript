// "as" syntax
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// "angle-bracket" syntax
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
