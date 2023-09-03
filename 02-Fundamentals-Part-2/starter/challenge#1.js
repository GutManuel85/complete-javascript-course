'use strict';

/* Write your code below. Good luck! 🙂 */

let calcAverage = (points1, points2, points3) => (points1 + points2 + points3)/3;
console.log(calcAverage(1, 2, 3));

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(85,54,41);

let checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins / 2 >= avgKoalas){
        console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
    }else if(avgKoalas / 2 >= avgDolphins){
        console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
    }else{
        console.log(`No team wins...`);
   }
}

checkWinner(scoreDolphins, scoreKoalas);