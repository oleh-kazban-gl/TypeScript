abstract class AbstractPerson {
  constructor(
    public firstName: string,
    public lastName: string,
    public email?: string
  ) { }
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
