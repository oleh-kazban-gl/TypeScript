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
  public firstName: string; public lastName: string; private uuid: string = '';

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
