class MyPersonInterface {
  introduce() {
    throw Error('Method has to be implemented.');
  }
}

class Person extends MyPersonInterface {
  height;
  weight;
  name;

  constructor(height, weight, name) {
    super();
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  introduce() {
    return `Hello I am ${this.name}, my height is ${this.height} and my weight is ${this.weight}`;
  }
}

console.log(new Person(181, 83, 'Manuel').introduce());
