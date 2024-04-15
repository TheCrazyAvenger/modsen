class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    let bonus = this.salary * 0.1;
    return super.calculateAnnualSalary() + bonus * 12;
  }
}

let manager1 = new Manager('Алекс', 5000, 'Продажи');
let manager2 = new Manager('Боб', 6000, 'Маркетинг');

console.log(`Годовая зарплата Алекса: ${manager1.calculateAnnualSalary()}`);
console.log(`Годовая зарплата Боба: ${manager2.calculateAnnualSalary()}`);
