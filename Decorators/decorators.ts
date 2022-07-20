function a() {
  console.log("a(): evaluated");

  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("a(): called");
  };
}

function b() {
  console.log("b(): evaluated");

  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("b(): called");
  };
}

function c() {
  console.log("c(): evaluated");

  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("c(): called");
  };
}

@a()
@b()
@c()
class MyTestClass {
  // ...d
}