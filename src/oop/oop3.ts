import dayjs from 'dayjs';

abstract class Person {
  name: string;
  surname: string;
  year: number;
  constructor(name: string, surname: string, year: number) {
    this.name = name;
    this.surname = surname;
    this.year = year;
  }
  getFullName() {
    return `Имя: ${this.name} Фамилия: ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name: string, surname: string, year: number) {
    super(name, surname, year);
  }
  getCourse() {
    return `Курс: ${dayjs().year() - this.year}`;
  }
}

const student = new Student('Иван', 'Иванов', 2020);

console.log(student.name); // выведет 'Иван'
console.log(student.surname); // выведет 'Иванов'
console.log(student.getFullName()); // выведет 'Иван Иванов'
console.log(student.year); // выведет 2020
console.log(student.getCourse()); // выведет 4 - четвертый курс, если текущий год 2024, а дата поступления 2020
