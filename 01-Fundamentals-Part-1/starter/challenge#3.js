/* Write your code below. Good luck! 🙂 */

let scoresDolphins = [96, 108, 89];
let scoresKoalas = [88, 91, 110];

function getAverage(scores) {
  let score = 0;
  for (let element of scores) {
    score += element;
  }
  return score / scores.length;
}

let scoreDolphins = getAverage(scoresDolphins);
let scoreKoalas = getAverage(scoresKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
