import { teachers, Teacher } from "./data/teachers.js";
import { subjects } from "./data/subjects.js";
import { students, Student } from "./data/students.js";
import { school } from "./data/school.js";

const callDetails = () => {
  console.log("School details");
  console.log(school);
  console.log("Subjects details");
  console.log(subjects);
  console.log("Students details");
  console.log(students);
  console.log("Teachers details");
  console.log(teachers);
};

const enrollStudentToSubject = (targetStudent, targetSubject) => {
  const subjectObject = subjects.find(
    (subject) => subject.name === targetSubject
  );
  subjectObject.enrollStudent(targetStudent);

  const studentObject = students.find(
    (student) => student.name === targetStudent
  );
  studentObject.enrollSubject(targetSubject);
};

const enrollAllStudentsToSubject = (targetSubject) => {
  const subjectObject = subjects.find(
    (subject) => subject.name === targetSubject
  );
  subjectObject.students = students.map((student) => student.name);

  students.forEach((student) => {
    student.enrollSubject(targetSubject);
  });
};

const registerAllStudentsToSchool = () => {
  school.students = students;
};

const registerAllTeachersToSchool = () => {
  school.teachers = teachers;
};

const asignToTeach = (targetTeacher, targetSubject) => {
  const subjectObject = subjects.find(
    (subject) => subject.name === targetSubject
  );
  subjectObject.asignTeacher(targetTeacher);

  const teacherObject = teachers.find(
    (teacher) => teacher.name === targetTeacher
  );
  teacherObject.asignToTeach(targetSubject);
};

const removeStudentFromSubject = (targetStudent, targetSubject) => {
  const subjectObject = subjects.find(
    (subject) => subject.name === targetSubject
  );
  subjectObject.removeStudent(targetStudent);

  const studentObject = students.find(
    (student) => student.name === targetStudent
  );
  studentObject.quitSubject(targetSubject);
};

const removeTeacherFromSubject = (targetTeacher, targetSubject) => {
  const subjectObject = subjects.find(
    (subject) => subject.name === targetSubject
  );
  subjectObject.removeTeacher(targetTeacher);

  const teacherObject = teachers.find(
    (teacher) => teacher.name === targetTeacher
  );
  teacherObject.removeSubject(targetSubject);
};

const personQuit = (people, category) => (targetName) => {
  const index = people.findIndex(
    (personObject) => personObject.name === targetName
  );

  const correspondingSubjects = people[index].subjects;

  if (index > -1) people.splice(index, 1);

  school[category] = people;

  correspondingSubjects.forEach((targetSubject) => {
    const subjectObject = subjects.find(
      (subject) => subject.name === targetSubject
    );
    if (category === "students") {
      subjectObject.removeStudent(targetName);
    }
    if (category === "teachers") {
      subjectObject.removeTeacher(targetName);
    }
  });
};
const studentQuit = personQuit(students, "students");
const teacherQuit = personQuit(teachers, "teachers");

const displayEachCategory = (category) => {
  const display = [];
  school[category].forEach((person) => {
    for (const key in person) {
      display.push(person[key]);
    }
  });
  return display;
};

const displayAllSubjectsOfStudent = (targetStudent) => {
  const studentObject = students.find(
    (student) => student.name === targetStudent
  );
  return studentObject.subjects;
};

const displayAllStudentsOfSubject = (targetSubject) => {
  const subjectObject = subjects.find(
    (subject) => subject.name === targetSubject
  );
  return subjectObject.students;
};

const inputExamResults = (targetSubject, targetStudent, targetGrade) => {
  const studentObject = students.find(
    (student) => student.name === targetStudent
  );
  studentObject.inputGrade(targetSubject, targetGrade);

  const subjectObject = subjects.find(
    (subject) => subject.name === targetSubject
  );
  subjectObject.inputGrade(targetStudent, targetGrade);
};

const newStudent = (studentName, studentAge, studentGender) => {
  const newStudentDetails = {};

  newStudentDetails.name = studentName;
  newStudentDetails.age = studentAge;
  newStudentDetails.gender = studentGender;

  const newStudent = new Student(newStudentDetails);
  students.push(newStudent);
};

const newTeacher = (teacherName) => {
  const newTecherDetails = {};

  newTecherDetails.name = teacherName;

  const newTeacher = new Teacher(newTecherDetails);
  teachers.push(newTeacher);
};

//#region calling functions
const startOfTermDetails = () => {
  console.log("===== Start of term =====");
  startingdetails();
  callDetails();
};
const firstWeekOfTermDetails = () => {
  console.log(
    "===== Beginning of term: Students change their choice of subjects ====="
  );
  startingdetails();
  changes1();
  callDetails();
};
const duringTermTime = () => {
  console.log("===== During term time: Student or teacher quit school =====");
  startingdetails();
  changes1();
  changes2();
  callDetails();
};
const afterMidTerm = () => {
  console.log(
    "===== After Mid-term: Student gets grades from each subject ====="
  );
  startingdetails();
  changes1();
  changes2();
  changes3();
  callDetails();
};

const startingdetails = () => {
  registerAllStudentsToSchool();
  registerAllTeachersToSchool();
  enrollAllStudentsToSubject("mathematics");
  enrollStudentToSubject("student1", "chemistry");
  enrollStudentToSubject("student1", "chemistry");
  enrollStudentToSubject("student2", "chemistry");
  enrollStudentToSubject("student3", "chemistry");
  enrollStudentToSubject("student3", "biology");
  enrollStudentToSubject("student4", "biology");
  enrollStudentToSubject("student5", "biology");
  asignToTeach("teacher1", "mathematics");
  asignToTeach("teacher1", "chemistry");
  asignToTeach("teacher2", "biology");
  asignToTeach("teacher2", "chemistry");
};
const changes1 = () => {
  removeStudentFromSubject("student1", "chemistry");
  removeStudentFromSubject("student3", "biology");
  removeTeacherFromSubject("teacher1", "chemistry");
};
const changes2 = () => {
  studentQuit("student5");
  teacherQuit("teacher1");
  asignToTeach("teacher2", "mathematics");
};
const changes3 = () => {
  inputExamResults("mathematics", "student1", "A");
  inputExamResults("mathematics", "student2", "B");
  inputExamResults("mathematics", "student3", "A");
  inputExamResults("mathematics", "student4", "A");
  inputExamResults("chemistry", "student2", "C");
  inputExamResults("chemistry", "student3", "A");
  inputExamResults("biology", "student4", "B");
  newStudent("student6", 17, "M");
  newStudent("student7", 23, "M");
  enrollStudentToSubject("student6", "mathematics");
  enrollStudentToSubject("student6", "biology");
  enrollStudentToSubject("student7", "mathematics");
  enrollStudentToSubject("student7", "biology");
  enrollStudentToSubject("student7", "chemistry");
  newTeacher("teacher3");
  asignToTeach("teacher3", "mathematics");
};
//#endregion

//startOfTermDetails();
//firstWeekOfTermDetails();
//duringTermTime();
//afterMidTerm();

//console.log(displayEachCategory("students"));
//console.log(displayAllSubjectsOfStudent("student2"));
//console.log(displayAllStudentsOfSubject("mathematics"));
