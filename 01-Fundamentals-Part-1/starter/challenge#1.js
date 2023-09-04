/* Write your code below. Good luck! 🙂 */

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

function calculateBMI(mass, height) {
  return mass / (height * height);
}

let BMIMark = calculateBMI(massMark, heightMark);
let BMIJohn = calculateBMI(massJohn, heightJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log(`Mark's BMI is: ${BMIMark}`);
console.log(`John's BMI is: ${BMIJohn}`);
console.log(markHigherBMI);
