'use strict';

class Student {
  id;
  name;
  firstName;
  birthyear;
  courses;

  constructor(id, name, firstName, birthyear, courses) {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.birthyear = birthyear;
    this.courses = courses;
  }
}

let students = [
  new Student(1, 'Muster', 'Max', '2010', ['Mathematik', 'Deutsch', 'Sport']),
  new Student(2, 'Musterina', 'Mia', '2011', [
    'Geschichte',
    'Englisch',
    'Kunst',
  ]),
  new Student(3, 'Schmidt', 'Anna', '2009', ['Physik', 'Chemie', 'Biologie']),
  new Student(4, 'Meier', 'Tom', '2012', ['Informatik', 'Musik', 'Ethik']),
  new Student(5, 'Schulz', 'Lena', '2010', ['Geografie', 'Sport', 'Religion']),
  new Student(6, 'Klein', 'Sophie', '2008', ['Physik', 'Kunst', 'Geschichte']),
  new Student(7, 'Wagner', 'Felix', '2012', ['Chemie', 'Englisch', 'Musik']),
  new Student(8, 'Hoffmann', 'Laura', '2009', ['Sport', 'Biologie', 'Ethik']),
  new Student(9, 'Lange', 'Julius', '2008', ['Physik', 'Chemie', 'Sport']),
  new Student(10, 'Krause', 'Emilia', '2012', [
    'Informatik',
    'Kunst',
    'Biologie',
  ]),
  new Student(11, 'Lehmann', 'Luca', '2009', ['Musik', 'Geografie', 'Ethik']),
  new Student(12, 'Bauer', 'Leon', '2011', ['Geschichte', 'Sport', 'Religion']),
  new Student(13, 'Richter', 'Sophia', '2008', [
    'Chemie',
    'Französisch',
    'Physik',
  ]),
  new Student(14, 'Köhler', 'Finn', '2012', ['Kunst', 'Musik', 'Ethik']),
  new Student(15, 'Keller', 'Lina', '2009', [
    'Biologie',
    'Englisch',
    'Geografie',
  ]),
  new Student(16, 'Huber', 'Mara', '2010', [
    'Deutsch',
    'Mathematik',
    'Politik',
  ]),
];

function createCourseArray(students) {
  let allCourses = [];
  for (let i = 0; i < students.length; i++) {
    let currentCourses = students[i].courses;
    for (let j = 0; j < currentCourses.length; j++) {
      if (!allCourses.includes(currentCourses[j])) {
        allCourses.push(currentCourses[j]);
      }
    }
  }
  //console.log(allCourses);
  return allCourses;
}

function enrollStudentsIntoCourses(students) {
  let allCourses = createCourseArray(students);
  let courseObjects = {};
  allCourses.forEach((course) => {
    courseObjects[course] = {
      students: [],
    };
    students.forEach((student) => {
      if (student.courses.includes(course)) {
        courseObjects[course].students.push(student.id);
      }
    });
  });
  console.log(JSON.stringify(courseObjects));
  return courseObjects;
}

enrollStudentsIntoCourses(students);





