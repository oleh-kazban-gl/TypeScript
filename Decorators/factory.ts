function Id(uuid: number) {
  return function (constructor: Function) {
    constructor.prototype.uuid = Math.floor(Math.random() * Math.floor(uuid))
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
