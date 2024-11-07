class School {
  constructor({ name, address, postcode, city, students, teachers }) {
    this.name = name;
    this.address = address;
    this.postcode = postcode;
    this.city = city;
    this.students = students || [];
    this.teachers = teachers || [];
  }
}

export const teknikhogskolan = {
  name: "teknikhögskolan",
  address: "kalkstensvägen 3",
  postcode: "22478",
  city: "lund",
  students: [],
  teachers: [],
};

export const school = new School(teknikhogskolan);
