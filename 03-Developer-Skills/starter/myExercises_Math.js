'use strict';

class Circle {
  radius;
  diameter;
  area;

  constructor(radius) {
    if (typeof radius === 'number') {
      this.radius = radius;
      this.diameter = 2 * radius;
      this.area = 2 * Math.PI * radius;
    } else {
      throw TypeError('Radius is not a number');
    }
  }

  static createCircleWithRadius(radius) {
    return new Circle(radius);
  }

  static createCircleWithDiameter(diameter) {
    return new Circle(diameter / 2);
  }

  static createCircleWithArea(area) {
    return new Circle(area / (2 * Math.PI));
  }

  calculateArea(){
    return 2 * Math.PI * this.radius;
  }
}

console.log(Circle.createCircleWithRadius(2));
console.log(Circle.createCircleWithDiameter(4));
console.log(Circle.createCircleWithArea(5));
console.log(Circle.createCircleWithRadius(2).calculateArea())




class myMath{

    static berechneQuadratWurzel(number){
        return Math.sqrt(number);
    }

    static berechnePotenz(basis, exponent){
        return Math.pow(basis, exponent);
    }

    static berechneZufallszahl(min, max){
        return min + Math.random()*(max - min)
    }

    static berechneFakultaet(number){
        let result = 1;
        for(let i = 1; i <= number; i++){
            result *= i;
        }
        return result;
    }
}

console.log(myMath.berechneQuadratWurzel(9));
console.log(myMath.berechnePotenz(2, 8));
console.log(myMath.berechneZufallszahl(99, 100));
console.log(myMath.berechneFakultaet(10));
console.log(1*2*3*4*5*6*7*8*9*10);
