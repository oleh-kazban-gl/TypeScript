# TypeScript Basic

-   What is TypeScript
-   Why TypeScript
-   TypeScript vs JavaScript
-   Type system
    -   Everyday types
    -   Advanced types
    -   Utility types
-   Functions
-   TypeScript as a next-gen JavaScript
-   Access modifiers
-   Decorators
-   Modules
-   Code style
-   Useful links

## "TypeScript is a statically-typed superset of JavaScript."

typescirptlang.org

# What is Typescript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (Node.js, NestJS, Deno). There are multiple options available for transcompilation. Either the default TypeScript compiler can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.

TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js basic modules are also available, allowing development of Node.js programs within TypeScript.

## Compiler

A compiler is a computer program that translates computer code written in one programming language (the source language) into another language (the target language). The name "compiler" is primarily used for programs that translate source code from a high-level programming language to a lower level language (e.g., assembly language, object code, or machine code) to create an executable program.

Translator/Transpiler/Transcompiler/S2S compiler
A source-to-source translator, source-to-source compiler (S2S compiler), transcompiler, or transpiler is a type of translator that takes the source code of a program written in a programming language as its input and produces an equivalent source code in the same or a different programming language.

## Syntax and JavaScript support

TypeScript is unique in that it is a superset of JavaScript, but with optional types, interfaces, generics, and more. Unlike other compile-to-JavaScript languages (Elm, ClojureScript, Haxe, Nim, Amber, PureScript, CoffeeScript, Dart etc), TypeScript does not try to change JavaScript into a new language. Instead, the TypeScript team is careful to align the language"s extra features as closely as possible with what"s available in JavaScript, both current and draft features. Because of this, TypeScript developers are able to take advantage of the latest features in the JavaScript language in addition to a powerful type system to write better-organized code, all while taking advantage of the advanced tooling that using a statically typed language can provide.

TypeScript supports current JavaScript syntax (through ES2019), as well as a number of draft language proposals. In most cases, TypeScript can emit code that"s compatible with older JavaScript runtimes even when using new features, allowing developers to write code using modern JS features that can still run in legacy environments.

# Why TypeScript

-   Types increase your agility when doing refactoring. It's better for the compiler to catch errors than to have things fail at runtime.
-   Types are one of the best forms of documentation you can have. The function signature is a theorem and the function body is the proof.

## Your JavaScript is TypeScript

-   TypeScript provides compile time type safety for your JavaScript code. This is no surprise given its name. The great thing is that the types are completely optional. Your JavaScript code .js file can be renamed to a .ts file and TypeScript will still give you back valid .js equivalent to the original JavaScript file.
-   TypeScript is intentionally and strictly a superset of JavaScript with optional Type checking.
-   Future JavaScript => Now. TypeScript provides a number of features that are planned in ES6 for current JavaScript engines (that only support ES5 etc). The TypeScript team is actively adding these features and this list is only going to get bigger over time.

## Flexible type definition

Types can be Implicit
TypeScript will try to infer as much of the type information as it can in order to give you type safety with minimal cost of productivity during code development.

## Types can be Explicit

As we've mentioned before, TypeScript will infer as much as it can safely. However, you can use annotations to: 1. Help along the compiler, and more importantly document stuff for the next developer who has to read your code (that might be future you!). 2. Enforce that what the compiler sees, is what you thought it should see. That is your understanding of the code matches an algorithmic analysis of the code (done by the compiler).

### Top languages over the years

