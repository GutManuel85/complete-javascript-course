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


*/

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

for (const [team2] = game.team2)