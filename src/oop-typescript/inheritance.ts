class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} sleep ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("Mr. Kalam", 23, "Dhaka");
student1.makeSleep(2);

class Teacher extends Parent {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(noOfClass: number): string {
    return `This ${this.name} take ${noOfClass}`;
  }
}
const newTeacher = new Teacher("Kalam", 55, "Dhaka", "AP");
