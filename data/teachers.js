class Teacher {
  name;
  subjects;

  constructor(techerDetails) {
    this.name = techerDetails.name;
    this.subjects = [];
  }

  asignToTeach() {
    if (!this.subjects.includes(targetSubject))
      this.subjects.push(targetSubject);
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
