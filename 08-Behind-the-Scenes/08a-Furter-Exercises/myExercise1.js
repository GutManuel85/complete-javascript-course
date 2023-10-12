'use strict';

const h1 = document.querySelector('h1').innerHTML;
console.log(h1);
const students = document.querySelectorAll('ul > li');
students.forEach((student) => console.log(student.innerHTML));
const bruno = document.querySelector('ul > li:last-child').innerHTML;
console.log(bruno);

