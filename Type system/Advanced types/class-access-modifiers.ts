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

class Util {
  static add(a: string, b: string, delimiter: string = ' '): string {
    return `${a}${delimiter}${b}`
  }
}

console.log(Util.add('Hello', 'World'));

