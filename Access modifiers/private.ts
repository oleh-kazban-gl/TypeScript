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
