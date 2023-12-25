'use strict';

/*

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderFood: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
};

///////////////// 103. Destructuring Arrays ///////////////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c); //2 3 4

// Destructuring Assignment
const [x, y, z] = arr;
console.log(x, y, z); //2 3 4
console.log(arr); //[ 2, 3, 4 ]

let [first, , third] = restaurant.categories;
console.log(first, third); //Italian Vegetarian

//Variabelnwerte tauschen mit Destructuring
[first, third] = [third, first];
console.log(first, third); //Vegetarian Italian

console.log(restaurant.orderFood(2, 0)); //[ 'Garlic Bread', 'Focaccia' ]

const [starter, main] = restaurant.orderFood(2, 0);
console.log(starter, main); //Garlic Bread Focaccia

////////////// Nested Destructuring ////////////////

const nested = [2, 3, [4, 5]];
const [i, , [k, l]] = nested;

console.log(i, k, l); //2,4,5

/////////////////// Destructuring Objects //////////////

const { surname, firstName, age } = {
  surname: 'Gut',
  firstName: 'Manuel',
  age: 38,
  job: 'Engineer',
};

console.log(surname, firstName, age);


//Renaming variables and default values
const {
  surname: familyName,
  firstName: forename,
  age: years,
  country: country = "Switzerland"
} = {
  surname: 'Gut',
  firstName: 'Manuel',
  age: 38,
  job: 'Engineer',
};

console.log(familyName, forename, years, country);



////////////// Return function ///////////
function getAddition() {
  return function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      throw TypeError('Numbers expected');
    }
  };
}

const addition = getAddition();

console.log(addition(2, 3));

////////////// Call-Method //////////////

const person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person1 = {
  firstName: 'Manuel',
  lastName: 'Gut',
};

console.log(person.fullName.call(person1));


const citizen = {
  personDescription: function (city, country) {
    return `${this.firstName} ${this.lastName} ${city} ${country}`;
  },
};



console.log(citizen.personDescription.call(person1, "Luzern", "Switzerland"));




///////////////// 104. Destructuring Objects ///////////

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderFood: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Object-Method with Object as parameter and some default values for the properties
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
};

restaurant.orderDelivery({
  time: '20:30',
  address: 'Schachenweidstrasse 101',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Musterstrasse 1',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming and set default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); //Hier braucht es Klammern, um Werte zu überschreiben
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//////////////////////// 105. Spread Operator ///////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const goodNewArr = [1, 2, ...arr]; //Spread Operator

console.log(badNewArr); //[ 1, 2, 7, 8, 9 ]
console.log(goodNewArr); //[ 1, 2, 7, 8, 9 ]

// Passing individuals Elements into function
console.log(...goodNewArr); //1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(...newMenu);

// Copy array
const manMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const allMenus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenus);

// Spread Operator works on all Iterables
// Iterables are: arrays, strings, maps, sets
const str = 'Manuel';
const letters = [...str];
console.log(...letters);

const ingredients = ['Mushrooms', 'Truffle', 'Bacon'];
restaurant.orderPasta(...ingredients);

// Spread Operators on Objects
// Copy object and add properties foundedIn and founder
const newRestaurant = { ...restaurant, foundedIn: 1998, founder: 'Manuel' };
console.log(newRestaurant);

newRestaurant.name = "Manuel's great restaurant";
console.log(newRestaurant);

// SPREAD, used on the right side of =
const myArray = [1, 2, ...[3, 4]];
console.log(myArray);

// REST-Pattern: SPREAD, used on the left side of = for destructuring
// Arrays
console.log('****************');
const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects
console.log('****************');
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions: REST-Pattern is compressing
console.log('****************');
const add = function (...numbers) {
  let result = 0;
  numbers.forEach(element => (result += element));
  console.log(result);
  return result;
};
add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5, 6, 7, 8);

//////////////// 107. Short Circuiting (&& and ||) /////////////////
console.log('********-OR-********');
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas ('' is a falsy value)
console.log(true || 0); //true
console.log(undefined || '' || 0 || undefined); //undefined (falls es keinen truely value gibt, wird einfach der letzte ausgegeben)

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// the same as above but shorter
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('********-AND-********');
console.log(0 && 'Jonas'); // 0: da 0 falsy ist, wird gleich abgebrochen und 0 zurück gegeben
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas'); //null

//////////////// 108. Nullish Coalescing Operator (??) ///////

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3); // 10

// Nullish: null and undefined und nicht alle falsy values
const guests4 = restaurant.numGuests ?? 10;
console.log(guests4); // 0 da 0 zwar falsy ist, aber nicht null oder undefined

///////////// 109. Logical Assignment Operators //////////////
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'Capri',
  owner: 'Givanni Roosi',
};

// OR assigment operator
//rest2.numGuests = rest1.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined): Set to default value if it not exist
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assigment operator: Set owner to "<Not known> if owner properties exist"
//rest1.owner = rest1.owner && '<Not known>'
//rest2.owner = rest2.owner && '<Not known>';

rest1.owner &&= '<Not known>';
rest2.owner &&= '<Not known>';

console.log(rest1);
console.log(rest2);


/////////// 110. Coding Challenge #1 ////////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log('************* 1. ***********');
const [players1, players2] = game.players;
console.log(players1, players2);

console.log('************* 2. ***********');
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

console.log('************* 3. ***********');
const allplayers = [...players1, ...players2];
console.log(allplayers);

console.log('************* 4. ***********');
const players1Final = [...players1, 'Thiago', 'Coutino', 'Persic'];
console.log(...players1Final);

console.log('************* 5. ***********');
const {team1, x: draw, team2} = game.odds;
console.log(team1, draw, team2);

console.log('************* 6. ***********');
function printGoals(...players){
  console.log(...players);
}

printGoals(...allplayers);

console.log('************* 7. ***********');
team1 < team2 || console.log("team2");
team2 < team1 || console.log("team1");

team1 < team2 && console.log("team1");
team2 < team1 && console.log("team2");



//////////////// 111. Looping Array: The for-of Loop //////////
for (const player of players1Final){
  console.log(player);
}

for (const team of game.players){
  console.log(team);
}

////////////// 112. Enhanced Object Literals ////////

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'su']
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Possible until ES6: use an object reference = enhanced literals
  openingHours,


  // Possible until ES6: don't have to write function keyword
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Object-Method with Object as parameter and some default values for the properties
  orderDelivery({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
};

restaurant.orderDelivery({address: "street1"});
console.log(restaurant.openingHours);

///// 113. Optional Chaining (?.) ///////////////

// Without optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining: bricht ab, nach mon? falls mon nicht existiert und wirft keinen Fehler
console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'su'];

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day} we open at ${open}`)
}

// Optional Chaining for methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPasta?.(0, 1) ?? 'Method does not exist');

// Optional Chainig for arrays
const users = [
  { name: 'Manuel', email: 'hello@manuel.com' },
  { name: 'Robertina', email: 'hello@robi.com' },
];

console.log(users[0]?.email) ?? 'User does not exist';
console.log(users[1]?.email) ?? 'User does not exist';
console.log(users[2]?.email) ?? 'User does not exist'; //with optional channing: returns undefined
console.log(users[2].email) ?? 'User does not exist'; //without optional channing: throws TypeError



//// 114. Looping Objects: Object Keys, Values, and Entires

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'su'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Possible until ES6: use an object reference = enhanced literals
  openingHours,

  // Possible until ES6: don't have to write function keyword
  orderFood(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Object-Method with Object as parameter and some default values for the properties
  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(ing1, ing2, ing3);
  },
};

restaurant.orderDelivery({ address: 'street1' });
console.log(restaurant.openingHours);

// Get the keys of an object
for(const day of Object.keys(openingHours)){
  console.log(day);
}

const keys = Object.keys(openingHours);

console.log(`The restaurant is open on ${keys.length} days: ${keys}`)


// Get the values of an object
const values = Object.values(openingHours);

for(const day of values){
  console.log(day);
}

// Get the entries of an object
const entries = Object.entries(openingHours);

for(const entry of entries){
  console.log(entry);
}

console.log(entries);

// Destructuring directly in for loop
for (const [key, {open, close}] of entries){
  // an entry looks for example like that: [ 'thu', { open: 12, close: 22 } ]
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// my own example

const carEvent = {
  shownCars: [
    {brand: "BMW", model: "X"},
    {brand: "Fiat", model: "Punto"}
  ]
}


for(const {brand, model} of carEvent.shownCars){
  console.log(`This is the car of the brand ${brand} with the model ${model}`);
}

*/


