export class Teacher {
  name;
  subjects;

  constructor(techerDetails) {
    this.name = techerDetails.name;
    this.subjects = [];
  }

  asignToTeach(targetSubject) {
    if (!this.subjects.includes(targetSubject))
      this.subjects.push(targetSubject);
  }

  removeSubject(targetSubject) {
    const subjectIndex = this.subjects.indexOf(targetSubject);
    if (subjectIndex > -1) this.subjects.splice(subjectIndex, 1);
  }
}

export const teachers = [
  {
    name: "teacher1",
  },
  {
    name: "teacher2",
  },
].map((techerDetails) => new Teacher(techerDetails));
