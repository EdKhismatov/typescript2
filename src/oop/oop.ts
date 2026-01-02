class CustomWorker {
  name;
  surname;
  rate;
  days;
  constructor(name: string, surname: string, rate: number, days: number) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}

const worker = new CustomWorker('Иван', 'Иванов', 10, 31);

console.log(worker.name); // выведет 'Иван'
console.log(worker.surname); // выведет 'Иванов'
console.log(worker.rate); // выведет 10
console.log(worker.days); // выведет 31
console.log(worker.getSalary()); // выведет 310 - то есть 10*31
