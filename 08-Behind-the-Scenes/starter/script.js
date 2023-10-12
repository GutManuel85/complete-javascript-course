'use strict';

/*

////////////////////// 94. Variable Enviroment: Hoisting and The TDZ //////////////////

function calcAge(birthYear){
    const age = 2037 - birthYear;


    function printAge(){
        const output = `${firstName} is ${age} years old and born in ${birthYear}`;
        console.log(output);
    }

    let str;
    if(birthYear >= 1981 && birthYear <= 1996){
        str = `Oh, you are a millenial ${firstName}`;
    }else{
        str = `Oh, you are not a millenial ${firstName}`;
    }
        console.log(str);

    printAge();

    return age;
}

const firstName = 'Manuel';

calcAge(1985);



/////////////////////// 95. Hoisting and TDZ in Practice ///////////////////

console.log(me); //undefined (bad practice)

try{
console.log(year); //ReferenceError
}catch(error){
    console.error(error);
}

try{
    console.log(daugther); //ReferenceError
}catch(error){
    console.error(error);
}


var me = 'Manuel';
const year = 1995;
let daugther = 'Joana';


if (!numProducts) deleteShoppingCart(); //numProducts is here undefined and not 10. Therefore the shoppingCart will be deleted

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products are deleted');
}


/////// 97. The this keyword in practice ////////////////

console.log(this); //this is window in the browser

const calcAge = function (year) {
  console.log(2027 - year);
  console.log(this); // this is undefined
}

calcAge(1991); 

const calcAgeArrow = (year) => {
    console.log(2027 - year);
    console.log(this); //this is this from the outter context = window
}

calcAgeArrow(1991);

const manuel = {
    year: 1985,
    calcAge: function (){
        console.log(2027 - this.year); // this is caller-Object
    }
}

manuel.calcAge();

const matilda = {
    year: 2017
}

matilda.calcAge = manuel.calcAge // Kopieren der Methode (method borrowing)

matilda.calcAge(); // here is the this keyword pointing to matilda-object

const f = manuel.calcAge; //Kopieren der Methode; // here is the this keyword undefined



///////////////// The arguments keyword /////////////////

const addExpr = function (a, b){
    console.log(arguments);
    return a + b;
};

addExpr(2,3);
addExpr(4,5,6);

*/

////////////////// 100. Primitives vs. Objects in Practice //////////////

//Primitives
let firstName = 'Manuel';
const oldFirstName = firstName;
firstName = 'David';

console.log(firstName, oldFirstName); //David Manuel

//Objects
const person1 = {
  firstName: 'Manuel',
  lastName: 'Gut',
};

const person2 = person1;
person2.firstName = 'Robertina';

console.log(person1, person2); //{ firstName: 'Robertina', lastName: 'Gut' } { firstName: 'Robertina', lastName: 'Gut' }

//Begründung: oben wird nur die Referenz kopiert und nicht das Objekt. Somit zeigen sowohl person1 und person2 auf dasselbe Objekt

//Kopieren
const person3 = Object.assign({}, person2);
person3.firstName = 'Joana';

console.log(person2, person3); //{ firstName: 'Robertina', lastName: 'Gut' } { firstName: 'Joana', lastName: 'Gut' }

//Kopieren von mehreren Objecten in ein Objekt
const object1 = {
    a: 1,
    b: 2
}

const object2 = {
    c: 3,
    d: 4
}

const object3 = {
    e: 5,
    f: 6
}

const mergedObject = Object.assign(object1, object2, object3);
console.log(object1); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

//Achtung: einen Deep Clone macht man mit structuredClone, da mit assign nur property values kopiert werden. Bei Objekten als Properties werden nur Referenzen kopiert.

const object4 = {
  a: 1,
  b: 2,
};

const object5 = {
  c: 3,
  d: 4,
};

const object6 = {
  e: object4,
  f: object5,
};


///////////////// Deep Cloning ///////////////
const deepClone = structuredClone(object6);

console.log(object6); //

object4.a = 100;
object5.c = 100;

console.log(object6); //{ e: { a: 100, b: 2 }, f: { c: 100, d: 4 } }
console.log(deepClone); //{ e: { a: 1, b: 2 }, f: { c: 3, d: 4 } }