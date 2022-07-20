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

class AccountUser extends Person {
  private department: string;

  constructor(ssn: string, firstName: string, lastName: string, department: string) {
    super(ssn, firstName, lastName);
    this.department = department;

    if (!this.ssn) {
      this.ssn = this.getSSN();
    }
  }

  private getSSN(): string {
    return '';
  }
}
