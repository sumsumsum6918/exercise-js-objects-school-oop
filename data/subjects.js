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

  removeStudent(targetStudent) {
    const studentIndex = this.students.indexOf(targetStudent);
    if (studentIndex > -1) this.students.splice(studentIndex, 1);
  }

  asignTeacher(targetTeacher) {
    if (!this.teachers.includes(targetTeacher))
      this.teachers.push(targetTeacher);
  }

  removeTeacher(targetTeacher) {
    const teacherIndex = this.teachers.indexOf(targetTeacher);
    if (teacherIndex > -1) this.teachers.splice(teacherIndex, 1);
  }

  inputGrade(targetStudent, targetGrade) {
    if (!this.students.includes(targetStudent)) return;

    const subjectGradesObject = {};

    subjectGradesObject.student = targetStudent;
    subjectGradesObject.grade = targetGrade;

    this.grades.push(subjectGradesObject);
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
