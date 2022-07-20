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
