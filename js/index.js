"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("./List");
class Subject {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  getSubject() {
    return this.name + " " + `${this.marks}`;
  }
  setSubject(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}
class Person {
  constructor(name, isStudent, age, hobbies, subjects) {
    this.isStudent = isStudent;
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.subjects = subjects;
  }
  static removestudent(persons) {
    persons.filter(
      (instance) => instance.age <= 18 && instance.isStudent === true
    );
  }
  static decreaseage(persons) {
    persons.forEach((instacnce) => {
      instacnce.age -= 2;
    });
  }
}
let hobbiesofstudent = new List_1.List(["badminton", "reading", "coding"]);
let subjectofstudent = new List_1.List([new Subject("math", 98)]);
const students = [
  new Person("shubham", true, 20, hobbiesofstudent, subjectofstudent),
  new Person("vishrut", true, 22, hobbiesofstudent, subjectofstudent),
  new Person("mahesh", true, 18, hobbiesofstudent, subjectofstudent),
];
const data = document.getElementById("studentdata");
// if(data) data.innerHTML = student.name
// console.log(studentsdata);
let studentsdata = "";
students.forEach((elements) => {
  studentsdata += "<div id='instance'>";
  studentsdata += elements.name + " : Age- ";
  studentsdata += elements.age + " |  isStudent- ";
  studentsdata += elements.isStudent + " |  Hobbies- ";
  elements.hobbies.data.forEach((hobbie) => {
    studentsdata += hobbie + ", ";
  });
  studentsdata += " | ";
  elements.subjects.data.forEach((subject) => {
    studentsdata += " Subject and marks - " + subject.getSubject();
  });
  studentsdata += "</div> </br>";
});
console.log(studentsdata);
if (data) data.innerHTML = studentsdata;
