class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayInfo() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`;
  }
}

let person1 = new Person('Алекс', 30, 'Россия');
let person2 = new Person('Боб', 25, 'США');

console.log(person1.displayInfo());
console.log(person2.displayInfo());
