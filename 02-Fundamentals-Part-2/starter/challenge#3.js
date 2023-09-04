/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const message =
  john.bmi > mark.calcBMI()
    ? `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s BMI (${mark.bmi})!`
    : `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s BMI (${john.calcBMI()})!`;
console.log(message);