///// 115. Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// exercise 1: goal number and player
let counter = 1;
game.scored.forEach(element => {
  console.log(`Goal ${counter}: ${element}`);
  counter++;
});

// exercise 2: average odds
let counter2 = 0;
let sum = 0;
let average = 0;
for(let key in game.odds){
  sum += game.odds[key];
  counter2++;
};
average = sum / counter2;
console.log(`The average is: ${sum} divided through ${counter2} is ${average}`);


// exercise 3: print odds
let counter3 = 0;
for(let key in game.odds){
  let sentences = [
    `Odd of victory ${game[key]}: `,
    `Odd of draw: `,
    `Odd of victory ${game[key]}`,
  ];
  console.log(`${sentences[counter3]} ${game.odds[key]}`);
  counter3++;
}


/// 116 Sets: unique values and order is irrelevant

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);
console.log(ordersSet);

console.log(new Set("Manuel"));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('NotInTheSet')); //false

ordersSet.add("Bread");
ordersSet.delete("Pizza");

console.log(ordersSet);

//ordersSet.clear();

for(const order of ordersSet){
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Waiter', 'Cook'];
//Transform Array into Set
const staffSet = new Set(staff);
console.log(staffSet);
//Transform Set into Array
const staffUnique = [...staffSet];
console.log(staffUnique);
//Or directly
const staffUniqueDirectly = [...new Set(staff)];
console.log(staffUniqueDirectly);

//How many different letters are in a String
console.log(new Set("Hallo Manuel").size)


//// 117 Maps Fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisabone, Portugal'));
rest.set('categories', ['Italien', 'Pizzeria', 'Vegetarian'])
.set('open', 11)
.set('closed',23)
.set(true, 'We are open')
.set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));

const time = 10;
let message;
(time > rest.get('open') && time < rest.get('closed') ? message = "We are open now" : message = "We are not open now");
console.log(message);

console.log(rest.has('name'));
console.log(rest.delete(2));
rest.clear();
console.log(rest.size);


//// 118 Maps: Iteration

//Creating Map: Arrays in Array
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🥳'],
  [false, 'Try again']
]);

console.log(question)


