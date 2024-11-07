class Subject {
  name;
  students;
  teachers;
  grades;

  constructor(subjectDetails) {
    this.name = subjectDetails.name;
    this.students = [];
    this.teachers = [];
    this.grades = [];
  }

  enrollStudent(targetStudent) {
    if (!this.students.includes(targetStudent))
      this.students.push(targetStudent);
  }

  asignTeacher(targetTeacher) {
    if (!this.teachers.includes(targetTeacher))
      this.teachers.push(targetTeacher);
  }
}

export const subjects = [
  {
    name: "mathematics",
  },
  {
    name: "chemistry",
  },
  {
    name: "biology",
  },
].map((subjectDetails) => new Subject(subjectDetails));
