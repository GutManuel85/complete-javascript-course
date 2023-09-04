const bill = 275;

/* Write your code below. Good luck! 🙂 */

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
