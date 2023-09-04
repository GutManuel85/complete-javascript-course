/*

//////////////// Hello World /////////////////////

let js = 'amazing';
//if(js === 'amazing') alert('JavaScript is FUN');
console.log(40 + 8 + 23 - 10)

console.log("Jonas")

let firstName = "Jonas";
console.log(firstName);

function logName(name){
    console.log(name);
}

logName("Manuel");


///////////////////// Naming conventions //////////////////////
let camelCase = "thisIsCamelCase";
let underline = "this_is_a_variable_with_underline";

let _allowed = "This is allowed";
let $allowed = "This is also allowed";
let BadPractice = "Starting with upper case letter is bad practise.";

let PI = 3.14 // Constant


///////////////////////Data Types ///////////////////////////

//Number
let age = 23;
let amount = 101.1;

//String
let myString = "This is a string";

//Boolean
let isUnderstandable = true;

//Undefined
let undefinedVariable;
console.log(undefinedVariable);

//null
let nullVariable = null;
console.log(nullVariable);

//Symbol

//BigInt


let javaScriptIsFun = true;

////////////////////// typeof ///////////////////////////
console.log(typeof true);
console.log(typeof 21);
console.log(typeof myString);
console.log(typeof undefinedVariable);
console.log(typeof null); //object => This is a known bug in js

////////////////////// let, const, var ////////////////////
let myNumber = 30;
myNumber = 99;

const birthYear = 1985;
//birthYear = 1999; //not allowed


let actualYear = 2023;
let ageManuel = actualYear - 1985;
let ageRobi = actualYear - 1984;

console.log(ageManuel, ageRobi);

/////////////////// String concatination ///////////////////
console.log(`My age is ${ageManuel}`);

////////////////////Assignment operators ///////////////////
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

//////////////////// comparison operators /////////////////
console.log(ageManuel > ageRobi); //false
console.log(ageManuel <= ageRobi); //true

const now = new Date().getFullYear()
console.log(now);

//////////////////////// Strings ////////////////////////
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " 
+ (year - birthYear) + " years old " +
job;

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - 
    birthYear} years old ${job}`;

console.log(jonasNew);

console.log(`Multi
lines
String
`);


//////////////////////// If - Else /////////////////////////
const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
    //Add emoji: Windows-Taste + Punkt
    console.log(`Sarah can start driving license 🚗🚗🚗`)
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. 
    Wait another ${yearsLeft} 😒😒😒`)
}

const birthYear = 2021;

let century;
if(birthYear >= 2000){
    century = 21;
}else{
    century = 20;
}

console.log(century);

//easier:
console.log(century.toString().slice(0,3));


////////////////////// Type Conversion / Coercion (Zwang) //////////////////

//Conversion
const inputYear = '1991';
console.log(inputYear + 18); // is 199118
console.log(Number(inputYear) + 18); // is 2009

console.log(Number('Manuel')); // is NaN

console.log(String(23), 23) // is '23' 23


//Coercion
console.log("I am " + 23 + "years old");
console.log('23' - '10' - 3); // is 10
console.log('40' / '2'); // is 20

let n = '1' + 1; // is 11
console.log(n - 10); // is 1


////////////////// Truthy / Falsy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false


// all the rest are truthy values

console.log(Boolean('Manuel')); // true
console.log(Boolean({})); //true


// examples of use

let money = 0;

if(money){
    console.log("💵💵💵");
}else{
    console.log("😒😒😒");
}


/////////////// 22. Equality Operations //////////////

// strict equality operator. No automatic type conversition
// ==> Always use this operator!!!!!!!
const age = '18';
if(age === 18){ //false
    console.log("You just became 18 (strict)");
}


// loose equality operator
// ==> DO NOT USE!!!
if(age == 18){ //true
    console.log("You just became 18 (loose)");
}


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite); //Number


// the same for the not equality operator
console.log('38' != 38); //false
console.log('38' !== 38);  //True


let myAge = '38';
if(myAge !== 38){
    console.log("She is not 38 (strict)");
}

if(myAge != 38){
    console.log("She is not 38 (loose)");
}
 

/////////////// Prime numbers ///////////////

manuelHight = 1.82;
robertinaHight = 1.52;
joanaHight = 1.03;
silvanHight = 1.88;

function getBiggestPerson(persons){
    let biggestPersonHight = 0;
    persons.forEach(element => {
        element > biggestPersonHight ? biggestPersonHight = element : console.log("is smaller");
    });
    console.log(`The biggest Person has a height of ${biggestPersonHight} meters`);
}

let persons = [manuelHight, robertinaHight, joanaHight, silvanHight];

getBiggestPerson(persons);

function isPrimeNumber(number){
    let isPrime = true;
    for(let i = 2; i<number; i++){
        if(number % i === 0){
            isPrime = false;
        }
    }
    if(isPrime){
        console.log(`${number} is a prime number 👍`);
    }else{
        console.log(`${number} is no prime number 😒`)
    }
}

isPrimeNumber(9);
isPrimeNumber(5);


function searchPrimeNumbers(maxValue){
    let primeNumbers = [];
    for(let j = 0; j<=maxValue; j++){
        let isPrime = true;
        for(let i = 2; i<j; i++){
            if(j % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeNumbers.push(j);
            console.log(j);
        }
    }
};

searchPrimeNumbers(100000);


///////// Logical Operators: AND, OR, NOT //////////

person1 = {
    id: 1,
    age: 18,
    gender: "female",
    height: 1.60
}

person2 = {
    id: 2,
    age: 19,
    gender: "male",
    height: 1.70

}

person3 = {
    id: 3,
    age: 17,
    gender: "female",
    height: 1.80

}

persons = [person1, person2, person3]

function isAcceptedForTheJob(person){
    if(person.age >= 18 && person.height >= 1.7){
        console.log(`${person.id} is accepted for the job`);
    }else{
        console.log(`${person.id} is not accepted for the job`);
    }
}

for(person of persons){
    isAcceptedForTheJob(person);
}

function isSuitableForTheJob(person){
    let isSuitable = 
        (person.gender === "female" && 
        person.height >= 1.6 &&
        person.age >= 18) || 
        (person.gender === "male" && 
        person.height >= 1.7 &&
        person.age >= 18)
        return isSuitable;
}

for(person of persons){
    console.log(isSuitableForTheJob(person));
}

console.log((true && true && !false)); //true
console.log((true || false)) //true
console.log((true && false)) // false
console.log((true && !true)) //false


///////////////// Switch ///////////////////////
let day = new Date().getDay();
console.log(day);
console.log(typeof day);

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Today is monday.");
      break;
    case 2:
      console.log("Today is tuesday.");
      break;
    case 3:
      console.log("Today is wednesday.");
      break;
    case 4:
      console.log("Today is thursday.");
      break;
    case 5:
      console.log("Today is friday.");
      break;
    case 6:
      console.log("Today is saturday.");
      break;
    case 7:
      console.log("Today is sunday.");
      break;
  }
}

getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);

/////////////// 27. Statements and Expressions /////////////////

// Expression is a piece of code, which produce a value. Below are some examples of expressions
3 + 4
1991
true && false && true

// Statements do not produce a value. Statements are more complex. Below some examples:
const str = 'Javascipt is cool';
const number = 3 + 4;


/////////////// The Conditional (Ternary) Operator //////////////

const age = 17;
let message = age >= 18 ? 'You are allowed to drink wine 🍷🍷🍷' : 'You have to drink water 💧💧💧';
console.log(message);

console.log(`You have can drink ${age >= 18 ? 'water!' : 'wine!'}`);

*/

////// JavaScript Releses: ES5, ES6+ and ESNext ///////////
