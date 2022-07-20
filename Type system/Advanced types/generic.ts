function logger(input: any): any { … }
function logger(input: HttpResponse | string | User) { … }
function logger<T>(input: T): T {
  console.log(`Date: ${Date.now()}: ${input}`);
  return input;
}

// ---
function add<T, U>(to: T, from: U): string {
  return to + ' ' + from;
}

// ---
function getUser(id: string): Observable<User> {
  return this.http.get<User>(id);
}

// ---
class KeyValuePair<K, V>
{
  private key: K;
  private val: V;

  setKeyValue(key: K, val: V): void {
    this.key = key;
    this.val = val;
  }

  display(): void {
    console.log(`Key = ${this.key}, val = ${this.val}`);
  }
}

let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Mark");
kvp1.display();

let kvp2 = new KeyValuePair<string, string>();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display();

// ---
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
