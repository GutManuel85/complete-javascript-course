// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

//////////// 55. Setting up Prettier and VS Code ////////////


/////////////// Prettier /////////////////
// https://prettier.io/docs/en/options

const x = '23';
const myString = "I'm a single quote string";
const myString2 = "I'm a double quote string";

const testString = 'I am a test String';

if (true) {
  console.log('Always true');
}


////////////// Snippets //////////////

// => File / Preferences / Configure User Snippets / New global Snippet File
// Shortcut cl => console.log()

console.log(); //cl

////////////TODO Highlight /////////////

// => File / Settings / (Icon oben rechts: Open Settings JSON)


/////////// 56. Installing Live Server or Node.js and Setting Up dev Environment //////////////

////////// Live Server => nach Installation ist Button "Go Live" in Liste ganz unten (Bottom). Muss gestartet werden auf index.html file hier in VS Code
console.log("Hello From Live Server");

////////// Node.js

 // node -v
 // npm install live-server -g
 // cd <zum Ordner, wo index.html liegt>
 // Zum Starten einfach den Befehl: life-server


////////////59. Using Google, StackOverflow and MDN //////////////

function calcTempAmplitude1(temps) {
  let maxTemp = Number.MIN_VALUE;
  let minTemp = Number.MIN_VALUE;
  temps.forEach((element) => {
    if (element === 'error') {
      console.log('error');
    } else if (element > maxTemp) {
      maxTemp = element;
    } else if (element < minTemp) {
      minTemp = element;
    }
  });
  return maxTemp - minTemp;
}

let testTemps = [-2, -5, 40, 20, 'error', 34]; //erwartetes resultat 45

console.log(calcTempAmplitude1(testTemps));

function calcTempAmplitude2(temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];
  for (let i = 1; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== 'number') {
      continue;
    }
    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  return maxTemp - minTemp;
}

console.log(calcTempAmplitude2(testTemps));

let tempsSwitzerland = [23, 12, 32, -4, -10];
let tempsBrasil = [40, 30, 34, 20, 34, 'errors', 35];

function calcTempAmplitudeTwoArrays(temps1, temps2) {
  let temps = temps1.concat(temps2);
  return calcTempAmplitude2(temps);
}

console.log(calcTempAmplitudeTwoArrays(tempsSwitzerland, tempsBrasil)); //ergibt 50



////////////// 61. Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees celsius:'))
    value: 10
  };

  //Find the Bug with
  console.table(measurement);

  const kelvin = measurement.value + 273;

  //dasselbe wie ein Breakpoint:
  debugger;

  return kelvin;
};

measureKelvin();

*/

//////////////////// 62. Coding Challenge ////////////////////

const forecastedMaximumTemperatures = [17, 21, 23];

function printForecast(temps){
  let message = "... ";
  let pointer = 1;
  forecastedMaximumTemperatures.forEach(element => {
    message += `${element} degrees celcius in ${pointer} days ... `;
    pointer ++;
  });
  return message;
}

console.log(printForecast(forecastedMaximumTemperatures));