-   [octoverse.github.com](https://octoverse.github.com/#top-languages-over-the-years)
-   [benfred/github-analysis](https://github.com/benfred/github-analysis)

# TypeScript vs JavaScript

TypeScript validates your code ahead of time

```
const user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor"
}

console.log(user.name)

>> Property 'name' does not exist on type '{ firstName: string; lastName: string; role: string; }'.
```

JavaScript doesn"t validate your code ahead of time

```
var user = {
  firstName: "Angela",
  lastName: "Davis",
  role: "Professor"
}

console.log(user.name)

>> undefined
```

TypeScript validates your code ahead of time

```
private getSum(arg1: number, arg2: number): number {
  return `result: ${arg1 + arg2}`;
}

>> Argument of type 'string' is not assignable to type 'number'.
```

JavaScript doesn"t validate your code ahead of time

```
function getSum(arg1, arg2) {
  return arg1 + arg2;
}

getSum(123, { name: "Jane" });

>> "123[object Object]"
```

# TypeScript type system

## Everyday types

### String

```
const singleQuote: string = 'single quote string';
const doubleQuote: string = "double quote string";

const templateVariable: string = 'World';
const template: string = `Hello, ${templateVariable}!`;

console.log(template);

> "Hello, World!"
```

### Number

```
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const big: bigint = 100n;
```

### Boolean

```
const isVisible: boolean = true;
const isAuthorized: boolean = false;
```

### Array

```
const usersInGenerics: Array<User> = [];
const users: User[] = [];
const numbers: Array<number> = [1, 2, 3, 4, 5];
```

### Tuple

```
let tupleExample: [string, number];

tupleExample = ["hello", 123]; // correct
tupleExample = ["hello", 123, { name: "test first name", age: 23}, null]; // incorrect
tupleExample = [123, "hello"]; // incorrect

>> Type 'number' is not assignable to type 'string'.
>> Type 'string' is not assignable to type 'number'.

console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1));

>> Property 'substring' does not exist on type 'number'.
```

### Enum

In most cases, enums are a perfectly valid solution. However sometimes requirements are tighter. To avoid paying the cost of extra generated code and additional indirection when accessing enum values, it"s possible to use const enums. Const enums are defined using the const modifier on our enums.
Const enums can only use constant enum expressions and unlike regular enums they are completely removed during compilation. Const enum members are inlined at use sites. This is possible since const enums cannot have computed members.

### Enum: Why enums are handy

-   With TypeScript enums you can create constants that you can easily relate to, making constants more readable.
-   With TypeScript enum, developers have the liberty to develop memory-efficient custom constants in JavaScript. JavaScript does not support enums, but TypeScript helps us build and access them.
-   TypeScript enum saves runtime and compile-time with inline code in JavaScript.
-   TypeScript enum also supports certain flexibility that we previously had only in the programming languages like Java. This versatility makes it easy to express and document our aims and use cases efficiently.

### Enum: Cases where you don"t use enums

-   TypeScript enums cannot be used as variables; doing so would return errors.
-   When you plan to reassign or modify the enum member values, enums are type-safe and therefore, would return compile errors on reassignment.
-   When you need to record dynamic values, enums are best suited for finite elements, and the general idea behind was to help build the user-defined constants system.

### Enum: Numeric Enum

```
enum InitializedDirection {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum UserResponse {
  No = 0,
  Yes = 1
}
```

### Enum: String Enum

```
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```

### Enum: Heterogeneous Enum

```
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES"
}
```

### Enum: Constant vs Computed Enum

```
enum E1 {
  X,
  Y,
  Z
}

enum E2 {
  A = 1,
  B,
  C
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length
}
```

### Enum: Computed Enum

-   a literal enum expression (basically a string literal or a numeric literal - e.g. "foo", "bar, "baz", 1, -100)
-   a reference to previously defined constant enum member (which can originate from a different enum)
-   a parenthesized constant enum expression
-   one of the +, -, ~ unary operators applied to constant enum expression
-   +, -, \*, /, %, <<, >>, >>>, &, |, ^ binary operators with constant enum expressions as operands

### Enum: Ambient enum

```
declare enum Enum {
  A = 1,
  B,
  C = 2
}
```

Ambient enums are used to describe the shape of already existing enum types.
One important difference between ambient and non-ambient enums is that, in regular enums, members that don"t have an initializer will be considered constant if its preceding enum member is considered constant. In contrast, an ambient (and non-const) enum member that does not have initializer is always considered computed.

### Any & Unknown

```
const looselyTyped: any = 4;
looselyTyped.ifItExists();
looselyTyped.toFixed();

let looselyTypedObject: any = {};
let d = looselyTypedObject.a.b.c.d;

const strictlyTyped: unknown = 4;
strictlyTyped.toFixed();

>> Object is of type 'unknown'.
```

### Void

```
function logger(msg: string): void {
  console.log("Warning!");
}
```

### Null & Undefined

```
// --strictNullChecks: false
let loggedInUser: User = null; // OK
let loggedInUser: User = undefined; // OK

// --strictNullChecks: true
let loggedInUser: User | null = null; // We have to use union type here
let loggedInUser: User | undefined; // We have to use union type here

…
loggedInUser = {
  firstName: "First",
  lastName: "Last"
};
```

### Never

```
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}
```

### Object

```
function create(o: object | null): void {
...
};

create({ prop: 0 });
create(null);
create(42);

>> Argument of type '42' is not assignable to parameter of type 'object | null'.
>> create("string");
>> Argument of type '"string"' is not assignable to parameter of type 'object | null'.
>> create(false);
>> Argument of type 'false' is not assignable to parameter of type 'object | null'.
>> create(undefined);
>> Argument of type 'undefined' is not assignable to parameter of type 'object | null'.
```

### Union

```
function authorize(user: User | Person): void {
...
}

function add(to: string | number, from: string: number): string | number {
  return to + from;
}

function formatCommandline(command: string[]|string) {
  var line = '';

  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }

  // Do stuff with line: string
}
```

```
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

// Only available in one of the two possible types
pet.swim();

>> Property 'swim' does not exist on type 'Bird | Fish'.
>> Property 'swim' does not exist on type 'Bird'.
```

```
type NetworkLoadingState = {
  state: "loading"
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};
type NetworkState =
| NetworkLoadingState
| NetworkFailedState
| NetworkSuccessState;

function checkState(state: NetworkState): void {
  switch(state.state) {
    case "loading":
    ...
    case "failed":
    ...
    case "success":
    ...
  }
}
```

### Intersection

```
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

function handleResponse(response: ArtistsResponse) {
  const data: ArtistsData = { artists: [] };

  if (response.error) {
    return { ...data, success: false, error: response.error }
  } else {
    return { ...response, success: true }
  }
};
```

```
function extend<T, U>(first: T, second: U): T & U {
  return { ...first, ...second };
}

const x = extend({ a: "hello" }, { b: 42 });

const a = x.a;
const b = x.b;
```

### Generic

```
function logger(input: any): any { … }
function logger(input: HttpResponse | string | User) { … }
function logger<T>(input: T): T {
  console.log(`Date: ${Date.now()}:${input}`);
  return input;
}

function add<T, U>(to: T, from: U): string {
  return to + " " + from;
}

function getUser(id: string): Observable<User> {
  return this.http.get<User>(id);
}
```

```
class KeyValuePair<T,U>
{
private key: T;
private val: U;

    setKeyValue(key: T, val: U): void {
        this.key = key;
        this.val = val;
    }


    display():void {
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }

}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Mark");
kvp1.display();

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display();
```

```
interface IGenericIdentity {
  getIdentity<T>(id: string): T;
}

interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

interface User extends Person {
  department: string;
}

class PersonIdentity implements IGenericIdentity {
  public getIdentity<Person>(id: string) {
    return {} as Person;
  }
}

class UserIdentity implements IGenericIdentity {
  public getIdentity<User>(id: string) {
    return {} as User;
  }
}
```

### Class

```
class Greeter {
  greeting: string;

  constructor(message: string = "there") {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
```

```
class Animal {
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

### Class: Public, private, protected, static modifiers

```
class Person {
  private firstName: string;
  private lastName: string;
  protected email?: string;
  private _age: number;

  public constructor(firstName: string, lastName: string, email?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set age(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  public getEmail(): string | undefined {
    return this.email;
  }
};

class User extends Person {
  private department: string;

  public constructor(firstName: string, lastName: string, email: string, department: string) {
    super(firstName, lastName, email);
    this.department = department;
  }

  public getDepartment(): string {
    return this.department;
  }

  public getEmail() {
    return this.email;
  }
}

class Employee extends Person {
  protected division: string;
  readonly sex: string;

  constructor(firstName: string, lastName: string, email: string, division: string, sex: string) {
    super(firstName, lastName, email);


    this.division = division;
    this.sex = sex;
  }

}

const person = new Person('Mark', 'Wolberg');
const user = new User('John', 'Doe', 'john.doe@corp.com', 'Engineering');
const employee = new Employee('John', 'Doe', 'john.doe@corp.com', 'Engineering', 'male');

console.log(person.firstName);
console.log(person.email);
console.log(person['firstName']);
console.log(person.getFullName());

console.log(user.firstName);
console.log(user.email);
console.log(user.getFullName());

console.log(employee.firstName);
console.log(employee.email);
console.log(employee.division);
console.log(employee.getFullName());

employee.sex = 'female';
```

```
class Util {
  static add(a: string, b: string, delimiter: string = ' '): string {
    return `${a}${delimiter}${b}`
  }
}

console.log(Util.add('Hello', 'World'));
```

### Abstract Class

```
abstract class AbstractPerson {
  constructor(
    public firstName: string,
    public lastName: string,
    public email?: string
  ) {}

  abstract getFullName(): string;
};

class DepartmentPerson extends AbstractPerson {
  constructor(firstName: string, lastName: string, email: string) {
    super(firstName, lastName, email);
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Interface

```
interface IPerson {
  firstName: string;
  lastName: string;
  email?: string;
  age: number;
};

interface IUser extends IPerson {
  department: string;
};

interface IEmployee extends IPerson {
  division: string;
  sex: string;
}

interface ILogger {
  readonly sender: string;
  log: (msg: string) => void
}

interface IAuth {
  returnToUrl?: string;
  auth: (user: User) => void
}

class Person implements ILogger, IAuth {
  readonly sender = 'Person';

  log(msg: string): void {
    console.log('MSG: ', msg);
  }

  auth(user: User): void {
    user.login
  }
}
```

### Type (type alias)

```
type Second = number;

let timeInSecond: number = 10;
let time: Second = 10;
```

### Type vs Interface

Extending an interface

```
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear()
bear.name;
bear.honey;
```

Extending a type via intersections

```
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: Boolean
}

const bear = getBear();
bear.name;
bear.honey;
```

Adding new fields to an existing interface

```
interface Window {
  title: string
}

interface Window {
  ts: import("typescript")
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

A type cannot be changed after being created

```
type Window = {
  title: string
}

type Window = {
  ts: import("typescript")
}

// Error: Duplicate identifier 'Window'.
```

### Declaration merging

"declaration merging" means that the compiler merges two separate declarations declared with the same name into a single definition. This merged definition has the features of both of the original declarations. Any number of declarations can be merged; it"s not limited to just two declarations.

In TypeScript, a declaration creates entities in at least one of three groups: namespace, type, or value. Namespace-creating declarations create a namespace, which contains names that are accessed using a dotted notation. Type-creating declarations do just that: they create a type that is visible with the declared shape and bound to the given name. Lastly, value-creating declarations create values that are visible in the output JavaScript.

| Declaration Type | Namespace | Type | Value |
| ---------------- | --------- | ---- | ----- |
| Namespace        | x         |      | x     |
| Class            |           | x    | x     |
| Enum             |           | x    | x     |
| Interface        |           | x    |       |
| Type Alias       |           | x    |       |
| Function         |           |      | x     |
| Variable         |           |      | x     |

### Declaration merging - interfaces

```
interface Person {
  firstName: string;
  lastName: string;
}

interface Person {
  email: string;
}

interface Person {
  age?: number;
}

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.dow@corp.com'
};
```

```
interface Cloner {
  clone(animal: Animal): Animal;
}

interface Cloner {
  clone(animal: Sheep): Sheep;
}

interface Cloner {
  clone(animal: Dog): Dog;
}

interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
  clone(animal: Sheep): Sheep;
  clone(animal: Animal): Animal;
}
```

### Declaration merging - namespaces

```
namespace Animals {
  export class Zebra {}
}

namespace Animals {
  let haveMuscles = true;

  export interface Legged {
    numberOfLegs: number;
  }

  export class Dog {}
}

namespace Animal {
  export function doAnimalsHaveMuscles() {
    return haveMuscles;
  }
}

namespace Animals {
  export interface Legged {
    numberOfLegs: number;
  }

  export class Zebra {}
  export class Dog {}

  // Error: haveMuscles is not exported
  export function doAnimalsHaveMuscles() {
    return haveMuscles;
  }
}
```

## Utility types

### Partial

Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

```
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

### Readonly

Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

```
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello";

>> Cannot assign to 'title' because it is a read-only property.
```

### Record<Keys, Type>

Constructs a type with a set of properties Keys of type Type. This utility can be used to map the properties of a type to another type.

```
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
```

### Pick<Type, Keys>

Constructs a type by picking the set of properties Keys from Type.

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

### Omit<Type, Keys>

Constructs a type by picking all properties from Type and then removing Keys.

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

###Exclude<Type, ExcludeUnion>
Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

```
type T0 = Exclude<"a" | "b" | "c", "a">;
// ^ = type T0 = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// ^ = type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
// ^ = type T2 = string | number
```

### Extract<Type, Union>

Constructs a type by extracting from Type all union members that are assignable to Union.

```
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
// ^ = type T0 = "a"

type T1 = Extract<string | number | (() => void), Function>;
// ^ = type T1 = () => void
```

### NonNullable<Type>

Constructs a type by excluding null and undefined from Type.

```
type T0 = NonNullable<string | number | undefined>;
// ^ = type T0 = string | number

type T1 = NonNullable<string[] | null | undefined>;
// ^ = type T1 = string[]
```

### Parameters<Type>

Constructs a tuple type from the types used in the parameters of a function type Type.
declare function f1(arg: { a: number; b: string }): void;

```
type T0 = Parameters<() => string>; // ^ = type T0 = []
type T1 = Parameters<(s: string) => void>; // ^ = type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>; // ^ = type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;
// ^ = type T3 = [arg: {a: number;b: string;}]
type T4 = Parameters<any>; // ^ = type T4 = unknown[]
type T5 = Parameters<never>; // ^ = type T5 = never
type T6 = Parameters<string>;

>> Type 'string' does not satisfy the constraint '(...args: any) => any'.
>> // ^ = type T6 = never
>> type T7 = Parameters<Function>;
>> Type 'Function' does not satisfy the constraint '(...args: any) => any'.
>> Type 'Function' provides no match for the signature '(...args: any): any'.
>> // ^ = type T7 = never
```

### ConstructorParameters<Type>

Constructs a tuple or array type from the types of a constructor function type. It produces a tuple type with all the parameter types (or the type never if Type is not a function).

```
type T0 = ConstructorParameters<ErrorConstructor>;
// ^ = type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;
// ^ = type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;
// ^ = type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;
// ^ = type T3 = unknown[]

type T4 = ConstructorParameters<Function>;

>> Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
>> Type 'Function' provides no match for the signature 'new (...args: any): any'.
>> // ^ = type T4 = never
```

### ReturnType<Type>

Constructs a type consisting of the return type of function Type.
declare function f1(): { a: number; b: string };

```
type T0 = ReturnType<() => string>; // ^ = type T0 = string
type T1 = ReturnType<(s: string) => void>; // ^ = type T1 = void
type T2 = ReturnType<<T>() => T>; // ^ = type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // ^ = type T3 = number[]
type T4 = ReturnType<typeof f1>; // ^ = type T4 = {a: number; b: string;}
type T5 = ReturnType<any>; // ^ = type T5 = any
type T6 = ReturnType<never>; // ^ = type T6 = never
type T7 = ReturnType<string>;

>> Type 'string' does not satisfy the constraint '(...args: any) => any'.
>> // ^ = type T7 = any
>> type T8 = ReturnType<Function>;
>> Type 'Function' does not satisfy the constraint '(...args: any) => any'.
>> Type 'Function' provides no match for the signature '(...args: any): any'.
>> // ^ = type T8 = any
```

### InstanceType<Type>

Constructs a type consisting of the instance type of a constructor function in Type.

```
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>; // ^ = type T0 = C
type T1 = InstanceType<any>; // ^ = type T1 = any
type T2 = InstanceType<never>; // ^ = type T2 = never
type T3 = InstanceType<string>;

>> Type 'string' does not satisfy the constraint 'new (...args: any) => any'.
>> // ^ = type T3 = any
>> type T4 = InstanceType<Function>;
>> Type 'Function' does not satisfy the constraint 'new (...args: any) => any'.
>> Type 'Function' provides no match for the signature 'new (...args: any): any'.
>> // ^ = type T4 = any
```

### Required<Type>

Constructs a type consisting of all properties of T set to required. The opposite of Partial.

```
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 };

>> Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

### ThisParameterType<Type>

Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.

```
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
```

### OmitThisParameter<Type>

Removes the this parameter from Type. If Type has no explicitly declared this parameter, the result is simply Type. Otherwise, a new function type with no this parameter is created from Type. Generics are erased and only the last overload signature is propagated into the new function type.

```
function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
```

### ObjectDescriptor

This utility does not return a transformed type. Instead, it serves as a marker for a contextual this type. Note that the --noImplicit This flag must be enabled to use this utility.

```
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>;
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10; obj.y = 20; obj.moveBy(5, 5);
```

## Type assertion

```
// "as" syntax
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// "angle-bracket" syntax
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;
```

## Functions

```
let z = 100;

// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function (x, y) {
  return x + y;
}
```

### Arrow Functions

```
let z = 100;

const add = (x: number, y: number): number => {
  return x + y;
};

const add = (x: number, y: number): number => x + y;

const add = (x: number, y: number) => ({
  result: x + y
});
```

### Typing Functions

```
type addFnType = (baseValue: number, increment: number) => number;

const addFnImpl: addFnType = (x, y) => x + y;
```

### Functions, optional and default parameters

```
function concatStrings(x: string, y?: string): string {
  return x + (y ? y : '');
}

function concatStringsByDelimiter(x: string, y: string, delimiter: string = ' '): string {
  return `${x}${delimiter}${y}`;
}
```

### Functions, rest parameters

```
function logger(msg: string, ...options): void {
  console.log(`MSG: ${msg}`);

  if (options && options.length) {
    options.forEach(o => {
      console.info(`INFO: ${o}`);
    });
  }
}

logger('I`m a message', 123, Date.now(), 'test test', [123, 234, 345]);
```

### Functions, this

```
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
  return function () {
    let pickedCard = Math.floor(Math.random() \* 52);
    let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

### Functions overload

```
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
```

## TypeScript as a next-gen JavaScript

### Let/Const

```
let _a: string;
_a = 'Hello';

const _b: string = 'World';
```

### Arrow functions

```
const add = (x: number, y: number): number => x + y;
```

### Default function arguments value

```
function concatStrings(x: string, y?: string): string {
  return x + (y ? y : '');
}

function concatStringsByDelimiter(x: string, y: string, delimiter: string = ' '): string {
  return `${x}${delimiter}${y}`
};
```

### Rest

```
function logger(msg: string, ...options): void {
  console.log(`MSG: ${msg}`);

  if (options && options.length) {
    options.forEach(o => {
      console.info(`INFO: ${o}`);
    });
  }
}

logger('I`m a message', 123, Date.now(), 'test test', [123, 234, 345]);
```

### Spread

```
let arr1: Array<number> = [1, 2, 3, 4, 5];
let arr2: Array<number> = [6, 7, 8, 9, 10];
let arr3: Array<number> = [...arr1, ...arr2];

console.log(arr1 === arr2);
console.log(arr3);

let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { c: 1, d: 2, e: 3};
let obj3 = { ...obj1, ...obj2};

console.log(obj1 === obj3);
console.log(obj3);
```

### Array/Object destructuring

```
let input = [1, 2];
let [first, second] = input;

console.log(first); // outputs 1
console.log(second); // outputs 2

first = input[0];
second = input[1];

function _f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}

_f([1, 2]);
```

### Array/Tuple/Object destructuring

```
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

let obj2 = {c, d};
```

### Symbols

```
const symbolTest = Symbol('test');

const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');

// Structure
console.log('symbol: ', symbolTest);

// Comparison
console.log('compare symbols: ', symbol1 === symbol2);

// Hidden properties
console.log('symbolTest: ', symbolTest.description);
```

### Iterators

```
const iterableArray = ['a', 'b', 'c', 'd', 'e'];

console.log('iterableArray: ', iterableArray);
console.log('iterableArray iterator: ', iterableArray[Symbol.iterator]);

iterableArray[Symbol.iterator] = function() {
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
```

### Generators

```
function\* select() {
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

for (let value of select()) {
console.log('value: ', value);
}
```

```
function\* gen(values: number) {
  for (let i = 0; i < values; i++) {
    yield i;
  }
}

const generetedIterator = gen(10);

for (let value of generetedIterator) {
  console.log(value);
}
```

### Class & Access modifiers: Public

The public modifier allows class properties and methods to be accessible from all locations. If you don"t specify any access modifier for properties and methods, they will take the public modifier by default.

```
class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }


  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Class & Access modifiers: Public

```
class Account {
  person: Person;

  constructor(person: Person) {
    this.person = person;

    if (!person.ssn) {
      this.person.ssn = this.getSSN();
    }
  }

  getSSN() {
    return '';
  }
}
```

### Class & Access modifiers: Private

The private modifier limits the visibility to the same-class only. When you add the private modifier to a property or method, you can access that property or method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compile time.

```
class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get SSN(): string {
    return this.ssn;
  }

  set SSN(ssn: string) {
    this.ssn = ssn;
  }
}
```

### Class & Access modifiers: Private

```
class Account {
  person: Person;

  constructor(person: Person) {
    this.person = person;

    // if (!person.ssn) {
    //     this.person.ssn = this.getSSN();
    // }


    if (!person.SSN) {
        this.person.SSN = this.getSSN();
    }
  }

  getSSN() {
    return '';
  }
}
```

### Class & Access modifiers: Protected

The protected modifier allows properties and methods of a class to be accessible within the same class and within subclasses.

```
class Person {
  protected ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Class & Access modifiers: Protected

```
class AccountUser extends Person {
  private department: string;

  constructor(ssn: string, firstName: string, lastName: string, department: string) {
    super(ssn, firstName, lastName);
    this.department = department;

    if(!this.ssn) {
        this.ssn = this.getSSN();
    }
  }

  private getSSN(): string {
    return '';
  }
}
```

### Class & Access modifiers: Readonly

The readonly keyword makes a property as read-only in the class, type or interface.

```
class Person {
  public readonly ssn: string;
  private firstName: string;
  private lastName: string;
  constructor(ssn: string, firstName: string, lastName: string) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}
  getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('123', 'John', 'Doe');

person.ssn = '234';
```

### Class & Access modifiers: Static

The static members of a class are accessed via the class name and dot-notation, without creating instances of the class.

```
class Util {
  public static getContainer() {}
  public static getTitle() {}
  public static getParagraphContent() {
  return this.getContent();
}

  private static getContent() {
      this.getContainer();
  }
}

Util.getContainer();
Util.getParagraphContent();
Util.getContent();
```

## Decorators

A decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

-   Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each instance member.
-   Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each static member.
-   Parameter Decorators are applied for the constructor.
-   Class Decorators are applied for the class.

-   Class decorator — Priority 4 (Object Instance, Static)
-   Method Decorator — Priority 2 (Object Instance, Static)
-   Accessor or Property Decorator — Priority 3 (Object Instance, Static)
-   Parameter Decorator — Priority 1 (Object Instance, Static)

### Class Decorators

```
function BaseEntity(ctr: Function) {
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date();
}

@BaseEntity
class User {
  firstName: string;
  lastName: string;

  constructor(firstname: string, lastname: string) {
    this.firstName = firstname;
    this.lastName = lastname;
  }
}

@BaseEntity
class Account {
  constructor(public zicode: number) { }
}
```

### Class Decorators

```
let user = new User('John', 'Doe');
let account = new Account(61108);

console.log('user: ', user);
console.log('user created: ', user.created);
console.log('user id: ', user.id);

console.log('account: ', account);
console.log('account created: ', account.created);
console.log('account id: ', account.id);
```

### Method Decorators

```
function Logger(
  target: Object,
  propertyName: string,
  propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
  const method = propertyDesciptor.value;

  propertyDesciptor.value = function (...args: any[]) {
    const params = args.map(a => JSON.stringify(a)).join();
    const result = method.apply(this, args);
    const r = JSON.stringify(result);

    console.log(`Call: ${propertyName}(${params}) => ${r}`);

    return result;
  }


  return propertyDesciptor;
};

class User {
  public firstName: string;
  public lastName: string;
  private uuid: string = '';

  constructor(firstname: string, lastname: string) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

    @Logger
    public getFullName(): string { return `${this.firstName} ${this.lastName}`; }

    @Logger
    public setUUID(uuid: string): void { this.uuid = uuid; }

    @Logger
    public getUUID(): string { return this.uuid; }
}
```

### Decorators sequnce

```
function a() {
  console.log("a(): evaluated");

  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("a(): called");
  };
}

function b() {
  console.log("b(): evaluated");

  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("b(): called");
  };
}

function c() {
  console.log("c(): evaluated");

  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("c(): called");
  };
}

@a()
@b()
@c()
class MyTestClass {
...d
}
```

### Decorator Factory

```
function Id(uuid: number) {
  return function (constructor: Function) {
    constructor.prototype.uuid = Math.floor(Math.random() \* Math.floor(uuid))
  };
}

@BaseEntity
@Id(5)
class User {
  firstName: string;
  lastName: string;

  constructor(firstname: string, lastname: string) {
    this.firstName = firstname;
    this.lastName = lastname;
  }
}
```

## Modules

### Global

```
// File a.ts
var fromA = 'test string';

// File b.ts
var fromB = fromA;
```

### File

```
// File fromA.ts
export const fromA = 'test string';

// File fromB.ts
import { fromA } from "./fromA";

export { fromA as fromB };

console.log("from b: ", fromA);

// File index.ts
import { fromA as original } from "./fromA";
import { fromB } from "./fromB";

console.log("from index: original : ", original );
console.log("from index: ", fromB);
```

### File module, multiple exports & imports

```
// File fromA.ts
export const fromA = 'test string';
export const fromA2 = 'yet another test string';

// File fromB.ts
import { fromA } from "./fromA";
export { fromA as fromB };
export * as multipleB from './fromA';

console.log("from b: ", fromA);

// File index.ts
import { fromB } from "./fromB";
import * as fromA from './fromA';

console.log("from index: ", fromB);
console.log("from a: ", fromA.fromA);
console.log("from a: ", fromA.fromA2);
```

### Namespaces

```
namespace Util {
  export const defaultServiceApi = '/api';
  export interface AppData {
    dataSet: Array<number>
  }
  export class Service {}
  export class Utility {
    public static doSmth(): void {}
  }
}

namespace GraphUtil {
  export const defaultColor = 'red';
  export interface GraphData {
    dataSet: Array<number>
  }
  export class Service {}
  export class Utility {
    public static doSmth(): void {}
  }
}

Util.Utility.doSmth();
const service = new Util.Service();

GraphUtil.Utility.doSmth();
const graphService = new GraphUtil.Service();
```

### Barrels

```
// demo/foo.ts
export class Foo {}

// demo/bar.ts
export class Bar {}

// demo/baz.ts
export class Baz {}

// ->
import { Foo } from '../demo/foo';
import { Bar } from '../demo/bar';
import { Baz } from '../demo/baz';

// Introducing barrel
// demo/index.ts
export _ from './foo'; // re-export all of its exports
export _ from './bar'; // re-export all of its exports
export \* from './baz'; // re-export all of its exports

// consumer
import { Foo, Bar, Baz } from '../demo'; // demo/index.ts is implied
```

### Barrels & named export

```
// demo/foo.ts
export class Foo {}

// demo/bar.ts
export class Bar {}

// demo/baz.ts
export function getBaz() {}
export function setBaz() {}

// demo/index.ts
export _ from './foo'; // re-export all of its exports
export _ from './bar'; // re-export all of its exports
import \* as baz from './baz'; // import as a name
export { baz }; // export the name

// consumer
import { Foo, Bar, baz } from '../demo'; // demo/index.ts is implied
baz.getBaz();
baz.setBaz();
```

### Default export

```
// File fromA.ts
const fromA = 'fromA';
const fromA2 = 'fromA2';

export { fromA };
export default fromA2;

// File index.ts
// import { fromA } from "./fromA";

import fromA2 from "./fromA";

// console.log('from index: ', fromA);
console.log('from index: ', fromA2);
```

## Code style

-   no any
-   TypeScript built-in checks:
-   noImplicitAny: true
-   noImplicitThis: true
-   strictNullChecks: true
-   strictPropertyInitialization: true
-   strictBindCallApply: true
-   strictFunctionTypes: true
-   use readonly
-   use Utility Types

## Useful links

-   https://en.wikipedia.org/wiki/Compiler
-   https://en.wikipedia.org/wiki/Source-to-source_compiler
-   https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
-   https://www.typescriptlang.org/play
-   https://basarat.gitbook.io/typescript/
-   https://www.typescriptlang.org/
-   https://github.com/microsoft/TypeScript
-   https://github.com/Microsoft/TypeScript/wiki
-   https://devblogs.microsoft.com/typescript/
-   https://code.visualstudio.com/docs/languages/typescript
-   https://webpack.js.org/guides/typescript/
-   https://angular.io/guide/typescript-configuration
-   https://github.com/basarat/typescript-book/
-   https://github.com/madou/typescript-transformer-handbook
-   https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
-   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
-   https://www.typescriptlang.org/docs/handbook/decorators.html#decorators
-   https://basarat.gitbook.io/typescript/project/modules
-   https://www.typescriptlang.org/docs/handbook/modules.html
-   https://www.typescriptlang.org/docs/handbook/module-resolution.html
-   https://www.typescriptlang.org/docs/handbook/namespaces.html
-   https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html
-   https://basarat.gitbook.io/typescript/main-1/barrel
-   https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
-   https://medium.com/swlh/how-strict-is-typescripts-strict-mode
-   https://m.habr.com/ru/company/tinkoff/blog/521262/
-   https://palantir.github.io/tslint/
-   https://github.com/palantir/tslint/issues/4534
-   https://eslint.org/
-   https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/
-   https://habr.com/ru/company/dododev/blog/473648/
