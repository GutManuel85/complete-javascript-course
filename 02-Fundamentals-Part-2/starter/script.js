"use strict";

///////////// 32. Strict mode ////////////////

/*

let hasDriversLicence = false;
let passTest = true;

if(passTest) hasDriverLicence = false;
if(hasDriversLicence) console.log('I can drive 🚗🚗🚗');

//const interface = "Audio";



//////////// 33. Functions ////////////////////

function logger(){
    console.log("My name is Manuel");
}

// calling / running / invoking function
logger();
logger();
logger();

function processFood(applesAmount, orangesAmount) {
  console.log(applesAmount, orangesAmount);
  const juice = `Juice with ${applesAmount} apples and ${orangesAmount} oranges.`;
  return juice;
}

const appleJuice = processFood(5, 0);
const orangeJuice = processFood(0, 5);
const mixedJuice = processFood(2, 3);

console.log(appleJuice);
console.log(orangeJuice);
console.log(mixedJuice);


/////////////// Functions Declarations vs. Expressions //////////////

//declaration
function calcAge(birthYear){
    return new Date().getFullYear() - birthYear;
}

// call it
console.log(calcAge(1985));
console.log(calcAge(1999));


//expression
const calcAgeExpression = function(birthYear){
    return new Date().getFullYear() - birthYear;
}

//call it
console.log(calcAgeExpression(1985));
console.log(calcAgeExpression(1999));



//////////////// 35. Arrow Function ////////////////

const calcAgeArrow = birthYear => new Date().getFullYear() - birthYear;

//call it
console.log(calcAgeArrow(1985));
console.log(calcAgeArrow(1999));



const yearsUntilRetirement = (birthYear, firstName) => {
    const age = new Date().getFullYear() - birthYear;
    const rest = 65 - age;
    return `${firstName} retires in ${rest} years`;
}

console.log(yearsUntilRetirement(1985, "Hans"));


/////////////// 36. Functions Calling Other Functions //////////////

function cutFruitPieces(fruitAmount){
    return fruitAmount * 4;
}

function processFood(applesAmount, orangesAmount) {
    const applePieces = cutFruitPieces(applesAmount);
    const orangePieces = cutFruitPieces(orangesAmount);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
  }

  console.log(processFood(2,2)); // ergibt (8, 8)
  console.log(processFood(1,3)); // ergibt (4, 12)
  

  ////////////////// Instructin to Arrays ///////////////

  const friend1 = "Michael";
  const friend2 = "Steven";
  const friend3 = "Peter";

  const friends = ["Micheal", "Steven", "Peter"];
  console.log(friends);

  const years = new Array(1991, 1984, 2008, 2020);

  console.log(friends[0]);
  console.log(friends[1]);
  console.log(friends[2]);

  console.log(friends.length);
  console.log(friends[friends.length - 1]); //last element

  friends[2] = "Manuel";
  console.log(friends);

  const manuel = ['Manuel', 'Gut', new Date().getFullYear() - 1985, 'engineer', friends];
  console.log(manuel);

  // Exercise
  const calcAge = function(birthYear){
    return new Date().getFullYear() - birthYear;
  }

  const someYears = [1991, 1984, 2008, 2020];

  const age1 = calcAge(someYears[0]);
  const age2 = calcAge(someYears[1]);
  const ageLast = calcAge(someYears[someYears.length - 1]);

  const ages = [calcAge(someYears[0]), calcAge(someYears[1]), calcAge(someYears[someYears.length - 1])];
  console.log(ages);


///////////// 40. Basic Array Operations /////////
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // add at the end
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add at the beginning

console.log(friends);

friends.pop(); // Remove and return last
const popped = friends.pop(); // returns Peter
console.log(popped);

console.log(friends.indexOf('Steven')); // returns 2
console.log(friends.indexOf('Bob')); //returns -1 (not existing)

friends.push(23);
console.log(friends.includes('Steven')); //true
console.log(friends.includes('Bob')); //false
console.log(friends.includes(23)); //true

if(friends.includes('Steven')){
    console.log("You have a friend called Steven");
}

//////////// 42. Introduction to Objects //////////////////

const manuelArray = [
    'Manuel',
    'Gut',
    2023 - 1985,
    'Engineer',
    ['Robertina', 'Joana']
];

const manuel = {
    firstName: 'Manuel',
    lastName: 'Gut',
    age: 2023 - 1985,
    job: 'Engineer',
    family: ['Robertina', 'Joana']
}


///////////// 43. Object: Dot vs. Bracket Notation //////////////

console.log(manuel);
console.log(manuel.lastName);
console.log(manuel['lastName']);

const nameKey = 'Name';
console.log(manuel[`first${nameKey}`]);
console.log(manuel[`last${nameKey}`]);

//Use always dot if possible. If the key has to be produced, so you have to use bracket notation

const interestedIn = prompt('What do you want to know about Manuel? Choose between firstName, LastName, age, job and friends.');

if(manuel[interestedIn]){
    console.log(manuel[interestedIn]);
}else{
    console.log('Wrong input')
};

// file:///C:/Code/complete-javascript-course/02-Fundamentals-Part-2/starter/index.html

//Challenge
//"Manuel's family has 3 persons, and his daughter is called Joana"
console.log(`${manuel.firstName}'s family has ${manuel.family.length + 1} persons, and his daughter is called ${manuel.family[manuel.family.length - 1]}`)


  ///// 44. Object Methods (and this) ////////////////////

  const manuel = {
    firstName: 'Manuel',
    lastName: 'Gut',
    birthYear: 1985,
    job: 'Engineer',
    family: ['Robertina', 'Joana'],
    hasDriversLicense: true,

    calcAge: function () {
        return new Date().getFullYear() - this.birthYear;
    }
};

console.log(manuel.calcAge()); //with dot notation
console.log(manuel['calcAge']()); //with braket notation


const manuelNew = {
    firstName: 'Manuel',
    lastName: 'Gut',
    birthYear: 1985,
    job: 'Engineer',
    family: ['Robertina', 'Joana'],
    hasDriversLicense: true,

    calcAge: function () { //creates a new property age in the object
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense? 'a' : 'no'} driver's license.`
    }
};

console.log(manuelNew.calcAge());

console.log(manuelNew.age);
console.log(manuelNew.age);


//Challenge
// "Manuel is a 38-year old engineer, and he has a driver's license"
console.log(manuelNew.getSummary());


///////// 46.  Iteration: For Loop /////////////

for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️🏋️🏋️`);
}


//////// 47. Looping Arrays, Breaking and Continuing ///////////

const manuelArray = [
    'Manuel',
    'Gut',
    2023 - 1985,
    'Engineer',
    ['Robertina', 'Joana']
];


const types = [];

for(let i = 0; i < manuelArray.length; i++){
    console.log(manuelArray[i]);

    types[i] = typeof manuelArray[i];
}

console.log(types);


const years = [1949, 1943, 1988, 1977, 1988, 2020]
const ages = [];

for(let i = 0; i < years.length; i++){
    ages[i] = new Date().getFullYear() - years[i];
}

console.log(ages);

// coninue and break;
console.log(`--- ONLY STRINGS ---`);
for(let i = 0; i < manuelArray.length; i++){

    //continue beendet aktuelle Iteration ung geht zur nächsten
    if(typeof manuelArray[i] !== 'string') continue;

    console.log(manuelArray[i]);
}

console.log(`--- STOP IF NOT STRING ---`);
for(let i = 0; i < manuelArray.length; i++){

    //break beendet den Loop
    if(typeof manuelArray[i] !== 'string') break;

    console.log(manuelArray[i]);
}

/////////////// 48, Looping backwards and Loops in Loops

const manuelArray = [
    'Manuel',
    'Gut',
    2023 - 1985,
    'Engineer',
    ['Robertina', 'Joana']
];

//Looping Backwards
console.log('--- Looping backwards ---');
for(let i = manuelArray.length - 1; i >= 0; i--){
    console.log(manuelArray[i]);
}

//Loop in Loop
for(let exercise = 1; exercise <= 4; exercise++){
    console.log(`Exercise ${exercise}`);
    for(let set = 1; set <= 3; set++){
        console.log(` - Set ${set}`);
        for(let rep = 1; rep <=10; rep++){
            console.log(` - - Repetition ${rep}`);
        }
    }
}

/////////////////// 49. While Loop //////////////////////

let counter = 10;

while(counter > 0){
    console.log(`The counter is ${counter}`);
    counter--;
};

*/

let dice = Math.trunc(Math.random() * 6 + 1);
let attemps = 0;

while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6 + 1);
  attemps++;
  console.log(`You rolled a ${dice}`);
}
console.log(`You rolled a 6 in the ${attemps} attemp`);
