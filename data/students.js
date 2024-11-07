class Student {
  name;
  age;
  gender;
  subjects;
  grades;

  constructor(studentDetails) {
    this.name = studentDetails.name;
    this.age = studentDetails.age;
    this.gender = studentDetails.gender;
    this.subjects = [];
    this.grades = [];
  }

  enrollSubject(targetSubject) {
    if (!this.subjects.includes(targetSubject))
      this.subjects.push(targetSubject);
  }
}

export const students = [
  {
    name: "student1",
    age: 18,
    gender: "M",
  },
  {
    name: "student2",
    age: 23,
    gender: "F",
  },
  {
    name: "student3",
    age: 45,
    gender: "F",
  },
  {
    name: "student4",
    age: 33,
    gender: "N",
  },
  {
    name: "student5",
    age: 38,
    gender: "F",
  },
].map((studentDetails) => new Student(studentDetails));
