import { person } from "./Person";

export class students extends person {
  constructor(FirstName, LastName, age, grade) {
    super(FirstName, LastName, age);
    this.grade = grade;
  }
}

const bar = new students("Bar", "rachamin", 23, 12);

bar.introduceSelf();
