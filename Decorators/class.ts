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

let user = new User('John', 'Doe');
let account = new Account(61108);

console.log('user: ', user);
console.log('user created: ', user.created);
console.log('user id: ', user.id);

console.log('account: ', account);
console.log('account created: ', account.created);
console.log('account id: ', account.id);
