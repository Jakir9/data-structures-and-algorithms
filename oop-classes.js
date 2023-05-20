class Person {
  constructor(name, age, location, gender, car) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
    this.car = car;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
  getLocation() {
    return this.location;
  }

  getGender() {
    return this.gender;
  }

  getCar() {
    return this.car;
  }

  setCar(car) {
    this.car = car;
  }

  static tellMeYourCar() {
    return `I have a ${this.car.brand} ${this.car.model}.`;
  }
}

class Student extends Person {
  constructor(
    name,
    age,
    location,
    gender,
    studentId,
    placeOfStudy,
    subject,
    car
  ) {
    super(name, age, location, gender, car);
    this.studentId = studentId;
    this.placeOfStudy = placeOfStudy;
    this.subject = subject;
    this.car = car;
  }

  getStudentId() {
    return this.studentId;
  }
  setStudentId(value) {
    this.studentId = value;
  }

  getPlaceOfStudy() {
    return this.placeOfStudy;
  }
  setPlaceOfStudy(value) {
    this.placeOfStudy = value;
  }
  getSubject() {
    return this.subject;
  }
  setSubject(value) {
    this.subject = value;
  }
}

class Car {
  constructor(brand, model, year, color, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;
  }

  getBrand() {
    return this.brand;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  getModel() {
    return this.model;
  }
  setModel(model) {
    this.model = model;
  }

  getYear() {
    return this.year;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getOwner() {
    return this.owner;
  }
  setOwner(owner) {
    this.owner = owner;
  }
}

let car1 = new Car(`VW`, `Golf`, 2015, `White`, null);
const student001 = new Student(
  `Jakir`,
  24,
  `Birmingham`,
  `Male`,
  1811062,
  "University of Birmingham",
  "Computer Science",
  car1
);

car1.setOwner(student001);
student001.setCar(car1);

// console.log(student001.getAge());
// console.log(student001.getPlaceOfStudy());
// console.log(student001.getStudentId());
// console.log(student001.getLocation());
// console.log(student001.getSubject());
// console.log(student001.getGender());

// console.log(car1.getBrand());
// console.log(car1.getModel());
// console.log(car1.getYear());
// console.log(car1.getColor());
// console.log(car1.getOwner());

// console.log(car1.getOwner().getAge());
// console.log(car1.getOwner().getCar());

console.log(Student.tellMeYourCar.call(student001));
//The call() method is used to set this inside the tellMeYourCar() method to the
//student001 object, so that it correctly prints out student001's car.
