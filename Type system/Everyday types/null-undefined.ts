// --strictNullChecks: false
let loggedInUser: User = null; // OK
let loggedInUser: User = undefined; // OK

// --strictNullChecks: true
let loggedInUser: User | null = null; // We have to use union type here
let loggedInUser: User | undefined; // We have to use union type here

loggedInUser = {
  firstName: "First",
  lastName: "Last"
};
