class Person {
  Firstname;
  Lastname;
  age;

  constructor(Firstname, Lastname, age) {
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.age = age;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.Firstname} and ${this.Lastname}`);
  }
}
