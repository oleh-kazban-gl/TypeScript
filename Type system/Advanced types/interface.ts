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
