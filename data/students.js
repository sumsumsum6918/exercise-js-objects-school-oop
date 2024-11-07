export class Student {
  name;
  agegender;
  subjects;
  grades;

  constructor(studentDetails) {
    this.name = studentDetails.name;
    this.age = studentDetails.age;
    this.subjects = studentDetails.subjects;
    this.grades = studentDetails.grade;
  }
}

export const students = [
  {
    name: "student1",
    age: 18,
    gender: "M",
    subjects: [],
    grades: [],
  },
  {
    name: "student2",
    age: 23,
    gender: "F",
    subjects: [],
    grades: [],
  },
  {
    name: "student3",
    age: 45,
    gender: "F",
    subjects: [],
    grades: [],
  },
  {
    name: "student4",
    age: 33,
    gender: "N",
    subjects: [],
    grades: [],
  },
  {
    name: "student5",
    age: 38,
    gender: "F",
    subjects: [],
    grades: [],
  },
].map((studentDetails) => new Student(studentDetails));
